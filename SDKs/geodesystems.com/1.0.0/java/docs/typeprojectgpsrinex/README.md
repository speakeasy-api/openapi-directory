# typeProjectGpsRinex

## Overview

Search API for 'RINEX File' entry type

### Available Operations

* [searchProjectGpsRinex](#searchprojectgpsrinex) - Search API for 'RINEX File' entry type

## searchProjectGpsRinex

API to search for entries of type RINEX File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectGpsRinexRequest;
import org.openapis.openapi.models.operations.SearchProjectGpsRinexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectGpsRinexRequest req = new SearchProjectGpsRinexRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-02-09T16:27:22.070Z");
                changedateTo = OffsetDateTime.parse("2022-07-16T11:02:07.974Z");
                createdateFrom = OffsetDateTime.parse("2022-09-02T06:41:37.594Z");
                createdateTo = OffsetDateTime.parse("2020-02-05T06:52:39.012Z");
                description = "quod";
                filesuffix = "voluptate";
                fromdate = OffsetDateTime.parse("2022-03-09T07:14:52.283Z");
                group = "maxime";
                max = 681578L;
                maxlatitude = 665.96;
                maxlongitude = 4057.89;
                minlatitude = 2359.7;
                minlongitude = 9824.09;
                name = "Lynda Donnelly";
                skip = 21668L;
                text = "laborum";
                todate = OffsetDateTime.parse("2022-01-22T15:58:15.848Z");
            }};            

            SearchProjectGpsRinexResponse res = sdk.typeProjectGpsRinex.searchProjectGpsRinex(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
