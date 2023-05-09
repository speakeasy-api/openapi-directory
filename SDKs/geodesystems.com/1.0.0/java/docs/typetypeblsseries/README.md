# typeTypeBlsSeries

## Overview

Search API for 'BLS Series' entry type

### Available Operations

* [searchTypeBlsSeries](#searchtypeblsseries) - Search API for 'BLS Series' entry type

## searchTypeBlsSeries

API to search for entries of type BLS Series

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeBlsSeriesRequest;
import org.openapis.openapi.models.operations.SearchTypeBlsSeriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeBlsSeriesRequest req = new SearchTypeBlsSeriesRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-07-07T02:17:11.579Z");
                changedateTo = OffsetDateTime.parse("2022-02-06T14:06:29.385Z");
                createdateFrom = OffsetDateTime.parse("2021-10-06T15:52:44.474Z");
                createdateTo = OffsetDateTime.parse("2022-11-09T19:30:20.243Z");
                description = "ullam";
                filesuffix = "ullam";
                fromdate = OffsetDateTime.parse("2022-05-02T06:02:30.053Z");
                group = "qui";
                max = 508773L;
                maxlatitude = 2371.89;
                maxlongitude = 5191.32;
                minlatitude = 1835.04;
                minlongitude = 6481.66;
                name = "Troy Leuschke";
                searchTypeBlsSeriesArea = "reiciendis";
                searchTypeBlsSeriesIndustry = "possimus";
                searchTypeBlsSeriesItem = "odit";
                searchTypeBlsSeriesMeasureDataType = "consectetur";
                searchTypeBlsSeriesSeasonality = "inventore";
                searchTypeBlsSeriesSector = "minima";
                searchTypeBlsSeriesSurveyName = "facilis";
                skip = 708360L;
                text = "deserunt";
                todate = OffsetDateTime.parse("2022-08-18T14:16:26.757Z");
            }};            

            SearchTypeBlsSeriesResponse res = sdk.typeTypeBlsSeries.searchTypeBlsSeries(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
