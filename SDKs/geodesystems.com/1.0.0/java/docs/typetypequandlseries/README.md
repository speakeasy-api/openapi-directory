# typeTypeQuandlSeries

## Overview

Search API for 'QUANDL Series' entry type

### Available Operations

* [searchTypeQuandlSeries](#searchtypequandlseries) - Search API for 'QUANDL Series' entry type

## searchTypeQuandlSeries

API to search for entries of type QUANDL Series

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeQuandlSeriesRequest;
import org.openapis.openapi.models.operations.SearchTypeQuandlSeriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeQuandlSeriesRequest req = new SearchTypeQuandlSeriesRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-06-05T22:27:28.341Z");
                changedateTo = OffsetDateTime.parse("2022-06-22T03:39:05.204Z");
                createdateFrom = OffsetDateTime.parse("2022-12-24T20:43:14.437Z");
                createdateTo = OffsetDateTime.parse("2021-06-29T17:11:28.894Z");
                description = "impedit";
                filesuffix = "officia";
                fromdate = OffsetDateTime.parse("2022-07-19T09:06:20.044Z");
                group = "mollitia";
                max = 918967L;
                maxlatitude = 7354.1;
                maxlongitude = 4526.05;
                minlatitude = 7378.82;
                minlongitude = 4611.03;
                name = "Kathryn Bradtke";
                skip = 168512L;
                text = "quae";
                todate = OffsetDateTime.parse("2022-08-14T05:00:36.286Z");
            }};            

            SearchTypeQuandlSeriesResponse res = sdk.typeTypeQuandlSeries.searchTypeQuandlSeries(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
