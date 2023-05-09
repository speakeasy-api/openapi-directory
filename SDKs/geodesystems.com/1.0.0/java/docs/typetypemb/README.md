# typeTypeMb

## Overview

Search API for 'MB Bathymetry' entry type

### Available Operations

* [searchTypeMb](#searchtypemb) - Search API for 'MB Bathymetry' entry type

## searchTypeMb

API to search for entries of type MB Bathymetry

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeMbRequest;
import org.openapis.openapi.models.operations.SearchTypeMbResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeMbRequest req = new SearchTypeMbRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-17T16:31:04.532Z");
                changedateTo = OffsetDateTime.parse("2022-12-28T01:35:11.563Z");
                createdateFrom = OffsetDateTime.parse("2020-01-05T05:37:18.912Z");
                createdateTo = OffsetDateTime.parse("2022-10-12T12:22:15.424Z");
                description = "distinctio";
                filesuffix = "quaerat";
                fromdate = OffsetDateTime.parse("2022-05-17T18:52:45.867Z");
                group = "nihil";
                max = 928102L;
                maxlatitude = 2538.55;
                maxlongitude = 6520.13;
                minlatitude = 6515.04;
                minlongitude = 5043.86;
                name = "Dianne Hayes";
                skip = 614175L;
                text = "ea";
                todate = OffsetDateTime.parse("2022-07-20T10:09:28.379Z");
            }};            

            SearchTypeMbResponse res = sdk.typeTypeMb.searchTypeMb(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
