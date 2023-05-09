# typeGeoGeotiff

## Overview

Search API for 'GeoTIFF' entry type

### Available Operations

* [searchGeoGeotiff](#searchgeogeotiff) - Search API for 'GeoTIFF' entry type

## searchGeoGeotiff

API to search for entries of type GeoTIFF

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGeoGeotiffRequest;
import org.openapis.openapi.models.operations.SearchGeoGeotiffResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGeoGeotiffRequest req = new SearchGeoGeotiffRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-12-15T19:28:43.232Z");
                changedateTo = OffsetDateTime.parse("2020-06-10T07:13:59.609Z");
                createdateFrom = OffsetDateTime.parse("2021-03-22T16:52:21.456Z");
                createdateTo = OffsetDateTime.parse("2022-10-12T15:53:23.836Z");
                description = "dicta";
                filesuffix = "error";
                fromdate = OffsetDateTime.parse("2022-08-31T21:53:00.029Z");
                group = "dignissimos";
                max = 458970L;
                maxlatitude = 8541.15;
                maxlongitude = 3223.33;
                minlatitude = 1348.18;
                minlongitude = 3165.01;
                name = "Tyrone Kulas Jr.";
                skip = 280114L;
                text = "accusamus";
                todate = OffsetDateTime.parse("2020-10-18T09:05:37.895Z");
            }};            

            SearchGeoGeotiffResponse res = sdk.typeGeoGeotiff.searchGeoGeotiff(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
