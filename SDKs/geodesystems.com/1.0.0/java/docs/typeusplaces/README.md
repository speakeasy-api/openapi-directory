# typeUsPlaces

## Overview

Search API for 'US Places' entry type

### Available Operations

* [searchUsPlaces](#searchusplaces) - Search API for 'US Places' entry type

## searchUsPlaces

API to search for entries of type US Places

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchUsPlacesRequest;
import org.openapis.openapi.models.operations.SearchUsPlacesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchUsPlacesRequest req = new SearchUsPlacesRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-04-19T11:04:28.882Z");
                changedateTo = OffsetDateTime.parse("2022-03-21T16:06:20.452Z");
                createdateFrom = OffsetDateTime.parse("2021-02-15T04:54:44.081Z");
                createdateTo = OffsetDateTime.parse("2022-03-24T17:01:43.460Z");
                description = "eligendi";
                filesuffix = "veniam";
                fromdate = OffsetDateTime.parse("2022-10-08T08:25:57.966Z");
                group = "repellat";
                max = 377691L;
                maxlatitude = 8014.05;
                maxlongitude = 2030.87;
                minlatitude = 6126.97;
                minlongitude = 7195.75;
                name = "Kristopher Abernathy";
                searchDbUsPlacesCountyName = "qui";
                searchDbUsPlacesElevInFt = 5936.22;
                searchDbUsPlacesFeatureClass = "accusantium";
                searchDbUsPlacesFeatureName = "voluptatibus";
                searchDbUsPlacesLocation = "occaecati";
                searchDbUsPlacesStateAlpha = "nemo";
                skip = 462673L;
                text = "reiciendis";
                todate = OffsetDateTime.parse("2022-06-26T19:47:17.716Z");
            }};            

            SearchUsPlacesResponse res = sdk.typeUsPlaces.searchUsPlaces(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
