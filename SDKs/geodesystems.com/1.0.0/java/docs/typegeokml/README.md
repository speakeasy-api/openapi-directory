# typeGeoKml

## Overview

Search API for 'KML/KMZ File' entry type

### Available Operations

* [searchGeoKml](#searchgeokml) - Search API for 'KML/KMZ File' entry type

## searchGeoKml

API to search for entries of type KML/KMZ File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGeoKmlRequest;
import org.openapis.openapi.models.operations.SearchGeoKmlResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGeoKmlRequest req = new SearchGeoKmlRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-20T23:31:33.018Z");
                changedateTo = OffsetDateTime.parse("2022-07-11T07:45:44.709Z");
                createdateFrom = OffsetDateTime.parse("2020-11-15T21:30:50.859Z");
                createdateTo = OffsetDateTime.parse("2022-11-29T21:33:00.572Z");
                description = "sint";
                filesuffix = "accusamus";
                fromdate = OffsetDateTime.parse("2022-06-25T04:05:11.831Z");
                group = "dicta";
                max = 30661L;
                maxlatitude = 2443.76;
                maxlongitude = 2244.13;
                minlatitude = 1242.89;
                minlongitude = 9536.76;
                name = "Dr. Misty Lindgren";
                skip = 794988L;
                text = "esse";
                todate = OffsetDateTime.parse("2022-12-24T08:28:37.764Z");
            }};            

            SearchGeoKmlResponse res = sdk.typeGeoKml.searchGeoKml(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
