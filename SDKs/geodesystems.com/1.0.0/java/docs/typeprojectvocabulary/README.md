# typeProjectVocabulary

## Overview

Search API for 'Vocabulary' entry type

### Available Operations

* [searchProjectVocabulary](#searchprojectvocabulary) - Search API for 'Vocabulary' entry type

## searchProjectVocabulary

API to search for entries of type Vocabulary

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectVocabularyRequest;
import org.openapis.openapi.models.operations.SearchProjectVocabularyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectVocabularyRequest req = new SearchProjectVocabularyRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-05-24T10:46:29.092Z");
                changedateTo = OffsetDateTime.parse("2022-09-17T14:08:59.849Z");
                createdateFrom = OffsetDateTime.parse("2022-04-21T20:29:31.570Z");
                createdateTo = OffsetDateTime.parse("2022-02-09T20:46:26.848Z");
                description = "vitae";
                filesuffix = "dolor";
                fromdate = OffsetDateTime.parse("2022-06-17T22:36:10.251Z");
                group = "ut";
                max = 989765L;
                maxlatitude = 4446.25;
                maxlongitude = 6441.29;
                minlatitude = 9301.27;
                minlongitude = 932.54;
                name = "Pat Jacobs";
                skip = 112014L;
                text = "tenetur";
                todate = OffsetDateTime.parse("2022-09-25T19:14:36.297Z");
            }};            

            SearchProjectVocabularyResponse res = sdk.typeProjectVocabulary.searchProjectVocabulary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
