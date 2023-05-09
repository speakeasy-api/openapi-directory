# typeMediaImageloop

## Overview

Search API for 'Image Loop' entry type

### Available Operations

* [searchMediaImageloop](#searchmediaimageloop) - Search API for 'Image Loop' entry type

## searchMediaImageloop

API to search for entries of type Image Loop

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchMediaImageloopRequest;
import org.openapis.openapi.models.operations.SearchMediaImageloopResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchMediaImageloopRequest req = new SearchMediaImageloopRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-04-13T20:37:07.767Z");
                changedateTo = OffsetDateTime.parse("2022-02-10T23:44:26.325Z");
                createdateFrom = OffsetDateTime.parse("2022-05-12T21:47:00.714Z");
                createdateTo = OffsetDateTime.parse("2021-09-17T03:41:04.453Z");
                description = "repudiandae";
                filesuffix = "accusantium";
                fromdate = OffsetDateTime.parse("2021-06-17T19:21:18.605Z");
                group = "quasi";
                max = 502106L;
                maxlatitude = 2609.11;
                maxlongitude = 7861.89;
                minlatitude = 1779.29;
                minlongitude = 7480.23;
                name = "Kim Crist";
                skip = 800799L;
                text = "quos";
                todate = OffsetDateTime.parse("2022-07-18T15:42:17.765Z");
            }};            

            SearchMediaImageloopResponse res = sdk.typeMediaImageloop.searchMediaImageloop(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
