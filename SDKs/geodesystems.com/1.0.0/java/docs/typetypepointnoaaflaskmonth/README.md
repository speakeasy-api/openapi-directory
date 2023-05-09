# typeTypePointNoaaFlaskMonth

## Overview

Search API for 'NOAA Flask Month Measurements' entry type

### Available Operations

* [searchTypePointNoaaFlaskMonth](#searchtypepointnoaaflaskmonth) - Search API for 'NOAA Flask Month Measurements' entry type

## searchTypePointNoaaFlaskMonth

API to search for entries of type NOAA Flask Month Measurements

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointNoaaFlaskMonthRequest;
import org.openapis.openapi.models.operations.SearchTypePointNoaaFlaskMonthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointNoaaFlaskMonthRequest req = new SearchTypePointNoaaFlaskMonthRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-27T23:58:25.067Z");
                changedateTo = OffsetDateTime.parse("2022-07-28T19:48:31.120Z");
                createdateFrom = OffsetDateTime.parse("2020-10-23T21:06:52.870Z");
                createdateTo = OffsetDateTime.parse("2022-10-29T19:08:41.456Z");
                description = "dignissimos";
                filesuffix = "veritatis";
                fromdate = OffsetDateTime.parse("2021-06-22T00:29:52.181Z");
                group = "ab";
                max = 406575L;
                maxlatitude = 2198.04;
                maxlongitude = 8847.04;
                minlatitude = 1493.76;
                minlongitude = 4641.11;
                name = "Horace Donnelly IV";
                searchTypePointNoaaFlaskMonthLabIdNumber = "aliquam";
                searchTypePointNoaaFlaskMonthMeasurementGroup = "vero";
                searchTypePointNoaaFlaskMonthParameter = "dolorum";
                searchTypePointNoaaFlaskMonthProject = "omnis";
                searchTypePointNoaaFlaskMonthSiteId = "occaecati";
                skip = 164044L;
                text = "veniam";
                todate = OffsetDateTime.parse("2022-03-02T18:43:29.848Z");
            }};            

            SearchTypePointNoaaFlaskMonthResponse res = sdk.typeTypePointNoaaFlaskMonth.searchTypePointNoaaFlaskMonth(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
