# typeTypePointOceanNetcdfTrack

## Overview

Search API for 'NetCDF Track Data' entry type

### Available Operations

* [searchTypePointOceanNetcdfTrack](#searchtypepointoceannetcdftrack) - Search API for 'NetCDF Track Data' entry type

## searchTypePointOceanNetcdfTrack

API to search for entries of type NetCDF Track Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointOceanNetcdfTrackRequest;
import org.openapis.openapi.models.operations.SearchTypePointOceanNetcdfTrackResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointOceanNetcdfTrackRequest req = new SearchTypePointOceanNetcdfTrackRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-02T13:17:48.183Z");
                changedateTo = OffsetDateTime.parse("2022-03-15T02:21:50.640Z");
                createdateFrom = OffsetDateTime.parse("2022-07-07T10:08:56.987Z");
                createdateTo = OffsetDateTime.parse("2022-10-21T23:31:37.125Z");
                description = "sint";
                filesuffix = "accusamus";
                fromdate = OffsetDateTime.parse("2021-02-14T13:20:05.965Z");
                group = "consequuntur";
                max = 318471L;
                maxlatitude = 7926.76;
                maxlongitude = 8421.68;
                minlatitude = 348.63;
                minlongitude = 8588.57;
                name = "Geneva Stamm";
                searchTypePointOceanNetcdfTrackPlatform = "sint";
                skip = 984080L;
                text = "magnam";
                todate = OffsetDateTime.parse("2022-05-20T02:43:28.817Z");
            }};            

            SearchTypePointOceanNetcdfTrackResponse res = sdk.typeTypePointOceanNetcdfTrack.searchTypePointOceanNetcdfTrack(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
