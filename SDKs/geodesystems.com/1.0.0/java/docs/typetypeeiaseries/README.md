# typeTypeEiaSeries

## Overview

Search API for 'EIA Series' entry type

### Available Operations

* [searchTypeEiaSeries](#searchtypeeiaseries) - Search API for 'EIA Series' entry type

## searchTypeEiaSeries

API to search for entries of type EIA Series

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeEiaSeriesRequest;
import org.openapis.openapi.models.operations.SearchTypeEiaSeriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeEiaSeriesRequest req = new SearchTypeEiaSeriesRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-11-16T10:46:58.362Z");
                changedateTo = OffsetDateTime.parse("2021-11-03T10:03:07.115Z");
                createdateFrom = OffsetDateTime.parse("2021-03-16T20:58:04.785Z");
                createdateTo = OffsetDateTime.parse("2022-08-01T02:30:07.830Z");
                description = "optio";
                filesuffix = "eveniet";
                fromdate = OffsetDateTime.parse("2021-06-28T15:17:19.917Z");
                group = "a";
                max = 620842L;
                maxlatitude = 9590;
                maxlongitude = 8329.89;
                minlatitude = 7063.71;
                minlongitude = 5645.97;
                name = "Catherine Bashirian";
                skip = 245849L;
                text = "tempore";
                todate = OffsetDateTime.parse("2021-02-13T08:00:41.549Z");
            }};            

            SearchTypeEiaSeriesResponse res = sdk.typeTypeEiaSeries.searchTypeEiaSeries(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
