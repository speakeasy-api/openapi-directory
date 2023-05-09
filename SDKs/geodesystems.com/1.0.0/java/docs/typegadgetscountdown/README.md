# typeGadgetsCountdown

## Overview

Search API for 'Countdown' entry type

### Available Operations

* [searchGadgetsCountdown](#searchgadgetscountdown) - Search API for 'Countdown' entry type

## searchGadgetsCountdown

API to search for entries of type Countdown

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGadgetsCountdownRequest;
import org.openapis.openapi.models.operations.SearchGadgetsCountdownResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGadgetsCountdownRequest req = new SearchGadgetsCountdownRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-19T15:08:58.907Z");
                changedateTo = OffsetDateTime.parse("2021-02-01T13:09:02.595Z");
                createdateFrom = OffsetDateTime.parse("2022-03-29T07:53:10.726Z");
                createdateTo = OffsetDateTime.parse("2021-12-03T18:34:18.310Z");
                description = "qui";
                filesuffix = "expedita";
                fromdate = OffsetDateTime.parse("2021-10-29T05:11:03.916Z");
                group = "minima";
                max = 809594L;
                maxlatitude = 3165.42;
                maxlongitude = 2040.72;
                minlatitude = 4468.77;
                minlongitude = 7963.97;
                name = "Emma Herzog";
                skip = 978173L;
                text = "tempore";
                todate = OffsetDateTime.parse("2022-04-10T10:41:17.662Z");
            }};            

            SearchGadgetsCountdownResponse res = sdk.typeGadgetsCountdown.searchGadgetsCountdown(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
