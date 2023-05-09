# typeCommunityResource

## Overview

Search API for 'Facility' entry type

### Available Operations

* [searchCommunityResource](#searchcommunityresource) - Search API for 'Facility' entry type

## searchCommunityResource

API to search for entries of type Facility

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchCommunityResourceRequest;
import org.openapis.openapi.models.operations.SearchCommunityResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchCommunityResourceRequest req = new SearchCommunityResourceRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-07-12T06:51:18.031Z");
                changedateTo = OffsetDateTime.parse("2022-07-09T21:21:21.316Z");
                createdateFrom = OffsetDateTime.parse("2022-06-29T10:30:00.284Z");
                createdateTo = OffsetDateTime.parse("2020-02-06T20:25:31.567Z");
                description = "vel";
                filesuffix = "architecto";
                fromdate = OffsetDateTime.parse("2022-11-18T13:59:08.408Z");
                group = "dicta";
                max = 483706L;
                maxlatitude = 2712.52;
                maxlongitude = 4582.59;
                minlatitude = 4037.93;
                minlongitude = 2352.63;
                name = "Mrs. Melissa Osinski";
                searchCommunityResourceAddress = "expedita";
                searchCommunityResourceCity = "aliquid";
                searchCommunityResourceResourceType = "officia";
                searchCommunityResourceState = "suscipit";
                searchCommunityResourceZipcode = "aliquid";
                skip = 21973L;
                text = "eum";
                todate = OffsetDateTime.parse("2022-05-21T16:44:14.214Z");
            }};            

            SearchCommunityResourceResponse res = sdk.typeCommunityResource.searchCommunityResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
