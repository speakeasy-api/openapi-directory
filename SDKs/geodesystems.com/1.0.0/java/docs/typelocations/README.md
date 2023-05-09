# typeLocations

## Overview

Search API for 'Locations' entry type

### Available Operations

* [searchLocations](#searchlocations) - Search API for 'Locations' entry type

## searchLocations

API to search for entries of type Locations

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchLocationsRequest;
import org.openapis.openapi.models.operations.SearchLocationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchLocationsRequest req = new SearchLocationsRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-01-23T12:52:34.546Z");
                changedateTo = OffsetDateTime.parse("2022-04-08T04:42:37.704Z");
                createdateFrom = OffsetDateTime.parse("2022-07-17T18:03:37.666Z");
                createdateTo = OffsetDateTime.parse("2022-03-30T13:07:06.451Z");
                description = "quasi";
                filesuffix = "neque";
                fromdate = OffsetDateTime.parse("2021-04-20T21:19:50.796Z");
                group = "accusantium";
                max = 185816L;
                maxlatitude = 7712.41;
                maxlongitude = 1047.36;
                minlatitude = 2783.29;
                minlongitude = 1165.58;
                name = "Miss Dana Prohaska";
                searchDbLocationsLocation = "accusantium";
                searchDbLocationsName = "id";
                searchDbLocationsType = "laboriosam";
                skip = 401688L;
                text = "quas";
                todate = OffsetDateTime.parse("2022-08-23T21:35:10.953Z");
            }};            

            SearchLocationsResponse res = sdk.typeLocations.searchLocations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
