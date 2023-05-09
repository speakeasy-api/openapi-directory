# typeBiblio

## Overview

Search API for 'Bibliographic Entry' entry type

### Available Operations

* [searchBiblio](#searchbiblio) - Search API for 'Bibliographic Entry' entry type

## searchBiblio

API to search for entries of type Bibliographic Entry

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBiblioRequest;
import org.openapis.openapi.models.operations.SearchBiblioResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBiblioRequest req = new SearchBiblioRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-04-10T11:47:13.463Z");
                changedateTo = OffsetDateTime.parse("2022-06-06T21:04:34.044Z");
                createdateFrom = OffsetDateTime.parse("2022-07-24T21:51:02.112Z");
                createdateTo = OffsetDateTime.parse("2021-01-09T11:41:25.666Z");
                description = "sapiente";
                filesuffix = "architecto";
                fromdate = OffsetDateTime.parse("2022-08-01T12:28:44.292Z");
                group = "culpa";
                max = 161309L;
                maxlatitude = 9953;
                maxlongitude = 6531.08;
                minlatitude = 5818.5;
                minlongitude = 2532.91;
                name = "Claudia Krajcik";
                searchBiblioInstitution = "quia";
                searchBiblioOtherAuthors = "quis";
                searchBiblioPrimaryAuthor = "vitae";
                searchBiblioPublication = "laborum";
                searchBiblioType = "animi";
                skip = 317202L;
                text = "odit";
                todate = OffsetDateTime.parse("2022-05-30T17:48:55.594Z");
            }};            

            SearchBiblioResponse res = sdk.typeBiblio.searchBiblio(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
