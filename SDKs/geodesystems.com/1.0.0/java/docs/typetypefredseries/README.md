# typeTypeFredSeries

## Overview

Search API for 'FRED Series' entry type

### Available Operations

* [searchTypeFredSeries](#searchtypefredseries) - Search API for 'FRED Series' entry type

## searchTypeFredSeries

API to search for entries of type FRED Series

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeFredSeriesRequest;
import org.openapis.openapi.models.operations.SearchTypeFredSeriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeFredSeriesRequest req = new SearchTypeFredSeriesRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-01-16T11:29:04.824Z");
                changedateTo = OffsetDateTime.parse("2022-04-27T07:32:45.617Z");
                createdateFrom = OffsetDateTime.parse("2022-07-08T17:14:19.851Z");
                createdateTo = OffsetDateTime.parse("2021-08-14T15:31:01.936Z");
                description = "explicabo";
                filesuffix = "delectus";
                fromdate = OffsetDateTime.parse("2021-12-06T15:54:45.514Z");
                group = "enim";
                max = 24614L;
                maxlatitude = 279.55;
                maxlongitude = 6197.72;
                minlatitude = 293.46;
                minlongitude = 2712.16;
                name = "Roger Boehm V";
                skip = 172878L;
                text = "perferendis";
                todate = OffsetDateTime.parse("2022-06-10T22:44:59.336Z");
            }};            

            SearchTypeFredSeriesResponse res = sdk.typeTypeFredSeries.searchTypeFredSeries(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
