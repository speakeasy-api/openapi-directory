# typeProjectFieldnote

## Overview

Search API for 'Field Note' entry type

### Available Operations

* [searchProjectFieldnote](#searchprojectfieldnote) - Search API for 'Field Note' entry type

## searchProjectFieldnote

API to search for entries of type Field Note

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectFieldnoteRequest;
import org.openapis.openapi.models.operations.SearchProjectFieldnoteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectFieldnoteRequest req = new SearchProjectFieldnoteRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-27T08:01:11.900Z");
                changedateTo = OffsetDateTime.parse("2022-07-01T20:30:54.862Z");
                createdateFrom = OffsetDateTime.parse("2020-01-23T04:32:45.729Z");
                createdateTo = OffsetDateTime.parse("2021-09-27T00:30:18.295Z");
                description = "nesciunt";
                filesuffix = "cupiditate";
                fromdate = OffsetDateTime.parse("2021-10-26T10:41:06.484Z");
                group = "beatae";
                max = 56998L;
                maxlatitude = 6509.14;
                maxlongitude = 7211.38;
                minlatitude = 8273.14;
                minlongitude = 7764.21;
                name = "Garry Johnson";
                skip = 453880L;
                text = "nisi";
                todate = OffsetDateTime.parse("2022-05-30T18:07:27.744Z");
            }};            

            SearchProjectFieldnoteResponse res = sdk.typeProjectFieldnote.searchProjectFieldnote(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
