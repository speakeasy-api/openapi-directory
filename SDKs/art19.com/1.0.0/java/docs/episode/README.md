# episode

### Available Operations

* [getEpisodes](#getepisodes) - Get a list of episodes
* [getEpisodesId](#getepisodesid) - Get a specific episode
* [getEpisodesIdNextSibling](#getepisodesidnextsibling) - Get the episode released right after the specified one
* [getEpisodesIdPreviousSibling](#getepisodesidprevioussibling) - Get the episode released right before the specified one

## getEpisodes

One initial filter must be provided (`ids`, `series_id`, or `season_id`), otherwise a `400 Bad Request` response
will be returned. Additional filters are allowed.

This API will only return episodes that your credential has permission to access, which may not be exclusive to
your account, depending on the filter(s) being used. Be careful to filter the results as needed.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEpisodesRequest;
import org.openapis.openapi.models.operations.GetEpisodesResponse;
import org.openapis.openapi.models.operations.GetEpisodesSecurity;
import org.openapis.openapi.models.operations.GetEpisodesSortEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEpisodesRequest req = new GetEpisodesRequest(485628L, 580447L) {{
                ids = new String[]{{
                    add("ce953f73-ef7f-4bc7-abd7-4dd39c0f5d2c"),
                    add("ff7c70a4-5626-4d43-a813-f16d9f5fce6c"),
                    add("556146c3-e250-4fb0-88c4-2e141aac366c"),
                    add("8dd6b144-2907-4474-b78a-7bd466d28c10"),
                }};
                includedInInventoryCalendar = "ab3cdca4-2519-404e-923c-7e0bc7178e47";
                month = "occaecati";
                published = false;
                q = "commodi";
                releasedAfter = OffsetDateTime.parse("2022-06-24T08:20:15.921Z");
                releasedBefore = OffsetDateTime.parse("2022-01-19T00:55:43.636Z");
                rss = false;
                seasonId = "0c688282-aa48-4256-af22-2e9817ee17cb";
                seriesId = "e61e6b7b-95bc-40ab-bc20-c4f3789fd871";
                sort = new org.openapis.openapi.models.operations.GetEpisodesSortEnum[]{{
                    add(GetEpisodesSortEnum.SORT_TITLE),
                    add(GetEpisodesSortEnum.SORT_TITLE),
                    add(GetEpisodesSortEnum.UPDATED_AT),
                    add(GetEpisodesSortEnum.TITLE),
                }};
                year = "quia";
            }};            

            GetEpisodesResponse res = sdk.episode.getEpisodes(req, new GetEpisodesSecurity("eveniet") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEpisodes200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEpisodesId

Get a specific episode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEpisodesIdRequest;
import org.openapis.openapi.models.operations.GetEpisodesIdResponse;
import org.openapis.openapi.models.operations.GetEpisodesIdSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEpisodesIdRequest req = new GetEpisodesIdRequest("fd121aa6-f1e6-474b-9b04-f15756082d68");            

            GetEpisodesIdResponse res = sdk.episode.getEpisodesId(req, new GetEpisodesIdSecurity("itaque") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEpisodesId200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEpisodesIdNextSibling

Get the episode released right after the specified one

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEpisodesIdNextSiblingRequest;
import org.openapis.openapi.models.operations.GetEpisodesIdNextSiblingResponse;
import org.openapis.openapi.models.operations.GetEpisodesIdNextSiblingSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEpisodesIdNextSiblingRequest req = new GetEpisodesIdNextSiblingRequest("a19f1d17-0513-439d-8808-6a1840394c26") {{
                rss = false;
            }};            

            GetEpisodesIdNextSiblingResponse res = sdk.episode.getEpisodesIdNextSibling(req, new GetEpisodesIdNextSiblingSecurity("aut") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEpisodesIdNextSibling200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEpisodesIdPreviousSibling

Get the episode released right before the specified one

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEpisodesIdPreviousSiblingRequest;
import org.openapis.openapi.models.operations.GetEpisodesIdPreviousSiblingResponse;
import org.openapis.openapi.models.operations.GetEpisodesIdPreviousSiblingSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEpisodesIdPreviousSiblingRequest req = new GetEpisodesIdPreviousSiblingRequest("71f93f5f-0642-4dac-baf5-15cc413aa63a") {{
                rss = false;
            }};            

            GetEpisodesIdPreviousSiblingResponse res = sdk.episode.getEpisodesIdPreviousSibling(req, new GetEpisodesIdPreviousSiblingSecurity("est") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEpisodesIdPreviousSibling200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
