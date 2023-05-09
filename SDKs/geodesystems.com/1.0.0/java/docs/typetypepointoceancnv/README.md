# typeTypePointOceanCnv

## Overview

Search API for 'SeaBird CNV Data' entry type

### Available Operations

* [searchTypePointOceanCnv](#searchtypepointoceancnv) - Search API for 'SeaBird CNV Data' entry type

## searchTypePointOceanCnv

API to search for entries of type SeaBird CNV Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointOceanCnvRequest;
import org.openapis.openapi.models.operations.SearchTypePointOceanCnvResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointOceanCnvRequest req = new SearchTypePointOceanCnvRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-01-17T22:59:09.800Z");
                changedateTo = OffsetDateTime.parse("2022-07-31T07:53:06.376Z");
                createdateFrom = OffsetDateTime.parse("2022-01-31T06:16:27.327Z");
                createdateTo = OffsetDateTime.parse("2020-03-10T04:07:17.266Z");
                description = "suscipit";
                filesuffix = "assumenda";
                fromdate = OffsetDateTime.parse("2022-03-21T14:25:08.203Z");
                group = "suscipit";
                max = 837590L;
                maxlatitude = 4245.1;
                maxlongitude = 9301.05;
                minlatitude = 8616.38;
                minlongitude = 5662.13;
                name = "Arnold Dooley";
                skip = 433798L;
                text = "non";
                todate = OffsetDateTime.parse("2022-08-29T04:39:24.132Z");
            }};            

            SearchTypePointOceanCnvResponse res = sdk.typeTypePointOceanCnv.searchTypePointOceanCnv(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
