# typeNotes

## Overview

Search API for 'Notes' entry type

### Available Operations

* [searchNotes](#searchnotes) - Search API for 'Notes' entry type

## searchNotes

API to search for entries of type Notes

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchNotesRequest;
import org.openapis.openapi.models.operations.SearchNotesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchNotesRequest req = new SearchNotesRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-07-23T10:18:08.861Z");
                changedateTo = OffsetDateTime.parse("2022-10-08T04:54:26.161Z");
                createdateFrom = OffsetDateTime.parse("2021-06-04T02:54:37.855Z");
                createdateTo = OffsetDateTime.parse("2022-01-02T01:41:31.539Z");
                description = "adipisci";
                filesuffix = "recusandae";
                fromdate = OffsetDateTime.parse("2022-07-01T05:47:03.008Z");
                group = "numquam";
                max = 196374L;
                maxlatitude = 5323.2;
                maxlongitude = 270.78;
                minlatitude = 7031.89;
                minlongitude = 841.78;
                name = "Milton Powlowski";
                searchDbNotesNote = "deserunt";
                skip = 168926L;
                text = "nihil";
                todate = OffsetDateTime.parse("2022-05-05T18:10:28.279Z");
            }};            

            SearchNotesResponse res = sdk.typeNotes.searchNotes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
