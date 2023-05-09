# typeLidarCollection

## Overview

Search API for 'LiDAR Collection' entry type

### Available Operations

* [searchLidarCollection](#searchlidarcollection) - Search API for 'LiDAR Collection' entry type

## searchLidarCollection

API to search for entries of type LiDAR Collection

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchLidarCollectionRequest;
import org.openapis.openapi.models.operations.SearchLidarCollectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchLidarCollectionRequest req = new SearchLidarCollectionRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-08-20T09:59:23.505Z");
                changedateTo = OffsetDateTime.parse("2022-01-05T11:14:11.433Z");
                createdateFrom = OffsetDateTime.parse("2020-05-04T08:05:54.832Z");
                createdateTo = OffsetDateTime.parse("2022-12-30T01:26:23.904Z");
                description = "culpa";
                filesuffix = "ipsa";
                fromdate = OffsetDateTime.parse("2020-04-22T11:30:26.635Z");
                group = "quia";
                max = 118932L;
                maxlatitude = 4260.02;
                maxlongitude = 5955.84;
                minlatitude = 8927.08;
                minlongitude = 3548.21;
                name = "Ms. Donna Auer";
                skip = 435531L;
                text = "quibusdam";
                todate = OffsetDateTime.parse("2021-11-29T06:28:27.205Z");
            }};            

            SearchLidarCollectionResponse res = sdk.typeLidarCollection.searchLidarCollection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
