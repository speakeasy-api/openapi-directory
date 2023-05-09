# typePoliceStopData

## Overview

Search API for 'Police Stop Data' entry type

### Available Operations

* [searchPoliceStopData](#searchpolicestopdata) - Search API for 'Police Stop Data' entry type

## searchPoliceStopData

API to search for entries of type Police Stop Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchPoliceStopDataRequest;
import org.openapis.openapi.models.operations.SearchPoliceStopDataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchPoliceStopDataRequest req = new SearchPoliceStopDataRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-02-11T16:51:51.667Z");
                changedateTo = OffsetDateTime.parse("2022-02-07T04:45:04.380Z");
                createdateFrom = OffsetDateTime.parse("2022-09-05T15:53:48.964Z");
                createdateTo = OffsetDateTime.parse("2022-07-11T22:08:27.190Z");
                description = "quia";
                filesuffix = "laudantium";
                fromdate = OffsetDateTime.parse("2022-11-10T17:44:58.508Z");
                group = "iusto";
                max = 712893L;
                maxlatitude = 1769.35;
                maxlongitude = 8304.77;
                minlatitude = 1998.79;
                minlongitude = 579.09;
                name = "Miss Marcus Koch";
                searchDbPoliceStopDataAddress = "quam";
                searchDbPoliceStopDataDate = "est";
                searchDbPoliceStopDataEthnicity = "aliquam";
                searchDbPoliceStopDataMinutes = 964201L;
                searchDbPoliceStopDataRace = "culpa";
                searchDbPoliceStopDataResident = "voluptatum";
                searchDbPoliceStopDataSex = "iusto";
                skip = 802069L;
                text = "voluptatibus";
                todate = OffsetDateTime.parse("2022-10-02T13:33:28.563Z");
            }};            

            SearchPoliceStopDataResponse res = sdk.typePoliceStopData.searchPoliceStopData(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
