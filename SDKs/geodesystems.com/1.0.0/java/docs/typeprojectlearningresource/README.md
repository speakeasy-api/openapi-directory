# typeProjectLearningResource

## Overview

Search API for 'Teaching Resource' entry type

### Available Operations

* [searchProjectLearningResource](#searchprojectlearningresource) - Search API for 'Teaching Resource' entry type

## searchProjectLearningResource

API to search for entries of type Teaching Resource

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectLearningResourceRequest;
import org.openapis.openapi.models.operations.SearchProjectLearningResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectLearningResourceRequest req = new SearchProjectLearningResourceRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-05-20T09:40:46.168Z");
                changedateTo = OffsetDateTime.parse("2020-02-25T00:39:09.630Z");
                createdateFrom = OffsetDateTime.parse("2021-03-13T00:37:41.372Z");
                createdateTo = OffsetDateTime.parse("2022-03-09T16:14:03.266Z");
                description = "voluptas";
                filesuffix = "doloribus";
                fromdate = OffsetDateTime.parse("2020-08-21T17:46:18.554Z");
                group = "facere";
                max = 491380L;
                maxlatitude = 6143.46;
                maxlongitude = 5884.73;
                minlatitude = 2214.9;
                minlongitude = 5732.47;
                name = "Deborah Keeling";
                searchProjectLearningResourceGradeLevel = "autem";
                searchProjectLearningResourceTopic = "assumenda";
                skip = 129631L;
                text = "fugiat";
                todate = OffsetDateTime.parse("2022-12-20T00:52:58.130Z");
            }};            

            SearchProjectLearningResourceResponse res = sdk.typeProjectLearningResource.searchProjectLearningResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
