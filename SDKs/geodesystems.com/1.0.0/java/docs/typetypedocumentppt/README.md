# typeTypeDocumentPpt

## Overview

Search API for 'Powerpoint File' entry type

### Available Operations

* [searchTypeDocumentPpt](#searchtypedocumentppt) - Search API for 'Powerpoint File' entry type

## searchTypeDocumentPpt

API to search for entries of type Powerpoint File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeDocumentPptRequest;
import org.openapis.openapi.models.operations.SearchTypeDocumentPptResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeDocumentPptRequest req = new SearchTypeDocumentPptRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-11-07T20:14:50.258Z");
                changedateTo = OffsetDateTime.parse("2020-07-16T03:39:02.629Z");
                createdateFrom = OffsetDateTime.parse("2022-01-26T16:01:08.638Z");
                createdateTo = OffsetDateTime.parse("2022-08-24T02:19:57.449Z");
                description = "non";
                filesuffix = "delectus";
                fromdate = OffsetDateTime.parse("2022-03-16T02:42:14.341Z");
                group = "sunt";
                max = 353493L;
                maxlatitude = 4630.44;
                maxlongitude = 8509.53;
                minlatitude = 9160.51;
                minlongitude = 6410.06;
                name = "Arnold Bins DVM";
                skip = 276247L;
                text = "dolore";
                todate = OffsetDateTime.parse("2022-05-01T13:28:23.519Z");
            }};            

            SearchTypeDocumentPptResponse res = sdk.typeTypeDocumentPpt.searchTypeDocumentPpt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
