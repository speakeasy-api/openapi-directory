# typeTypeDocumentDoc

## Overview

Search API for 'Word File' entry type

### Available Operations

* [searchTypeDocumentDoc](#searchtypedocumentdoc) - Search API for 'Word File' entry type

## searchTypeDocumentDoc

API to search for entries of type Word File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeDocumentDocRequest;
import org.openapis.openapi.models.operations.SearchTypeDocumentDocResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeDocumentDocRequest req = new SearchTypeDocumentDocRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-01-12T21:34:14.646Z");
                changedateTo = OffsetDateTime.parse("2020-02-13T00:59:27.963Z");
                createdateFrom = OffsetDateTime.parse("2022-05-08T16:14:41.942Z");
                createdateTo = OffsetDateTime.parse("2021-06-26T00:44:17.067Z");
                description = "neque";
                filesuffix = "quam";
                fromdate = OffsetDateTime.parse("2021-03-22T00:34:03.284Z");
                group = "voluptatum";
                max = 28256L;
                maxlatitude = 7892.86;
                maxlongitude = 1138.08;
                minlatitude = 7664.98;
                minlongitude = 1020.71;
                name = "Guillermo McClure";
                skip = 637969L;
                text = "iste";
                todate = OffsetDateTime.parse("2021-11-18T22:27:59.069Z");
            }};            

            SearchTypeDocumentDocResponse res = sdk.typeTypeDocumentDoc.searchTypeDocumentDoc(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
