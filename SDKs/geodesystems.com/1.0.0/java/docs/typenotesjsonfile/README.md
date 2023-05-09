# typeNotesJsonfile

## Overview

Search API for 'Json File' entry type

### Available Operations

* [searchNotesJsonfile](#searchnotesjsonfile) - Search API for 'Json File' entry type

## searchNotesJsonfile

API to search for entries of type Json File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchNotesJsonfileRequest;
import org.openapis.openapi.models.operations.SearchNotesJsonfileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchNotesJsonfileRequest req = new SearchNotesJsonfileRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-31T17:43:08.927Z");
                changedateTo = OffsetDateTime.parse("2022-12-21T05:02:16.256Z");
                createdateFrom = OffsetDateTime.parse("2022-03-14T00:03:11.145Z");
                createdateTo = OffsetDateTime.parse("2022-05-21T23:58:09.358Z");
                description = "ullam";
                filesuffix = "eligendi";
                fromdate = OffsetDateTime.parse("2021-11-12T15:33:33.302Z");
                group = "occaecati";
                max = 600934L;
                maxlatitude = 752.77;
                maxlongitude = 4691.7;
                minlatitude = 782.46;
                minlongitude = 7253.16;
                name = "Miss Joyce Runolfsson";
                skip = 707983L;
                text = "beatae";
                todate = OffsetDateTime.parse("2020-02-09T20:39:20.538Z");
            }};            

            SearchNotesJsonfileResponse res = sdk.typeNotesJsonfile.searchNotesJsonfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
