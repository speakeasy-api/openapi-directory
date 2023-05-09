# search

## Overview

Code Search

### Available Operations

* [search](#search) - Searches through source code
* [searchperpackage](#searchperpackage) - Like /search, but aggregates per package

## search

Performs a search through the full Debian Code Search corpus, blocking until all results are available (might take a few seconds depending on the search query).

Search results are ordered by their ranking (best results come first).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchMatchModeEnum;
import org.openapis.openapi.models.operations.SearchRequest;
import org.openapis.openapi.models.operations.SearchResponse;
import org.openapis.openapi.models.operations.SearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchRequest req = new SearchRequest("quibusdam") {{
                matchMode = SearchMatchModeEnum.REGEXP;
            }};            

            SearchResponse res = sdk.search.search(req, new SearchSecurity("nulla") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.searchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchperpackage

The search results are currently sorted arbitrarily, but we intend to sort them by ranking eventually: https://github.com/Debian/dcs/blob/51338e934eb7ee18d00c5c18531c0790a83cb698/cmd/dcs-web/querymanager.go#L719

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchperpackageMatchModeEnum;
import org.openapis.openapi.models.operations.SearchperpackageRequest;
import org.openapis.openapi.models.operations.SearchperpackageResponse;
import org.openapis.openapi.models.operations.SearchperpackageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchperpackageRequest req = new SearchperpackageRequest("corrupti") {{
                matchMode = SearchperpackageMatchModeEnum.REGEXP;
            }};            

            SearchperpackageResponse res = sdk.search.searchperpackage(req, new SearchperpackageSecurity("vel") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.packageSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
