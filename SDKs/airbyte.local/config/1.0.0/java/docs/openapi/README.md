# openapi

### Available Operations

* [getOpenApiSpec](#getopenapispec) - Returns the openapi specification

## getOpenApiSpec

Returns the openapi specification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOpenApiSpecResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOpenApiSpecResponse res = sdk.openapi.getOpenApiSpec();

            if (res.getOpenApiSpec200TextPlainBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
