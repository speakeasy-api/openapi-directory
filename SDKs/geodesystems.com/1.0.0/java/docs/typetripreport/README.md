# typeTripReport

## Overview

Search API for 'Trip Report' entry type

### Available Operations

* [searchTripReport](#searchtripreport) - Search API for 'Trip Report' entry type

## searchTripReport

API to search for entries of type Trip Report

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTripReportRequest;
import org.openapis.openapi.models.operations.SearchTripReportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTripReportRequest req = new SearchTripReportRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-14T00:15:39.097Z");
                changedateTo = OffsetDateTime.parse("2022-01-25T06:55:35.087Z");
                createdateFrom = OffsetDateTime.parse("2022-03-30T03:00:00.239Z");
                createdateTo = OffsetDateTime.parse("2020-09-23T04:22:56.614Z");
                description = "sapiente";
                filesuffix = "alias";
                fromdate = OffsetDateTime.parse("2022-03-28T14:34:12.839Z");
                group = "aspernatur";
                max = 749101L;
                maxlatitude = 4679.47;
                maxlongitude = 5323.36;
                minlatitude = 9682.86;
                minlongitude = 1149.52;
                name = "Sue Cronin";
                skip = 568162L;
                text = "corrupti";
                todate = OffsetDateTime.parse("2022-12-16T03:47:02.612Z");
            }};            

            SearchTripReportResponse res = sdk.typeTripReport.searchTripReport(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
