# typeOwlOntology

## Overview

Search API for 'OWL Ontology' entry type

### Available Operations

* [searchOwlOntology](#searchowlontology) - Search API for 'OWL Ontology' entry type

## searchOwlOntology

API to search for entries of type OWL Ontology

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchOwlOntologyRequest;
import org.openapis.openapi.models.operations.SearchOwlOntologyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchOwlOntologyRequest req = new SearchOwlOntologyRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-11-23T01:27:41.480Z");
                changedateTo = OffsetDateTime.parse("2022-03-08T14:16:56.716Z");
                createdateFrom = OffsetDateTime.parse("2022-05-29T19:50:28.684Z");
                createdateTo = OffsetDateTime.parse("2021-07-09T17:15:53.752Z");
                description = "esse";
                filesuffix = "animi";
                fromdate = OffsetDateTime.parse("2022-01-29T10:24:00.407Z");
                group = "eveniet";
                max = 935161L;
                maxlatitude = 2464.02;
                maxlongitude = 8847.65;
                minlatitude = 2633.46;
                minlongitude = 7019.78;
                name = "Lance Hintz";
                skip = 397014L;
                text = "quis";
                todate = OffsetDateTime.parse("2022-07-25T18:23:48.906Z");
            }};            

            SearchOwlOntologyResponse res = sdk.typeOwlOntology.searchOwlOntology(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
