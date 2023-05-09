# typeProjectContribution

## Overview

Search API for 'Research Contribution' entry type

### Available Operations

* [searchProjectContribution](#searchprojectcontribution) - Search API for 'Research Contribution' entry type

## searchProjectContribution

API to search for entries of type Research Contribution

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectContributionRequest;
import org.openapis.openapi.models.operations.SearchProjectContributionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectContributionRequest req = new SearchProjectContributionRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-03-17T16:33:05.600Z");
                changedateTo = OffsetDateTime.parse("2020-12-01T15:19:42.661Z");
                createdateFrom = OffsetDateTime.parse("2022-03-22T22:36:08.652Z");
                createdateTo = OffsetDateTime.parse("2022-03-18T01:27:23.704Z");
                description = "distinctio";
                filesuffix = "possimus";
                fromdate = OffsetDateTime.parse("2022-03-27T21:22:17.518Z");
                group = "saepe";
                max = 934782L;
                maxlatitude = 7998.66;
                maxlongitude = 4695.88;
                minlatitude = 3109.3;
                minlongitude = 2159.59;
                name = "Myrtle Prohaska";
                skip = 319419L;
                text = "sequi";
                todate = OffsetDateTime.parse("2022-07-09T10:04:04.820Z");
            }};            

            SearchProjectContributionResponse res = sdk.typeProjectContribution.searchProjectContribution(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
