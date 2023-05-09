# typeMapGooglemap

## Overview

Search API for 'Google Map URL' entry type

### Available Operations

* [searchMapGooglemap](#searchmapgooglemap) - Search API for 'Google Map URL' entry type

## searchMapGooglemap

API to search for entries of type Google Map URL

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchMapGooglemapRequest;
import org.openapis.openapi.models.operations.SearchMapGooglemapResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchMapGooglemapRequest req = new SearchMapGooglemapRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-05-15T10:08:44.059Z");
                changedateTo = OffsetDateTime.parse("2022-07-16T03:46:30.247Z");
                createdateFrom = OffsetDateTime.parse("2022-05-10T02:09:22.586Z");
                createdateTo = OffsetDateTime.parse("2021-03-04T13:22:29.959Z");
                description = "sed";
                filesuffix = "nesciunt";
                fromdate = OffsetDateTime.parse("2021-12-27T01:32:30.329Z");
                group = "cupiditate";
                max = 303253L;
                maxlatitude = 5692.87;
                maxlongitude = 9804.1;
                minlatitude = 5120.81;
                minlongitude = 2439.04;
                name = "Miss Vincent Hickle";
                skip = 555294L;
                text = "molestiae";
                todate = OffsetDateTime.parse("2022-01-05T00:04:42.693Z");
            }};            

            SearchMapGooglemapResponse res = sdk.typeMapGooglemap.searchMapGooglemap(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
