# typeTypeMetametaField

## Overview

Search API for 'Metadata Field' entry type

### Available Operations

* [searchTypeMetametaField](#searchtypemetametafield) - Search API for 'Metadata Field' entry type

## searchTypeMetametaField

API to search for entries of type Metadata Field

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeMetametaFieldRequest;
import org.openapis.openapi.models.operations.SearchTypeMetametaFieldResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeMetametaFieldRequest req = new SearchTypeMetametaFieldRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-02-13T02:11:36.009Z");
                changedateTo = OffsetDateTime.parse("2021-07-07T09:10:06.875Z");
                createdateFrom = OffsetDateTime.parse("2021-06-21T05:39:24.978Z");
                createdateTo = OffsetDateTime.parse("2022-11-11T08:45:03.667Z");
                description = "illo";
                filesuffix = "architecto";
                fromdate = OffsetDateTime.parse("2022-09-06T08:10:19.294Z");
                group = "velit";
                max = 355685L;
                maxlatitude = 5929.46;
                maxlongitude = 8207.25;
                minlatitude = 6124.25;
                minlongitude = 5035.98;
                name = "Deanna Kuhn";
                searchTypeMetametaFieldDatabaseColumnSize = 633956L;
                searchTypeMetametaFieldDatatype = "voluptate";
                searchTypeMetametaFieldEnumerationValues = "cupiditate";
                searchTypeMetametaFieldFieldId = "maxime";
                searchTypeMetametaFieldFieldIndex = 828267L;
                searchTypeMetametaFieldMissing = "nihil";
                searchTypeMetametaFieldProperties = "sed";
                searchTypeMetametaFieldUnit = "optio";
                skip = 860830L;
                text = "magni";
                todate = OffsetDateTime.parse("2022-06-20T19:57:57.320Z");
            }};            

            SearchTypeMetametaFieldResponse res = sdk.typeTypeMetametaField.searchTypeMetametaField(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
