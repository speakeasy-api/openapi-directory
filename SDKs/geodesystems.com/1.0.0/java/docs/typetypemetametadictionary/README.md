# typeTypeMetametaDictionary

## Overview

Search API for 'Metadata Dictionary' entry type

### Available Operations

* [searchTypeMetametaDictionary](#searchtypemetametadictionary) - Search API for 'Metadata Dictionary' entry type

## searchTypeMetametaDictionary

API to search for entries of type Metadata Dictionary

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeMetametaDictionaryRequest;
import org.openapis.openapi.models.operations.SearchTypeMetametaDictionaryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeMetametaDictionaryRequest req = new SearchTypeMetametaDictionaryRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-09-04T22:19:54.604Z");
                changedateTo = OffsetDateTime.parse("2020-12-14T09:11:21.253Z");
                createdateFrom = OffsetDateTime.parse("2022-12-22T07:55:07.552Z");
                createdateTo = OffsetDateTime.parse("2022-01-23T09:14:18.952Z");
                description = "quis";
                filesuffix = "dolorem";
                fromdate = OffsetDateTime.parse("2022-09-13T10:23:58.341Z");
                group = "quo";
                max = 91736L;
                maxlatitude = 761.45;
                maxlongitude = 6688.81;
                minlatitude = 1580.59;
                minlongitude = 3322.37;
                name = "Wallace Ritchie";
                searchTypeMetametaDictionaryDictionaryType = "sunt";
                searchTypeMetametaDictionaryFieldIndex = 982804L;
                searchTypeMetametaDictionaryHandlerClass = "excepturi";
                searchTypeMetametaDictionaryIsgroup = false;
                searchTypeMetametaDictionaryProperties = "ducimus";
                searchTypeMetametaDictionaryShortName = "dolore";
                searchTypeMetametaDictionarySuperType = "aspernatur";
                searchTypeMetametaDictionaryWikiText = "molestias";
                skip = 686291L;
                text = "at";
                todate = OffsetDateTime.parse("2021-08-27T10:02:33.600Z");
            }};            

            SearchTypeMetametaDictionaryResponse res = sdk.typeTypeMetametaDictionary.searchTypeMetametaDictionary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
