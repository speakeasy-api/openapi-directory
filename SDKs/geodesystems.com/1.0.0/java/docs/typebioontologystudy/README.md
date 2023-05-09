# typeBioOntologyStudy

## Overview

Search API for 'Study' entry type

### Available Operations

* [searchBioOntologyStudy](#searchbioontologystudy) - Search API for 'Study' entry type

## searchBioOntologyStudy

API to search for entries of type Study

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioOntologyStudyRequest;
import org.openapis.openapi.models.operations.SearchBioOntologyStudyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioOntologyStudyRequest req = new SearchBioOntologyStudyRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-01-15T13:56:57.287Z");
                changedateTo = OffsetDateTime.parse("2021-11-07T02:34:07.563Z");
                createdateFrom = OffsetDateTime.parse("2021-10-28T12:41:02.358Z");
                createdateTo = OffsetDateTime.parse("2022-03-03T16:00:55.670Z");
                description = "totam";
                filesuffix = "similique";
                fromdate = OffsetDateTime.parse("2022-02-16T11:34:48.736Z");
                group = "quaerat";
                max = 273542L;
                maxlatitude = 4254.51;
                maxlongitude = 7980.47;
                minlatitude = 8853.38;
                minlongitude = 1856.36;
                name = "Randal Klocko";
                skip = 215507L;
                text = "quisquam";
                todate = OffsetDateTime.parse("2022-04-24T18:16:06.669Z");
            }};            

            SearchBioOntologyStudyResponse res = sdk.typeBioOntologyStudy.searchBioOntologyStudy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
