# typeFtp

## Overview

Search API for 'Remote FTP File View' entry type

### Available Operations

* [searchFtp](#searchftp) - Search API for 'Remote FTP File View' entry type

## searchFtp

API to search for entries of type Remote FTP File View

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchFtpRequest;
import org.openapis.openapi.models.operations.SearchFtpResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchFtpRequest req = new SearchFtpRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-02-28T18:13:48.502Z");
                changedateTo = OffsetDateTime.parse("2022-04-16T16:24:27.042Z");
                createdateFrom = OffsetDateTime.parse("2022-06-21T04:17:16.724Z");
                createdateTo = OffsetDateTime.parse("2021-07-20T13:08:36.205Z");
                description = "praesentium";
                filesuffix = "odit";
                fromdate = OffsetDateTime.parse("2022-08-22T23:12:04.283Z");
                group = "error";
                max = 937117L;
                maxlatitude = 2393.37;
                maxlongitude = 9233.06;
                minlatitude = 6308.71;
                minlongitude = 2828.37;
                name = "Tim Breitenberg";
                skip = 963198L;
                text = "cupiditate";
                todate = OffsetDateTime.parse("2022-09-30T10:14:18.921Z");
            }};            

            SearchFtpResponse res = sdk.typeFtp.searchFtp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
