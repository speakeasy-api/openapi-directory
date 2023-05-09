# typeTypePointAmrcFinal

## Overview

Search API for 'AMRC Final QC Data' entry type

### Available Operations

* [searchTypePointAmrcFinal](#searchtypepointamrcfinal) - Search API for 'AMRC Final QC Data' entry type

## searchTypePointAmrcFinal

API to search for entries of type AMRC Final QC Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointAmrcFinalRequest;
import org.openapis.openapi.models.operations.SearchTypePointAmrcFinalResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointAmrcFinalRequest req = new SearchTypePointAmrcFinalRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-02-16T09:12:26.299Z");
                changedateTo = OffsetDateTime.parse("2022-01-23T22:29:23.041Z");
                createdateFrom = OffsetDateTime.parse("2022-07-28T21:09:38.119Z");
                createdateTo = OffsetDateTime.parse("2022-02-10T08:14:25.024Z");
                description = "mollitia";
                filesuffix = "libero";
                fromdate = OffsetDateTime.parse("2021-11-14T05:57:08.843Z");
                group = "et";
                max = 487625L;
                maxlatitude = 7536.8;
                maxlongitude = 2018.38;
                minlatitude = 6902.11;
                minlongitude = 454.45;
                name = "Leon Braun";
                searchTypePointAmrcFinalArgosId = "ut";
                searchTypePointAmrcFinalSiteId = "quidem";
                searchTypePointAmrcFinalSiteName = "doloribus";
                skip = 22018L;
                text = "architecto";
                todate = OffsetDateTime.parse("2021-09-17T02:47:13.595Z");
            }};            

            SearchTypePointAmrcFinalResponse res = sdk.typeTypePointAmrcFinal.searchTypePointAmrcFinal(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
