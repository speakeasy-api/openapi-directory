# typeGazeteerCensusTracts

## Overview

Search API for 'Census Tracts' entry type

### Available Operations

* [searchGazeteerCensusTracts](#searchgazeteercensustracts) - Search API for 'Census Tracts' entry type

## searchGazeteerCensusTracts

API to search for entries of type Census Tracts

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGazeteerCensusTractsRequest;
import org.openapis.openapi.models.operations.SearchGazeteerCensusTractsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGazeteerCensusTractsRequest req = new SearchGazeteerCensusTractsRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-08-25T23:28:51.951Z");
                changedateTo = OffsetDateTime.parse("2022-10-08T09:27:30.689Z");
                createdateFrom = OffsetDateTime.parse("2022-02-06T13:10:02.431Z");
                createdateTo = OffsetDateTime.parse("2022-11-20T11:30:36.362Z");
                description = "ducimus";
                filesuffix = "maiores";
                fromdate = OffsetDateTime.parse("2022-11-26T19:05:24.735Z");
                group = "laboriosam";
                max = 863471L;
                maxlatitude = 7294.48;
                maxlongitude = 5665.06;
                minlatitude = 5782.1;
                minlongitude = 3679.17;
                name = "Bernice Yundt";
                searchDbGazeteerCensusTractsCensusTractId = "enim";
                searchDbGazeteerCensusTractsCountyFips = "hic";
                searchDbGazeteerCensusTractsCountyName = "animi";
                searchDbGazeteerCensusTractsFullCensusTractId = "quas";
                searchDbGazeteerCensusTractsLandArea = 5173.26;
                searchDbGazeteerCensusTractsLocation = "molestias";
                searchDbGazeteerCensusTractsState = "odio";
                searchDbGazeteerCensusTractsStateFips = "eaque";
                searchDbGazeteerCensusTractsWaterArea = 9011.63;
                skip = 104078L;
                text = "quos";
                todate = OffsetDateTime.parse("2021-05-07T09:23:04.849Z");
            }};            

            SearchGazeteerCensusTractsResponse res = sdk.typeGazeteerCensusTracts.searchGazeteerCensusTracts(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
