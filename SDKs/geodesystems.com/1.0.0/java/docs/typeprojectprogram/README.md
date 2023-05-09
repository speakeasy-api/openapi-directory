# typeProjectProgram

## Overview

Search API for 'Program' entry type

### Available Operations

* [searchProjectProgram](#searchprojectprogram) - Search API for 'Program' entry type

## searchProjectProgram

API to search for entries of type Program

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectProgramRequest;
import org.openapis.openapi.models.operations.SearchProjectProgramResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectProgramRequest req = new SearchProjectProgramRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-08-26T00:43:51.707Z");
                changedateTo = OffsetDateTime.parse("2022-08-03T10:39:43.179Z");
                createdateFrom = OffsetDateTime.parse("2022-02-27T01:33:10.149Z");
                createdateTo = OffsetDateTime.parse("2022-06-24T01:33:58.896Z");
                description = "officiis";
                filesuffix = "omnis";
                fromdate = OffsetDateTime.parse("2022-08-22T15:30:12.306Z");
                group = "quod";
                max = 175803L;
                maxlatitude = 8080.5;
                maxlongitude = 5700.39;
                minlatitude = 9270.21;
                minlongitude = 5517.78;
                name = "Miss Jeannie Emmerich";
                skip = 196000L;
                text = "recusandae";
                todate = OffsetDateTime.parse("2022-10-05T04:08:05.701Z");
            }};            

            SearchProjectProgramResponse res = sdk.typeProjectProgram.searchProjectProgram(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
