# typeTypeEsriRestservice

## Overview

Search API for 'ESRI Rest Service' entry type

### Available Operations

* [searchTypeEsriRestservice](#searchtypeesrirestservice) - Search API for 'ESRI Rest Service' entry type

## searchTypeEsriRestservice

API to search for entries of type ESRI Rest Service

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeEsriRestserviceRequest;
import org.openapis.openapi.models.operations.SearchTypeEsriRestserviceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeEsriRestserviceRequest req = new SearchTypeEsriRestserviceRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-07-14T02:49:59.585Z");
                changedateTo = OffsetDateTime.parse("2022-03-05T13:27:07.035Z");
                createdateFrom = OffsetDateTime.parse("2022-03-26T10:15:26.218Z");
                createdateTo = OffsetDateTime.parse("2022-04-14T18:29:04.841Z");
                description = "tenetur";
                filesuffix = "non";
                fromdate = OffsetDateTime.parse("2022-06-14T19:22:35.532Z");
                group = "itaque";
                max = 938015L;
                maxlatitude = 7738.54;
                maxlongitude = 1199.28;
                minlatitude = 3588.61;
                minlongitude = 7720.62;
                name = "Jonathon Gulgowski";
                skip = 889201L;
                text = "quasi";
                todate = OffsetDateTime.parse("2021-01-11T15:38:38.962Z");
            }};            

            SearchTypeEsriRestserviceResponse res = sdk.typeTypeEsriRestservice.searchTypeEsriRestservice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
