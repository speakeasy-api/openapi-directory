# typeContact

## Overview

Search API for 'Contact List' entry type

### Available Operations

* [searchContact](#searchcontact) - Search API for 'Contact List' entry type

## searchContact

API to search for entries of type Contact List

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchContactRequest;
import org.openapis.openapi.models.operations.SearchContactResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchContactRequest req = new SearchContactRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-09-10T19:23:06.016Z");
                changedateTo = OffsetDateTime.parse("2022-06-18T21:26:08.081Z");
                createdateFrom = OffsetDateTime.parse("2022-09-22T18:43:20.498Z");
                createdateTo = OffsetDateTime.parse("2022-12-28T19:52:33.730Z");
                description = "architecto";
                filesuffix = "sit";
                fromdate = OffsetDateTime.parse("2022-11-09T08:03:12.737Z");
                group = "ab";
                max = 513760L;
                maxlatitude = 656.04;
                maxlongitude = 2226.58;
                minlatitude = 8562.77;
                minlongitude = 3694.9;
                name = "Cynthia Macejkovic";
                searchDbContactEmail = "officiis";
                searchDbContactInstitution = "esse";
                searchDbContactName = "necessitatibus";
                skip = 153369L;
                text = "veniam";
                todate = OffsetDateTime.parse("2022-04-15T18:45:38.448Z");
            }};            

            SearchContactResponse res = sdk.typeContact.searchContact(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
