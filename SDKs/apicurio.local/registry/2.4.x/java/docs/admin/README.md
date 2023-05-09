# admin

## Overview

Application functionality that is only accessible to admin users.  Includes logging, global rules, and export/import of registry data.

### Available Operations

* [createGlobalRule](#createglobalrule) - Create global rule
* [createRoleMapping](#createrolemapping) - Create a new role mapping
* [deleteAllGlobalRules](#deleteallglobalrules) - Delete all global rules
* [deleteGlobalRule](#deleteglobalrule) - Delete global rule
* [deleteRoleMapping](#deleterolemapping) - Delete a role mapping
* [exportData](#exportdata) - Export registry data
* [getConfigProperty](#getconfigproperty) - Get configuration property value
* [getGlobalRuleConfig](#getglobalruleconfig) - Get global rule configuration
* [getLogConfiguration](#getlogconfiguration) - Get a single logger configuration
* [getRoleMapping](#getrolemapping) - Return a single role mapping
* [importData](#importdata) - Import registry data
* [listArtifactTypes](#listartifacttypes) - List artifact types
* [listConfigProperties](#listconfigproperties) - List all configuration properties
* [listGlobalRules](#listglobalrules) - List global rules
* [listLogConfigurations](#listlogconfigurations) - List logging configurations
* [listRoleMappings](#listrolemappings) - List all role mappings
* [removeLogConfiguration](#removelogconfiguration) - Removes logger configuration
* [resetConfigProperty](#resetconfigproperty) - Reset a configuration property
* [setLogConfiguration](#setlogconfiguration) - Set a logger's configuration
* [updateConfigProperty](#updateconfigproperty) - Update a configuration property
* [updateGlobalRuleConfig](#updateglobalruleconfig) - Update global rule configuration
* [updateRoleMapping](#updaterolemapping) - Update a role mapping

## createGlobalRule

Adds a rule to the list of globally configured rules.

This operation can fail for the following reasons:

* The rule type is unknown (HTTP error `400`)
* The rule already exists (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGlobalRuleResponse;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Rule req = new Rule("provident") {{
                type = RuleTypeEnum.VALIDITY;
            }};            

            CreateGlobalRuleResponse res = sdk.admin.createGlobalRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRoleMapping

Creates a new mapping between a user/principal and a role.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)



### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRoleMappingResponse;
import org.openapis.openapi.models.shared.RoleMapping;
import org.openapis.openapi.models.shared.RoleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RoleMapping req = new RoleMapping("distinctio", RoleTypeEnum.ADMIN) {{
                principalName = "unde";
            }};            

            CreateRoleMappingResponse res = sdk.admin.createRoleMapping(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAllGlobalRules

Deletes all globally configured rules.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAllGlobalRulesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAllGlobalRulesResponse res = sdk.admin.deleteAllGlobalRules();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGlobalRule

Deletes a single global rule.  If this is the only rule configured, this is the same
as deleting **all** rules.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* Rule cannot be deleted (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGlobalRuleRequest;
import org.openapis.openapi.models.operations.DeleteGlobalRuleResponse;
import org.openapis.openapi.models.shared.RuleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteGlobalRuleRequest req = new DeleteGlobalRuleRequest(RuleTypeEnum.VALIDITY);            

            DeleteGlobalRuleResponse res = sdk.admin.deleteGlobalRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRoleMapping

Deletes a single role mapping, effectively denying access to a user/principal.

This operation can fail for the following reasons:

* No role mapping for the principalId exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRoleMappingRequest;
import org.openapis.openapi.models.operations.DeleteRoleMappingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRoleMappingRequest req = new DeleteRoleMappingRequest("nulla");            

            DeleteRoleMappingResponse res = sdk.admin.deleteRoleMapping(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportData

Exports registry data as a ZIP archive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportDataRequest;
import org.openapis.openapi.models.operations.ExportDataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportDataRequest req = new ExportDataRequest() {{
                forBrowser = false;
            }};            

            ExportDataResponse res = sdk.admin.exportData(req);

            if (res.downloadRef != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfigProperty

Returns the value of a single configuration property.

This operation may fail for one of the following reasons:

* Property not found or not configured (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigPropertyRequest;
import org.openapis.openapi.models.operations.GetConfigPropertyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConfigPropertyRequest req = new GetConfigPropertyRequest("corrupti");            

            GetConfigPropertyResponse res = sdk.admin.getConfigProperty(req);

            if (res.configurationProperty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGlobalRuleConfig

Returns information about the named globally configured rule.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGlobalRuleConfigRequest;
import org.openapis.openapi.models.operations.GetGlobalRuleConfigResponse;
import org.openapis.openapi.models.shared.RuleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGlobalRuleConfigRequest req = new GetGlobalRuleConfigRequest(RuleTypeEnum.VALIDITY);            

            GetGlobalRuleConfigResponse res = sdk.admin.getGlobalRuleConfig(req);

            if (res.rule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLogConfiguration

Returns the configured logger configuration for the provided logger name, if no logger configuration is persisted it will return the current default log configuration in the system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLogConfigurationRequest;
import org.openapis.openapi.models.operations.GetLogConfigurationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLogConfigurationRequest req = new GetLogConfigurationRequest("illum");            

            GetLogConfigurationResponse res = sdk.admin.getLogConfiguration(req);

            if (res.namedLogConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRoleMapping

Gets the details of a single role mapping (by `principalId`).

This operation can fail for the following reasons:

* No role mapping for the `principalId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRoleMappingRequest;
import org.openapis.openapi.models.operations.GetRoleMappingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRoleMappingRequest req = new GetRoleMappingRequest("vel");            

            GetRoleMappingResponse res = sdk.admin.getRoleMapping(req);

            if (res.roleMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importData

Imports registry data that was previously exported using the `/admin/export` operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportDataRequest;
import org.openapis.openapi.models.operations.ImportDataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportDataRequest req = new ImportDataRequest("error".getBytes()) {{
                xRegistryPreserveContentId = false;
                xRegistryPreserveGlobalId = false;
            }};            

            ImportDataResponse res = sdk.admin.importData(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listArtifactTypes

Gets a list of all the configured artifact types.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListArtifactTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListArtifactTypesResponse res = sdk.admin.listArtifactTypes();

            if (res.artifactTypeInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConfigProperties

Returns a list of all configuration properties that have been set.  The list is not paged.

This operation may fail for one of the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConfigPropertiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListConfigPropertiesResponse res = sdk.admin.listConfigProperties();

            if (res.configurationProperties != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGlobalRules

Gets a list of all the currently configured global rules (if any).

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGlobalRulesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListGlobalRulesResponse res = sdk.admin.listGlobalRules();

            if (res.ruleTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLogConfigurations

List all of the configured logging levels.  These override the default
logging configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLogConfigurationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListLogConfigurationsResponse res = sdk.admin.listLogConfigurations();

            if (res.namedLogConfigurations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRoleMappings

Gets a list of all role mappings configured in the registry (if any).

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRoleMappingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRoleMappingsResponse res = sdk.admin.listRoleMappings();

            if (res.roleMappings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeLogConfiguration

Removes the configured logger configuration (if any) for the given logger.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveLogConfigurationRequest;
import org.openapis.openapi.models.operations.RemoveLogConfigurationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveLogConfigurationRequest req = new RemoveLogConfigurationRequest("deserunt");            

            RemoveLogConfigurationResponse res = sdk.admin.removeLogConfiguration(req);

            if (res.namedLogConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetConfigProperty

Resets the value of a single configuration property.  This will return the property to
its default value (see external documentation for supported properties and their default
values).

This operation may fail for one of the following reasons:

* Property not found or not configured (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetConfigPropertyRequest;
import org.openapis.openapi.models.operations.ResetConfigPropertyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetConfigPropertyRequest req = new ResetConfigPropertyRequest("suscipit");            

            ResetConfigPropertyResponse res = sdk.admin.resetConfigProperty(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setLogConfiguration

Configures the logger referenced by the provided logger name with the given configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetLogConfigurationRequest;
import org.openapis.openapi.models.operations.SetLogConfigurationResponse;
import org.openapis.openapi.models.shared.LogConfiguration;
import org.openapis.openapi.models.shared.LogLevelEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SetLogConfigurationRequest req = new SetLogConfigurationRequest(                new LogConfiguration(LogLevelEnum.SEVERE);, "magnam");            

            SetLogConfigurationResponse res = sdk.admin.setLogConfiguration(req);

            if (res.namedLogConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConfigProperty

Updates the value of a single configuration property.

This operation may fail for one of the following reasons:

* Property not found or not configured (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConfigPropertyRequest;
import org.openapis.openapi.models.operations.UpdateConfigPropertyResponse;
import org.openapis.openapi.models.shared.UpdateConfigurationProperty;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateConfigPropertyRequest req = new UpdateConfigPropertyRequest(                new UpdateConfigurationProperty("debitis");, "ipsa");            

            UpdateConfigPropertyResponse res = sdk.admin.updateConfigProperty(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGlobalRuleConfig

Updates the configuration for a globally configured rule.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGlobalRuleConfigRequest;
import org.openapis.openapi.models.operations.UpdateGlobalRuleConfigResponse;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateGlobalRuleConfigRequest req = new UpdateGlobalRuleConfigRequest(                new Rule("delectus") {{
                                type = RuleTypeEnum.VALIDITY;
                            }};, RuleTypeEnum.VALIDITY);            

            UpdateGlobalRuleConfigResponse res = sdk.admin.updateGlobalRuleConfig(req);

            if (res.rule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRoleMapping

Updates a single role mapping for one user/principal.

This operation can fail for the following reasons:

* No role mapping for the principalId exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRoleMappingRequest;
import org.openapis.openapi.models.operations.UpdateRoleMappingResponse;
import org.openapis.openapi.models.shared.RoleTypeEnum;
import org.openapis.openapi.models.shared.UpdateRole;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRoleMappingRequest req = new UpdateRoleMappingRequest(                new UpdateRole(RoleTypeEnum.READ_ONLY);, "suscipit");            

            UpdateRoleMappingResponse res = sdk.admin.updateRoleMapping(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
