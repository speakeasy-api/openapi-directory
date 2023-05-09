# typeProjectCampaign

## Overview

Search API for 'Campaign' entry type

### Available Operations

* [searchProjectCampaign](#searchprojectcampaign) - Search API for 'Campaign' entry type

## searchProjectCampaign

API to search for entries of type Campaign

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectCampaignRequest;
import org.openapis.openapi.models.operations.SearchProjectCampaignResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectCampaignRequest req = new SearchProjectCampaignRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-07-04T17:02:22.015Z");
                changedateTo = OffsetDateTime.parse("2020-03-19T01:37:09.736Z");
                createdateFrom = OffsetDateTime.parse("2022-05-02T11:11:56.667Z");
                createdateTo = OffsetDateTime.parse("2022-03-15T16:49:39.900Z");
                description = "minus";
                filesuffix = "quos";
                fromdate = OffsetDateTime.parse("2020-01-23T09:20:28.902Z");
                group = "odio";
                max = 588662L;
                maxlatitude = 9609.33;
                maxlongitude = 455.1;
                minlatitude = 6277.17;
                minlongitude = 1979.82;
                name = "Ruben Sipes DDS";
                skip = 196700L;
                text = "commodi";
                todate = OffsetDateTime.parse("2022-04-16T19:53:20.939Z");
            }};            

            SearchProjectCampaignResponse res = sdk.typeProjectCampaign.searchProjectCampaign(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
