# typeTypePointNoaaMadis

## Overview

Search API for 'NOAA MADIS Point Data' entry type

### Available Operations

* [searchTypePointNoaaMadis](#searchtypepointnoaamadis) - Search API for 'NOAA MADIS Point Data' entry type

## searchTypePointNoaaMadis

API to search for entries of type NOAA MADIS Point Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointNoaaMadisRequest;
import org.openapis.openapi.models.operations.SearchTypePointNoaaMadisResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointNoaaMadisRequest req = new SearchTypePointNoaaMadisRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-09-22T03:52:56.707Z");
                changedateTo = OffsetDateTime.parse("2022-03-21T16:48:27.758Z");
                createdateFrom = OffsetDateTime.parse("2022-06-10T14:51:37.902Z");
                createdateTo = OffsetDateTime.parse("2022-07-10T10:49:51.101Z");
                description = "laborum";
                filesuffix = "in";
                fromdate = OffsetDateTime.parse("2022-11-05T03:19:03.911Z");
                group = "repellendus";
                max = 504646L;
                maxlatitude = 2848.32;
                maxlongitude = 2590.19;
                minlatitude = 5857.3;
                minlongitude = 3921.8;
                name = "Garry Schultz";
                skip = 773863L;
                text = "reiciendis";
                todate = OffsetDateTime.parse("2022-04-07T07:32:14.075Z");
            }};            

            SearchTypePointNoaaMadisResponse res = sdk.typeTypePointNoaaMadis.searchTypePointNoaaMadis(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
