# typeTypeDocumentPdf

## Overview

Search API for 'PDF File' entry type

### Available Operations

* [searchTypeDocumentPdf](#searchtypedocumentpdf) - Search API for 'PDF File' entry type

## searchTypeDocumentPdf

API to search for entries of type PDF File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeDocumentPdfRequest;
import org.openapis.openapi.models.operations.SearchTypeDocumentPdfResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeDocumentPdfRequest req = new SearchTypeDocumentPdfRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-06-02T05:43:50.216Z");
                changedateTo = OffsetDateTime.parse("2022-05-18T06:55:38.525Z");
                createdateFrom = OffsetDateTime.parse("2022-07-24T11:49:51.417Z");
                createdateTo = OffsetDateTime.parse("2022-12-24T06:32:15.469Z");
                description = "voluptates";
                filesuffix = "delectus";
                fromdate = OffsetDateTime.parse("2022-01-14T20:40:34.498Z");
                group = "exercitationem";
                max = 217552L;
                maxlatitude = 3851.65;
                maxlongitude = 413.46;
                minlatitude = 1533.7;
                minlongitude = 5301.99;
                name = "Darnell Watsica";
                skip = 584663L;
                text = "adipisci";
                todate = OffsetDateTime.parse("2022-12-05T19:27:10.992Z");
            }};            

            SearchTypeDocumentPdfResponse res = sdk.typeTypeDocumentPdf.searchTypeDocumentPdf(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
