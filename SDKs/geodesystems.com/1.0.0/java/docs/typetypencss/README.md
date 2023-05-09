# typeTypeNcss

## Overview

Search API for 'NetCDF Point Subset' entry type

### Available Operations

* [searchTypeNcss](#searchtypencss) - Search API for 'NetCDF Point Subset' entry type

## searchTypeNcss

API to search for entries of type NetCDF Point Subset

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeNcssRequest;
import org.openapis.openapi.models.operations.SearchTypeNcssResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeNcssRequest req = new SearchTypeNcssRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-01-30T15:14:52.146Z");
                changedateTo = OffsetDateTime.parse("2022-03-01T20:29:09.374Z");
                createdateFrom = OffsetDateTime.parse("2021-09-16T06:54:29.871Z");
                createdateTo = OffsetDateTime.parse("2022-10-17T16:10:20.035Z");
                description = "impedit";
                filesuffix = "consequuntur";
                fromdate = OffsetDateTime.parse("2022-02-04T20:42:40.039Z");
                group = "amet";
                max = 287020L;
                maxlatitude = 9984.45;
                maxlongitude = 1795;
                minlatitude = 8451.91;
                minlongitude = 9999.65;
                name = "Ms. Calvin Nikolaus";
                skip = 952106L;
                text = "iure";
                todate = OffsetDateTime.parse("2020-03-22T03:37:51.173Z");
            }};            

            SearchTypeNcssResponse res = sdk.typeTypeNcss.searchTypeNcss(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
