# typeTypeGtfsTrip

## Overview

Search API for 'Transit Trip' entry type

### Available Operations

* [searchTypeGtfsTrip](#searchtypegtfstrip) - Search API for 'Transit Trip' entry type

## searchTypeGtfsTrip

API to search for entries of type Transit Trip

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeGtfsTripRequest;
import org.openapis.openapi.models.operations.SearchTypeGtfsTripResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeGtfsTripRequest req = new SearchTypeGtfsTripRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-07-18T16:38:13.772Z");
                changedateTo = OffsetDateTime.parse("2022-12-02T02:24:08.784Z");
                createdateFrom = OffsetDateTime.parse("2021-04-07T08:21:07.346Z");
                createdateTo = OffsetDateTime.parse("2020-04-24T09:30:03.833Z");
                description = "rem";
                filesuffix = "a";
                fromdate = OffsetDateTime.parse("2022-08-31T20:35:45.651Z");
                group = "aut";
                max = 170126L;
                maxlatitude = 7002.04;
                maxlongitude = 9766.41;
                minlatitude = 8584.78;
                minlongitude = 7967.05;
                name = "Ms. Joanne Halvorson";
                searchTypeGtfsTripBikesAllowed = "illo";
                searchTypeGtfsTripStopIds = "a";
                searchTypeGtfsTripTripId = "et";
                searchTypeGtfsTripWheelchairAccessible = "molestiae";
                skip = 421111L;
                text = "dolore";
                todate = OffsetDateTime.parse("2022-08-29T00:38:22.538Z");
            }};            

            SearchTypeGtfsTripResponse res = sdk.typeTypeGtfsTrip.searchTypeGtfsTrip(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
