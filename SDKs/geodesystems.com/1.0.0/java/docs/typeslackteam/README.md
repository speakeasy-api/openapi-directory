# typeSlackTeam

## Overview

Search API for 'Slack Team' entry type

### Available Operations

* [searchSlackTeam](#searchslackteam) - Search API for 'Slack Team' entry type

## searchSlackTeam

API to search for entries of type Slack Team

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSlackTeamRequest;
import org.openapis.openapi.models.operations.SearchSlackTeamResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchSlackTeamRequest req = new SearchSlackTeamRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-03-24T12:44:13.413Z");
                changedateTo = OffsetDateTime.parse("2022-01-24T04:06:35.177Z");
                createdateFrom = OffsetDateTime.parse("2022-09-29T06:19:03.205Z");
                createdateTo = OffsetDateTime.parse("2022-06-01T10:59:52.480Z");
                description = "occaecati";
                filesuffix = "itaque";
                fromdate = OffsetDateTime.parse("2022-07-13T13:30:15.387Z");
                group = "modi";
                max = 134832L;
                maxlatitude = 1297.62;
                maxlongitude = 3804.5;
                minlatitude = 588.08;
                minlongitude = 9104.1;
                name = "Mr. Robin Dibbert";
                skip = 927754L;
                text = "voluptate";
                todate = OffsetDateTime.parse("2021-09-01T14:03:59.260Z");
            }};            

            SearchSlackTeamResponse res = sdk.typeSlackTeam.searchSlackTeam(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
