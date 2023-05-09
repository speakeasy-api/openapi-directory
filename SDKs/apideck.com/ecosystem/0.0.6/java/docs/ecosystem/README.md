# ecosystem

### Available Operations

* [ecosystemsOne](#ecosystemsone) - Get ecosystem

## ecosystemsOne

Get ecosystem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EcosystemsOneRequest;
import org.openapis.openapi.models.operations.EcosystemsOneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EcosystemsOneRequest req = new EcosystemsOneRequest("placeat");            

            EcosystemsOneResponse res = sdk.ecosystem.ecosystemsOne(req);

            if (res.getEcosystemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
