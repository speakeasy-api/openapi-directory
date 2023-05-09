# typeGridaggregation

## Overview

Search API for 'Grid Aggregation' entry type

### Available Operations

* [searchGridaggregation](#searchgridaggregation) - Search API for 'Grid Aggregation' entry type

## searchGridaggregation

API to search for entries of type Grid Aggregation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGridaggregationRequest;
import org.openapis.openapi.models.operations.SearchGridaggregationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGridaggregationRequest req = new SearchGridaggregationRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-19T18:24:49.544Z");
                changedateTo = OffsetDateTime.parse("2022-01-26T17:47:50.539Z");
                createdateFrom = OffsetDateTime.parse("2022-08-19T16:26:34.311Z");
                createdateTo = OffsetDateTime.parse("2022-01-14T14:18:21.018Z");
                description = "quas";
                filesuffix = "et";
                fromdate = OffsetDateTime.parse("2022-07-17T15:04:57.362Z");
                group = "autem";
                max = 685415L;
                maxlatitude = 53.1;
                maxlongitude = 5264.13;
                minlatitude = 113.55;
                minlongitude = 5500.55;
                name = "Mr. Marcos Boehm";
                skip = 965517L;
                text = "mollitia";
                todate = OffsetDateTime.parse("2021-01-29T04:57:19.341Z");
            }};            

            SearchGridaggregationResponse res = sdk.typeGridaggregation.searchGridaggregation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
