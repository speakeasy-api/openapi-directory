# typeUfoSightings

## Overview

Search API for 'Ufo Sightings' entry type

### Available Operations

* [searchUfoSightings](#searchufosightings) - Search API for 'Ufo Sightings' entry type

## searchUfoSightings

API to search for entries of type Ufo Sightings

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchUfoSightingsRequest;
import org.openapis.openapi.models.operations.SearchUfoSightingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchUfoSightingsRequest req = new SearchUfoSightingsRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-03-21T13:08:52.539Z");
                changedateTo = OffsetDateTime.parse("2022-03-19T00:24:16.492Z");
                createdateFrom = OffsetDateTime.parse("2020-09-18T16:55:04.907Z");
                createdateTo = OffsetDateTime.parse("2022-06-22T23:18:05.416Z");
                description = "itaque";
                filesuffix = "assumenda";
                fromdate = OffsetDateTime.parse("2021-08-17T00:29:41.636Z");
                group = "a";
                max = 465190L;
                maxlatitude = 5536.34;
                maxlongitude = 4937.74;
                minlatitude = 9366.83;
                minlongitude = 2369.1;
                name = "Delia Bartell";
                searchDbUfoSightingsCity = "nesciunt";
                searchDbUfoSightingsComments = "pariatur";
                searchDbUfoSightingsCountry = "velit";
                searchDbUfoSightingsDatePosted = "necessitatibus";
                searchDbUfoSightingsDatetime = "facere";
                searchDbUfoSightingsDurationHoursMin = "quae";
                searchDbUfoSightingsDurationSeconds = 7685.46;
                searchDbUfoSightingsLatitude = 3532.32;
                searchDbUfoSightingsLongitude = 4271.07;
                searchDbUfoSightingsShape = "reprehenderit";
                searchDbUfoSightingsState = "aut";
                skip = 926225L;
                text = "voluptatibus";
                todate = OffsetDateTime.parse("2022-11-13T15:01:42.389Z");
            }};            

            SearchUfoSightingsResponse res = sdk.typeUfoSightings.searchUfoSightings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
