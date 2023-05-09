# customerFriends

### Available Operations

* [getFriendInfo](#getfriendinfo) - Get friend information

## getFriendInfo

Get friend information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFriendInfoRequest;
import org.openapis.openapi.models.operations.GetFriendInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFriendInfoRequest req = new GetFriendInfoRequest("asperiores") {{
                ifNoneMatch = "facere";
            }};            

            GetFriendInfoResponse res = sdk.customerFriends.getFriendInfo(req);

            if (res.userFriendInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
