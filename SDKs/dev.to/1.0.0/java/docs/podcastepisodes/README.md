# podcastEpisodes

### Available Operations

* [getPodcastEpisodes](#getpodcastepisodes) - Podcast Episodes

## getPodcastEpisodes

This endpoint allows the client to retrieve a list of podcast episodes.
        "Podcast episodes" are episodes belonging to podcasts.
        It will only return active (reachable) podcast episodes that belong to published podcasts available on the platform, ordered by descending publication date.
        It supports pagination, each page will contain 30 articles by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPodcastEpisodesRequest;
import org.openapis.openapi.models.operations.GetPodcastEpisodesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPodcastEpisodesRequest req = new GetPodcastEpisodesRequest() {{
                page = 96098;
                perPage = 971945;
                username = "Weston_Thiel";
            }};            

            GetPodcastEpisodesResponse res = sdk.podcastEpisodes.getPodcastEpisodes(req);

            if (res.podcastEpisodeIndices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
