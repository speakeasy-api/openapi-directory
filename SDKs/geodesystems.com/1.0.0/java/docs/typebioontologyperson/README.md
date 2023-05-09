# typeBioOntologyPerson

## Overview

Search API for 'Person' entry type

### Available Operations

* [searchBioOntologyPerson](#searchbioontologyperson) - Search API for 'Person' entry type

## searchBioOntologyPerson

API to search for entries of type Person

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioOntologyPersonRequest;
import org.openapis.openapi.models.operations.SearchBioOntologyPersonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioOntologyPersonRequest req = new SearchBioOntologyPersonRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-11T06:25:10.430Z");
                changedateTo = OffsetDateTime.parse("2021-12-18T20:09:27.741Z");
                createdateFrom = OffsetDateTime.parse("2020-03-20T18:01:24.992Z");
                createdateTo = OffsetDateTime.parse("2021-08-04T18:39:34.709Z");
                description = "perspiciatis";
                filesuffix = "voluptatem";
                fromdate = OffsetDateTime.parse("2022-07-04T15:50:14.407Z");
                group = "blanditiis";
                max = 621479L;
                maxlatitude = 503.7;
                maxlongitude = 5772.29;
                minlatitude = 6990.98;
                minlongitude = 2378.93;
                name = "Merle Gleichner";
                searchBioOntologyPersonGender = "deleniti";
                skip = 864282L;
                text = "provident";
                todate = OffsetDateTime.parse("2020-10-23T12:23:35.067Z");
            }};            

            SearchBioOntologyPersonResponse res = sdk.typeBioOntologyPerson.searchBioOntologyPerson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
