# Admin

## Overview

Application functionality that is only accessible to admin users.  Includes logging, global rules, and export/import of registry data.

### Available Operations

* [CreateGlobalRule](#createglobalrule) - Create global rule
* [CreateRoleMapping](#createrolemapping) - Create a new role mapping
* [DeleteAllGlobalRules](#deleteallglobalrules) - Delete all global rules
* [DeleteGlobalRule](#deleteglobalrule) - Delete global rule
* [DeleteRoleMapping](#deleterolemapping) - Delete a role mapping
* [ExportData](#exportdata) - Export registry data
* [GetConfigProperty](#getconfigproperty) - Get configuration property value
* [GetGlobalRuleConfig](#getglobalruleconfig) - Get global rule configuration
* [GetLogConfiguration](#getlogconfiguration) - Get a single logger configuration
* [GetRoleMapping](#getrolemapping) - Return a single role mapping
* [ImportData](#importdata) - Import registry data
* [ListArtifactTypes](#listartifacttypes) - List artifact types
* [ListConfigProperties](#listconfigproperties) - List all configuration properties
* [ListGlobalRules](#listglobalrules) - List global rules
* [ListLogConfigurations](#listlogconfigurations) - List logging configurations
* [ListRoleMappings](#listrolemappings) - List all role mappings
* [RemoveLogConfiguration](#removelogconfiguration) - Removes logger configuration
* [ResetConfigProperty](#resetconfigproperty) - Reset a configuration property
* [SetLogConfiguration](#setlogconfiguration) - Set a logger's configuration
* [UpdateConfigProperty](#updateconfigproperty) - Update a configuration property
* [UpdateGlobalRuleConfig](#updateglobalruleconfig) - Update global rule configuration
* [UpdateRoleMapping](#updaterolemapping) - Update a role mapping

## CreateGlobalRule

Adds a rule to the list of globally configured rules.

This operation can fail for the following reasons:

* The rule type is unknown (HTTP error `400`)
* The rule already exists (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.CreateGlobalRule(ctx, shared.Rule{
        Config: "provident",
        Type: shared.RuleTypeEnumValidity.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateRoleMapping

Creates a new mapping between a user/principal and a role.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)



### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.CreateRoleMapping(ctx, shared.RoleMapping{
        PrincipalID: "distinctio",
        PrincipalName: sdk.String("quibusdam"),
        Role: shared.RoleTypeEnumDeveloper,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAllGlobalRules

Deletes all globally configured rules.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.DeleteAllGlobalRules(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteGlobalRule

Deletes a single global rule.  If this is the only rule configured, this is the same
as deleting **all** rules.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* Rule cannot be deleted (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.DeleteGlobalRule(ctx, operations.DeleteGlobalRuleRequest{
        Rule: shared.RuleTypeEnumValidity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRoleMapping

Deletes a single role mapping, effectively denying access to a user/principal.

This operation can fail for the following reasons:

* No role mapping for the principalId exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.DeleteRoleMapping(ctx, operations.DeleteRoleMappingRequest{
        PrincipalID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ExportData

Exports registry data as a ZIP archive.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.ExportData(ctx, operations.ExportDataRequest{
        ForBrowser: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadRef != nil {
        // handle response
    }
}
```

## GetConfigProperty

Returns the value of a single configuration property.

This operation may fail for one of the following reasons:

* Property not found or not configured (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.GetConfigProperty(ctx, operations.GetConfigPropertyRequest{
        PropertyName: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigurationProperty != nil {
        // handle response
    }
}
```

## GetGlobalRuleConfig

Returns information about the named globally configured rule.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.GetGlobalRuleConfig(ctx, operations.GetGlobalRuleConfigRequest{
        Rule: shared.RuleTypeEnumValidity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Rule != nil {
        // handle response
    }
}
```

## GetLogConfiguration

Returns the configured logger configuration for the provided logger name, if no logger configuration is persisted it will return the current default log configuration in the system.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.GetLogConfiguration(ctx, operations.GetLogConfigurationRequest{
        Logger: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NamedLogConfiguration != nil {
        // handle response
    }
}
```

## GetRoleMapping

Gets the details of a single role mapping (by `principalId`).

This operation can fail for the following reasons:

* No role mapping for the `principalId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.GetRoleMapping(ctx, operations.GetRoleMappingRequest{
        PrincipalID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleMapping != nil {
        // handle response
    }
}
```

## ImportData

Imports registry data that was previously exported using the `/admin/export` operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.ImportData(ctx, operations.ImportDataRequest{
        RequestBody: []byte("error"),
        XRegistryPreserveContentID: sdk.Bool(false),
        XRegistryPreserveGlobalID: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListArtifactTypes

Gets a list of all the configured artifact types.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.ListArtifactTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactTypeInfos != nil {
        // handle response
    }
}
```

## ListConfigProperties

Returns a list of all configuration properties that have been set.  The list is not paged.

This operation may fail for one of the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.ListConfigProperties(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigurationProperties != nil {
        // handle response
    }
}
```

## ListGlobalRules

Gets a list of all the currently configured global rules (if any).

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.ListGlobalRules(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.RuleTypes != nil {
        // handle response
    }
}
```

## ListLogConfigurations

List all of the configured logging levels.  These override the default
logging configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.ListLogConfigurations(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.NamedLogConfigurations != nil {
        // handle response
    }
}
```

## ListRoleMappings

Gets a list of all role mappings configured in the registry (if any).

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.ListRoleMappings(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleMappings != nil {
        // handle response
    }
}
```

## RemoveLogConfiguration

Removes the configured logger configuration (if any) for the given logger.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.RemoveLogConfiguration(ctx, operations.RemoveLogConfigurationRequest{
        Logger: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NamedLogConfiguration != nil {
        // handle response
    }
}
```

## ResetConfigProperty

Resets the value of a single configuration property.  This will return the property to
its default value (see external documentation for supported properties and their default
values).

This operation may fail for one of the following reasons:

* Property not found or not configured (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.ResetConfigProperty(ctx, operations.ResetConfigPropertyRequest{
        PropertyName: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetLogConfiguration

Configures the logger referenced by the provided logger name with the given configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.SetLogConfiguration(ctx, operations.SetLogConfigurationRequest{
        LogConfiguration: shared.LogConfiguration{
            Level: shared.LogLevelEnumSevere,
        },
        Logger: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NamedLogConfiguration != nil {
        // handle response
    }
}
```

## UpdateConfigProperty

Updates the value of a single configuration property.

This operation may fail for one of the following reasons:

* Property not found or not configured (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.UpdateConfigProperty(ctx, operations.UpdateConfigPropertyRequest{
        UpdateConfigurationProperty: shared.UpdateConfigurationProperty{
            Value: "debitis",
        },
        PropertyName: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateGlobalRuleConfig

Updates the configuration for a globally configured rule.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.UpdateGlobalRuleConfig(ctx, operations.UpdateGlobalRuleConfigRequest{
        Rule1: shared.Rule{
            Config: "delectus",
            Type: shared.RuleTypeEnumValidity.ToPointer(),
        },
        RulePathParameter: shared.RuleTypeEnumValidity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Rule != nil {
        // handle response
    }
}
```

## UpdateRoleMapping

Updates a single role mapping for one user/principal.

This operation can fail for the following reasons:

* No role mapping for the principalId exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.UpdateRoleMapping(ctx, operations.UpdateRoleMappingRequest{
        UpdateRole: shared.UpdateRole{
            Role: shared.RoleTypeEnumReadOnly,
        },
        PrincipalID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
