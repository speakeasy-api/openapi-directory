# typeTypeGtfsRoutes

## Overview

Search API for 'Transit Route Collection' entry type

### Available Operations

* [searchTypeGtfsRoutes](#searchtypegtfsroutes) - Search API for 'Transit Route Collection' entry type

## searchTypeGtfsRoutes

API to search for entries of type Transit Route Collection

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeGtfsRoutesRequest;
import org.openapis.openapi.models.operations.SearchTypeGtfsRoutesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeGtfsRoutesRequest req = new SearchTypeGtfsRoutesRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-09-22T06:36:31.491Z");
                changedateTo = OffsetDateTime.parse("2021-04-06T20:13:58.301Z");
                createdateFrom = OffsetDateTime.parse("2022-11-14T19:35:34.450Z");
                createdateTo = OffsetDateTime.parse("2020-12-28T23:57:16.474Z");
                description = "sapiente";
                filesuffix = "necessitatibus";
                fromdate = OffsetDateTime.parse("2022-10-21T08:52:32.010Z");
                group = "mollitia";
                max = 530232L;
                maxlatitude = 5006.92;
                maxlongitude = 9580.91;
                minlatitude = 2835.57;
                minlongitude = 2779.43;
                name = "Debbie Haley";
                skip = 947704L;
                text = "saepe";
                todate = OffsetDateTime.parse("2020-06-05T01:17:49.031Z");
            }};            

            SearchTypeGtfsRoutesResponse res = sdk.typeTypeGtfsRoutes.searchTypeGtfsRoutes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
