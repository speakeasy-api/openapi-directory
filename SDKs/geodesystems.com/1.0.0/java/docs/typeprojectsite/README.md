# typeProjectSite

## Overview

Search API for 'Site' entry type

### Available Operations

* [searchProjectSite](#searchprojectsite) - Search API for 'Site' entry type

## searchProjectSite

API to search for entries of type Site

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectSiteRequest;
import org.openapis.openapi.models.operations.SearchProjectSiteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectSiteRequest req = new SearchProjectSiteRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-08-22T02:23:15.742Z");
                changedateTo = OffsetDateTime.parse("2021-07-22T23:14:33.263Z");
                createdateFrom = OffsetDateTime.parse("2021-08-16T07:12:25.575Z");
                createdateTo = OffsetDateTime.parse("2022-04-21T09:06:28.916Z");
                description = "quisquam";
                filesuffix = "praesentium";
                fromdate = OffsetDateTime.parse("2022-08-18T22:20:38.381Z");
                group = "officiis";
                max = 196497L;
                maxlatitude = 1655.45;
                maxlongitude = 298.81;
                minlatitude = 6659.6;
                minlongitude = 2261.81;
                name = "Natasha Wiza";
                searchProjectSiteCountry = "dolorum";
                searchProjectSiteCounty = "quibusdam";
                searchProjectSiteNetwork = "earum";
                searchProjectSiteShortName = "excepturi";
                searchProjectSiteSiteType = "numquam";
                searchProjectSiteState = "molestiae";
                searchProjectSiteStatus = "impedit";
                skip = 621883L;
                text = "animi";
                todate = OffsetDateTime.parse("2022-03-15T07:15:52.266Z");
            }};            

            SearchProjectSiteResponse res = sdk.typeProjectSite.searchProjectSite(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
