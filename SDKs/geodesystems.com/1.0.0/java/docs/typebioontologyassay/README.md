# typeBioOntologyAssay

## Overview

Search API for 'Assay' entry type

### Available Operations

* [searchBioOntologyAssay](#searchbioontologyassay) - Search API for 'Assay' entry type

## searchBioOntologyAssay

API to search for entries of type Assay

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioOntologyAssayRequest;
import org.openapis.openapi.models.operations.SearchBioOntologyAssayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioOntologyAssayRequest req = new SearchBioOntologyAssayRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-12-11T05:14:57.773Z");
                changedateTo = OffsetDateTime.parse("2022-01-23T10:45:15.714Z");
                createdateFrom = OffsetDateTime.parse("2020-06-23T22:50:14.437Z");
                createdateTo = OffsetDateTime.parse("2022-02-04T19:17:08.641Z");
                description = "pariatur";
                filesuffix = "accusantium";
                fromdate = OffsetDateTime.parse("2022-06-29T11:09:23.468Z");
                group = "natus";
                max = 166847L;
                maxlatitude = 1238.2;
                maxlongitude = 7790.51;
                minlatitude = 8480.09;
                minlongitude = 8649.34;
                name = "Nathaniel Marks";
                skip = 33222L;
                text = "ab";
                todate = OffsetDateTime.parse("2020-11-28T07:34:18.392Z");
            }};            

            SearchBioOntologyAssayResponse res = sdk.typeBioOntologyAssay.searchBioOntologyAssay(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
