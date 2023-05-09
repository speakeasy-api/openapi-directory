# typeTypeEsriMapserver

## Overview

Search API for 'ESRI Map Server' entry type

### Available Operations

* [searchTypeEsriMapserver](#searchtypeesrimapserver) - Search API for 'ESRI Map Server' entry type

## searchTypeEsriMapserver

API to search for entries of type ESRI Map Server

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeEsriMapserverRequest;
import org.openapis.openapi.models.operations.SearchTypeEsriMapserverResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeEsriMapserverRequest req = new SearchTypeEsriMapserverRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-08-14T16:50:21.678Z");
                changedateTo = OffsetDateTime.parse("2022-01-20T05:34:36.600Z");
                createdateFrom = OffsetDateTime.parse("2022-06-22T04:31:01.154Z");
                createdateTo = OffsetDateTime.parse("2022-01-21T03:02:47.125Z");
                description = "eius";
                filesuffix = "placeat";
                fromdate = OffsetDateTime.parse("2022-03-09T07:11:23.601Z");
                group = "ipsam";
                max = 750343L;
                maxlatitude = 7841.2;
                maxlongitude = 2878.34;
                minlatitude = 5961.33;
                minlongitude = 4949.72;
                name = "Norma Feest";
                skip = 435841L;
                text = "aliquid";
                todate = OffsetDateTime.parse("2021-04-17T19:09:36.880Z");
            }};            

            SearchTypeEsriMapserverResponse res = sdk.typeTypeEsriMapserver.searchTypeEsriMapserver(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
