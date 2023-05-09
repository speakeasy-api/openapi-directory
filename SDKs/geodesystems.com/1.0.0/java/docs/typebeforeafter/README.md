# typeBeforeafter

## Overview

Search API for 'Before and After Images' entry type

### Available Operations

* [searchBeforeafter](#searchbeforeafter) - Search API for 'Before and After Images' entry type

## searchBeforeafter

API to search for entries of type Before and After Images

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBeforeafterRequest;
import org.openapis.openapi.models.operations.SearchBeforeafterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBeforeafterRequest req = new SearchBeforeafterRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-09-13T17:41:46.141Z");
                changedateTo = OffsetDateTime.parse("2022-07-22T16:55:44.795Z");
                createdateFrom = OffsetDateTime.parse("2022-03-24T20:42:46.563Z");
                createdateTo = OffsetDateTime.parse("2020-04-17T15:42:43.722Z");
                description = "fuga";
                filesuffix = "in";
                fromdate = OffsetDateTime.parse("2022-05-22T05:33:50.280Z");
                group = "iure";
                max = 902349L;
                maxlatitude = 6976.31;
                maxlongitude = 992.8;
                minlatitude = 602.25;
                minlongitude = 9698.1;
                name = "Shaun Osinski";
                skip = 358152L;
                text = "explicabo";
                todate = OffsetDateTime.parse("2022-01-20T14:32:34.011Z");
            }};            

            SearchBeforeafterResponse res = sdk.typeBeforeafter.searchBeforeafter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
