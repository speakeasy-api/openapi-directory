# typeEarthSatelliteLandsat

## Overview

Search API for 'Landsat Satellite Data' entry type

### Available Operations

* [searchEarthSatelliteLandsat](#searchearthsatellitelandsat) - Search API for 'Landsat Satellite Data' entry type

## searchEarthSatelliteLandsat

API to search for entries of type Landsat Satellite Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchEarthSatelliteLandsatRequest;
import org.openapis.openapi.models.operations.SearchEarthSatelliteLandsatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchEarthSatelliteLandsatRequest req = new SearchEarthSatelliteLandsatRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-11-13T20:31:38.306Z");
                changedateTo = OffsetDateTime.parse("2022-10-19T19:28:46.304Z");
                createdateFrom = OffsetDateTime.parse("2021-12-21T17:45:55.733Z");
                createdateTo = OffsetDateTime.parse("2022-11-26T09:57:27.688Z");
                description = "rem";
                filesuffix = "fugiat";
                fromdate = OffsetDateTime.parse("2022-08-09T15:02:09.217Z");
                group = "consequuntur";
                max = 233078L;
                maxlatitude = 468.06;
                maxlongitude = 5854.32;
                minlatitude = 9707.32;
                minlongitude = 7468.37;
                name = "Belinda Daugherty";
                searchEarthSatelliteLandsatArchiveVersionNumber = 170099L;
                searchEarthSatelliteLandsatGroundStation = "inventore";
                searchEarthSatelliteLandsatSatellite = "fuga";
                searchEarthSatelliteLandsatSensor = "accusamus";
                searchEarthSatelliteLandsatWrsPathNumber = 976802L;
                searchEarthSatelliteLandsatWrsRowNumber = 719620L;
                skip = 608593L;
                text = "delectus";
                todate = OffsetDateTime.parse("2022-06-29T17:06:44.946Z");
            }};            

            SearchEarthSatelliteLandsatResponse res = sdk.typeEarthSatelliteLandsat.searchEarthSatelliteLandsat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
