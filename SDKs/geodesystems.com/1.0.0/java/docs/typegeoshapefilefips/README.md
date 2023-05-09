# typeGeoShapefileFips

## Overview

Search API for 'Shapefile with FIPS Code' entry type

### Available Operations

* [searchGeoShapefileFips](#searchgeoshapefilefips) - Search API for 'Shapefile with FIPS Code' entry type

## searchGeoShapefileFips

API to search for entries of type Shapefile with FIPS Code

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGeoShapefileFipsRequest;
import org.openapis.openapi.models.operations.SearchGeoShapefileFipsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGeoShapefileFipsRequest req = new SearchGeoShapefileFipsRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-08-13T01:51:09.877Z");
                changedateTo = OffsetDateTime.parse("2022-08-26T03:09:04.188Z");
                createdateFrom = OffsetDateTime.parse("2022-09-30T18:20:54.048Z");
                createdateTo = OffsetDateTime.parse("2022-12-05T10:40:26.460Z");
                description = "hic";
                filesuffix = "deserunt";
                fromdate = OffsetDateTime.parse("2022-03-31T22:08:57.998Z");
                group = "distinctio";
                max = 450224L;
                maxlatitude = 3499.93;
                maxlongitude = 2883;
                minlatitude = 2543.82;
                minlongitude = 9211.93;
                name = "Maureen Champlin";
                skip = 44016L;
                text = "odit";
                todate = OffsetDateTime.parse("2022-05-14T18:52:42.885Z");
            }};            

            SearchGeoShapefileFipsResponse res = sdk.typeGeoShapefileFips.searchGeoShapefileFips(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
