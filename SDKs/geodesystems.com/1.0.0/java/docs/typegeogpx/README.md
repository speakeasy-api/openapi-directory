# typeGeoGpx

## Overview

Search API for 'GPX GPS File' entry type

### Available Operations

* [searchGeoGpx](#searchgeogpx) - Search API for 'GPX GPS File' entry type

## searchGeoGpx

API to search for entries of type GPX GPS File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGeoGpxRequest;
import org.openapis.openapi.models.operations.SearchGeoGpxResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGeoGpxRequest req = new SearchGeoGpxRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-28T13:51:54.669Z");
                changedateTo = OffsetDateTime.parse("2020-03-08T14:51:04.568Z");
                createdateFrom = OffsetDateTime.parse("2022-06-30T04:42:17.193Z");
                createdateTo = OffsetDateTime.parse("2022-01-01T01:40:36.755Z");
                description = "quisquam";
                filesuffix = "sequi";
                fromdate = OffsetDateTime.parse("2022-06-19T18:12:14.535Z");
                group = "illo";
                max = 290248L;
                maxlatitude = 8288.41;
                maxlongitude = 3041.73;
                minlatitude = 7904.63;
                minlongitude = 5910.65;
                name = "Cornelius Altenwerth";
                searchGeoGpxDistance = 7239.42;
                searchGeoGpxElevationGain = 7119.91;
                searchGeoGpxElevationLoss = 5591.74;
                searchGeoGpxMovingTime = 5908.58;
                searchGeoGpxSpeed = 9222.99;
                searchGeoGpxTotalTime = 7000.45;
                skip = 492361L;
                text = "corporis";
                todate = OffsetDateTime.parse("2021-02-10T19:58:48.033Z");
            }};            

            SearchGeoGpxResponse res = sdk.typeGeoGpx.searchGeoGpx(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
