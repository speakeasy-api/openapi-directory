# typeBioSfPdb

## Overview

Search API for 'PDB Protein File' entry type

### Available Operations

* [searchBioSfPdb](#searchbiosfpdb) - Search API for 'PDB Protein File' entry type

## searchBioSfPdb

API to search for entries of type PDB Protein File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioSfPdbRequest;
import org.openapis.openapi.models.operations.SearchBioSfPdbResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioSfPdbRequest req = new SearchBioSfPdbRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-11-13T19:04:59.225Z");
                changedateTo = OffsetDateTime.parse("2022-04-14T08:18:32.851Z");
                createdateFrom = OffsetDateTime.parse("2022-03-17T21:02:01.759Z");
                createdateTo = OffsetDateTime.parse("2022-06-08T14:54:33.206Z");
                description = "temporibus";
                filesuffix = "qui";
                fromdate = OffsetDateTime.parse("2022-11-09T03:08:00.106Z");
                group = "magni";
                max = 488056L;
                maxlatitude = 1248.33;
                maxlongitude = 3556.13;
                minlatitude = 7220.81;
                minlongitude = 9404.32;
                name = "Erma Rogahn PhD";
                skip = 217450L;
                text = "veritatis";
                todate = OffsetDateTime.parse("2021-11-23T21:35:15.992Z");
            }};            

            SearchBioSfPdbResponse res = sdk.typeBioSfPdb.searchBioSfPdb(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
