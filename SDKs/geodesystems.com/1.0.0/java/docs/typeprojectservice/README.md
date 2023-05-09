# typeProjectService

## Overview

Search API for 'Data Access Service' entry type

### Available Operations

* [searchProjectService](#searchprojectservice) - Search API for 'Data Access Service' entry type

## searchProjectService

API to search for entries of type Data Access Service

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectServiceRequest;
import org.openapis.openapi.models.operations.SearchProjectServiceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectServiceRequest req = new SearchProjectServiceRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-05-01T18:02:47.466Z");
                changedateTo = OffsetDateTime.parse("2022-10-06T03:21:37.038Z");
                createdateFrom = OffsetDateTime.parse("2022-03-28T21:31:25.301Z");
                createdateTo = OffsetDateTime.parse("2022-02-09T20:54:15.420Z");
                description = "cumque";
                filesuffix = "maxime";
                fromdate = OffsetDateTime.parse("2022-11-22T20:02:33.919Z");
                group = "id";
                max = 9060L;
                maxlatitude = 5515.76;
                maxlongitude = 1917.24;
                minlatitude = 4365.32;
                minlongitude = 2704.77;
                name = "Faye Bartoletti";
                searchProjectServiceProvider = "facilis";
                searchProjectServiceServiceType = "laudantium";
                skip = 353075L;
                text = "aut";
                todate = OffsetDateTime.parse("2022-05-11T11:02:14.127Z");
            }};            

            SearchProjectServiceResponse res = sdk.typeProjectService.searchProjectService(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
