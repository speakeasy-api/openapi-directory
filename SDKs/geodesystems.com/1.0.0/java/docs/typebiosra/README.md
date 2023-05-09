# typeBioSra

## Overview

Search API for 'Sequence Read Archive' entry type

### Available Operations

* [searchBioSra](#searchbiosra) - Search API for 'Sequence Read Archive' entry type

## searchBioSra

API to search for entries of type Sequence Read Archive

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioSraRequest;
import org.openapis.openapi.models.operations.SearchBioSraResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioSraRequest req = new SearchBioSraRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-10-31T07:58:44.750Z");
                changedateTo = OffsetDateTime.parse("2022-01-14T21:26:14.171Z");
                createdateFrom = OffsetDateTime.parse("2022-09-16T08:47:14.764Z");
                createdateTo = OffsetDateTime.parse("2022-10-05T02:20:22.923Z");
                description = "dolorum";
                filesuffix = "architecto";
                fromdate = OffsetDateTime.parse("2022-12-26T00:04:34.165Z");
                group = "quas";
                max = 929530L;
                maxlatitude = 92.4;
                maxlongitude = 6699.17;
                minlatitude = 8330.38;
                minlongitude = 7851.53;
                name = "Alexander Prosacco";
                skip = 63955L;
                text = "laudantium";
                todate = OffsetDateTime.parse("2022-06-03T03:16:58.870Z");
            }};            

            SearchBioSraResponse res = sdk.typeBioSra.searchBioSra(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
