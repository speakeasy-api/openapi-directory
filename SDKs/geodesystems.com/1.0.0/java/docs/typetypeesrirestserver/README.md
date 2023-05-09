# typeTypeEsriRestserver

## Overview

Search API for 'ESRI Web Server' entry type

### Available Operations

* [searchTypeEsriRestserver](#searchtypeesrirestserver) - Search API for 'ESRI Web Server' entry type

## searchTypeEsriRestserver

API to search for entries of type ESRI Web Server

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeEsriRestserverRequest;
import org.openapis.openapi.models.operations.SearchTypeEsriRestserverResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeEsriRestserverRequest req = new SearchTypeEsriRestserverRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-20T22:40:23.758Z");
                changedateTo = OffsetDateTime.parse("2022-03-09T22:17:56.070Z");
                createdateFrom = OffsetDateTime.parse("2022-12-15T18:05:43.333Z");
                createdateTo = OffsetDateTime.parse("2022-10-02T12:55:59.519Z");
                description = "beatae";
                filesuffix = "sequi";
                fromdate = OffsetDateTime.parse("2022-07-27T22:00:03.556Z");
                group = "debitis";
                max = 339118L;
                maxlatitude = 546.77;
                maxlongitude = 2774.18;
                minlatitude = 2814.36;
                minlongitude = 9622.8;
                name = "Samantha Wolff";
                skip = 181041L;
                text = "assumenda";
                todate = OffsetDateTime.parse("2022-02-27T04:10:09.693Z");
            }};            

            SearchTypeEsriRestserverResponse res = sdk.typeTypeEsriRestserver.searchTypeEsriRestserver(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
