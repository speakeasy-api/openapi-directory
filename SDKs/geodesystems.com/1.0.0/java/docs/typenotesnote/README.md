# typeNotesNote

## Overview

Search API for 'Note' entry type

### Available Operations

* [searchNotesNote](#searchnotesnote) - Search API for 'Note' entry type

## searchNotesNote

API to search for entries of type Note

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchNotesNoteRequest;
import org.openapis.openapi.models.operations.SearchNotesNoteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchNotesNoteRequest req = new SearchNotesNoteRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-04-15T21:16:41.530Z");
                changedateTo = OffsetDateTime.parse("2021-12-14T11:36:59.797Z");
                createdateFrom = OffsetDateTime.parse("2021-03-25T03:12:44.676Z");
                createdateTo = OffsetDateTime.parse("2021-04-10T18:27:22.667Z");
                description = "sapiente";
                filesuffix = "quo";
                fromdate = OffsetDateTime.parse("2022-03-15T23:42:52.032Z");
                group = "minus";
                max = 781491L;
                maxlatitude = 6599.71;
                maxlongitude = 5697.06;
                minlatitude = 5802.38;
                minlongitude = 7268.51;
                name = "Cory Welch DDS";
                skip = 147400L;
                text = "pariatur";
                todate = OffsetDateTime.parse("2020-03-21T09:34:05.399Z");
            }};            

            SearchNotesNoteResponse res = sdk.typeNotesNote.searchNotesNote(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
