# typeBioTaxonomy

## Overview

Search API for 'Taxonomic Entry' entry type

### Available Operations

* [searchBioTaxonomy](#searchbiotaxonomy) - Search API for 'Taxonomic Entry' entry type

## searchBioTaxonomy

API to search for entries of type Taxonomic Entry

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioTaxonomyRequest;
import org.openapis.openapi.models.operations.SearchBioTaxonomyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioTaxonomyRequest req = new SearchBioTaxonomyRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-12-16T18:42:11.269Z");
                changedateTo = OffsetDateTime.parse("2022-07-22T18:51:28.663Z");
                createdateFrom = OffsetDateTime.parse("2020-01-21T21:31:25.345Z");
                createdateTo = OffsetDateTime.parse("2021-07-26T04:25:41.517Z");
                description = "eligendi";
                filesuffix = "ducimus";
                fromdate = OffsetDateTime.parse("2022-05-12T14:13:14.359Z");
                group = "tempora";
                max = 368584L;
                maxlatitude = 4104.92;
                maxlongitude = 1369;
                minlatitude = 4282.24;
                minlongitude = 8221.18;
                name = "Paula Jacobs I";
                searchBioTaxonomyAliases = "maiores";
                searchBioTaxonomyDivision = "quasi";
                searchBioTaxonomyEmblCode = "ex";
                searchBioTaxonomyInheritedDiv = false;
                searchBioTaxonomyRank = "nulla";
                skip = 569211L;
                text = "voluptatibus";
                todate = OffsetDateTime.parse("2022-01-15T07:05:18.296Z");
            }};            

            SearchBioTaxonomyResponse res = sdk.typeBioTaxonomy.searchBioTaxonomy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
