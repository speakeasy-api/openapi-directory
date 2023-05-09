# typeTypeBizStockseries

## Overview

Search API for 'Stock Ticker Data' entry type

### Available Operations

* [searchTypeBizStockseries](#searchtypebizstockseries) - Search API for 'Stock Ticker Data' entry type

## searchTypeBizStockseries

API to search for entries of type Stock Ticker Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeBizStockseriesRequest;
import org.openapis.openapi.models.operations.SearchTypeBizStockseriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeBizStockseriesRequest req = new SearchTypeBizStockseriesRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-08-28T10:28:14.400Z");
                changedateTo = OffsetDateTime.parse("2022-01-19T20:55:13.479Z");
                createdateFrom = OffsetDateTime.parse("2022-09-16T05:04:45.088Z");
                createdateTo = OffsetDateTime.parse("2022-10-03T05:07:19.458Z");
                description = "adipisci";
                filesuffix = "cupiditate";
                fromdate = OffsetDateTime.parse("2022-06-26T15:12:35.709Z");
                group = "fugiat";
                max = 473386L;
                maxlatitude = 5568.98;
                maxlongitude = 8341.77;
                minlatitude = 9065.24;
                minlongitude = 2304;
                name = "Cecil Tromp";
                skip = 545629L;
                text = "cupiditate";
                todate = OffsetDateTime.parse("2021-12-08T15:04:06.780Z");
            }};            

            SearchTypeBizStockseriesResponse res = sdk.typeTypeBizStockseries.searchTypeBizStockseries(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
