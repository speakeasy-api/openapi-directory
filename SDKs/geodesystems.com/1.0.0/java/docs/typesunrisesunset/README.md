# typeSunrisesunset

## Overview

Search API for 'Sunrise/Sunset Display' entry type

### Available Operations

* [searchSunrisesunset](#searchsunrisesunset) - Search API for 'Sunrise/Sunset Display' entry type

## searchSunrisesunset

API to search for entries of type Sunrise/Sunset Display

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSunrisesunsetRequest;
import org.openapis.openapi.models.operations.SearchSunrisesunsetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchSunrisesunsetRequest req = new SearchSunrisesunsetRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-02-10T14:02:23.370Z");
                changedateTo = OffsetDateTime.parse("2022-11-03T12:07:22.406Z");
                createdateFrom = OffsetDateTime.parse("2022-04-09T16:36:14.999Z");
                createdateTo = OffsetDateTime.parse("2022-05-23T16:20:14.362Z");
                description = "dicta";
                filesuffix = "qui";
                fromdate = OffsetDateTime.parse("2022-12-29T17:39:27.998Z");
                group = "amet";
                max = 9284L;
                maxlatitude = 8526.34;
                maxlongitude = 5320.92;
                minlatitude = 2451.16;
                minlongitude = 9427.8;
                name = "Rosie Waters";
                skip = 493865L;
                text = "provident";
                todate = OffsetDateTime.parse("2021-05-06T00:34:29.656Z");
            }};            

            SearchSunrisesunsetResponse res = sdk.typeSunrisesunset.searchSunrisesunset(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
