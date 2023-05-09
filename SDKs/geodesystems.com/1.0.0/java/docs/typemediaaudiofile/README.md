# typeMediaAudiofile

## Overview

Search API for 'Audio File' entry type

### Available Operations

* [searchMediaAudiofile](#searchmediaaudiofile) - Search API for 'Audio File' entry type

## searchMediaAudiofile

API to search for entries of type Audio File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchMediaAudiofileRequest;
import org.openapis.openapi.models.operations.SearchMediaAudiofileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchMediaAudiofileRequest req = new SearchMediaAudiofileRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-10-02T01:50:45.376Z");
                changedateTo = OffsetDateTime.parse("2022-12-07T00:00:40.742Z");
                createdateFrom = OffsetDateTime.parse("2022-03-16T15:01:20.520Z");
                createdateTo = OffsetDateTime.parse("2022-02-03T07:29:42.207Z");
                description = "porro";
                filesuffix = "tempore";
                fromdate = OffsetDateTime.parse("2022-06-20T20:53:51.556Z");
                group = "voluptates";
                max = 145435L;
                maxlatitude = 2593.77;
                maxlongitude = 1940.58;
                minlatitude = 7581.94;
                minlongitude = 9928.87;
                name = "Vickie Marvin";
                skip = 658604L;
                text = "maiores";
                todate = OffsetDateTime.parse("2020-06-01T13:23:22.069Z");
            }};            

            SearchMediaAudiofileResponse res = sdk.typeMediaAudiofile.searchMediaAudiofile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
