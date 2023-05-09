# typeProjectTerm

## Overview

Search API for 'Vocabulary Term' entry type

### Available Operations

* [searchProjectTerm](#searchprojectterm) - Search API for 'Vocabulary Term' entry type

## searchProjectTerm

API to search for entries of type Vocabulary Term

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectTermRequest;
import org.openapis.openapi.models.operations.SearchProjectTermResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectTermRequest req = new SearchProjectTermRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-05-24T17:08:44.205Z");
                changedateTo = OffsetDateTime.parse("2021-01-08T23:10:36.760Z");
                createdateFrom = OffsetDateTime.parse("2022-03-08T09:26:05.109Z");
                createdateTo = OffsetDateTime.parse("2022-08-29T16:18:11.316Z");
                description = "in";
                filesuffix = "sed";
                fromdate = OffsetDateTime.parse("2022-03-20T19:38:47.401Z");
                group = "fugiat";
                max = 743938L;
                maxlatitude = 584.63;
                maxlongitude = 9670.47;
                minlatitude = 2891.53;
                minlongitude = 8748.43;
                name = "Ms. Billie Boyle";
                searchProjectTermValue = "fugiat";
                skip = 313695L;
                text = "iure";
                todate = OffsetDateTime.parse("2022-06-21T07:53:38.590Z");
            }};            

            SearchProjectTermResponse res = sdk.typeProjectTerm.searchProjectTerm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
