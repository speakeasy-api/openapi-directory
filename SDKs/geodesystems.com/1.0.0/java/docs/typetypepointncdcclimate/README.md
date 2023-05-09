# typeTypePointNcdcClimate

## Overview

Search API for 'NC  DC Climate Data' entry type

### Available Operations

* [searchTypePointNcdcClimate](#searchtypepointncdcclimate) - Search API for 'NC  DC Climate Data' entry type

## searchTypePointNcdcClimate

API to search for entries of type NC  DC Climate Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointNcdcClimateRequest;
import org.openapis.openapi.models.operations.SearchTypePointNcdcClimateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointNcdcClimateRequest req = new SearchTypePointNcdcClimateRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-07-15T23:19:42.151Z");
                changedateTo = OffsetDateTime.parse("2022-03-16T05:46:43.018Z");
                createdateFrom = OffsetDateTime.parse("2022-01-03T19:29:44.864Z");
                createdateTo = OffsetDateTime.parse("2022-03-15T09:20:26.769Z");
                description = "quod";
                filesuffix = "alias";
                fromdate = OffsetDateTime.parse("2022-06-10T08:13:32.523Z");
                group = "modi";
                max = 629440L;
                maxlatitude = 936.6;
                maxlongitude = 5164.82;
                minlatitude = 2807.06;
                minlongitude = 8214.87;
                name = "Melanie Schumm";
                skip = 115077L;
                text = "reiciendis";
                todate = OffsetDateTime.parse("2021-05-17T21:53:03.520Z");
            }};            

            SearchTypePointNcdcClimateResponse res = sdk.typeTypePointNcdcClimate.searchTypePointNcdcClimate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
