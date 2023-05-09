# typeTypeServiceGroup

## Overview

Search API for 'Service Group' entry type

### Available Operations

* [searchTypeServiceGroup](#searchtypeservicegroup) - Search API for 'Service Group' entry type

## searchTypeServiceGroup

API to search for entries of type Service Group

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeServiceGroupRequest;
import org.openapis.openapi.models.operations.SearchTypeServiceGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeServiceGroupRequest req = new SearchTypeServiceGroupRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-03-22T14:47:18.885Z");
                changedateTo = OffsetDateTime.parse("2022-01-30T02:45:15.076Z");
                createdateFrom = OffsetDateTime.parse("2021-11-13T00:54:03.818Z");
                createdateTo = OffsetDateTime.parse("2020-11-18T13:05:17.215Z");
                description = "doloremque";
                filesuffix = "officiis";
                fromdate = OffsetDateTime.parse("2022-07-23T14:56:49.236Z");
                group = "necessitatibus";
                max = 1962L;
                maxlatitude = 5898.68;
                maxlongitude = 2853.36;
                minlatitude = 9417.76;
                minlongitude = 8141.59;
                name = "Alonzo Shields";
                skip = 293991L;
                text = "sit";
                todate = OffsetDateTime.parse("2020-02-21T13:58:54.874Z");
            }};            

            SearchTypeServiceGroupResponse res = sdk.typeTypeServiceGroup.searchTypeServiceGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
