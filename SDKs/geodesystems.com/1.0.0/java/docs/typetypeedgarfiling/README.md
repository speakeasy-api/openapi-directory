# typeTypeEdgarFiling

## Overview

Search API for 'SEC EDGAR Filing' entry type

### Available Operations

* [searchTypeEdgarFiling](#searchtypeedgarfiling) - Search API for 'SEC EDGAR Filing' entry type

## searchTypeEdgarFiling

API to search for entries of type SEC EDGAR Filing

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeEdgarFilingRequest;
import org.openapis.openapi.models.operations.SearchTypeEdgarFilingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeEdgarFilingRequest req = new SearchTypeEdgarFilingRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-09-20T22:00:48.719Z");
                changedateTo = OffsetDateTime.parse("2021-04-04T01:27:13.665Z");
                createdateFrom = OffsetDateTime.parse("2021-08-21T12:05:45.550Z");
                createdateTo = OffsetDateTime.parse("2022-02-08T10:54:10.339Z");
                description = "omnis";
                filesuffix = "possimus";
                fromdate = OffsetDateTime.parse("2020-03-25T08:28:41.959Z");
                group = "expedita";
                max = 481307L;
                maxlatitude = 4564.73;
                maxlongitude = 6873.52;
                minlatitude = 3216.54;
                minlongitude = 8010.59;
                name = "Christy Swift";
                searchTypeEdgarFilingCikNumber = "officia";
                searchTypeEdgarFilingCompanyName = "maiores";
                searchTypeEdgarFilingFormType = "cupiditate";
                searchTypeEdgarFilingIrsNumber = "illo";
                searchTypeEdgarFilingStandardIndustrialClassification = "saepe";
                searchTypeEdgarFilingState = "enim";
                skip = 52407L;
                text = "ex";
                todate = OffsetDateTime.parse("2020-02-12T00:23:13.319Z");
            }};            

            SearchTypeEdgarFilingResponse res = sdk.typeTypeEdgarFiling.searchTypeEdgarFiling(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
