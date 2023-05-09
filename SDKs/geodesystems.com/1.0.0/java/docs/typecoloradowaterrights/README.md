# typeColoradoWaterRights

## Overview

Search API for 'Colorado Water Rights' entry type

### Available Operations

* [searchColoradoWaterRights](#searchcoloradowaterrights) - Search API for 'Colorado Water Rights' entry type

## searchColoradoWaterRights

API to search for entries of type Colorado Water Rights

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchColoradoWaterRightsRequest;
import org.openapis.openapi.models.operations.SearchColoradoWaterRightsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchColoradoWaterRightsRequest req = new SearchColoradoWaterRightsRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-08-07T17:37:00.643Z");
                changedateTo = OffsetDateTime.parse("2022-01-28T02:50:56.968Z");
                createdateFrom = OffsetDateTime.parse("2022-05-20T05:55:02.076Z");
                createdateTo = OffsetDateTime.parse("2022-08-06T19:48:35.360Z");
                description = "ut";
                filesuffix = "culpa";
                fromdate = OffsetDateTime.parse("2022-02-09T21:52:52.867Z");
                group = "laudantium";
                max = 432606L;
                maxlatitude = 3679.27;
                maxlongitude = 9282.19;
                minlatitude = 4565.2;
                minlongitude = 5920.81;
                name = "Natalie Witting";
                searchDbColoradoWaterRightsAdjudicationDate = "ullam";
                searchDbColoradoWaterRightsAppropriationDate = "quasi";
                searchDbColoradoWaterRightsComments = "animi";
                searchDbColoradoWaterRightsCounty = "nostrum";
                searchDbColoradoWaterRightsDecreedUnits = "mollitia";
                searchDbColoradoWaterRightsDecreedUses = "provident";
                searchDbColoradoWaterRightsLocation = "possimus";
                searchDbColoradoWaterRightsMoreInformation = "animi";
                searchDbColoradoWaterRightsNetAbsolute = 4027.67;
                searchDbColoradoWaterRightsNetApexAbsolute = 3972.57;
                searchDbColoradoWaterRightsNetApexConditional = 375.65;
                searchDbColoradoWaterRightsNetConditional = 9992.78;
                searchDbColoradoWaterRightsPriorityNo = "doloribus";
                searchDbColoradoWaterRightsSeasonalLimits = "ullam";
                searchDbColoradoWaterRightsStructureName = "in";
                searchDbColoradoWaterRightsStructureType = "nam";
                searchDbColoradoWaterRightsWaterSource = "earum";
                skip = 637583L;
                text = "laborum";
                todate = OffsetDateTime.parse("2022-03-14T23:12:21.252Z");
            }};            

            SearchColoradoWaterRightsResponse res = sdk.typeColoradoWaterRights.searchColoradoWaterRights(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
