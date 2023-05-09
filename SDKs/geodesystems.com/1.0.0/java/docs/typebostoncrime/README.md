# typeBostonCrime

## Overview

Search API for 'Boston Crime' entry type

### Available Operations

* [searchBostonCrime](#searchbostoncrime) - Search API for 'Boston Crime' entry type

## searchBostonCrime

API to search for entries of type Boston Crime

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBostonCrimeRequest;
import org.openapis.openapi.models.operations.SearchBostonCrimeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBostonCrimeRequest req = new SearchBostonCrimeRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-12-24T16:30:16.544Z");
                changedateTo = OffsetDateTime.parse("2022-06-19T07:05:05.913Z");
                createdateFrom = OffsetDateTime.parse("2022-04-27T07:00:05.421Z");
                createdateTo = OffsetDateTime.parse("2022-06-12T08:30:58.411Z");
                description = "atque";
                filesuffix = "explicabo";
                fromdate = OffsetDateTime.parse("2022-08-10T16:09:39.108Z");
                group = "fugit";
                max = 956406L;
                maxlatitude = 1598.7;
                maxlongitude = 1871.31;
                minlatitude = 1294.12;
                minlongitude = 9039.84;
                name = "Ivan Bosco";
                searchDbBostonCrimeDayOfWeek = "accusamus";
                searchDbBostonCrimeDistrict = "veritatis";
                searchDbBostonCrimeHour = 4586.04;
                searchDbBostonCrimeLocation = "quod";
                searchDbBostonCrimeMonth = 7241.68;
                searchDbBostonCrimeOffense = "vero";
                searchDbBostonCrimeOffenseCodeGroup = "aliquid";
                searchDbBostonCrimeOffenseDescription = "quasi";
                searchDbBostonCrimeReportingArea = "saepe";
                searchDbBostonCrimeShooting = "vel";
                searchDbBostonCrimeStreet = "harum";
                searchDbBostonCrimeYear = 4732.21;
                skip = 699622L;
                text = "occaecati";
                todate = OffsetDateTime.parse("2022-04-14T13:42:03.513Z");
            }};            

            SearchBostonCrimeResponse res = sdk.typeBostonCrime.searchBostonCrime(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
