# typeLidarLvis

## Overview

Search API for 'LVIS Lidar Data' entry type

### Available Operations

* [searchLidarLvis](#searchlidarlvis) - Search API for 'LVIS Lidar Data' entry type

## searchLidarLvis

API to search for entries of type LVIS Lidar Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchLidarLvisRequest;
import org.openapis.openapi.models.operations.SearchLidarLvisResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchLidarLvisRequest req = new SearchLidarLvisRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-09-24T18:07:45.123Z");
                changedateTo = OffsetDateTime.parse("2022-05-28T02:31:04.579Z");
                createdateFrom = OffsetDateTime.parse("2021-11-24T14:44:53.995Z");
                createdateTo = OffsetDateTime.parse("2020-11-17T23:24:31.493Z");
                description = "non";
                filesuffix = "mollitia";
                fromdate = OffsetDateTime.parse("2020-03-20T20:47:10.956Z");
                group = "distinctio";
                max = 866861L;
                maxlatitude = 3233.65;
                maxlongitude = 8161.51;
                minlatitude = 6746.83;
                minlongitude = 9114.51;
                name = "Randall Schmitt III";
                skip = 647210L;
                text = "molestias";
                todate = OffsetDateTime.parse("2021-08-31T04:48:59.619Z");
            }};            

            SearchLidarLvisResponse res = sdk.typeLidarLvis.searchLidarLvis(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
