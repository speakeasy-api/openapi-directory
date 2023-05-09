# typeTripTrip

## Overview

Search API for 'Trip' entry type

### Available Operations

* [searchTripTrip](#searchtriptrip) - Search API for 'Trip' entry type

## searchTripTrip

API to search for entries of type Trip

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTripTripRequest;
import org.openapis.openapi.models.operations.SearchTripTripResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTripTripRequest req = new SearchTripTripRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-09-09T13:31:45.084Z");
                changedateTo = OffsetDateTime.parse("2022-08-10T17:05:42.553Z");
                createdateFrom = OffsetDateTime.parse("2022-10-11T11:22:54.568Z");
                createdateTo = OffsetDateTime.parse("2022-09-16T13:36:46.452Z");
                description = "maxime";
                filesuffix = "maxime";
                fromdate = OffsetDateTime.parse("2022-12-04T20:35:09.945Z");
                group = "ea";
                max = 771321L;
                maxlatitude = 5184.32;
                maxlongitude = 7622.97;
                minlatitude = 6651.83;
                minlongitude = 815.41;
                name = "Kari Balistreri";
                skip = 136432L;
                text = "perspiciatis";
                todate = OffsetDateTime.parse("2022-07-07T09:19:49.741Z");
            }};            

            SearchTripTripResponse res = sdk.typeTripTrip.searchTripTrip(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
