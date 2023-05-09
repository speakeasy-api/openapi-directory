# typeDbCoIndicators

## Overview

Search API for 'Colorado Health Indicators' entry type

### Available Operations

* [searchDbCoIndicators](#searchdbcoindicators) - Search API for 'Colorado Health Indicators' entry type

## searchDbCoIndicators

API to search for entries of type Colorado Health Indicators

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchDbCoIndicatorsRequest;
import org.openapis.openapi.models.operations.SearchDbCoIndicatorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchDbCoIndicatorsRequest req = new SearchDbCoIndicatorsRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-07-29T03:58:31.955Z");
                changedateTo = OffsetDateTime.parse("2022-05-25T18:20:51.968Z");
                createdateFrom = OffsetDateTime.parse("2022-12-06T07:12:03.115Z");
                createdateTo = OffsetDateTime.parse("2021-09-26T01:55:33.743Z");
                description = "nobis";
                filesuffix = "laboriosam";
                fromdate = OffsetDateTime.parse("2022-07-09T08:51:26.881Z");
                group = "voluptatem";
                max = 350207L;
                maxlatitude = 8956.92;
                maxlongitude = 956.19;
                minlatitude = 3925.69;
                minlongitude = 8711.03;
                name = "Carlton Pollich";
                searchDbDbCoIndicatorsDescription = "repudiandae";
                searchDbDbCoIndicatorsDomain = "optio";
                searchDbDbCoIndicatorsGeoName = "occaecati";
                searchDbDbCoIndicatorsIndicatorName = "nemo";
                searchDbDbCoIndicatorsLocation = "voluptate";
                searchDbDbCoIndicatorsMeasure = 5010.63;
                searchDbDbCoIndicatorsSubdomain = "officia";
                skip = 376389L;
                text = "numquam";
                todate = OffsetDateTime.parse("2022-06-13T20:32:47.541Z");
            }};            

            SearchDbCoIndicatorsResponse res = sdk.typeDbCoIndicators.searchDbCoIndicators(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
