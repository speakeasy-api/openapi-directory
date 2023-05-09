# typeProjectGpsRaw

## Overview

Search API for 'Raw GPS File' entry type

### Available Operations

* [searchProjectGpsRaw](#searchprojectgpsraw) - Search API for 'Raw GPS File' entry type

## searchProjectGpsRaw

API to search for entries of type Raw GPS File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectGpsRawRequest;
import org.openapis.openapi.models.operations.SearchProjectGpsRawResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectGpsRawRequest req = new SearchProjectGpsRawRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-01T23:54:30.571Z");
                changedateTo = OffsetDateTime.parse("2022-01-04T16:18:44.200Z");
                createdateFrom = OffsetDateTime.parse("2022-05-30T05:35:32.331Z");
                createdateTo = OffsetDateTime.parse("2020-03-09T18:54:18.793Z");
                description = "doloremque";
                filesuffix = "ipsum";
                fromdate = OffsetDateTime.parse("2022-12-16T01:03:01.411Z");
                group = "tempora";
                max = 595986L;
                maxlatitude = 4620.97;
                maxlongitude = 5410.09;
                minlatitude = 6383.63;
                minlongitude = 4064.93;
                name = "Dr. Elsa Pacocha";
                skip = 185313L;
                text = "accusantium";
                todate = OffsetDateTime.parse("2022-06-18T06:50:48.884Z");
            }};            

            SearchProjectGpsRawResponse res = sdk.typeProjectGpsRaw.searchProjectGpsRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
