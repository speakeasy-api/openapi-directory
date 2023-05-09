# typeLatlonimage

## Overview

Search API for 'Lat-Lon Image' entry type

### Available Operations

* [searchLatlonimage](#searchlatlonimage) - Search API for 'Lat-Lon Image' entry type

## searchLatlonimage

API to search for entries of type Lat-Lon Image

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchLatlonimageRequest;
import org.openapis.openapi.models.operations.SearchLatlonimageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchLatlonimageRequest req = new SearchLatlonimageRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-05-03T18:23:14.348Z");
                changedateTo = OffsetDateTime.parse("2022-04-26T10:33:22.468Z");
                createdateFrom = OffsetDateTime.parse("2022-11-24T14:34:13.159Z");
                createdateTo = OffsetDateTime.parse("2022-08-09T02:03:12.598Z");
                description = "magni";
                filesuffix = "incidunt";
                fromdate = OffsetDateTime.parse("2022-06-30T04:26:09.166Z");
                group = "dolor";
                max = 349898L;
                maxlatitude = 7097.01;
                maxlongitude = 7064.11;
                minlatitude = 7696.34;
                minlongitude = 245.77;
                name = "Molly Cronin";
                skip = 268709L;
                text = "veniam";
                todate = OffsetDateTime.parse("2020-03-16T04:29:27.854Z");
            }};            

            SearchLatlonimageResponse res = sdk.typeLatlonimage.searchLatlonimage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
