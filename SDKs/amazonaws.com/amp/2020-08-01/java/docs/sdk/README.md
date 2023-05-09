# SDK

## Overview

Amazon Managed Service for Prometheus

Amazon Web Services documentation
<https://docs.aws.amazon.com/aps/>
### Available Operations

* [createAlertManagerDefinition](#createalertmanagerdefinition) - Create an alert manager definition.
* [createLoggingConfiguration](#createloggingconfiguration) - Create logging configuration.
* [createRuleGroupsNamespace](#createrulegroupsnamespace) - Create a rule group namespace.
* [createWorkspace](#createworkspace) - Creates a new AMP workspace.
* [deleteAlertManagerDefinition](#deletealertmanagerdefinition) - Deletes an alert manager definition.
* [deleteLoggingConfiguration](#deleteloggingconfiguration) - Delete logging configuration.
* [deleteRuleGroupsNamespace](#deleterulegroupsnamespace) - Delete a rule groups namespace.
* [deleteWorkspace](#deleteworkspace) - Deletes an AMP workspace.
* [describeAlertManagerDefinition](#describealertmanagerdefinition) - Describes an alert manager definition.
* [describeLoggingConfiguration](#describeloggingconfiguration) - Describes logging configuration.
* [describeRuleGroupsNamespace](#describerulegroupsnamespace) - Describe a rule groups namespace.
* [describeWorkspace](#describeworkspace) - Describes an existing AMP workspace.
* [listRuleGroupsNamespaces](#listrulegroupsnamespaces) - Lists rule groups namespaces.
* [listTagsForResource](#listtagsforresource) - Lists the tags you have assigned to the resource.
* [listWorkspaces](#listworkspaces) - Lists all AMP workspaces, including workspaces being created or deleted.
* [putAlertManagerDefinition](#putalertmanagerdefinition) - Update an alert manager definition.
* [putRuleGroupsNamespace](#putrulegroupsnamespace) - Update a rule groups namespace.
* [tagResource](#tagresource) - Creates tags for the specified resource.
* [untagResource](#untagresource) - Deletes tags from the specified resource.
* [updateLoggingConfiguration](#updateloggingconfiguration) - Update logging configuration.
* [updateWorkspaceAlias](#updateworkspacealias) - Updates an AMP workspace alias.

## createAlertManagerDefinition

Create an alert manager definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAlertManagerDefinitionRequest;
import org.openapis.openapi.models.operations.CreateAlertManagerDefinitionRequestBody;
import org.openapis.openapi.models.operations.CreateAlertManagerDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAlertManagerDefinitionRequest req = new CreateAlertManagerDefinitionRequest(                new CreateAlertManagerDefinitionRequestBody("iure") {{
                                clientToken = "magnam";
                            }};, "debitis") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }};            

            CreateAlertManagerDefinitionResponse res = sdk.sdk.createAlertManagerDefinition(req);

            if (res.createAlertManagerDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLoggingConfiguration

Create logging configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLoggingConfigurationRequest;
import org.openapis.openapi.models.operations.CreateLoggingConfigurationRequestBody;
import org.openapis.openapi.models.operations.CreateLoggingConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLoggingConfigurationRequest req = new CreateLoggingConfigurationRequest(                new CreateLoggingConfigurationRequestBody("iusto") {{
                                clientToken = "excepturi";
                            }};, "nisi") {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "ab";
                xAmzDate = "quis";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "perferendis";
            }};            

            CreateLoggingConfigurationResponse res = sdk.sdk.createLoggingConfiguration(req);

            if (res.createLoggingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRuleGroupsNamespace

Create a rule group namespace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRuleGroupsNamespaceRequest;
import org.openapis.openapi.models.operations.CreateRuleGroupsNamespaceRequestBody;
import org.openapis.openapi.models.operations.CreateRuleGroupsNamespaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRuleGroupsNamespaceRequest req = new CreateRuleGroupsNamespaceRequest(                new CreateRuleGroupsNamespaceRequestBody("repellendus", "sapiente") {{
                                clientToken = "quo";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("at", "at");
                                }};
                            }};, "maiores") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
            }};            

            CreateRuleGroupsNamespaceResponse res = sdk.sdk.createRuleGroupsNamespace(req);

            if (res.createRuleGroupsNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkspace

Creates a new AMP workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkspaceRequest;
import org.openapis.openapi.models.operations.CreateWorkspaceRequestBody;
import org.openapis.openapi.models.operations.CreateWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkspaceRequest req = new CreateWorkspaceRequest(                new CreateWorkspaceRequestBody() {{
                                alias = "nam";
                                clientToken = "officia";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("fugit", "deleniti");
                                    put("hic", "optio");
                                    put("totam", "beatae");
                                }};
                            }};) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "esse";
            }};            

            CreateWorkspaceResponse res = sdk.sdk.createWorkspace(req);

            if (res.createWorkspaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAlertManagerDefinition

Deletes an alert manager definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAlertManagerDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteAlertManagerDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAlertManagerDefinitionRequest req = new DeleteAlertManagerDefinitionRequest("excepturi") {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ad";
                xAmzDate = "natus";
                xAmzSecurityToken = "sed";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolor";
                clientToken = "natus";
            }};            

            DeleteAlertManagerDefinitionResponse res = sdk.sdk.deleteAlertManagerDefinition(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLoggingConfiguration

Delete logging configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLoggingConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteLoggingConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLoggingConfigurationRequest req = new DeleteLoggingConfigurationRequest("hic") {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "iste";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "saepe";
                clientToken = "quidem";
            }};            

            DeleteLoggingConfigurationResponse res = sdk.sdk.deleteLoggingConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRuleGroupsNamespace

Delete a rule groups namespace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRuleGroupsNamespaceRequest;
import org.openapis.openapi.models.operations.DeleteRuleGroupsNamespaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRuleGroupsNamespaceRequest req = new DeleteRuleGroupsNamespaceRequest("ipsa", "reiciendis") {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
                clientToken = "nobis";
            }};            

            DeleteRuleGroupsNamespaceResponse res = sdk.sdk.deleteRuleGroupsNamespace(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkspace

Deletes an AMP workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspaceRequest;
import org.openapis.openapi.models.operations.DeleteWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkspaceRequest req = new DeleteWorkspaceRequest("omnis") {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "minima";
                xAmzCredential = "excepturi";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "iure";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "doloribus";
                clientToken = "sapiente";
            }};            

            DeleteWorkspaceResponse res = sdk.sdk.deleteWorkspace(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAlertManagerDefinition

Describes an alert manager definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAlertManagerDefinitionRequest;
import org.openapis.openapi.models.operations.DescribeAlertManagerDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAlertManagerDefinitionRequest req = new DescribeAlertManagerDefinitionRequest("mollitia") {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "consequuntur";
                xAmzDate = "repellat";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "numquam";
            }};            

            DescribeAlertManagerDefinitionResponse res = sdk.sdk.describeAlertManagerDefinition(req);

            if (res.describeAlertManagerDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLoggingConfiguration

Describes logging configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLoggingConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeLoggingConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLoggingConfigurationRequest req = new DescribeLoggingConfigurationRequest("quam") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "velit";
                xAmzCredential = "error";
                xAmzDate = "quia";
                xAmzSecurityToken = "quis";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "laborum";
            }};            

            DescribeLoggingConfigurationResponse res = sdk.sdk.describeLoggingConfiguration(req);

            if (res.describeLoggingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRuleGroupsNamespace

Describe a rule groups namespace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRuleGroupsNamespaceRequest;
import org.openapis.openapi.models.operations.DescribeRuleGroupsNamespaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRuleGroupsNamespaceRequest req = new DescribeRuleGroupsNamespaceRequest("enim", "odit") {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "tenetur";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "id";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "aut";
            }};            

            DescribeRuleGroupsNamespaceResponse res = sdk.sdk.describeRuleGroupsNamespace(req);

            if (res.describeRuleGroupsNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorkspace

Describes an existing AMP workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorkspaceRequest;
import org.openapis.openapi.models.operations.DescribeWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorkspaceRequest req = new DescribeWorkspaceRequest("error") {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "quasi";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nihil";
            }};            

            DescribeWorkspaceResponse res = sdk.sdk.describeWorkspace(req);

            if (res.describeWorkspaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRuleGroupsNamespaces

Lists rule groups namespaces.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRuleGroupsNamespacesRequest;
import org.openapis.openapi.models.operations.ListRuleGroupsNamespacesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRuleGroupsNamespacesRequest req = new ListRuleGroupsNamespacesRequest("voluptatibus") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "voluptate";
                xAmzDate = "cum";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "reprehenderit";
                maxResults = 282807L;
                name = "Willie Hessel";
                nextToken = "dicta";
            }};            

            ListRuleGroupsNamespacesResponse res = sdk.sdk.listRuleGroupsNamespaces(req);

            if (res.listRuleGroupsNamespacesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags you have assigned to the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("enim") {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "repudiandae";
                xAmzDate = "quae";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "molestias";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkspaces

Lists all AMP workspaces, including workspaces being created or deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkspacesRequest;
import org.openapis.openapi.models.operations.ListWorkspacesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkspacesRequest req = new ListWorkspacesRequest() {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
                alias = "sint";
                maxResults = 83112L;
                nextToken = "itaque";
            }};            

            ListWorkspacesResponse res = sdk.sdk.listWorkspaces(req);

            if (res.listWorkspacesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAlertManagerDefinition

Update an alert manager definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAlertManagerDefinitionRequest;
import org.openapis.openapi.models.operations.PutAlertManagerDefinitionRequestBody;
import org.openapis.openapi.models.operations.PutAlertManagerDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAlertManagerDefinitionRequest req = new PutAlertManagerDefinitionRequest(                new PutAlertManagerDefinitionRequestBody("enim") {{
                                clientToken = "consequatur";
                            }};, "est") {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "deserunt";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "modi";
            }};            

            PutAlertManagerDefinitionResponse res = sdk.sdk.putAlertManagerDefinition(req);

            if (res.putAlertManagerDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRuleGroupsNamespace

Update a rule groups namespace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRuleGroupsNamespaceRequest;
import org.openapis.openapi.models.operations.PutRuleGroupsNamespaceRequestBody;
import org.openapis.openapi.models.operations.PutRuleGroupsNamespaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRuleGroupsNamespaceRequest req = new PutRuleGroupsNamespaceRequest(                new PutRuleGroupsNamespaceRequestBody("aliquid") {{
                                clientToken = "cupiditate";
                            }};, "quos", "perferendis") {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "ipsam";
                xAmzDate = "alias";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "excepturi";
            }};            

            PutRuleGroupsNamespaceResponse res = sdk.sdk.putRuleGroupsNamespace(req);

            if (res.putRuleGroupsNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Creates tags for the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("tempore", "labore");
                                                put("delectus", "eum");
                                                put("non", "eligendi");
                                            }});, "sint") {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "provident";
                xAmzCredential = "necessitatibus";
                xAmzDate = "sint";
                xAmzSecurityToken = "officia";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "debitis";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Deletes tags from the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("dolorum",                 new String[]{{
                                add("in"),
                                add("illum"),
                            }}) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "dicta";
                xAmzDate = "magnam";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "ea";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLoggingConfiguration

Update logging configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLoggingConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateLoggingConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateLoggingConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLoggingConfigurationRequest req = new UpdateLoggingConfigurationRequest(                new UpdateLoggingConfigurationRequestBody("laborum") {{
                                clientToken = "accusamus";
                            }};, "non") {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "delectus";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nam";
            }};            

            UpdateLoggingConfigurationResponse res = sdk.sdk.updateLoggingConfiguration(req);

            if (res.updateLoggingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkspaceAlias

Updates an AMP workspace alias.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkspaceAliasRequest;
import org.openapis.openapi.models.operations.UpdateWorkspaceAliasRequestBody;
import org.openapis.openapi.models.operations.UpdateWorkspaceAliasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkspaceAliasRequest req = new UpdateWorkspaceAliasRequest(                new UpdateWorkspaceAliasRequestBody() {{
                                alias = "blanditiis";
                                clientToken = "deleniti";
                            }};, "sapiente") {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "nisi";
                xAmzDate = "vel";
                xAmzSecurityToken = "natus";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "molestiae";
            }};            

            UpdateWorkspaceAliasResponse res = sdk.sdk.updateWorkspaceAlias(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
