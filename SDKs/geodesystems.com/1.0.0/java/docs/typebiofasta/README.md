# typeBioFasta

## Overview

Search API for 'FASTA File' entry type

### Available Operations

* [searchBioFasta](#searchbiofasta) - Search API for 'FASTA File' entry type

## searchBioFasta

API to search for entries of type FASTA File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioFastaRequest;
import org.openapis.openapi.models.operations.SearchBioFastaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioFastaRequest req = new SearchBioFastaRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-04-26T18:54:54.344Z");
                changedateTo = OffsetDateTime.parse("2022-09-26T08:57:48.803Z");
                createdateFrom = OffsetDateTime.parse("2022-08-08T19:05:24.174Z");
                createdateTo = OffsetDateTime.parse("2021-11-23T10:34:02.904Z");
                description = "perferendis";
                filesuffix = "magni";
                fromdate = OffsetDateTime.parse("2021-11-22T01:26:35.048Z");
                group = "alias";
                max = 146441L;
                maxlatitude = 6778.17;
                maxlongitude = 5696.18;
                minlatitude = 2700.08;
                minlongitude = 7037.37;
                name = "Francisco Windler";
                skip = 756107L;
                text = "sint";
                todate = OffsetDateTime.parse("2022-05-29T21:42:45.399Z");
            }};            

            SearchBioFastaResponse res = sdk.typeBioFasta.searchBioFasta(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
