# typeProjectDataset

## Overview

Search API for 'Dataset' entry type

### Available Operations

* [searchProjectDataset](#searchprojectdataset) - Search API for 'Dataset' entry type

## searchProjectDataset

API to search for entries of type Dataset

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectDatasetRequest;
import org.openapis.openapi.models.operations.SearchProjectDatasetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectDatasetRequest req = new SearchProjectDatasetRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-05-22T05:03:27.540Z");
                changedateTo = OffsetDateTime.parse("2022-03-29T20:19:51.485Z");
                createdateFrom = OffsetDateTime.parse("2022-01-03T11:57:21.616Z");
                createdateTo = OffsetDateTime.parse("2022-12-24T15:33:44.473Z");
                description = "laudantium";
                filesuffix = "iusto";
                fromdate = OffsetDateTime.parse("2022-01-19T08:01:00.558Z");
                group = "quis";
                max = 435883L;
                maxlatitude = 685.96;
                maxlongitude = 3086.58;
                minlatitude = 2289.07;
                minlongitude = 9569.42;
                name = "Monique Kerluke";
                searchProjectDatasetDataLevel = "laudantium";
                searchProjectDatasetDataType = "nam";
                searchProjectDatasetDatasetId = "nemo";
                skip = 317632L;
                text = "ipsam";
                todate = OffsetDateTime.parse("2022-09-23T05:09:40.748Z");
            }};            

            SearchProjectDatasetResponse res = sdk.typeProjectDataset.searchProjectDataset(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
