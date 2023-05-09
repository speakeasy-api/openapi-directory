# typeCdmGrid

## Overview

Search API for 'Gridded Data File' entry type

### Available Operations

* [searchCdmGrid](#searchcdmgrid) - Search API for 'Gridded Data File' entry type

## searchCdmGrid

API to search for entries of type Gridded Data File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchCdmGridRequest;
import org.openapis.openapi.models.operations.SearchCdmGridResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchCdmGridRequest req = new SearchCdmGridRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-05-26T23:29:35.541Z");
                changedateTo = OffsetDateTime.parse("2022-07-09T06:54:36.386Z");
                createdateFrom = OffsetDateTime.parse("2021-03-24T23:56:32.062Z");
                createdateTo = OffsetDateTime.parse("2022-02-09T03:10:10.926Z");
                description = "adipisci";
                filesuffix = "eveniet";
                fromdate = OffsetDateTime.parse("2022-09-06T00:45:42.817Z");
                group = "fugit";
                max = 661118L;
                maxlatitude = 3356.31;
                maxlongitude = 4402.64;
                minlatitude = 6255.28;
                minlongitude = 764.86;
                name = "Melody Vandervort";
                skip = 39615L;
                text = "iure";
                todate = OffsetDateTime.parse("2022-06-26T01:43:04.262Z");
            }};            

            SearchCdmGridResponse res = sdk.typeCdmGrid.searchCdmGrid(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
