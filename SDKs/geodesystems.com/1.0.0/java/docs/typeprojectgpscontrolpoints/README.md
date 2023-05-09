# typeProjectGpsControlpoints

## Overview

Search API for 'Control Points File' entry type

### Available Operations

* [searchProjectGpsControlpoints](#searchprojectgpscontrolpoints) - Search API for 'Control Points File' entry type

## searchProjectGpsControlpoints

API to search for entries of type Control Points File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectGpsControlpointsRequest;
import org.openapis.openapi.models.operations.SearchProjectGpsControlpointsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectGpsControlpointsRequest req = new SearchProjectGpsControlpointsRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-02-13T05:28:14.380Z");
                changedateTo = OffsetDateTime.parse("2022-01-26T21:22:49.757Z");
                createdateFrom = OffsetDateTime.parse("2022-11-03T09:14:28.396Z");
                createdateTo = OffsetDateTime.parse("2022-10-26T16:59:15.324Z");
                description = "consequuntur";
                filesuffix = "vitae";
                fromdate = OffsetDateTime.parse("2022-08-12T20:46:36.515Z");
                group = "amet";
                max = 346608L;
                maxlatitude = 8470.18;
                maxlongitude = 5065.32;
                minlatitude = 6016.26;
                minlongitude = 6294.61;
                name = "Garry Fahey";
                skip = 989089L;
                text = "temporibus";
                todate = OffsetDateTime.parse("2021-12-01T07:51:21.127Z");
            }};            

            SearchProjectGpsControlpointsResponse res = sdk.typeProjectGpsControlpoints.searchProjectGpsControlpoints(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
