# SDK

## Overview

API for Internet Archive's Search-related services


### Available Operations

* [getSearchV1Fields](#getsearchv1fields) - Fields that can be requested
* [getSearchV1Organic](#getsearchv1organic) - Return relevance-based results from search queries

* [getSearchV1Scrape](#getsearchv1scrape) - Scrape search results from Internet Archive, allowing a scrolling cursor


## getSearchV1Fields

Fields that can be requested

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchV1FieldsRequest;
import org.openapis.openapi.models.operations.GetSearchV1FieldsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSearchV1FieldsRequest req = new GetSearchV1FieldsRequest() {{
                callback = "provident";
            }};            

            GetSearchV1FieldsResponse res = sdk.sdk.getSearchV1Fields(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSearchV1Organic

Return relevance-based results from search queries


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchV1OrganicRequest;
import org.openapis.openapi.models.operations.GetSearchV1OrganicResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSearchV1OrganicRequest req = new GetSearchV1OrganicRequest() {{
                callback = "distinctio";
                field = "quibusdam";
                q = "unde";
                size = 857946L;
                totalOnly = false;
            }};            

            GetSearchV1OrganicResponse res = sdk.sdk.getSearchV1Organic(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSearchV1Scrape

Scrape search results from Internet Archive, allowing a scrolling cursor


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchV1ScrapeRequest;
import org.openapis.openapi.models.operations.GetSearchV1ScrapeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSearchV1ScrapeRequest req = new GetSearchV1ScrapeRequest() {{
                callback = "corrupti";
                cursor = "illum";
                field = "vel";
                q = "error";
                size = 645894L;
                sort = "suscipit";
                totalOnly = false;
            }};            

            GetSearchV1ScrapeResponse res = sdk.sdk.getSearchV1Scrape(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
