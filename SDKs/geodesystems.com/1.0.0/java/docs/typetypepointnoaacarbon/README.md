# typeTypePointNoaaCarbon

## Overview

Search API for 'NOAA Carbon Measurements' entry type

### Available Operations

* [searchTypePointNoaaCarbon](#searchtypepointnoaacarbon) - Search API for 'NOAA Carbon Measurements' entry type

## searchTypePointNoaaCarbon

API to search for entries of type NOAA Carbon Measurements

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointNoaaCarbonRequest;
import org.openapis.openapi.models.operations.SearchTypePointNoaaCarbonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointNoaaCarbonRequest req = new SearchTypePointNoaaCarbonRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-04-30T03:55:16.926Z");
                changedateTo = OffsetDateTime.parse("2022-07-17T07:41:52.559Z");
                createdateFrom = OffsetDateTime.parse("2021-05-24T06:04:24.357Z");
                createdateTo = OffsetDateTime.parse("2022-02-26T13:41:14.544Z");
                description = "facere";
                filesuffix = "pariatur";
                fromdate = OffsetDateTime.parse("2022-06-02T20:48:09.142Z");
                group = "commodi";
                max = 649511L;
                maxlatitude = 6296.18;
                maxlongitude = 964.95;
                minlatitude = 7785.85;
                minlongitude = 9744.29;
                name = "Angel Schumm";
                searchTypePointNoaaCarbonLabIdNumber = "blanditiis";
                searchTypePointNoaaCarbonMeasurementGroup = "assumenda";
                searchTypePointNoaaCarbonParameter = "culpa";
                searchTypePointNoaaCarbonProject = "ipsa";
                searchTypePointNoaaCarbonSiteId = "inventore";
                skip = 200170L;
                text = "et";
                todate = OffsetDateTime.parse("2022-11-05T05:50:08.633Z");
            }};            

            SearchTypePointNoaaCarbonResponse res = sdk.typeTypePointNoaaCarbon.searchTypePointNoaaCarbon(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
