# typeBioOntologySeries

## Overview

Search API for 'Series' entry type

### Available Operations

* [searchBioOntologySeries](#searchbioontologyseries) - Search API for 'Series' entry type

## searchBioOntologySeries

API to search for entries of type Series

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioOntologySeriesRequest;
import org.openapis.openapi.models.operations.SearchBioOntologySeriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioOntologySeriesRequest req = new SearchBioOntologySeriesRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-05-20T13:18:59.478Z");
                changedateTo = OffsetDateTime.parse("2022-06-16T23:42:38.113Z");
                createdateFrom = OffsetDateTime.parse("2022-02-23T01:35:05.899Z");
                createdateTo = OffsetDateTime.parse("2022-04-04T12:00:33.616Z");
                description = "dolorum";
                filesuffix = "iusto";
                fromdate = OffsetDateTime.parse("2022-04-28T20:45:55.086Z");
                group = "deleniti";
                max = 607045L;
                maxlatitude = 8966.72;
                maxlongitude = 7146.97;
                minlatitude = 9903.39;
                minlongitude = 4694.97;
                name = "Tamara Ondricka";
                skip = 137220L;
                text = "perferendis";
                todate = OffsetDateTime.parse("2022-03-30T04:36:10.591Z");
            }};            

            SearchBioOntologySeriesResponse res = sdk.typeBioOntologySeries.searchBioOntologySeries(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
