# typeTypePointGcnet

## Overview

Search API for 'GC-Net Point Data' entry type

### Available Operations

* [searchTypePointGcnet](#searchtypepointgcnet) - Search API for 'GC-Net Point Data' entry type

## searchTypePointGcnet

API to search for entries of type GC-Net Point Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointGcnetRequest;
import org.openapis.openapi.models.operations.SearchTypePointGcnetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointGcnetRequest req = new SearchTypePointGcnetRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-17T01:16:10.198Z");
                changedateTo = OffsetDateTime.parse("2021-04-29T18:28:44.826Z");
                createdateFrom = OffsetDateTime.parse("2020-06-16T12:05:14.872Z");
                createdateTo = OffsetDateTime.parse("2022-06-29T20:26:41.809Z");
                description = "perferendis";
                filesuffix = "soluta";
                fromdate = OffsetDateTime.parse("2022-01-20T21:15:59.889Z");
                group = "nesciunt";
                max = 559715L;
                maxlatitude = 1218.79;
                maxlongitude = 461.39;
                minlatitude = 9317.77;
                minlongitude = 3103.8;
                name = "Santiago Glover";
                skip = 453562L;
                text = "magni";
                todate = OffsetDateTime.parse("2022-01-31T21:21:45.542Z");
            }};            

            SearchTypePointGcnetResponse res = sdk.typeTypePointGcnet.searchTypePointGcnet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
