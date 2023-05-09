# typePropertydb

## Overview

Search API for 'Property Database' entry type

### Available Operations

* [searchPropertydb](#searchpropertydb) - Search API for 'Property Database' entry type

## searchPropertydb

API to search for entries of type Property Database

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchPropertydbRequest;
import org.openapis.openapi.models.operations.SearchPropertydbResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchPropertydbRequest req = new SearchPropertydbRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-03-02T14:38:11.345Z");
                changedateTo = OffsetDateTime.parse("2020-08-16T15:28:22.285Z");
                createdateFrom = OffsetDateTime.parse("2022-01-18T13:21:09.532Z");
                createdateTo = OffsetDateTime.parse("2022-11-20T07:29:54.943Z");
                description = "veritatis";
                filesuffix = "facere";
                fromdate = OffsetDateTime.parse("2020-12-25T20:40:11.724Z");
                group = "dicta";
                max = 32737L;
                maxlatitude = 1409.09;
                maxlongitude = 3988.47;
                minlatitude = 8626.66;
                minlongitude = 3184.5;
                name = "Julie O'Reilly";
                searchDbPropertydbAddress = "vitae";
                searchDbPropertydbBuildingType = "omnis";
                searchDbPropertydbCity = "alias";
                searchDbPropertydbHouseSize = 957489L;
                searchDbPropertydbLocation = "officiis";
                searchDbPropertydbLotAcres = 7088.83;
                searchDbPropertydbLotSqft = 156843L;
                searchDbPropertydbOwner = "vitae";
                searchDbPropertydbPriceSqft = 4878.39;
                searchDbPropertydbPropertyId = "quas";
                searchDbPropertydbState = "ipsa";
                searchDbPropertydbValue = 718187L;
                skip = 811903L;
                text = "quod";
                todate = OffsetDateTime.parse("2022-12-03T04:16:30.672Z");
            }};            

            SearchPropertydbResponse res = sdk.typePropertydb.searchPropertydb(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
