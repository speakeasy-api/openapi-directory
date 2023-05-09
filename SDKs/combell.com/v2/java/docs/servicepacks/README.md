# servicepacks

### Available Operations

* [servicepacks](#servicepacks) - Overview of service packs

## servicepacks

Overview of service packs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicepacksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicepacksResponse res = sdk.servicepacks.servicepacks();

            if (res.servicepacks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
