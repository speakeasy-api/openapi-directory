# typeBioHmmerIndex

## Overview

Search API for 'HMMER Index File' entry type

### Available Operations

* [searchBioHmmerIndex](#searchbiohmmerindex) - Search API for 'HMMER Index File' entry type

## searchBioHmmerIndex

API to search for entries of type HMMER Index File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioHmmerIndexRequest;
import org.openapis.openapi.models.operations.SearchBioHmmerIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioHmmerIndexRequest req = new SearchBioHmmerIndexRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-09-06T10:36:33.442Z");
                changedateTo = OffsetDateTime.parse("2021-12-07T18:13:34.827Z");
                createdateFrom = OffsetDateTime.parse("2022-04-23T13:35:30.978Z");
                createdateTo = OffsetDateTime.parse("2022-03-18T17:53:23.400Z");
                description = "vel";
                filesuffix = "natus";
                fromdate = OffsetDateTime.parse("2022-01-19T08:19:15.156Z");
                group = "perferendis";
                max = 470132L;
                maxlatitude = 3015.75;
                maxlongitude = 7160.75;
                minlatitude = 6601.74;
                minlongitude = 2879.91;
                name = "Laurie Mosciski";
                skip = 878453L;
                text = "aspernatur";
                todate = OffsetDateTime.parse("2022-09-14T03:02:47.808Z");
            }};            

            SearchBioHmmerIndexResponse res = sdk.typeBioHmmerIndex.searchBioHmmerIndex(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
