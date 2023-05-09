# typeProjectDeployment

## Overview

Search API for 'Deployment' entry type

### Available Operations

* [searchProjectDeployment](#searchprojectdeployment) - Search API for 'Deployment' entry type

## searchProjectDeployment

API to search for entries of type Deployment

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectDeploymentRequest;
import org.openapis.openapi.models.operations.SearchProjectDeploymentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectDeploymentRequest req = new SearchProjectDeploymentRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-06-15T08:36:06.296Z");
                changedateTo = OffsetDateTime.parse("2022-02-23T05:45:35.035Z");
                createdateFrom = OffsetDateTime.parse("2022-12-17T16:35:15.259Z");
                createdateTo = OffsetDateTime.parse("2021-07-01T13:15:33.537Z");
                description = "similique";
                filesuffix = "porro";
                fromdate = OffsetDateTime.parse("2021-10-25T18:39:10.695Z");
                group = "cumque";
                max = 743795L;
                maxlatitude = 8565.68;
                maxlongitude = 3892.87;
                minlatitude = 7203.19;
                minlongitude = 3153.87;
                name = "Jeffery Tromp";
                skip = 29080L;
                text = "provident";
                todate = OffsetDateTime.parse("2022-12-19T11:49:13.655Z");
            }};            

            SearchProjectDeploymentResponse res = sdk.typeProjectDeployment.searchProjectDeployment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
