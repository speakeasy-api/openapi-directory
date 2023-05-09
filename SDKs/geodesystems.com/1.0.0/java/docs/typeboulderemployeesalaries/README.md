# typeBoulderEmployeeSalaries

## Overview

Search API for 'Boulder Employee Salaries' entry type

### Available Operations

* [searchBoulderEmployeeSalaries](#searchboulderemployeesalaries) - Search API for 'Boulder Employee Salaries' entry type

## searchBoulderEmployeeSalaries

API to search for entries of type Boulder Employee Salaries

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBoulderEmployeeSalariesRequest;
import org.openapis.openapi.models.operations.SearchBoulderEmployeeSalariesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBoulderEmployeeSalariesRequest req = new SearchBoulderEmployeeSalariesRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-05-29T20:03:41.130Z");
                changedateTo = OffsetDateTime.parse("2022-02-07T16:22:20.061Z");
                createdateFrom = OffsetDateTime.parse("2022-08-05T13:00:56.741Z");
                createdateTo = OffsetDateTime.parse("2021-11-23T23:35:18.899Z");
                description = "voluptatibus";
                filesuffix = "tempora";
                fromdate = OffsetDateTime.parse("2022-07-18T18:18:32.854Z");
                group = "reiciendis";
                max = 401713L;
                maxlatitude = 254.97;
                maxlongitude = 2484.13;
                minlatitude = 8880.44;
                minlongitude = 5058.66;
                name = "Alex Gottlieb";
                searchDbBoulderEmployeeSalariesDepartment = "rem";
                searchDbBoulderEmployeeSalariesEmployeeAnnualBaseSalary = 265.22;
                searchDbBoulderEmployeeSalariesEmployeeFlsaExemptYN = "nobis";
                searchDbBoulderEmployeeSalariesEmployeeFteInThisPosition = 6256.37;
                searchDbBoulderEmployeeSalariesEmployeeHourlyPayRate = 3335.07;
                searchDbBoulderEmployeeSalariesPayRangeMax = 3295.43;
                searchDbBoulderEmployeeSalariesPayRangeMin = 9241.59;
                searchDbBoulderEmployeeSalariesPositionDescription = "reiciendis";
                skip = 862319L;
                text = "magni";
                todate = OffsetDateTime.parse("2022-02-05T23:00:32.306Z");
            }};            

            SearchBoulderEmployeeSalariesResponse res = sdk.typeBoulderEmployeeSalaries.searchBoulderEmployeeSalaries(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
