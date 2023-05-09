# typeChatroom

## Overview

Search API for 'Chat Room' entry type

### Available Operations

* [searchChatroom](#searchchatroom) - Search API for 'Chat Room' entry type

## searchChatroom

API to search for entries of type Chat Room

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchChatroomRequest;
import org.openapis.openapi.models.operations.SearchChatroomResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchChatroomRequest req = new SearchChatroomRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-07-11T17:54:29.915Z");
                changedateTo = OffsetDateTime.parse("2022-06-13T02:57:02.580Z");
                createdateFrom = OffsetDateTime.parse("2022-02-17T14:59:36.472Z");
                createdateTo = OffsetDateTime.parse("2022-06-09T15:08:05.768Z");
                description = "laborum";
                filesuffix = "distinctio";
                fromdate = OffsetDateTime.parse("2021-12-15T04:55:40.282Z");
                group = "aliquam";
                max = 320565L;
                maxlatitude = 9979.63;
                maxlongitude = 30.99;
                minlatitude = 3621.89;
                minlongitude = 5973.03;
                name = "Dr. Iris Hodkiewicz";
                skip = 174658L;
                text = "id";
                todate = OffsetDateTime.parse("2022-09-16T00:03:17.363Z");
            }};            

            SearchChatroomResponse res = sdk.typeChatroom.searchChatroom(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
