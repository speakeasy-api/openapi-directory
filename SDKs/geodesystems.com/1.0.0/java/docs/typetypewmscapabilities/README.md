# typeTypeWmsCapabilities

## Overview

Search API for 'WMS Capabilities' entry type

### Available Operations

* [searchTypeWmsCapabilities](#searchtypewmscapabilities) - Search API for 'WMS Capabilities' entry type

## searchTypeWmsCapabilities

API to search for entries of type WMS Capabilities

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeWmsCapabilitiesRequest;
import org.openapis.openapi.models.operations.SearchTypeWmsCapabilitiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeWmsCapabilitiesRequest req = new SearchTypeWmsCapabilitiesRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-03-20T22:46:34.076Z");
                changedateTo = OffsetDateTime.parse("2022-12-20T13:26:35.144Z");
                createdateFrom = OffsetDateTime.parse("2022-07-20T15:27:19.301Z");
                createdateTo = OffsetDateTime.parse("2022-07-29T20:23:21.998Z");
                description = "impedit";
                filesuffix = "consectetur";
                fromdate = OffsetDateTime.parse("2022-09-20T03:50:22.008Z");
                group = "est";
                max = 682847L;
                maxlatitude = 2877.97;
                maxlongitude = 2404.48;
                minlatitude = 1871.04;
                minlongitude = 7403.31;
                name = "Ms. Jackie Torphy";
                skip = 225415L;
                text = "minus";
                todate = OffsetDateTime.parse("2022-11-14T19:42:10.801Z");
            }};            

            SearchTypeWmsCapabilitiesResponse res = sdk.typeTypeWmsCapabilities.searchTypeWmsCapabilities(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
