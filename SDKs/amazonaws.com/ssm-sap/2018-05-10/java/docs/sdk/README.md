# SDK

## Overview

This API reference provides descriptions, syntax, and other details about each of the actions and data types for AWS Systems Manager for SAP. The topic for each action shows the API request parameters and responses. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/ssm-sap/>
### Available Operations

* [deleteResourcePermission](#deleteresourcepermission) - Removes permissions associated with the target database.
* [deregisterApplication](#deregisterapplication) - Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.
* [getApplication](#getapplication) - Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.
* [getComponent](#getcomponent) - Gets the component of an application registered with AWS Systems Manager for SAP.
* [getDatabase](#getdatabase) - Gets the SAP HANA database of an application registered with AWS Systems Manager for SAP.
* [getOperation](#getoperation) - Gets the details of an operation by specifying the operation ID.
* [getResourcePermission](#getresourcepermission) - Gets permissions associated with the target database.
* [listApplications](#listapplications) - Lists all the applications registered with AWS Systems Manager for SAP.
* [listComponents](#listcomponents) - Lists all the components registered with AWS Systems Manager for SAP.
* [listDatabases](#listdatabases) - Lists the SAP HANA databases of an application registered with AWS Systems Manager for SAP.
* [listOperations](#listoperations) - Lists the operations performed by AWS Systems Manager for SAP.
* [listTagsForResource](#listtagsforresource) - Lists all tags on an SAP HANA application and/or database registered with AWS Systems Manager for SAP.
* [putResourcePermission](#putresourcepermission) - Adds permissions to the target database.
* [registerApplication](#registerapplication) - <p>Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering. </p> <p>The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2.</p> <p>AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions.</p> <p>Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.</p>
* [tagResource](#tagresource) - Creates tag for a resource by specifying the ARN.
* [untagResource](#untagresource) - Delete the tags for a resource.
* [updateApplicationSettings](#updateapplicationsettings) - Updates the settings of an application registered with AWS Systems Manager for SAP.

## deleteResourcePermission

Removes permissions associated with the target database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequest;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequestBody;
import org.openapis.openapi.models.operations.DeleteResourcePermissionRequestBodyActionTypeEnum;
import org.openapis.openapi.models.operations.DeleteResourcePermissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcePermissionRequest req = new DeleteResourcePermissionRequest(                new DeleteResourcePermissionRequestBody("suscipit") {{
                                actionType = DeleteResourcePermissionRequestBodyActionTypeEnum.RESTORE;
                                sourceResourceArn = "iure";
                            }};) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            DeleteResourcePermissionResponse res = sdk.sdk.deleteResourcePermission(req);

            if (res.deleteResourcePermissionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterApplication

Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterApplicationRequest;
import org.openapis.openapi.models.operations.DeregisterApplicationRequestBody;
import org.openapis.openapi.models.operations.DeregisterApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterApplicationRequest req = new DeregisterApplicationRequest(                new DeregisterApplicationRequestBody("placeat");) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            DeregisterApplicationResponse res = sdk.sdk.deregisterApplication(req);

            if (res.deregisterApplicationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApplication

Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationRequest;
import org.openapis.openapi.models.operations.GetApplicationRequestBody;
import org.openapis.openapi.models.operations.GetApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApplicationRequest req = new GetApplicationRequest(                new GetApplicationRequestBody() {{
                                appRegistryArn = "veritatis";
                                applicationArn = "deserunt";
                                applicationId = "perferendis";
                            }};) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            GetApplicationResponse res = sdk.sdk.getApplication(req);

            if (res.getApplicationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComponent

Gets the component of an application registered with AWS Systems Manager for SAP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComponentRequest;
import org.openapis.openapi.models.operations.GetComponentRequestBody;
import org.openapis.openapi.models.operations.GetComponentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetComponentRequest req = new GetComponentRequest(                new GetComponentRequestBody("molestiae", "quod");) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "esse";
                xAmzCredential = "totam";
                xAmzDate = "porro";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "nam";
            }};            

            GetComponentResponse res = sdk.sdk.getComponent(req);

            if (res.getComponentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDatabase

Gets the SAP HANA database of an application registered with AWS Systems Manager for SAP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatabaseRequest;
import org.openapis.openapi.models.operations.GetDatabaseRequestBody;
import org.openapis.openapi.models.operations.GetDatabaseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDatabaseRequest req = new GetDatabaseRequest(                new GetDatabaseRequestBody() {{
                                applicationId = "occaecati";
                                componentId = "fugit";
                                databaseArn = "deleniti";
                                databaseId = "hic";
                            }};) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            GetDatabaseResponse res = sdk.sdk.getDatabase(req);

            if (res.getDatabaseOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOperation

Gets the details of an operation by specifying the operation ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOperationRequest;
import org.openapis.openapi.models.operations.GetOperationRequestBody;
import org.openapis.openapi.models.operations.GetOperationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOperationRequest req = new GetOperationRequest(                new GetOperationRequestBody("cum");) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            GetOperationResponse res = sdk.sdk.getOperation(req);

            if (res.getOperationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcePermission

Gets permissions associated with the target database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcePermissionRequest;
import org.openapis.openapi.models.operations.GetResourcePermissionRequestBody;
import org.openapis.openapi.models.operations.GetResourcePermissionRequestBodyActionTypeEnum;
import org.openapis.openapi.models.operations.GetResourcePermissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourcePermissionRequest req = new GetResourcePermissionRequest(                new GetResourcePermissionRequestBody("iste") {{
                                actionType = GetResourcePermissionRequestBodyActionTypeEnum.RESTORE;
                            }};) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
            }};            

            GetResourcePermissionResponse res = sdk.sdk.getResourcePermission(req);

            if (res.getResourcePermissionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplications

Lists all the applications registered with AWS Systems Manager for SAP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationsRequest;
import org.openapis.openapi.models.operations.ListApplicationsRequestBody;
import org.openapis.openapi.models.operations.ListApplicationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationsRequest req = new ListApplicationsRequest(                new ListApplicationsRequestBody() {{
                                maxResults = 613064L;
                                nextToken = "iure";
                            }};) {{
                maxResults = "saepe";
                nextToken = "quidem";
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "reiciendis";
                xAmzDate = "est";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dolores";
            }};            

            ListApplicationsResponse res = sdk.sdk.listApplications(req);

            if (res.listApplicationsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listComponents

Lists all the components registered with AWS Systems Manager for SAP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListComponentsRequest;
import org.openapis.openapi.models.operations.ListComponentsRequestBody;
import org.openapis.openapi.models.operations.ListComponentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListComponentsRequest req = new ListComponentsRequest(                new ListComponentsRequestBody() {{
                                applicationId = "corporis";
                                maxResults = 128926L;
                                nextToken = "nobis";
                            }};) {{
                maxResults = "enim";
                nextToken = "omnis";
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "minima";
                xAmzCredential = "excepturi";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "iure";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "doloribus";
            }};            

            ListComponentsResponse res = sdk.sdk.listComponents(req);

            if (res.listComponentsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatabases

Lists the SAP HANA databases of an application registered with AWS Systems Manager for SAP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatabasesRequest;
import org.openapis.openapi.models.operations.ListDatabasesRequestBody;
import org.openapis.openapi.models.operations.ListDatabasesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatabasesRequest req = new ListDatabasesRequest(                new ListDatabasesRequestBody() {{
                                applicationId = "architecto";
                                componentId = "mollitia";
                                maxResults = 208876L;
                                nextToken = "culpa";
                            }};) {{
                maxResults = "consequuntur";
                nextToken = "repellat";
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "commodi";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "velit";
            }};            

            ListDatabasesResponse res = sdk.sdk.listDatabases(req);

            if (res.listDatabasesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOperations

Lists the operations performed by AWS Systems Manager for SAP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOperationsRequest;
import org.openapis.openapi.models.operations.ListOperationsRequestBody;
import org.openapis.openapi.models.operations.ListOperationsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterOperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOperationsRequest req = new ListOperationsRequest(                new ListOperationsRequestBody("quia") {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("tenetur", FilterOperatorEnum.GREATER_THAN_OR_EQUALS, "id") {{
                                        name = "Kayla O'Kon";
                                        operator = FilterOperatorEnum.LESS_THAN_OR_EQUALS;
                                        value = "sequi";
                                    }}),
                                    add(new Filter("reiciendis", FilterOperatorEnum.LESS_THAN_OR_EQUALS, "vero") {{
                                        name = "Richard Boyer";
                                        operator = FilterOperatorEnum.LESS_THAN_OR_EQUALS;
                                        value = "quasi";
                                    }}),
                                }};
                                maxResults = 468651L;
                                nextToken = "praesentium";
                            }};) {{
                maxResults = "voluptatibus";
                nextToken = "ipsa";
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "cum";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "ut";
            }};            

            ListOperationsResponse res = sdk.sdk.listOperations(req);

            if (res.listOperationsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists all tags on an SAP HANA application and/or database registered with AWS Systems Manager for SAP.

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
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("dicta") {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "iusto";
                xAmzDate = "dicta";
                xAmzSecurityToken = "harum";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "accusamus";
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

## putResourcePermission

Adds permissions to the target database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutResourcePermissionRequest;
import org.openapis.openapi.models.operations.PutResourcePermissionRequestBody;
import org.openapis.openapi.models.operations.PutResourcePermissionRequestBodyActionTypeEnum;
import org.openapis.openapi.models.operations.PutResourcePermissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResourcePermissionRequest req = new PutResourcePermissionRequest(                new PutResourcePermissionRequestBody(PutResourcePermissionRequestBodyActionTypeEnum.RESTORE, "repudiandae", "quae");) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "molestias";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "praesentium";
            }};            

            PutResourcePermissionResponse res = sdk.sdk.putResourcePermission(req);

            if (res.putResourcePermissionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerApplication

<p>Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering. </p> <p>The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2.</p> <p>AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions.</p> <p>Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterApplicationRequest;
import org.openapis.openapi.models.operations.RegisterApplicationRequestBody;
import org.openapis.openapi.models.operations.RegisterApplicationRequestBodyApplicationTypeEnum;
import org.openapis.openapi.models.operations.RegisterApplicationResponse;
import org.openapis.openapi.models.shared.ApplicationCredential;
import org.openapis.openapi.models.shared.CredentialTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterApplicationRequest req = new RegisterApplicationRequest(                new RegisterApplicationRequestBody("voluptates", RegisterApplicationRequestBodyApplicationTypeEnum.HANA,                 new org.openapis.openapi.models.shared.ApplicationCredential[]{{
                                                add(new ApplicationCredential(CredentialTypeEnum.ADMIN, "veritatis", "itaque") {{
                                                    credentialType = CredentialTypeEnum.ADMIN;
                                                    databaseName = "repudiandae";
                                                    secretId = "sint";
                                                }}),
                                            }},                 new String[]{{
                                                add("enim"),
                                                add("consequatur"),
                                            }}) {{
                                sapInstanceNumber = "est";
                                sid = "quibusdam";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("deserunt", "distinctio");
                                }};
                            }};) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "labore";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "quos";
            }};            

            RegisterApplicationResponse res = sdk.sdk.registerApplication(req);

            if (res.registerApplicationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Creates tag for a resource by specifying the ARN.

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
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("assumenda", "ipsam");
                                            }});, "alias") {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "excepturi";
                xAmzDate = "tempora";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "labore";
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

Delete the tags for a resource.

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
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("eum",                 new String[]{{
                                add("eligendi"),
                            }}) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "provident";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "sint";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "dolor";
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

## updateApplicationSettings

Updates the settings of an application registered with AWS Systems Manager for SAP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationSettingsRequest;
import org.openapis.openapi.models.operations.UpdateApplicationSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateApplicationSettingsResponse;
import org.openapis.openapi.models.shared.ApplicationCredential;
import org.openapis.openapi.models.shared.CredentialTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApplicationSettingsRequest req = new UpdateApplicationSettingsRequest(                new UpdateApplicationSettingsRequestBody("a") {{
                                credentialsToAddOrUpdate = new org.openapis.openapi.models.shared.ApplicationCredential[]{{
                                    add(new ApplicationCredential(CredentialTypeEnum.ADMIN, "illum", "maiores") {{
                                        credentialType = CredentialTypeEnum.ADMIN;
                                        databaseName = "in";
                                        secretId = "in";
                                    }}),
                                    add(new ApplicationCredential(CredentialTypeEnum.ADMIN, "magnam", "cumque") {{
                                        credentialType = CredentialTypeEnum.ADMIN;
                                        databaseName = "rerum";
                                        secretId = "dicta";
                                    }}),
                                    add(new ApplicationCredential(CredentialTypeEnum.ADMIN, "aliquid", "laborum") {{
                                        credentialType = CredentialTypeEnum.ADMIN;
                                        databaseName = "facere";
                                        secretId = "ea";
                                    }}),
                                }};
                                credentialsToRemove = new org.openapis.openapi.models.shared.ApplicationCredential[]{{
                                    add(new ApplicationCredential(CredentialTypeEnum.ADMIN, "enim", "accusamus") {{
                                        credentialType = CredentialTypeEnum.ADMIN;
                                        databaseName = "non";
                                        secretId = "occaecati";
                                    }}),
                                    add(new ApplicationCredential(CredentialTypeEnum.ADMIN, "provident", "nam") {{
                                        credentialType = CredentialTypeEnum.ADMIN;
                                        databaseName = "delectus";
                                        secretId = "quidem";
                                    }}),
                                    add(new ApplicationCredential(CredentialTypeEnum.ADMIN, "deleniti", "sapiente") {{
                                        credentialType = CredentialTypeEnum.ADMIN;
                                        databaseName = "id";
                                        secretId = "blanditiis";
                                    }}),
                                    add(new ApplicationCredential(CredentialTypeEnum.ADMIN, "nisi", "vel") {{
                                        credentialType = CredentialTypeEnum.ADMIN;
                                        databaseName = "amet";
                                        secretId = "deserunt";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "molestiae";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "distinctio";
            }};            

            UpdateApplicationSettingsResponse res = sdk.sdk.updateApplicationSettings(req);

            if (res.updateApplicationSettingsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
