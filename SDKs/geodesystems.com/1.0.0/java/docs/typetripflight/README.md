# typeTripFlight

## Overview

Search API for 'Flight Leg' entry type

### Available Operations

* [searchTripFlight](#searchtripflight) - Search API for 'Flight Leg' entry type

## searchTripFlight

API to search for entries of type Flight Leg

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTripFlightRequest;
import org.openapis.openapi.models.operations.SearchTripFlightResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTripFlightRequest req = new SearchTripFlightRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-02-23T18:01:52.364Z");
                changedateTo = OffsetDateTime.parse("2022-04-20T08:27:41.552Z");
                createdateFrom = OffsetDateTime.parse("2022-09-25T04:25:07.986Z");
                createdateTo = OffsetDateTime.parse("2022-12-09T09:51:02.198Z");
                description = "similique";
                filesuffix = "possimus";
                fromdate = OffsetDateTime.parse("2021-11-11T06:21:56.630Z");
                group = "ex";
                max = 571550L;
                maxlatitude = 6668.17;
                maxlongitude = 9835.56;
                minlatitude = 5890.31;
                minlongitude = 15.94;
                name = "Billy Jones";
                skip = 805128L;
                text = "facere";
                todate = OffsetDateTime.parse("2021-03-29T02:26:00.921Z");
            }};            

            SearchTripFlightResponse res = sdk.typeTripFlight.searchTripFlight(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
