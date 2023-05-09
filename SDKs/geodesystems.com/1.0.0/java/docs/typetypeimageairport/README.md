# typeTypeImageAirport

## Overview

Search API for 'Airport Image' entry type

### Available Operations

* [searchTypeImageAirport](#searchtypeimageairport) - Search API for 'Airport Image' entry type

## searchTypeImageAirport

API to search for entries of type Airport Image

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeImageAirportRequest;
import org.openapis.openapi.models.operations.SearchTypeImageAirportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeImageAirportRequest req = new SearchTypeImageAirportRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-04-04T17:35:50.016Z");
                changedateTo = OffsetDateTime.parse("2022-03-10T01:01:28.057Z");
                createdateFrom = OffsetDateTime.parse("2021-07-03T23:45:27.582Z");
                createdateTo = OffsetDateTime.parse("2022-05-30T04:54:36.719Z");
                description = "voluptate";
                filesuffix = "tempore";
                fromdate = OffsetDateTime.parse("2022-02-26T01:18:24.315Z");
                group = "mollitia";
                max = 58176L;
                maxlatitude = 5502.16;
                maxlongitude = 7748.04;
                minlatitude = 3538.06;
                minlongitude = 4475.03;
                name = "Alfonso Keeling";
                skip = 539502L;
                text = "similique";
                todate = OffsetDateTime.parse("2022-11-25T19:21:08.744Z");
            }};            

            SearchTypeImageAirportResponse res = sdk.typeTypeImageAirport.searchTypeImageAirport(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
