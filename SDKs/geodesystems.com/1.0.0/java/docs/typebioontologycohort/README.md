# typeBioOntologyCohort

## Overview

Search API for 'Cohort' entry type

### Available Operations

* [searchBioOntologyCohort](#searchbioontologycohort) - Search API for 'Cohort' entry type

## searchBioOntologyCohort

API to search for entries of type Cohort

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioOntologyCohortRequest;
import org.openapis.openapi.models.operations.SearchBioOntologyCohortResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioOntologyCohortRequest req = new SearchBioOntologyCohortRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-07-19T10:57:57.489Z");
                changedateTo = OffsetDateTime.parse("2022-04-12T10:47:34.158Z");
                createdateFrom = OffsetDateTime.parse("2022-02-18T18:29:26.833Z");
                createdateTo = OffsetDateTime.parse("2022-01-09T22:25:53.570Z");
                description = "perferendis";
                filesuffix = "fugiat";
                fromdate = OffsetDateTime.parse("2022-12-27T17:23:03.738Z");
                group = "cumque";
                max = 359978L;
                maxlatitude = 9441.24;
                maxlongitude = 7299.91;
                minlatitude = 7499.99;
                minlongitude = 1716.29;
                name = "Mrs. Deanna Kuhn";
                skip = 179490L;
                text = "perferendis";
                todate = OffsetDateTime.parse("2022-03-17T07:12:29.048Z");
            }};            

            SearchBioOntologyCohortResponse res = sdk.typeBioOntologyCohort.searchBioOntologyCohort(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
