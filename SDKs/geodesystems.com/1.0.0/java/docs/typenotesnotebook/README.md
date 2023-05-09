# typeNotesNotebook

## Overview

Search API for 'Notebook' entry type

### Available Operations

* [searchNotesNotebook](#searchnotesnotebook) - Search API for 'Notebook' entry type

## searchNotesNotebook

API to search for entries of type Notebook

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchNotesNotebookRequest;
import org.openapis.openapi.models.operations.SearchNotesNotebookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchNotesNotebookRequest req = new SearchNotesNotebookRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-27T00:31:59.035Z");
                changedateTo = OffsetDateTime.parse("2022-01-15T07:00:59.329Z");
                createdateFrom = OffsetDateTime.parse("2022-01-31T05:44:55.505Z");
                createdateTo = OffsetDateTime.parse("2022-10-30T23:22:09.432Z");
                description = "rerum";
                filesuffix = "doloremque";
                fromdate = OffsetDateTime.parse("2022-07-27T23:55:27.293Z");
                group = "at";
                max = 431253L;
                maxlatitude = 4444.79;
                maxlongitude = 5311.95;
                minlatitude = 5023.93;
                minlongitude = 4706.47;
                name = "Rickey Oberbrunner";
                skip = 542340L;
                text = "architecto";
                todate = OffsetDateTime.parse("2022-05-13T14:00:02.845Z");
            }};            

            SearchNotesNotebookResponse res = sdk.typeNotesNotebook.searchNotesNotebook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
