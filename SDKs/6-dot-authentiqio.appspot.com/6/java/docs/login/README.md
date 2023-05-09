# login

### Available Operations

* [pushLoginRequest](#pushloginrequest) - push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


## pushLoginRequest

push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PushLoginRequestRequest;
import org.openapis.openapi.models.operations.PushLoginRequestResponse;
import org.openapis.openapi.models.shared.PushToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PushLoginRequestRequest req = new PushLoginRequestRequest("excepturi".getBytes(), "nisi");            

            PushLoginRequestResponse res = sdk.login.pushLoginRequest(req);

            if (res.pushLoginRequest200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
