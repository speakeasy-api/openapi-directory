# typeMediaYoutubevideo

## Overview

Search API for 'YouTube Video' entry type

### Available Operations

* [searchMediaYoutubevideo](#searchmediayoutubevideo) - Search API for 'YouTube Video' entry type

## searchMediaYoutubevideo

API to search for entries of type YouTube Video

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchMediaYoutubevideoRequest;
import org.openapis.openapi.models.operations.SearchMediaYoutubevideoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchMediaYoutubevideoRequest req = new SearchMediaYoutubevideoRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-18T10:44:39.786Z");
                changedateTo = OffsetDateTime.parse("2022-12-26T19:09:23.398Z");
                createdateFrom = OffsetDateTime.parse("2021-12-22T09:30:36.023Z");
                createdateTo = OffsetDateTime.parse("2020-07-13T07:09:47.394Z");
                description = "neque";
                filesuffix = "pariatur";
                fromdate = OffsetDateTime.parse("2022-01-15T07:16:56.146Z");
                group = "mollitia";
                max = 65121L;
                maxlatitude = 5526.46;
                maxlongitude = 445.71;
                minlatitude = 2512;
                minlongitude = 9132.84;
                name = "Suzanne Schaefer";
                skip = 982445L;
                text = "inventore";
                todate = OffsetDateTime.parse("2022-06-27T16:30:06.244Z");
            }};            

            SearchMediaYoutubevideoResponse res = sdk.typeMediaYoutubevideo.searchMediaYoutubevideo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
