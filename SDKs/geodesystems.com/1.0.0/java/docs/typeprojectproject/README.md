# typeProjectProject

## Overview

Search API for 'Project' entry type

### Available Operations

* [searchProjectProject](#searchprojectproject) - Search API for 'Project' entry type

## searchProjectProject

API to search for entries of type Project

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectProjectRequest;
import org.openapis.openapi.models.operations.SearchProjectProjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectProjectRequest req = new SearchProjectProjectRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-15T07:52:06.510Z");
                changedateTo = OffsetDateTime.parse("2022-02-25T03:59:17.657Z");
                createdateFrom = OffsetDateTime.parse("2022-10-31T07:46:10.277Z");
                createdateTo = OffsetDateTime.parse("2022-08-09T03:17:39.929Z");
                description = "ad";
                filesuffix = "voluptate";
                fromdate = OffsetDateTime.parse("2022-09-04T09:00:32.956Z");
                group = "sit";
                max = 426527L;
                maxlatitude = 3883.33;
                maxlongitude = 3112.47;
                minlatitude = 941.22;
                minlongitude = 5252.23;
                name = "Michelle Shanahan";
                skip = 152887L;
                text = "inventore";
                todate = OffsetDateTime.parse("2021-03-13T15:44:04.050Z");
            }};            

            SearchProjectProjectResponse res = sdk.typeProjectProject.searchProjectProject(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
