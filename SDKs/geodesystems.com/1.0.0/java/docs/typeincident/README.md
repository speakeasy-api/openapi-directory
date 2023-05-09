# typeIncident

## Overview

Search API for 'Incident' entry type

### Available Operations

* [searchIncident](#searchincident) - Search API for 'Incident' entry type

## searchIncident

API to search for entries of type Incident

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchIncidentRequest;
import org.openapis.openapi.models.operations.SearchIncidentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchIncidentRequest req = new SearchIncidentRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-09-24T04:06:59.820Z");
                changedateTo = OffsetDateTime.parse("2022-08-23T10:02:26.660Z");
                createdateFrom = OffsetDateTime.parse("2022-11-02T06:07:32.455Z");
                createdateTo = OffsetDateTime.parse("2022-02-12T19:07:29.722Z");
                description = "distinctio";
                filesuffix = "eius";
                fromdate = OffsetDateTime.parse("2022-06-24T10:43:59.224Z");
                group = "maiores";
                max = 35160L;
                maxlatitude = 3314.52;
                maxlongitude = 9062.32;
                minlatitude = 2060.63;
                minlongitude = 8163.65;
                name = "Olga Wyman";
                searchIncidentCause = "delectus";
                searchIncidentIncidenttype = "velit";
                searchIncidentState = "vitae";
                skip = 201096L;
                text = "similique";
                todate = OffsetDateTime.parse("2022-01-01T17:34:21.100Z");
            }};            

            SearchIncidentResponse res = sdk.typeIncident.searchIncident(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
