# typePasteitentry

## Overview

Search API for 'Paste Text Entry' entry type

### Available Operations

* [searchPasteitentry](#searchpasteitentry) - Search API for 'Paste Text Entry' entry type

## searchPasteitentry

API to search for entries of type Paste Text Entry

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchPasteitentryRequest;
import org.openapis.openapi.models.operations.SearchPasteitentryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchPasteitentryRequest req = new SearchPasteitentryRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-09-10T06:44:39.892Z");
                changedateTo = OffsetDateTime.parse("2022-06-29T22:58:48.514Z");
                createdateFrom = OffsetDateTime.parse("2022-05-03T03:35:37.503Z");
                createdateTo = OffsetDateTime.parse("2021-07-17T02:21:21.661Z");
                description = "iste";
                filesuffix = "illo";
                fromdate = OffsetDateTime.parse("2021-05-05T02:52:31.067Z");
                group = "temporibus";
                max = 576657L;
                maxlatitude = 4834.59;
                maxlongitude = 3156.71;
                minlatitude = 8811.89;
                minlongitude = 444.67;
                name = "Miss Dwight Goldner";
                skip = 526584L;
                text = "tenetur";
                todate = OffsetDateTime.parse("2022-06-21T13:56:00.357Z");
            }};            

            SearchPasteitentryResponse res = sdk.typePasteitentry.searchPasteitentry(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
