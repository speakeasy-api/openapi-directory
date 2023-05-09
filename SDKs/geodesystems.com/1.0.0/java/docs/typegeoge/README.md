# typeGeoGe

## Overview

Search API for 'GeoJson File' entry type

### Available Operations

* [searchGeoGeojson](#searchgeogeojson) - Search API for 'GeoJson File' entry type

## searchGeoGeojson

API to search for entries of type GeoJson File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGeoGeojsonRequest;
import org.openapis.openapi.models.operations.SearchGeoGeojsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGeoGeojsonRequest req = new SearchGeoGeojsonRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-07-16T07:44:14.632Z");
                changedateTo = OffsetDateTime.parse("2022-01-09T04:56:37.970Z");
                createdateFrom = OffsetDateTime.parse("2022-07-01T03:10:08.438Z");
                createdateTo = OffsetDateTime.parse("2022-03-20T12:36:58.674Z");
                description = "quis";
                filesuffix = "nisi";
                fromdate = OffsetDateTime.parse("2021-05-31T00:14:48.748Z");
                group = "facere";
                max = 706061L;
                maxlatitude = 2176.63;
                maxlongitude = 3189.17;
                minlatitude = 9738.19;
                minlongitude = 9745.89;
                name = "Raquel Greenfelder";
                skip = 440777L;
                text = "nostrum";
                todate = OffsetDateTime.parse("2022-07-09T18:39:59.383Z");
            }};            

            SearchGeoGeojsonResponse res = sdk.typeGeoGe.searchGeoGeojson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
