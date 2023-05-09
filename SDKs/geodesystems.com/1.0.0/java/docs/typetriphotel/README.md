# typeTripHotel

## Overview

Search API for 'Lodging' entry type

### Available Operations

* [searchTripHotel](#searchtriphotel) - Search API for 'Lodging' entry type

## searchTripHotel

API to search for entries of type Lodging

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTripHotelRequest;
import org.openapis.openapi.models.operations.SearchTripHotelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTripHotelRequest req = new SearchTripHotelRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-24T04:04:20.256Z");
                changedateTo = OffsetDateTime.parse("2022-11-29T07:26:39.700Z");
                createdateFrom = OffsetDateTime.parse("2022-06-28T09:26:08.422Z");
                createdateTo = OffsetDateTime.parse("2021-11-29T09:33:34.942Z");
                description = "quae";
                filesuffix = "facere";
                fromdate = OffsetDateTime.parse("2022-04-09T09:22:24.048Z");
                group = "nam";
                max = 225383L;
                maxlatitude = 2387.39;
                maxlongitude = 7935.97;
                minlatitude = 9438.28;
                minlongitude = 6291.16;
                name = "Glenn Green";
                skip = 240027L;
                text = "veritatis";
                todate = OffsetDateTime.parse("2021-01-19T09:57:07.431Z");
            }};            

            SearchTripHotelResponse res = sdk.typeTripHotel.searchTripHotel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
