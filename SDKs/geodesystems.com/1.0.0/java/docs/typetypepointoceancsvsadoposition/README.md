# typeTypePointOceanCsvSadoPosition

## Overview

Search API for 'SADO Position Data' entry type

### Available Operations

* [searchTypePointOceanCsvSadoPosition](#searchtypepointoceancsvsadoposition) - Search API for 'SADO Position Data' entry type

## searchTypePointOceanCsvSadoPosition

API to search for entries of type SADO Position Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointOceanCsvSadoPositionRequest;
import org.openapis.openapi.models.operations.SearchTypePointOceanCsvSadoPositionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointOceanCsvSadoPositionRequest req = new SearchTypePointOceanCsvSadoPositionRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-05T10:50:37.967Z");
                changedateTo = OffsetDateTime.parse("2021-04-04T22:52:25.370Z");
                createdateFrom = OffsetDateTime.parse("2022-04-23T00:43:15.987Z");
                createdateTo = OffsetDateTime.parse("2022-08-21T23:41:36.278Z");
                description = "laboriosam";
                filesuffix = "aperiam";
                fromdate = OffsetDateTime.parse("2022-05-28T14:35:14.227Z");
                group = "dicta";
                max = 825283L;
                maxlatitude = 4408.77;
                maxlongitude = 2737.93;
                minlatitude = 3204.42;
                minlongitude = 9175.4;
                name = "Mrs. Sheri Cruickshank";
                skip = 791517L;
                text = "excepturi";
                todate = OffsetDateTime.parse("2022-05-24T09:39:20.515Z");
            }};            

            SearchTypePointOceanCsvSadoPositionResponse res = sdk.typeTypePointOceanCsvSadoPosition.searchTypePointOceanCsvSadoPosition(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
