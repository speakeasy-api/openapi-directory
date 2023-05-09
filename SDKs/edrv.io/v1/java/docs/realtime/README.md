# realtime

### Available Operations

* [getRealtime](#getrealtime) - Use to request a Websockets handshake

## getRealtime

Use to request a Websockets handshake

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRealtimeRequest;
import org.openapis.openapi.models.operations.GetRealtimeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetRealtimeRequest req = new GetRealtimeRequest("deserunt");            

            GetRealtimeResponse res = sdk.realtime.getRealtime(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
