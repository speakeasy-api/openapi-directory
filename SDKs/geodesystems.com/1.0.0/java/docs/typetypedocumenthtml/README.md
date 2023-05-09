# typeTypeDocumentHtml

## Overview

Search API for 'HTML File' entry type

### Available Operations

* [searchTypeDocumentHtml](#searchtypedocumenthtml) - Search API for 'HTML File' entry type

## searchTypeDocumentHtml

API to search for entries of type HTML File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeDocumentHtmlRequest;
import org.openapis.openapi.models.operations.SearchTypeDocumentHtmlResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeDocumentHtmlRequest req = new SearchTypeDocumentHtmlRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-07-03T08:11:18.761Z");
                changedateTo = OffsetDateTime.parse("2021-02-01T00:25:41.757Z");
                createdateFrom = OffsetDateTime.parse("2022-07-23T11:52:33.371Z");
                createdateTo = OffsetDateTime.parse("2021-09-09T09:09:47.250Z");
                description = "sint";
                filesuffix = "autem";
                fromdate = OffsetDateTime.parse("2021-10-29T19:31:53.860Z");
                group = "ab";
                max = 683783L;
                maxlatitude = 9522.16;
                maxlongitude = 2227.71;
                minlatitude = 5280.82;
                minlongitude = 5618.58;
                name = "Cornelius Beatty";
                skip = 110804L;
                text = "numquam";
                todate = OffsetDateTime.parse("2022-09-25T13:17:27.346Z");
            }};            

            SearchTypeDocumentHtmlResponse res = sdk.typeTypeDocumentHtml.searchTypeDocumentHtml(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
