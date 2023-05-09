# typeTypePointOceanNetcdfGlider

## Overview

Search API for 'NetCDF Glider Data' entry type

### Available Operations

* [searchTypePointOceanNetcdfGlider](#searchtypepointoceannetcdfglider) - Search API for 'NetCDF Glider Data' entry type

## searchTypePointOceanNetcdfGlider

API to search for entries of type NetCDF Glider Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointOceanNetcdfGliderRequest;
import org.openapis.openapi.models.operations.SearchTypePointOceanNetcdfGliderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointOceanNetcdfGliderRequest req = new SearchTypePointOceanNetcdfGliderRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-12-30T16:10:24.701Z");
                changedateTo = OffsetDateTime.parse("2022-07-17T17:28:36.302Z");
                createdateFrom = OffsetDateTime.parse("2022-11-09T08:30:53.107Z");
                createdateTo = OffsetDateTime.parse("2022-07-20T23:52:32.501Z");
                description = "corporis";
                filesuffix = "consequuntur";
                fromdate = OffsetDateTime.parse("2022-08-15T13:53:40.574Z");
                group = "quis";
                max = 747358L;
                maxlatitude = 1074.24;
                maxlongitude = 8313.04;
                minlatitude = 4021.21;
                minlongitude = 1628.49;
                name = "Loren Schuster";
                searchTypePointOceanNetcdfTrackPlatform = "debitis";
                skip = 100926L;
                text = "reiciendis";
                todate = OffsetDateTime.parse("2022-11-16T13:43:29.251Z");
            }};            

            SearchTypePointOceanNetcdfGliderResponse res = sdk.typeTypePointOceanNetcdfGlider.searchTypePointOceanNetcdfGlider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
