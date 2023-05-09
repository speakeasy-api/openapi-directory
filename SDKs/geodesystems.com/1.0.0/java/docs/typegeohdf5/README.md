# typeGeoHdf5

## Overview

Search API for 'HDF5 File' entry type

### Available Operations

* [searchGeoHdf5](#searchgeohdf5) - Search API for 'HDF5 File' entry type

## searchGeoHdf5

API to search for entries of type HDF5 File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGeoHdf5Request;
import org.openapis.openapi.models.operations.SearchGeoHdf5Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGeoHdf5Request req = new SearchGeoHdf5Request() {{
                changedateFrom = OffsetDateTime.parse("2021-09-11T20:45:20.947Z");
                changedateTo = OffsetDateTime.parse("2022-08-02T23:06:10.498Z");
                createdateFrom = OffsetDateTime.parse("2021-10-03T12:56:33.515Z");
                createdateTo = OffsetDateTime.parse("2022-12-20T07:11:32.953Z");
                description = "ad";
                filesuffix = "quae";
                fromdate = OffsetDateTime.parse("2022-02-24T23:57:50.783Z");
                group = "praesentium";
                max = 695526L;
                maxlatitude = 7368.53;
                maxlongitude = 2304.11;
                minlatitude = 976.76;
                minlongitude = 1181.26;
                name = "Ronald Wehner";
                skip = 587967L;
                text = "dolorum";
                todate = OffsetDateTime.parse("2021-03-22T19:06:23.209Z");
            }};            

            SearchGeoHdf5Response res = sdk.typeGeoHdf5.searchGeoHdf5(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
