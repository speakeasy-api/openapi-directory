# typeTypePointIdv

## Overview

Search API for 'IDV Point File' entry type

### Available Operations

* [searchTypePointIdv](#searchtypepointidv) - Search API for 'IDV Point File' entry type

## searchTypePointIdv

API to search for entries of type IDV Point File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointIdvRequest;
import org.openapis.openapi.models.operations.SearchTypePointIdvResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointIdvRequest req = new SearchTypePointIdvRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-18T05:16:16.243Z");
                changedateTo = OffsetDateTime.parse("2022-03-11T08:21:58.068Z");
                createdateFrom = OffsetDateTime.parse("2021-04-19T05:40:22.978Z");
                createdateTo = OffsetDateTime.parse("2022-11-11T01:56:03.304Z");
                description = "quia";
                filesuffix = "maxime";
                fromdate = OffsetDateTime.parse("2021-01-31T05:34:29.866Z");
                group = "maiores";
                max = 346164L;
                maxlatitude = 4998.74;
                maxlongitude = 2935.12;
                minlatitude = 6152.06;
                minlongitude = 817.75;
                name = "Rex Pollich";
                skip = 135992L;
                text = "vero";
                todate = OffsetDateTime.parse("2022-07-26T22:57:11.830Z");
            }};            

            SearchTypePointIdvResponse res = sdk.typeTypePointIdv.searchTypePointIdv(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
