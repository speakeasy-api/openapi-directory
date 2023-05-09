# typeTypePointText

## Overview

Search API for 'Record Text File' entry type

### Available Operations

* [searchTypePointText](#searchtypepointtext) - Search API for 'Record Text File' entry type

## searchTypePointText

API to search for entries of type Record Text File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointTextRequest;
import org.openapis.openapi.models.operations.SearchTypePointTextResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointTextRequest req = new SearchTypePointTextRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-09-27T18:18:19.643Z");
                changedateTo = OffsetDateTime.parse("2022-07-17T05:02:09.973Z");
                createdateFrom = OffsetDateTime.parse("2022-08-08T20:26:05.563Z");
                createdateTo = OffsetDateTime.parse("2021-06-05T05:22:06.094Z");
                description = "rem";
                filesuffix = "eveniet";
                fromdate = OffsetDateTime.parse("2022-11-27T17:37:55.947Z");
                group = "repellat";
                max = 165108L;
                maxlatitude = 7301.94;
                maxlongitude = 9586.02;
                minlatitude = 871.69;
                minlongitude = 5927.91;
                name = "Brandy Lebsack";
                skip = 39783L;
                text = "vero";
                todate = OffsetDateTime.parse("2022-10-21T06:53:14.226Z");
            }};            

            SearchTypePointTextResponse res = sdk.typeTypePointText.searchTypePointText(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
