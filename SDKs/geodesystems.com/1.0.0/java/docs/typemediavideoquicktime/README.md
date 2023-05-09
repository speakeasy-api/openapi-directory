# typeMediaVideoQuicktime

## Overview

Search API for 'Quicktime Video' entry type

### Available Operations

* [searchMediaVideoQuicktime](#searchmediavideoquicktime) - Search API for 'Quicktime Video' entry type

## searchMediaVideoQuicktime

API to search for entries of type Quicktime Video

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchMediaVideoQuicktimeRequest;
import org.openapis.openapi.models.operations.SearchMediaVideoQuicktimeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchMediaVideoQuicktimeRequest req = new SearchMediaVideoQuicktimeRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-05-09T02:28:59.420Z");
                changedateTo = OffsetDateTime.parse("2020-12-09T02:09:11.734Z");
                createdateFrom = OffsetDateTime.parse("2022-11-15T08:03:11.108Z");
                createdateTo = OffsetDateTime.parse("2021-11-26T01:21:46.726Z");
                description = "eaque";
                filesuffix = "deserunt";
                fromdate = OffsetDateTime.parse("2022-06-06T19:05:26.735Z");
                group = "magni";
                max = 273677L;
                maxlatitude = 8219.04;
                maxlongitude = 2208.24;
                minlatitude = 7005.29;
                minlongitude = 1535.82;
                name = "Earnest Wisoky";
                skip = 550338L;
                text = "asperiores";
                todate = OffsetDateTime.parse("2021-10-09T05:13:53.393Z");
            }};            

            SearchMediaVideoQuicktimeResponse res = sdk.typeMediaVideoQuicktime.searchMediaVideoQuicktime(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
