# videos

### Available Operations

* [videos](#videos) - Articles with a video

## videos

This endpoint allows the client to retrieve a list of articles that are uploaded with a video.

It will only return published video articles ordered by descending popularity.

It supports pagination, each page will contain 24 articles by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VideosRequest;
import org.openapis.openapi.models.operations.VideosResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            VideosRequest req = new VideosRequest() {{
                page = 828940;
                perPage = 369808;
            }};            

            VideosResponse res = sdk.videos.videos(req);

            if (res.videoArticles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
