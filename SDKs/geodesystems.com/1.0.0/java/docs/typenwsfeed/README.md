# typeNwsfeed

## Overview

Search API for 'NWS Forecast Feed' entry type

### Available Operations

* [searchNwsfeed](#searchnwsfeed) - Search API for 'NWS Forecast Feed' entry type

## searchNwsfeed

API to search for entries of type NWS Forecast Feed

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchNwsfeedRequest;
import org.openapis.openapi.models.operations.SearchNwsfeedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchNwsfeedRequest req = new SearchNwsfeedRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-08-31T06:08:59.133Z");
                changedateTo = OffsetDateTime.parse("2022-06-12T00:16:23.616Z");
                createdateFrom = OffsetDateTime.parse("2022-01-17T18:12:26.163Z");
                createdateTo = OffsetDateTime.parse("2022-01-16T07:19:53.468Z");
                description = "saepe";
                filesuffix = "delectus";
                fromdate = OffsetDateTime.parse("2021-10-05T07:23:40.175Z");
                group = "cumque";
                max = 617497L;
                maxlatitude = 3125.11;
                maxlongitude = 9853.79;
                minlatitude = 1560.98;
                minlongitude = 8872.84;
                name = "Noel Hauck";
                skip = 365539L;
                text = "illum";
                todate = OffsetDateTime.parse("2022-12-23T20:22:30.828Z");
            }};            

            SearchNwsfeedResponse res = sdk.typeNwsfeed.searchNwsfeed(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
