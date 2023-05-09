# typeTypeDbTable

## Overview

Search API for 'Database Table' entry type

### Available Operations

* [searchTypeDbTable](#searchtypedbtable) - Search API for 'Database Table' entry type

## searchTypeDbTable

API to search for entries of type Database Table

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeDbTableRequest;
import org.openapis.openapi.models.operations.SearchTypeDbTableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeDbTableRequest req = new SearchTypeDbTableRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-04-25T15:46:52.343Z");
                changedateTo = OffsetDateTime.parse("2022-03-04T07:26:03.876Z");
                createdateFrom = OffsetDateTime.parse("2022-02-27T11:17:23.811Z");
                createdateTo = OffsetDateTime.parse("2022-01-27T21:54:39.142Z");
                description = "sapiente";
                filesuffix = "id";
                fromdate = OffsetDateTime.parse("2022-12-02T15:06:25.913Z");
                group = "iste";
                max = 542187L;
                maxlatitude = 1295.31;
                maxlongitude = 3560.07;
                minlatitude = 5397.03;
                minlongitude = 9874.35;
                name = "Richard Murray";
                skip = 723623L;
                text = "animi";
                todate = OffsetDateTime.parse("2022-07-18T18:41:54.686Z");
            }};            

            SearchTypeDbTableResponse res = sdk.typeTypeDbTable.searchTypeDbTable(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
