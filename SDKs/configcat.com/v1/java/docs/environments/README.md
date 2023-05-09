# environments

## Overview

With these endpoints you can update existing Environments or add new ones into your selected [Product](#tag/Products). 

<a href="https://configcat.com/docs/main-concepts/#environment" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Environments.

### Available Operations

* [createEnvironment](#createenvironment) - Create Environment
* [deleteEnvironment](#deleteenvironment) - Delete Environment
* [getEnvironment](#getenvironment) - Get Environment
* [getEnvironments](#getenvironments) - List Environments
* [updateEnvironment](#updateenvironment) - Update Environment

## createEnvironment

This endpoint creates a new Environment in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEnvironmentRequest;
import org.openapis.openapi.models.operations.CreateEnvironmentResponse;
import org.openapis.openapi.models.shared.CreateEnvironmentModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam", "officiis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            CreateEnvironmentRequest req = new CreateEnvironmentRequest(                new CreateEnvironmentModel("temporibus") {{
                                color = "ullam";
                                description = "adipisci";
                            }};, "b88f3a8d-8f5c-40b2-b2fb-7b194a276b26");            

            CreateEnvironmentResponse res = sdk.environments.createEnvironment(req);

            if (res.environmentModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEnvironment

This endpoint removes an Environment identified by the `environmentId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEnvironmentRequest;
import org.openapis.openapi.models.operations.DeleteEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde", "architecto") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteEnvironmentRequest req = new DeleteEnvironmentRequest("6fe1f08f-4294-4e36-98f4-47f603e8b445");            

            DeleteEnvironmentResponse res = sdk.environments.deleteEnvironment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnvironment

This endpoint returns the metadata of an Environment 
identified by the `environmentId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnvironmentRequest;
import org.openapis.openapi.models.operations.GetEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis", "rem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetEnvironmentRequest req = new GetEnvironmentRequest("0ca55efd-20e4-457e-9858-b6a89fbe3a5a");            

            GetEnvironmentResponse res = sdk.environments.getEnvironment(req);

            if (res.environmentModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnvironments

This endpoint returns the list of the Environments that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnvironmentsRequest;
import org.openapis.openapi.models.operations.GetEnvironmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum", "corrupti") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetEnvironmentsRequest req = new GetEnvironmentsRequest("e4824d0a-b407-4508-8e51-862065e904f3");            

            GetEnvironmentsResponse res = sdk.environments.getEnvironments(req);

            if (res.environmentModelHaljsons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEnvironment

This endpoint updates an Environment identified by the `environmentId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEnvironmentRequest;
import org.openapis.openapi.models.operations.UpdateEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateEnvironmentModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum", "dicta") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            UpdateEnvironmentRequest req = new UpdateEnvironmentRequest(                new UpdateEnvironmentModel() {{
                                color = "architecto";
                                description = "occaecati";
                                name = "Yvette Lind";
                            }};, "f603a79f-9dfe-40ab-bda8-a50ce187f86b");            

            UpdateEnvironmentResponse res = sdk.environments.updateEnvironment(req);

            if (res.environmentModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
