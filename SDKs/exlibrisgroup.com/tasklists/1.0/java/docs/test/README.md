# test

### Available Operations

* [getAlmawsV1TaskListsTest](#getalmawsv1taskliststest) - GET Task-lists Test API
* [postAlmawsV1TaskListsTest](#postalmawsv1taskliststest) - POST Task-lists Test API

## getAlmawsV1TaskListsTest

This API is used to test if the API key was configured correctly.It returns a short XML (no schema available - the output is subject to changes) with the following structure:<test>GET - OK - institutionCode: 01ABC_INST</test>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAlmawsV1TaskListsTestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAlmawsV1TaskListsTestResponse res = sdk.test.getAlmawsV1TaskListsTest();

            if (res.getAlmawsV1TaskListsTest200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAlmawsV1TaskListsTest

This API is used to test if the API key was configured correctly, including read/write permissions.It returns a short XML (no schema available - the output is subject to changes) with the following structure:<test>POST - OK</test>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAlmawsV1TaskListsTestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAlmawsV1TaskListsTestResponse res = sdk.test.postAlmawsV1TaskListsTest();

            if (res.postAlmawsV1TaskListsTest200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
