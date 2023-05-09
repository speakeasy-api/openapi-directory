# tags

### Available Operations

* [getFollowedTags](#getfollowedtags) - Followed Tags
* [getTags](#gettags) - Tags

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
                .setSecurity(new Security("iusto") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFollowedTagsResponse res = sdk.tags.getFollowedTags();

            if (res.followedTags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTags

This endpoint allows the client to retrieve a list of tags that can be used to tag articles.

It will return tags ordered by popularity.

It supports pagination, each page will contain 10 tags by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsRequest;
import org.openapis.openapi.models.operations.GetTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTagsRequest req = new GetTagsRequest() {{
                page = 688661;
                perPage = 317983;
            }};            

            GetTagsResponse res = sdk.tags.getTags(req);

            if (res.tags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
