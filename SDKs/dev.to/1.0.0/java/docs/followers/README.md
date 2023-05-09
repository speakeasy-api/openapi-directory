# followers

### Available Operations

* [getFollowers](#getfollowers) - Followers

## getFollowers

This endpoint allows the client to retrieve a list of the followers they have.
        "Followers" are users that are following other users on the website.
        It supports pagination, each page will contain 80 followers by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFollowersRequest;
import org.openapis.openapi.models.operations.GetFollowersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFollowersRequest req = new GetFollowersRequest() {{
                page = 38425;
                perPage = 438601;
                sort = "culpa";
            }};            

            GetFollowersResponse res = sdk.followers.getFollowers(req);

            if (res.getFollowers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
