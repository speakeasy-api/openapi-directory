# type2017BoulderElectionExpenditures

## Overview

Search API for '2017 Boulder Election Expenditures' entry type

### Available Operations

* [search2017BoulderElectionExpenditures](#search2017boulderelectionexpenditures) - Search API for '2017 Boulder Election Expenditures' entry type

## search2017BoulderElectionExpenditures

API to search for entries of type 2017 Boulder Election Expenditures

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Search2017BoulderElectionExpendituresRequest;
import org.openapis.openapi.models.operations.Search2017BoulderElectionExpendituresResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Search2017BoulderElectionExpendituresRequest req = new Search2017BoulderElectionExpendituresRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-04-22T12:08:58.275Z");
                changedateTo = OffsetDateTime.parse("2022-05-18T09:34:54.894Z");
                createdateFrom = OffsetDateTime.parse("2022-03-26T09:37:56.283Z");
                createdateTo = OffsetDateTime.parse("2022-09-14T09:35:47.986Z");
                description = "debitis";
                filesuffix = "ipsa";
                fromdate = OffsetDateTime.parse("2022-03-08T10:35:32.561Z");
                group = "suscipit";
                max = 477665L;
                maxlatitude = 7917.25;
                maxlongitude = 8121.69;
                minlatitude = 5288.95;
                minlongitude = 4799.77;
                name = "Charlie Walsh II";
                searchDb2017BoulderElectionExpendituresCity = "veritatis";
                searchDb2017BoulderElectionExpendituresCommittee = "deserunt";
                searchDb2017BoulderElectionExpendituresExpenditure = 202.18;
                searchDb2017BoulderElectionExpendituresName = "ipsam";
                searchDb2017BoulderElectionExpendituresPurpose = "repellendus";
                searchDb2017BoulderElectionExpendituresState = "sapiente";
                searchDb2017BoulderElectionExpendituresStreet = "quo";
                searchDb2017BoulderElectionExpendituresTransactionDate = "odit";
                searchDb2017BoulderElectionExpendituresZip = "at";
                skip = 870088L;
                text = "maiores";
                todate = OffsetDateTime.parse("2022-03-15T07:22:15.330Z");
            }};            

            Search2017BoulderElectionExpendituresResponse res = sdk.type2017BoulderElectionExpenditures.search2017BoulderElectionExpenditures(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
