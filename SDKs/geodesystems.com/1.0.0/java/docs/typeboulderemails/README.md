# typeBoulderEmails

## Overview

Search API for 'Boulder Council Emails' entry type

### Available Operations

* [searchBoulderEmails](#searchboulderemails) - Search API for 'Boulder Council Emails' entry type

## searchBoulderEmails

API to search for entries of type Boulder Council Emails

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBoulderEmailsRequest;
import org.openapis.openapi.models.operations.SearchBoulderEmailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBoulderEmailsRequest req = new SearchBoulderEmailsRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-12-15T01:59:29.520Z");
                changedateTo = OffsetDateTime.parse("2022-12-05T00:59:14.180Z");
                createdateFrom = OffsetDateTime.parse("2022-09-14T08:30:37.763Z");
                createdateTo = OffsetDateTime.parse("2022-08-09T14:55:41.766Z");
                description = "asperiores";
                filesuffix = "facilis";
                fromdate = OffsetDateTime.parse("2022-04-17T04:31:41.347Z");
                group = "ab";
                max = 611749L;
                maxlatitude = 2927.94;
                maxlongitude = 6719.07;
                minlatitude = 1523.54;
                minlongitude = 4475.16;
                name = "Melody Cole";
                searchDbBoulderEmailsEmailSubject = "architecto";
                searchDbBoulderEmailsPlainTextBody = "suscipit";
                searchDbBoulderEmailsReceivedDate = "sapiente";
                searchDbBoulderEmailsSentCc = "debitis";
                searchDbBoulderEmailsSentFrom = "illo";
                searchDbBoulderEmailsSentTo = "reiciendis";
                skip = 19300L;
                text = "corrupti";
                todate = OffsetDateTime.parse("2022-03-06T01:38:10.905Z");
            }};            

            SearchBoulderEmailsResponse res = sdk.typeBoulderEmails.searchBoulderEmails(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
