# typeGlossary

## Overview

Search API for 'Glossary' entry type

### Available Operations

* [searchGlossary](#searchglossary) - Search API for 'Glossary' entry type

## searchGlossary

API to search for entries of type Glossary

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGlossaryRequest;
import org.openapis.openapi.models.operations.SearchGlossaryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGlossaryRequest req = new SearchGlossaryRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-05-17T06:03:04.160Z");
                changedateTo = OffsetDateTime.parse("2022-04-10T10:43:04.313Z");
                createdateFrom = OffsetDateTime.parse("2022-12-23T03:22:14.898Z");
                createdateTo = OffsetDateTime.parse("2022-07-28T00:11:01.662Z");
                description = "nesciunt";
                filesuffix = "mollitia";
                fromdate = OffsetDateTime.parse("2022-02-23T13:33:54.639Z");
                group = "nostrum";
                max = 475325L;
                maxlatitude = 3306;
                maxlongitude = 9692.06;
                minlatitude = 662.07;
                minlongitude = 2656.32;
                name = "Maria Veum";
                skip = 256114L;
                text = "dolorum";
                todate = OffsetDateTime.parse("2021-08-23T14:57:18.247Z");
            }};            

            SearchGlossaryResponse res = sdk.typeGlossary.searchGlossary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
