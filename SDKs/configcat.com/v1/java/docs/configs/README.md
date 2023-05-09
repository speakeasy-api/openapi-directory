# configs

## Overview

With these endpoints you can manage your Configs.
This also can be used to manage [Feature Flags and Settings](#tag/Feature-Flags-and-Settings) and their 
[served values](#tag/Feature-Flag-and-Setting-values) through this API.

<a href="https://configcat.com/docs/main-concepts/#config" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Configs.

### Available Operations

* [createConfig](#createconfig) - Create Config
* [deleteConfig](#deleteconfig) - Delete Config
* [getConfig](#getconfig) - Get Config
* [getConfigs](#getconfigs) - List Configs
* [updateConfig](#updateconfig) - Update Config

## createConfig

This endpoint creates a new Config in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConfigRequest;
import org.openapis.openapi.models.operations.CreateConfigResponse;
import org.openapis.openapi.models.shared.CreateConfigRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla", "quas") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            CreateConfigRequest req = new CreateConfigRequest(                new CreateConfigRequest("esse") {{
                                description = "quasi";
                            }};, "f99dd2ef-d121-4aa6-b1e6-74bdb04f1575");            

            CreateConfigResponse res = sdk.configs.createConfig(req);

            if (res.configModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConfig

This endpoint removes a Config identified by the `configId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConfigRequest;
import org.openapis.openapi.models.operations.DeleteConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi", "aut") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteConfigRequest req = new DeleteConfigRequest("82d68ea1-9f1d-4170-9133-9d08086a1840");            

            DeleteConfigResponse res = sdk.configs.deleteConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfig

This endpoint returns the metadata of a Config
identified by the `configId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigRequest;
import org.openapis.openapi.models.operations.GetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor", "occaecati") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetConfigRequest req = new GetConfigRequest("4c26071f-93f5-4f06-82da-c7af515cc413");            

            GetConfigResponse res = sdk.configs.getConfig(req);

            if (res.configModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfigs

This endpoint returns the list of the Configs that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigsRequest;
import org.openapis.openapi.models.operations.GetConfigsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga", "id") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetConfigsRequest req = new GetConfigsRequest("63aae8d6-7864-4dbb-a75f-d5e60b375ed4");            

            GetConfigsResponse res = sdk.configs.getConfigs(req);

            if (res.configModelHaljsons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConfig

This endpoint updates a Config identified by the `configId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConfigRequest;
import org.openapis.openapi.models.operations.UpdateConfigResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateConfigRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus", "suscipit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            UpdateConfigRequest req = new UpdateConfigRequest(                new UpdateConfigRequest() {{
                                description = "reiciendis";
                                name = "Bert Treutel DVM";
                            }};, "33317fe3-5b60-4eb1-aa42-6555ba3c2874");            

            UpdateConfigResponse res = sdk.configs.updateConfig(req);

            if (res.configModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
