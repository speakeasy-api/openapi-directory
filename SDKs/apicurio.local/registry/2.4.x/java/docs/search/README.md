# search

## Overview

The search API is used to browse or find artifacts in the registry. This section describes the operations for searching for artifacts and versions. 

### Available Operations

* [searchArtifacts](#searchartifacts) - Search for artifacts
* [searchArtifactsByContent](#searchartifactsbycontent) - Search for artifacts by content

## searchArtifacts

Returns a paginated list of all artifacts that match the provided filter criteria.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchArtifactsRequest;
import org.openapis.openapi.models.operations.SearchArtifactsResponse;
import org.openapis.openapi.models.shared.SortByEnum;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchArtifactsRequest req = new SearchArtifactsRequest() {{
                contentId = 828940L;
                description = "ipsam";
                globalId = 4695L;
                group = "fugit";
                labels = new String[]{{
                    add("excepturi"),
                    add("tempora"),
                    add("facilis"),
                }};
                limit = 735194L;
                name = "Lucia Kemmer";
                offset = 576157L;
                order = SortOrderEnum.ASC;
                orderby = SortByEnum.CREATED_ON;
                properties = new String[]{{
                    add("sint"),
                    add("officia"),
                    add("dolor"),
                    add("debitis"),
                }};
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

## searchArtifactsByContent

Returns a paginated list of all artifacts with at least one version that matches the
posted content.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchArtifactsByContentOrderEnum;
import org.openapis.openapi.models.operations.SearchArtifactsByContentOrderbyEnum;
import org.openapis.openapi.models.operations.SearchArtifactsByContentRequest;
import org.openapis.openapi.models.operations.SearchArtifactsByContentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchArtifactsByContentRequest req = new SearchArtifactsByContentRequest("a".getBytes()) {{
                artifactType = "AVRO";
                canonical = false;
                limit = 680056L;
                offset = 447125L;
                order = SearchArtifactsByContentOrderEnum.ASC;
                orderby = SearchArtifactsByContentOrderbyEnum.CREATED_ON;
            }};            

            SearchArtifactsByContentResponse res = sdk.search.searchArtifactsByContent(req);

            if (res.artifactSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
