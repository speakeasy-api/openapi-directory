# typeCommunityDatahub

## Overview

Search API for 'Data Hub' entry type

### Available Operations

* [searchCommunityDatahub](#searchcommunitydatahub) - Search API for 'Data Hub' entry type

## searchCommunityDatahub

API to search for entries of type Data Hub

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchCommunityDatahubRequest;
import org.openapis.openapi.models.operations.SearchCommunityDatahubResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchCommunityDatahubRequest req = new SearchCommunityDatahubRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-10-20T05:12:41.056Z");
                changedateTo = OffsetDateTime.parse("2021-11-10T12:47:28.024Z");
                createdateFrom = OffsetDateTime.parse("2022-11-08T01:11:44.885Z");
                createdateTo = OffsetDateTime.parse("2020-12-11T23:55:22.223Z");
                description = "ratione";
                filesuffix = "animi";
                fromdate = OffsetDateTime.parse("2020-06-01T00:59:41.712Z");
                group = "consequatur";
                max = 97258L;
                maxlatitude = 902.33;
                maxlongitude = 4977.77;
                minlatitude = 6191.83;
                minlongitude = 5810.82;
                name = "Josephine Boyer";
                skip = 859581L;
                text = "necessitatibus";
                todate = OffsetDateTime.parse("2022-09-24T01:02:47.291Z");
            }};            

            SearchCommunityDatahubResponse res = sdk.typeCommunityDatahub.searchCommunityDatahub(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
