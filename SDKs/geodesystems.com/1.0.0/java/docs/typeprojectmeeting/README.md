# typeProjectMeeting

## Overview

Search API for 'Meeting' entry type

### Available Operations

* [searchProjectMeeting](#searchprojectmeeting) - Search API for 'Meeting' entry type

## searchProjectMeeting

API to search for entries of type Meeting

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectMeetingRequest;
import org.openapis.openapi.models.operations.SearchProjectMeetingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectMeetingRequest req = new SearchProjectMeetingRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-03T21:11:03.072Z");
                changedateTo = OffsetDateTime.parse("2022-08-30T05:31:52.329Z");
                createdateFrom = OffsetDateTime.parse("2022-10-24T02:42:20.227Z");
                createdateTo = OffsetDateTime.parse("2021-05-24T19:52:17.085Z");
                description = "recusandae";
                filesuffix = "cumque";
                fromdate = OffsetDateTime.parse("2022-06-26T08:32:32.784Z");
                group = "iure";
                max = 982927L;
                maxlatitude = 6676.46;
                maxlongitude = 1440.58;
                minlatitude = 842.07;
                minlongitude = 8996.52;
                name = "Keith Hills";
                searchProjectMeetingLocation = "quidem";
                searchProjectMeetingParticipants = "non";
                searchProjectMeetingTopic = "beatae";
                skip = 123495L;
                text = "molestias";
                todate = OffsetDateTime.parse("2022-07-31T14:45:14.723Z");
            }};            

            SearchProjectMeetingResponse res = sdk.typeProjectMeeting.searchProjectMeeting(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
