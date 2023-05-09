# typeGeoShapefile

## Overview

Search API for 'Shapefile' entry type

### Available Operations

* [searchGeoShapefile](#searchgeoshapefile) - Search API for 'Shapefile' entry type

## searchGeoShapefile

API to search for entries of type Shapefile

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGeoShapefileRequest;
import org.openapis.openapi.models.operations.SearchGeoShapefileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGeoShapefileRequest req = new SearchGeoShapefileRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-03-06T12:29:45.421Z");
                changedateTo = OffsetDateTime.parse("2022-07-06T08:20:32.050Z");
                createdateFrom = OffsetDateTime.parse("2022-04-09T04:08:42.865Z");
                createdateTo = OffsetDateTime.parse("2021-03-27T10:34:01.168Z");
                description = "consectetur";
                filesuffix = "eligendi";
                fromdate = OffsetDateTime.parse("2022-10-06T22:05:31.165Z");
                group = "soluta";
                max = 620500L;
                maxlatitude = 8398.07;
                maxlongitude = 6396.22;
                minlatitude = 2288.57;
                minlongitude = 9485.41;
                name = "Angelica Waters";
                skip = 490420L;
                text = "vero";
                todate = OffsetDateTime.parse("2022-10-08T04:19:24.254Z");
            }};            

            SearchGeoShapefileResponse res = sdk.typeGeoShapefile.searchGeoShapefile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
