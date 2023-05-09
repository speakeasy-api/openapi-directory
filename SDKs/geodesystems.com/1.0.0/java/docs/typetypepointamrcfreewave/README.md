# typeTypePointAmrcFreewave

## Overview

Search API for 'AMRC Freewave  Data' entry type

### Available Operations

* [searchTypePointAmrcFreewave](#searchtypepointamrcfreewave) - Search API for 'AMRC Freewave  Data' entry type

## searchTypePointAmrcFreewave

API to search for entries of type AMRC Freewave  Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointAmrcFreewaveRequest;
import org.openapis.openapi.models.operations.SearchTypePointAmrcFreewaveResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointAmrcFreewaveRequest req = new SearchTypePointAmrcFreewaveRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-05-12T21:53:27.420Z");
                changedateTo = OffsetDateTime.parse("2022-12-30T19:57:19.656Z");
                createdateFrom = OffsetDateTime.parse("2022-02-28T06:13:48.877Z");
                createdateTo = OffsetDateTime.parse("2022-08-05T06:34:33.185Z");
                description = "alias";
                filesuffix = "laudantium";
                fromdate = OffsetDateTime.parse("2022-04-11T05:46:20.273Z");
                group = "maiores";
                max = 723374L;
                maxlatitude = 8672.86;
                maxlongitude = 7972.62;
                minlatitude = 2665.04;
                minlongitude = 1143.41;
                name = "Toby Hilll";
                searchTypePointAmrcFreewaveDataloggerModel = "officiis";
                searchTypePointAmrcFreewaveDataloggerSerial = "sed";
                searchTypePointAmrcFreewaveFormat = "mollitia";
                searchTypePointAmrcFreewaveStationName = "saepe";
                skip = 289373L;
                text = "doloribus";
                todate = OffsetDateTime.parse("2022-05-06T23:45:07.291Z");
            }};            

            SearchTypePointAmrcFreewaveResponse res = sdk.typeTypePointAmrcFreewave.searchTypePointAmrcFreewave(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
