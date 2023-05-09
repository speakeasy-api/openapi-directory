# typeTypeExtremes

## Overview

Search API for 'NOAA Extremes Data' entry type

### Available Operations

* [searchTypeExtremes](#searchtypeextremes) - Search API for 'NOAA Extremes Data' entry type

## searchTypeExtremes

API to search for entries of type NOAA Extremes Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeExtremesRequest;
import org.openapis.openapi.models.operations.SearchTypeExtremesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeExtremesRequest req = new SearchTypeExtremesRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-11-29T14:05:24.229Z");
                changedateTo = OffsetDateTime.parse("2021-07-19T00:41:21.069Z");
                createdateFrom = OffsetDateTime.parse("2022-04-26T15:14:21.697Z");
                createdateTo = OffsetDateTime.parse("2020-07-15T17:52:33.252Z");
                description = "tenetur";
                filesuffix = "sed";
                fromdate = OffsetDateTime.parse("2021-06-29T12:20:12.457Z");
                group = "id";
                max = 719077L;
                maxlatitude = 3585.58;
                maxlongitude = 5595.71;
                minlatitude = 7453.04;
                minlongitude = 5846.45;
                name = "Henry Schaden";
                searchTypeExtremesRegion = "suscipit";
                searchTypeExtremesVariable = "facere";
                skip = 867581L;
                text = "nam";
                todate = OffsetDateTime.parse("2022-06-15T17:31:08.491Z");
            }};            

            SearchTypeExtremesResponse res = sdk.typeTypeExtremes.searchTypeExtremes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
