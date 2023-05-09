# typeTypeSoundingGsd

## Overview

Search API for 'GSD Sounding' entry type

### Available Operations

* [searchTypeSoundingGsd](#searchtypesoundinggsd) - Search API for 'GSD Sounding' entry type

## searchTypeSoundingGsd

API to search for entries of type GSD Sounding

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeSoundingGsdRequest;
import org.openapis.openapi.models.operations.SearchTypeSoundingGsdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeSoundingGsdRequest req = new SearchTypeSoundingGsdRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-05-11T20:18:30.071Z");
                changedateTo = OffsetDateTime.parse("2022-02-26T05:10:52.371Z");
                createdateFrom = OffsetDateTime.parse("2022-01-31T13:42:39.333Z");
                createdateTo = OffsetDateTime.parse("2021-10-29T09:01:04.013Z");
                description = "modi";
                filesuffix = "ratione";
                fromdate = OffsetDateTime.parse("2022-08-04T05:35:00.281Z");
                group = "aliquam";
                max = 357684L;
                maxlatitude = 8726.02;
                maxlongitude = 572.91;
                minlatitude = 2260.97;
                minlongitude = 140.82;
                name = "Alex Zulauf";
                skip = 650937L;
                text = "quis";
                todate = OffsetDateTime.parse("2020-09-14T19:44:18.051Z");
            }};            

            SearchTypeSoundingGsdResponse res = sdk.typeTypeSoundingGsd.searchTypeSoundingGsd(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
