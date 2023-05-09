# typeTypePointSimpleRecords

## Overview

Search API for 'Simple Records' entry type

### Available Operations

* [searchTypePointSimpleRecords](#searchtypepointsimplerecords) - Search API for 'Simple Records' entry type

## searchTypePointSimpleRecords

API to search for entries of type Simple Records

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointSimpleRecordsRequest;
import org.openapis.openapi.models.operations.SearchTypePointSimpleRecordsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointSimpleRecordsRequest req = new SearchTypePointSimpleRecordsRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-05-26T07:38:11.121Z");
                changedateTo = OffsetDateTime.parse("2022-02-18T23:32:45.380Z");
                createdateFrom = OffsetDateTime.parse("2022-08-12T08:15:08.279Z");
                createdateTo = OffsetDateTime.parse("2021-05-30T09:42:33.114Z");
                description = "magni";
                filesuffix = "mollitia";
                fromdate = OffsetDateTime.parse("2022-02-01T11:51:34.202Z");
                group = "quas";
                max = 13688L;
                maxlatitude = 4222.15;
                maxlongitude = 2099.2;
                minlatitude = 1312.49;
                minlongitude = 6999.89;
                name = "Marion Hamill";
                skip = 434302L;
                text = "voluptatibus";
                todate = OffsetDateTime.parse("2022-08-17T23:17:24.961Z");
            }};            

            SearchTypePointSimpleRecordsResponse res = sdk.typeTypePointSimpleRecords.searchTypePointSimpleRecords(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
