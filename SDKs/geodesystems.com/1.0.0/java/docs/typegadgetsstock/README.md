# typeGadgetsStock

## Overview

Search API for 'Stock Ticker' entry type

### Available Operations

* [searchGadgetsStock](#searchgadgetsstock) - Search API for 'Stock Ticker' entry type

## searchGadgetsStock

API to search for entries of type Stock Ticker

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGadgetsStockRequest;
import org.openapis.openapi.models.operations.SearchGadgetsStockResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGadgetsStockRequest req = new SearchGadgetsStockRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-09-17T04:21:28.778Z");
                changedateTo = OffsetDateTime.parse("2021-11-05T06:31:50.944Z");
                createdateFrom = OffsetDateTime.parse("2022-03-22T14:23:17.198Z");
                createdateTo = OffsetDateTime.parse("2022-03-16T14:37:42.020Z");
                description = "fuga";
                filesuffix = "nostrum";
                fromdate = OffsetDateTime.parse("2021-06-17T06:18:33.339Z");
                group = "delectus";
                max = 735894L;
                maxlatitude = 8786.01;
                maxlongitude = 1415.06;
                minlatitude = 9974.37;
                minlongitude = 8659.46;
                name = "Bessie Bayer";
                skip = 448369L;
                text = "ducimus";
                todate = OffsetDateTime.parse("2022-08-28T07:07:51.380Z");
            }};            

            SearchGadgetsStockResponse res = sdk.typeGadgetsStock.searchGadgetsStock(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
