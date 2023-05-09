# typeLidarLas

## Overview

Search API for 'LAS Lidar Data' entry type

### Available Operations

* [searchLidarLas](#searchlidarlas) - Search API for 'LAS Lidar Data' entry type

## searchLidarLas

API to search for entries of type LAS Lidar Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchLidarLasRequest;
import org.openapis.openapi.models.operations.SearchLidarLasResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchLidarLasRequest req = new SearchLidarLasRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-04-05T18:49:15.247Z");
                changedateTo = OffsetDateTime.parse("2022-07-04T20:08:46.226Z");
                createdateFrom = OffsetDateTime.parse("2022-11-06T09:59:59.144Z");
                createdateTo = OffsetDateTime.parse("2022-05-20T19:36:03.657Z");
                description = "provident";
                filesuffix = "cum";
                fromdate = OffsetDateTime.parse("2020-11-21T03:47:05.182Z");
                group = "quidem";
                max = 932080L;
                maxlatitude = 3895.48;
                maxlongitude = 6017.14;
                minlatitude = 2637.67;
                minlongitude = 5951.98;
                name = "Jonathon Collins";
                skip = 279172L;
                text = "recusandae";
                todate = OffsetDateTime.parse("2021-01-03T04:35:17.852Z");
            }};            

            SearchLidarLasResponse res = sdk.typeLidarLas.searchLidarLas(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
