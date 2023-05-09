# typeTypeNitf

## Overview

Search API for 'NITF File' entry type

### Available Operations

* [searchTypeNitf](#searchtypenitf) - Search API for 'NITF File' entry type

## searchTypeNitf

API to search for entries of type NITF File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeNitfRequest;
import org.openapis.openapi.models.operations.SearchTypeNitfResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeNitfRequest req = new SearchTypeNitfRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-09-25T00:43:44.722Z");
                changedateTo = OffsetDateTime.parse("2022-11-28T17:38:41.350Z");
                createdateFrom = OffsetDateTime.parse("2022-11-28T01:30:23.895Z");
                createdateTo = OffsetDateTime.parse("2020-04-15T19:19:31.225Z");
                description = "sunt";
                filesuffix = "in";
                fromdate = OffsetDateTime.parse("2022-11-07T00:41:11.481Z");
                group = "voluptatem";
                max = 593830L;
                maxlatitude = 6224.85;
                maxlongitude = 5376.23;
                minlatitude = 3151.9;
                minlongitude = 1984.06;
                name = "Stuart Witting";
                skip = 238371L;
                text = "pariatur";
                todate = OffsetDateTime.parse("2022-04-09T18:48:48.082Z");
            }};            

            SearchTypeNitfResponse res = sdk.typeTypeNitf.searchTypeNitf(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
