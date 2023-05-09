# typeFeed

## Overview

Search API for 'RSS/ATOM Feed' entry type

### Available Operations

* [searchFeed](#searchfeed) - Search API for 'RSS/ATOM Feed' entry type

## searchFeed

API to search for entries of type RSS/ATOM Feed

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchFeedRequest;
import org.openapis.openapi.models.operations.SearchFeedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchFeedRequest req = new SearchFeedRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-10-04T04:25:17.046Z");
                changedateTo = OffsetDateTime.parse("2022-09-17T16:07:37.080Z");
                createdateFrom = OffsetDateTime.parse("2022-02-15T20:15:24.019Z");
                createdateTo = OffsetDateTime.parse("2022-11-20T23:08:11.095Z");
                description = "inventore";
                filesuffix = "dolorem";
                fromdate = OffsetDateTime.parse("2022-10-26T04:37:41.230Z");
                group = "iste";
                max = 403026L;
                maxlatitude = 3676.26;
                maxlongitude = 7452.33;
                minlatitude = 7262.27;
                minlongitude = 5269.07;
                name = "Mr. Lonnie Considine";
                skip = 64435L;
                text = "quae";
                todate = OffsetDateTime.parse("2022-10-16T23:42:04.526Z");
            }};            

            SearchFeedResponse res = sdk.typeFeed.searchFeed(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
