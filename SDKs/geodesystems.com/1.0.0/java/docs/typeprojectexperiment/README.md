# typeProjectExperiment

## Overview

Search API for 'Experiment' entry type

### Available Operations

* [searchProjectExperiment](#searchprojectexperiment) - Search API for 'Experiment' entry type

## searchProjectExperiment

API to search for entries of type Experiment

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectExperimentRequest;
import org.openapis.openapi.models.operations.SearchProjectExperimentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectExperimentRequest req = new SearchProjectExperimentRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-01-01T12:54:25.927Z");
                changedateTo = OffsetDateTime.parse("2022-09-26T22:47:17.791Z");
                createdateFrom = OffsetDateTime.parse("2022-04-05T18:33:30.497Z");
                createdateTo = OffsetDateTime.parse("2021-05-11T15:48:49.060Z");
                description = "fugit";
                filesuffix = "ipsam";
                fromdate = OffsetDateTime.parse("2022-10-21T03:34:32.727Z");
                group = "voluptatum";
                max = 98759L;
                maxlatitude = 6225.66;
                maxlongitude = 7486.06;
                minlatitude = 2696;
                minlongitude = 4526.53;
                name = "Lula Bayer";
                skip = 146583L;
                text = "voluptatem";
                todate = OffsetDateTime.parse("2021-12-02T02:31:07.352Z");
            }};            

            SearchProjectExperimentResponse res = sdk.typeProjectExperiment.searchProjectExperiment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
