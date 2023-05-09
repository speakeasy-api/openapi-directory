# typeVoteYesno

## Overview

Search API for 'Simple Yes-No Vote' entry type

### Available Operations

* [searchVoteYesno](#searchvoteyesno) - Search API for 'Simple Yes-No Vote' entry type

## searchVoteYesno

API to search for entries of type Simple Yes-No Vote

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchVoteYesnoRequest;
import org.openapis.openapi.models.operations.SearchVoteYesnoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchVoteYesnoRequest req = new SearchVoteYesnoRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-06T16:12:59.911Z");
                changedateTo = OffsetDateTime.parse("2021-10-07T22:54:11.070Z");
                createdateFrom = OffsetDateTime.parse("2021-05-10T21:05:54.671Z");
                createdateTo = OffsetDateTime.parse("2022-02-11T04:42:06.535Z");
                description = "reiciendis";
                filesuffix = "voluptatum";
                fromdate = OffsetDateTime.parse("2022-07-22T15:24:28.373Z");
                group = "animi";
                max = 638092L;
                maxlatitude = 9095.58;
                maxlongitude = 624.09;
                minlatitude = 2365.64;
                minlongitude = 9417.3;
                name = "Sylvia Ruecker";
                searchDbVoteYesnoVote = "unde";
                skip = 992178L;
                text = "nam";
                todate = OffsetDateTime.parse("2021-04-17T22:07:18.435Z");
            }};            

            SearchVoteYesnoResponse res = sdk.typeVoteYesno.searchVoteYesno(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
