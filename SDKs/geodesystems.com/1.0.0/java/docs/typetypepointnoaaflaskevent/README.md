# typeTypePointNoaaFlaskEvent

## Overview

Search API for 'NOAA Flask Event Measurements' entry type

### Available Operations

* [searchTypePointNoaaFlaskEvent](#searchtypepointnoaaflaskevent) - Search API for 'NOAA Flask Event Measurements' entry type

## searchTypePointNoaaFlaskEvent

API to search for entries of type NOAA Flask Event Measurements

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointNoaaFlaskEventRequest;
import org.openapis.openapi.models.operations.SearchTypePointNoaaFlaskEventResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointNoaaFlaskEventRequest req = new SearchTypePointNoaaFlaskEventRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-25T19:35:03.327Z");
                changedateTo = OffsetDateTime.parse("2022-03-13T00:34:09.899Z");
                createdateFrom = OffsetDateTime.parse("2022-08-09T04:19:22.805Z");
                createdateTo = OffsetDateTime.parse("2022-09-09T08:21:03.844Z");
                description = "enim";
                filesuffix = "cumque";
                fromdate = OffsetDateTime.parse("2022-02-26T18:20:37.660Z");
                group = "blanditiis";
                max = 93299L;
                maxlatitude = 9636;
                maxlongitude = 1287.44;
                minlatitude = 6117.83;
                minlongitude = 182.85;
                name = "Judy Will";
                searchTypePointNoaaFlaskEventLabIdNumber = "iste";
                searchTypePointNoaaFlaskEventMeasurementGroup = "quidem";
                searchTypePointNoaaFlaskEventParameter = "iusto";
                searchTypePointNoaaFlaskEventProject = "culpa";
                searchTypePointNoaaFlaskEventSiteId = "reiciendis";
                skip = 952911L;
                text = "consequatur";
                todate = OffsetDateTime.parse("2020-12-19T20:04:09.350Z");
            }};            

            SearchTypePointNoaaFlaskEventResponse res = sdk.typeTypePointNoaaFlaskEvent.searchTypePointNoaaFlaskEvent(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
