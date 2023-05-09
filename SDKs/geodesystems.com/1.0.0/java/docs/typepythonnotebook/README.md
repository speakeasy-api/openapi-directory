# typePythonNotebook

## Overview

Search API for 'IPython Notebook file' entry type

### Available Operations

* [searchPythonNotebook](#searchpythonnotebook) - Search API for 'IPython Notebook file' entry type

## searchPythonNotebook

API to search for entries of type IPython Notebook file

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchPythonNotebookRequest;
import org.openapis.openapi.models.operations.SearchPythonNotebookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchPythonNotebookRequest req = new SearchPythonNotebookRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-11-04T19:51:43.586Z");
                changedateTo = OffsetDateTime.parse("2021-05-08T06:04:19.379Z");
                createdateFrom = OffsetDateTime.parse("2020-10-05T05:12:26.595Z");
                createdateTo = OffsetDateTime.parse("2022-06-27T23:49:16.699Z");
                description = "tempora";
                filesuffix = "esse";
                fromdate = OffsetDateTime.parse("2022-06-14T11:05:35.136Z");
                group = "reiciendis";
                max = 704644L;
                maxlatitude = 3060.23;
                maxlongitude = 9229.15;
                minlatitude = 2274.24;
                minlongitude = 6170.35;
                name = "Gretchen Keeling";
                skip = 68336L;
                text = "ad";
                todate = OffsetDateTime.parse("2021-06-10T07:55:03.152Z");
            }};            

            SearchPythonNotebookResponse res = sdk.typePythonNotebook.searchPythonNotebook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
