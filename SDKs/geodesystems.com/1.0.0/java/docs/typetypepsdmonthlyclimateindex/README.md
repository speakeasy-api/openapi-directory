# typeTypePsdMonthlyClimateIndex

## Overview

Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type

### Available Operations

* [searchTypePsdMonthlyClimateIndex](#searchtypepsdmonthlyclimateindex) - Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type

## searchTypePsdMonthlyClimateIndex

API to search for entries of type NOAA-ESRL-PSD Monthly Climate Index

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePsdMonthlyClimateIndexRequest;
import org.openapis.openapi.models.operations.SearchTypePsdMonthlyClimateIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePsdMonthlyClimateIndexRequest req = new SearchTypePsdMonthlyClimateIndexRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-03-25T18:04:46.803Z");
                changedateTo = OffsetDateTime.parse("2022-07-23T09:12:33.050Z");
                createdateFrom = OffsetDateTime.parse("2022-11-20T14:19:56.418Z");
                createdateTo = OffsetDateTime.parse("2022-03-29T14:23:12.944Z");
                description = "provident";
                filesuffix = "quia";
                fromdate = OffsetDateTime.parse("2022-03-16T18:13:20.175Z");
                group = "doloribus";
                max = 89010L;
                maxlatitude = 1851.82;
                maxlongitude = 4812.67;
                minlatitude = 9557.83;
                minlongitude = 6941.48;
                name = "Tricia Barrows";
                searchTypePsdMonthlyClimateIndexUnits = "beatae";
                skip = 962397L;
                text = "deleniti";
                todate = OffsetDateTime.parse("2022-12-03T01:08:15.868Z");
            }};            

            SearchTypePsdMonthlyClimateIndexResponse res = sdk.typeTypePsdMonthlyClimateIndex.searchTypePsdMonthlyClimateIndex(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
