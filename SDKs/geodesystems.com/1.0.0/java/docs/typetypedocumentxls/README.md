# typeTypeDocumentXls

## Overview

Search API for 'Excel File' entry type

### Available Operations

* [searchTypeDocumentXls](#searchtypedocumentxls) - Search API for 'Excel File' entry type

## searchTypeDocumentXls

API to search for entries of type Excel File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeDocumentXlsRequest;
import org.openapis.openapi.models.operations.SearchTypeDocumentXlsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeDocumentXlsRequest req = new SearchTypeDocumentXlsRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-08-03T09:21:22.769Z");
                changedateTo = OffsetDateTime.parse("2021-11-05T00:07:21.775Z");
                createdateFrom = OffsetDateTime.parse("2022-07-15T12:49:09.774Z");
                createdateTo = OffsetDateTime.parse("2021-09-19T03:24:19.827Z");
                description = "repellat";
                filesuffix = "cupiditate";
                fromdate = OffsetDateTime.parse("2021-07-14T17:52:57.722Z");
                group = "culpa";
                max = 855647L;
                maxlatitude = 780.74;
                maxlongitude = 5417.43;
                minlatitude = 3232.15;
                minlongitude = 9594.2;
                name = "Dr. Alexander Douglas";
                skip = 696324L;
                text = "delectus";
                todate = OffsetDateTime.parse("2022-03-28T03:56:37.209Z");
            }};            

            SearchTypeDocumentXlsResponse res = sdk.typeTypeDocumentXls.searchTypeDocumentXls(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
