# typeWeblog

## Overview

Search API for 'Weblog' entry type

### Available Operations

* [searchWeblog](#searchweblog) - Search API for 'Weblog' entry type

## searchWeblog

API to search for entries of type Weblog

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchWeblogRequest;
import org.openapis.openapi.models.operations.SearchWeblogResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchWeblogRequest req = new SearchWeblogRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-03-30T07:25:29.087Z");
                changedateTo = OffsetDateTime.parse("2022-10-17T11:20:49.691Z");
                createdateFrom = OffsetDateTime.parse("2022-04-03T15:00:45.473Z");
                createdateTo = OffsetDateTime.parse("2022-08-17T20:43:04.085Z");
                description = "commodi";
                filesuffix = "a";
                fromdate = OffsetDateTime.parse("2022-05-30T00:06:44.319Z");
                group = "eum";
                max = 526470L;
                maxlatitude = 7129.97;
                maxlongitude = 6562.72;
                minlatitude = 5661.6;
                minlongitude = 1706.72;
                name = "Katie Raynor";
                skip = 300155L;
                text = "dicta";
                todate = OffsetDateTime.parse("2022-06-09T21:39:19.685Z");
            }};            

            SearchWeblogResponse res = sdk.typeWeblog.searchWeblog(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
