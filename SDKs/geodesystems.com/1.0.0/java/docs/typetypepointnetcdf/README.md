# typeTypePointNetcdf

## Overview

Search API for 'NetCDF Point File' entry type

### Available Operations

* [searchTypePointNetcdf](#searchtypepointnetcdf) - Search API for 'NetCDF Point File' entry type

## searchTypePointNetcdf

API to search for entries of type NetCDF Point File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointNetcdfRequest;
import org.openapis.openapi.models.operations.SearchTypePointNetcdfResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointNetcdfRequest req = new SearchTypePointNetcdfRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-22T21:28:33.711Z");
                changedateTo = OffsetDateTime.parse("2021-10-03T04:08:50.103Z");
                createdateFrom = OffsetDateTime.parse("2022-04-24T13:14:37.287Z");
                createdateTo = OffsetDateTime.parse("2022-10-07T11:36:17.844Z");
                description = "in";
                filesuffix = "rerum";
                fromdate = OffsetDateTime.parse("2021-12-29T07:13:23.289Z");
                group = "saepe";
                max = 25737L;
                maxlatitude = 7625.4;
                maxlongitude = 7743.53;
                minlatitude = 5493.32;
                minlongitude = 5603.74;
                name = "Carolyn Macejkovic";
                skip = 287293L;
                text = "nulla";
                todate = OffsetDateTime.parse("2022-12-21T09:24:31.624Z");
            }};            

            SearchTypePointNetcdfResponse res = sdk.typeTypePointNetcdf.searchTypePointNetcdf(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
