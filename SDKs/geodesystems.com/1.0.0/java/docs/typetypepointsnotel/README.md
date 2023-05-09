# typeTypePointSnotel

## Overview

Search API for 'SNOTEL Snow Data' entry type

### Available Operations

* [searchTypePointSnotel](#searchtypepointsnotel) - Search API for 'SNOTEL Snow Data' entry type

## searchTypePointSnotel

API to search for entries of type SNOTEL Snow Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointSnotelRequest;
import org.openapis.openapi.models.operations.SearchTypePointSnotelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointSnotelRequest req = new SearchTypePointSnotelRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-18T13:15:24.930Z");
                changedateTo = OffsetDateTime.parse("2022-10-19T00:51:02.961Z");
                createdateFrom = OffsetDateTime.parse("2022-06-08T21:32:08.730Z");
                createdateTo = OffsetDateTime.parse("2022-09-27T08:30:43.076Z");
                description = "totam";
                filesuffix = "ipsam";
                fromdate = OffsetDateTime.parse("2022-10-21T21:44:30.899Z");
                group = "optio";
                max = 728416L;
                maxlatitude = 672.29;
                maxlongitude = 32.41;
                minlatitude = 355.38;
                minlongitude = 401.5;
                name = "Kelli Treutel";
                searchTypePointSnotelHucId = "provident";
                searchTypePointSnotelHucName = "dolores";
                searchTypePointSnotelNetwork = "illo";
                searchTypePointSnotelSiteId = "recusandae";
                searchTypePointSnotelSiteNumber = "quod";
                searchTypePointSnotelState = "magni";
                skip = 26838L;
                text = "voluptas";
                todate = OffsetDateTime.parse("2022-04-09T21:49:26.699Z");
            }};            

            SearchTypePointSnotelResponse res = sdk.typeTypePointSnotel.searchTypePointSnotel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
