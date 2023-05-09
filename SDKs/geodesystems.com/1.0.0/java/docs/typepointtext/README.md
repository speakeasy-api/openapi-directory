# typePointText

## Overview

Search API for 'Text Point Data' entry type

### Available Operations

* [searchPointText](#searchpointtext) - Search API for 'Text Point Data' entry type

## searchPointText

API to search for entries of type Text Point Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchPointTextRequest;
import org.openapis.openapi.models.operations.SearchPointTextResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchPointTextRequest req = new SearchPointTextRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-09-11T23:53:23.627Z");
                changedateTo = OffsetDateTime.parse("2022-09-18T08:16:52.982Z");
                createdateFrom = OffsetDateTime.parse("2022-05-30T16:08:07.597Z");
                createdateTo = OffsetDateTime.parse("2022-12-22T06:00:09.505Z");
                description = "esse";
                filesuffix = "debitis";
                fromdate = OffsetDateTime.parse("2020-08-20T00:40:38.007Z");
                group = "cumque";
                max = 302878L;
                maxlatitude = 6778.95;
                maxlongitude = 6448.27;
                minlatitude = 3198.34;
                minlongitude = 9704.11;
                name = "Francis Osinski";
                skip = 607624L;
                text = "aut";
                todate = OffsetDateTime.parse("2022-05-11T09:02:32.338Z");
            }};            

            SearchPointTextResponse res = sdk.typePointText.searchPointText(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
