# typeTypeBlsSurvey

## Overview

Search API for 'BLS Survey' entry type

### Available Operations

* [searchTypeBlsSurvey](#searchtypeblssurvey) - Search API for 'BLS Survey' entry type

## searchTypeBlsSurvey

API to search for entries of type BLS Survey

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeBlsSurveyRequest;
import org.openapis.openapi.models.operations.SearchTypeBlsSurveyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeBlsSurveyRequest req = new SearchTypeBlsSurveyRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-03T23:21:08.092Z");
                changedateTo = OffsetDateTime.parse("2022-09-20T23:19:03.169Z");
                createdateFrom = OffsetDateTime.parse("2022-10-24T20:44:16.683Z");
                createdateTo = OffsetDateTime.parse("2022-01-04T23:17:50.527Z");
                description = "veniam";
                filesuffix = "quidem";
                fromdate = OffsetDateTime.parse("2021-09-15T01:50:57.399Z");
                group = "deserunt";
                max = 919730L;
                maxlatitude = 3659.98;
                maxlongitude = 5654.46;
                minlatitude = 1020.19;
                minlongitude = 7112.75;
                name = "Hugh Quigley";
                skip = 982447L;
                text = "ipsum";
                todate = OffsetDateTime.parse("2022-11-20T01:15:44.636Z");
            }};            

            SearchTypeBlsSurveyResponse res = sdk.typeTypeBlsSurvey.searchTypeBlsSurvey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
