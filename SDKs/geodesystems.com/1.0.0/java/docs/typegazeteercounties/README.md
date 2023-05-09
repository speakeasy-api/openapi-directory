# typeGazeteerCounties

## Overview

Search API for 'Census Gazeteer Counties' entry type

### Available Operations

* [searchGazeteerCounties](#searchgazeteercounties) - Search API for 'Census Gazeteer Counties' entry type

## searchGazeteerCounties

API to search for entries of type Census Gazeteer Counties

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGazeteerCountiesRequest;
import org.openapis.openapi.models.operations.SearchGazeteerCountiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGazeteerCountiesRequest req = new SearchGazeteerCountiesRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-07-20T07:57:05.780Z");
                changedateTo = OffsetDateTime.parse("2022-12-17T22:14:17.851Z");
                createdateFrom = OffsetDateTime.parse("2020-09-06T10:40:03.787Z");
                createdateTo = OffsetDateTime.parse("2022-07-26T16:25:58.578Z");
                description = "adipisci";
                filesuffix = "saepe";
                fromdate = OffsetDateTime.parse("2022-11-30T15:58:04.315Z");
                group = "quis";
                max = 333072L;
                maxlatitude = 7274.81;
                maxlongitude = 997.33;
                minlatitude = 5845.93;
                minlongitude = 4755.89;
                name = "Rufus Friesen";
                searchDbGazeteerCountiesAreaLand = 1509.35;
                searchDbGazeteerCountiesAreaWater = 9930.02;
                searchDbGazeteerCountiesCountyFips = "veniam";
                searchDbGazeteerCountiesCountyName = "consequuntur";
                searchDbGazeteerCountiesFullCountyFips = "facere";
                searchDbGazeteerCountiesLocation = "laudantium";
                searchDbGazeteerCountiesStateAbbreviation = "odit";
                searchDbGazeteerCountiesStateFips = "pariatur";
                skip = 227362L;
                text = "exercitationem";
                todate = OffsetDateTime.parse("2022-10-04T10:29:48.523Z");
            }};            

            SearchGazeteerCountiesResponse res = sdk.typeGazeteerCounties.searchGazeteerCounties(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
