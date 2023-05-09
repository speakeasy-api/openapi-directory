# typeTypeUsgsGauge

## Overview

Search API for 'USGS Stream Gauge' entry type

### Available Operations

* [searchTypeUsgsGauge](#searchtypeusgsgauge) - Search API for 'USGS Stream Gauge' entry type

## searchTypeUsgsGauge

API to search for entries of type USGS Stream Gauge

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeUsgsGaugeRequest;
import org.openapis.openapi.models.operations.SearchTypeUsgsGaugeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeUsgsGaugeRequest req = new SearchTypeUsgsGaugeRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-09T13:36:42.900Z");
                changedateTo = OffsetDateTime.parse("2022-09-11T13:45:47.122Z");
                createdateFrom = OffsetDateTime.parse("2022-02-20T23:02:38.907Z");
                createdateTo = OffsetDateTime.parse("2022-03-13T17:18:01.984Z");
                description = "ratione";
                filesuffix = "soluta";
                fromdate = OffsetDateTime.parse("2022-12-15T02:47:25.293Z");
                group = "laudantium";
                max = 26990L;
                maxlatitude = 5940.2;
                maxlongitude = 3114.65;
                minlatitude = 2010.56;
                minlongitude = 4744.53;
                name = "Laverne Bednar II";
                skip = 355451L;
                text = "excepturi";
                todate = OffsetDateTime.parse("2021-03-04T06:33:21.309Z");
            }};            

            SearchTypeUsgsGaugeResponse res = sdk.typeTypeUsgsGauge.searchTypeUsgsGauge(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
