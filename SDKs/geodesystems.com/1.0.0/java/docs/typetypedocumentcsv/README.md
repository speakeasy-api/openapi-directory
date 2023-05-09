# typeTypeDocumentCsv

## Overview

Search API for 'CSV File' entry type

### Available Operations

* [searchTypeDocumentCsv](#searchtypedocumentcsv) - Search API for 'CSV File' entry type

## searchTypeDocumentCsv

API to search for entries of type CSV File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeDocumentCsvRequest;
import org.openapis.openapi.models.operations.SearchTypeDocumentCsvResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeDocumentCsvRequest req = new SearchTypeDocumentCsvRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-08-07T18:51:34.254Z");
                changedateTo = OffsetDateTime.parse("2022-05-14T06:09:57.887Z");
                createdateFrom = OffsetDateTime.parse("2020-02-21T12:31:55.446Z");
                createdateTo = OffsetDateTime.parse("2022-09-09T12:17:17.081Z");
                description = "excepturi";
                filesuffix = "aliquid";
                fromdate = OffsetDateTime.parse("2022-12-21T03:02:36.046Z");
                group = "illum";
                max = 388006L;
                maxlatitude = 6328.5;
                maxlongitude = 1167.05;
                minlatitude = 5388.77;
                minlongitude = 1914.25;
                name = "Rosalie Lindgren";
                skip = 837739L;
                text = "a";
                todate = OffsetDateTime.parse("2022-06-01T10:57:10.907Z");
            }};            

            SearchTypeDocumentCsvResponse res = sdk.typeTypeDocumentCsv.searchTypeDocumentCsv(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
