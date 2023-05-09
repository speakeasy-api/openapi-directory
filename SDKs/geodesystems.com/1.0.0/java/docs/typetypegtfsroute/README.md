# typeTypeGtfsRoute

## Overview

Search API for 'Transit Route' entry type

### Available Operations

* [searchTypeGtfsRoute](#searchtypegtfsroute) - Search API for 'Transit Route' entry type

## searchTypeGtfsRoute

API to search for entries of type Transit Route

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeGtfsRouteRequest;
import org.openapis.openapi.models.operations.SearchTypeGtfsRouteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeGtfsRouteRequest req = new SearchTypeGtfsRouteRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-04-19T15:30:32.385Z");
                changedateTo = OffsetDateTime.parse("2022-04-11T14:51:38.024Z");
                createdateFrom = OffsetDateTime.parse("2022-10-23T01:50:15.716Z");
                createdateTo = OffsetDateTime.parse("2022-05-04T07:21:12.859Z");
                description = "modi";
                filesuffix = "illum";
                fromdate = OffsetDateTime.parse("2022-07-13T00:51:44.607Z");
                group = "reprehenderit";
                max = 758184L;
                maxlatitude = 7363.13;
                maxlongitude = 6338.25;
                minlatitude = 6370.37;
                minlongitude = 9551.26;
                name = "Monica Hane";
                searchTypeGtfsRouteRouteId = "quaerat";
                searchTypeGtfsRouteStopNames = "voluptatum";
                skip = 257959L;
                text = "explicabo";
                todate = OffsetDateTime.parse("2021-03-29T12:54:59.051Z");
            }};            

            SearchTypeGtfsRouteResponse res = sdk.typeTypeGtfsRoute.searchTypeGtfsRoute(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
