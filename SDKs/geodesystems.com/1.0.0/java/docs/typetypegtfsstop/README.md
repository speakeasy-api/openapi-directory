# typeTypeGtfsStop

## Overview

Search API for 'Transit Stop' entry type

### Available Operations

* [searchTypeGtfsStop](#searchtypegtfsstop) - Search API for 'Transit Stop' entry type

## searchTypeGtfsStop

API to search for entries of type Transit Stop

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeGtfsStopRequest;
import org.openapis.openapi.models.operations.SearchTypeGtfsStopResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeGtfsStopRequest req = new SearchTypeGtfsStopRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-07-16T12:02:20.522Z");
                changedateTo = OffsetDateTime.parse("2022-08-19T22:52:38.662Z");
                createdateFrom = OffsetDateTime.parse("2022-01-23T05:40:24.870Z");
                createdateTo = OffsetDateTime.parse("2022-10-11T20:00:29.474Z");
                description = "placeat";
                filesuffix = "quos";
                fromdate = OffsetDateTime.parse("2022-12-12T02:35:45.315Z");
                group = "natus";
                max = 191202L;
                maxlatitude = 4722.9;
                maxlongitude = 6040.27;
                minlatitude = 6463.21;
                minlongitude = 6621.84;
                name = "Toni Rowe";
                searchTypeGtfsStopLocationType = "asperiores";
                searchTypeGtfsStopStopCode = "nam";
                searchTypeGtfsStopStopId = "cumque";
                searchTypeGtfsStopWheelchairBoarding = "sapiente";
                searchTypeGtfsStopZoneId = "quam";
                skip = 579242L;
                text = "repellendus";
                todate = OffsetDateTime.parse("2022-10-05T02:48:45.510Z");
            }};            

            SearchTypeGtfsStopResponse res = sdk.typeTypeGtfsStop.searchTypeGtfsStop(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
