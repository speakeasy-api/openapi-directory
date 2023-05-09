# typeTypePointAmerifluxLevel2

## Overview

Search API for 'Ameriflux Level 2 CSV File' entry type

### Available Operations

* [searchTypePointAmerifluxLevel2](#searchtypepointamerifluxlevel2) - Search API for 'Ameriflux Level 2 CSV File' entry type

## searchTypePointAmerifluxLevel2

API to search for entries of type Ameriflux Level 2 CSV File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointAmerifluxLevel2Request;
import org.openapis.openapi.models.operations.SearchTypePointAmerifluxLevel2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointAmerifluxLevel2Request req = new SearchTypePointAmerifluxLevel2Request() {{
                changedateFrom = OffsetDateTime.parse("2022-09-30T10:23:56.897Z");
                changedateTo = OffsetDateTime.parse("2022-05-28T03:15:45.968Z");
                createdateFrom = OffsetDateTime.parse("2020-04-06T15:00:57.607Z");
                createdateTo = OffsetDateTime.parse("2022-11-12T16:26:07.021Z");
                description = "ut";
                filesuffix = "non";
                fromdate = OffsetDateTime.parse("2022-12-18T11:29:20.910Z");
                group = "tempora";
                max = 302228L;
                maxlatitude = 2107.1;
                maxlongitude = 7122.09;
                minlatitude = 7711.46;
                minlongitude = 1027.34;
                name = "Danielle Bruen";
                searchTypePointAmerifluxLevel2Contact = "quisquam";
                searchTypePointAmerifluxLevel2EcosystemType = "sunt";
                searchTypePointAmerifluxLevel2SiteId = "asperiores";
                skip = 357519L;
                text = "vel";
                todate = OffsetDateTime.parse("2021-06-08T15:34:01.450Z");
            }};            

            SearchTypePointAmerifluxLevel2Response res = sdk.typeTypePointAmerifluxLevel2.searchTypePointAmerifluxLevel2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
