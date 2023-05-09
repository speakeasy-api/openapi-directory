# typeTypePointOceanOoiDmgx

## Overview

Search API for 'OOI Data' entry type

### Available Operations

* [searchTypePointOceanOoiDmgx](#searchtypepointoceanooidmgx) - Search API for 'OOI Data' entry type

## searchTypePointOceanOoiDmgx

API to search for entries of type OOI Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointOceanOoiDmgxRequest;
import org.openapis.openapi.models.operations.SearchTypePointOceanOoiDmgxResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointOceanOoiDmgxRequest req = new SearchTypePointOceanOoiDmgxRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-04-09T06:42:37.007Z");
                changedateTo = OffsetDateTime.parse("2022-08-24T07:52:55.534Z");
                createdateFrom = OffsetDateTime.parse("2022-08-03T06:33:14.026Z");
                createdateTo = OffsetDateTime.parse("2020-11-19T04:05:25.599Z");
                description = "temporibus";
                filesuffix = "error";
                fromdate = OffsetDateTime.parse("2022-01-13T19:37:58.646Z");
                group = "molestiae";
                max = 646456L;
                maxlatitude = 6756.77;
                maxlongitude = 1413.14;
                minlatitude = 6980.88;
                minlongitude = 1612.18;
                name = "Frances Bosco";
                skip = 597951L;
                text = "nostrum";
                todate = OffsetDateTime.parse("2022-09-24T20:51:26.798Z");
            }};            

            SearchTypePointOceanOoiDmgxResponse res = sdk.typeTypePointOceanOoiDmgx.searchTypePointOceanOoiDmgx(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
