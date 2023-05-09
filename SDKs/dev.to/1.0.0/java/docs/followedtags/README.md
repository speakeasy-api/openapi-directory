# followedTags

### Available Operations

* [getFollowedTags](#getfollowedtags) - Followed Tags

## getFollowedTags

This endpoint allows the client to retrieve a list of the tags they follow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFollowedTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFollowedTagsResponse res = sdk.followedTags.getFollowedTags();

            if (res.followedTags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
