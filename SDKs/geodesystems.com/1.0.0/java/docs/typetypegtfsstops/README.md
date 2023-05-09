# typeTypeGtfsStops

## Overview

Search API for 'Transit Stop Collection' entry type

### Available Operations

* [searchTypeGtfsStops](#searchtypegtfsstops) - Search API for 'Transit Stop Collection' entry type

## searchTypeGtfsStops

API to search for entries of type Transit Stop Collection

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeGtfsStopsRequest;
import org.openapis.openapi.models.operations.SearchTypeGtfsStopsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeGtfsStopsRequest req = new SearchTypeGtfsStopsRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-08-20T05:05:50.222Z");
                changedateTo = OffsetDateTime.parse("2022-06-25T19:21:38.946Z");
                createdateFrom = OffsetDateTime.parse("2022-10-28T00:08:33.411Z");
                createdateTo = OffsetDateTime.parse("2021-01-20T18:12:10.943Z");
                description = "omnis";
                filesuffix = "quis";
                fromdate = OffsetDateTime.parse("2021-10-08T17:46:54.478Z");
                group = "aliquam";
                max = 878595L;
                maxlatitude = 3944.91;
                maxlongitude = 5066.89;
                minlatitude = 4331.94;
                minlongitude = 1151.37;
                name = "Owen Reinger";
                skip = 983067L;
                text = "iste";
                todate = OffsetDateTime.parse("2021-11-21T10:33:51.138Z");
            }};            

            SearchTypeGtfsStopsResponse res = sdk.typeTypeGtfsStops.searchTypeGtfsStops(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
