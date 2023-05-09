# search

## Overview

The search API is used to browse or find artifacts in the registry. This section describes the operations for searching for artifacts and versions. 

### Available Operations

* [searchArtifacts](#searchartifacts) - Search for artifacts
* [searchVersions](#searchversions) - Search artifact versions

## searchArtifacts

Returns a paginated list of all artifacts that match the provided search criteria.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchArtifactsOrderEnum;
import org.openapis.openapi.models.operations.SearchArtifactsOverEnum;
import org.openapis.openapi.models.operations.SearchArtifactsRequest;
import org.openapis.openapi.models.operations.SearchArtifactsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchArtifactsRequest req = new SearchArtifactsRequest(568434L, 135218L) {{
                order = SearchArtifactsOrderEnum.ASC;
                over = SearchArtifactsOverEnum.NAME;
                search = "natus";
            }};            

            SearchArtifactsResponse res = sdk.search.searchArtifacts(req);

            if (res.artifactSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchVersions

Searches for versions of a specific artifact.  This is typically used to get a listing
of all versions of an artifact (for example, in a user interface).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchVersionsRequest;
import org.openapis.openapi.models.operations.SearchVersionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchVersionsRequest req = new SearchVersionsRequest("sed", 612096L, 222321L);            

            SearchVersionsResponse res = sdk.search.searchVersions(req);

            if (res.versionSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
