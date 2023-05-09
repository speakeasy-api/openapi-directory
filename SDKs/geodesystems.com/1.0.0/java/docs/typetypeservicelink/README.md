# typeTypeServiceLink

## Overview

Search API for 'Service Link' entry type

### Available Operations

* [searchTypeServiceLink](#searchtypeservicelink) - Search API for 'Service Link' entry type

## searchTypeServiceLink

API to search for entries of type Service Link

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeServiceLinkRequest;
import org.openapis.openapi.models.operations.SearchTypeServiceLinkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeServiceLinkRequest req = new SearchTypeServiceLinkRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-18T12:15:13.900Z");
                changedateTo = OffsetDateTime.parse("2022-07-07T21:58:01.504Z");
                createdateFrom = OffsetDateTime.parse("2022-05-02T22:40:32.488Z");
                createdateTo = OffsetDateTime.parse("2022-04-19T16:52:53.258Z");
                description = "blanditiis";
                filesuffix = "sapiente";
                fromdate = OffsetDateTime.parse("2021-03-20T04:23:44.358Z");
                group = "natus";
                max = 440330L;
                maxlatitude = 2088.26;
                maxlongitude = 1243.81;
                minlatitude = 6824.3;
                minlongitude = 8574.11;
                name = "Kevin Hammes";
                skip = 336314L;
                text = "fuga";
                todate = OffsetDateTime.parse("2022-07-09T09:55:08.787Z");
            }};            

            SearchTypeServiceLinkResponse res = sdk.typeTypeServiceLink.searchTypeServiceLink(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
