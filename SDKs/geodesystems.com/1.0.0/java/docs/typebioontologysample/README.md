# typeBioOntologySample

## Overview

Search API for 'Sample' entry type

### Available Operations

* [searchBioOntologySample](#searchbioontologysample) - Search API for 'Sample' entry type

## searchBioOntologySample

API to search for entries of type Sample

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioOntologySampleRequest;
import org.openapis.openapi.models.operations.SearchBioOntologySampleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioOntologySampleRequest req = new SearchBioOntologySampleRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-01-24T10:05:07.174Z");
                changedateTo = OffsetDateTime.parse("2022-03-16T07:10:00.236Z");
                createdateFrom = OffsetDateTime.parse("2022-10-16T09:46:06.582Z");
                createdateTo = OffsetDateTime.parse("2022-10-25T00:56:56.568Z");
                description = "ipsum";
                filesuffix = "hic";
                fromdate = OffsetDateTime.parse("2021-07-10T03:04:11.898Z");
                group = "voluptate";
                max = 490459L;
                maxlatitude = 9702.37;
                maxlongitude = 2274.14;
                minlatitude = 6805.45;
                minlongitude = 2543.56;
                name = "Melissa Bednar";
                skip = 311796L;
                text = "accusamus";
                todate = OffsetDateTime.parse("2021-01-18T05:23:42.271Z");
            }};            

            SearchBioOntologySampleResponse res = sdk.typeBioOntologySample.searchBioOntologySample(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
