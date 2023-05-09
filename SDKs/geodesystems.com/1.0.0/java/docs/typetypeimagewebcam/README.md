# typeTypeImageWebcam

## Overview

Search API for 'Webcam' entry type

### Available Operations

* [searchTypeImageWebcam](#searchtypeimagewebcam) - Search API for 'Webcam' entry type

## searchTypeImageWebcam

API to search for entries of type Webcam

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeImageWebcamRequest;
import org.openapis.openapi.models.operations.SearchTypeImageWebcamResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeImageWebcamRequest req = new SearchTypeImageWebcamRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-02-13T06:45:24.040Z");
                changedateTo = OffsetDateTime.parse("2022-06-08T09:49:01.076Z");
                createdateFrom = OffsetDateTime.parse("2021-08-25T17:55:29.855Z");
                createdateTo = OffsetDateTime.parse("2020-03-26T17:01:48.086Z");
                description = "minus";
                filesuffix = "officia";
                fromdate = OffsetDateTime.parse("2022-12-05T19:36:19.333Z");
                group = "cupiditate";
                max = 83578L;
                maxlatitude = 3042;
                maxlongitude = 5682.31;
                minlatitude = 5410.46;
                minlongitude = 1166.65;
                name = "Laura Ritchie";
                skip = 978113L;
                text = "delectus";
                todate = OffsetDateTime.parse("2021-09-04T18:39:29.554Z");
            }};            

            SearchTypeImageWebcamResponse res = sdk.typeTypeImageWebcam.searchTypeImageWebcam(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
