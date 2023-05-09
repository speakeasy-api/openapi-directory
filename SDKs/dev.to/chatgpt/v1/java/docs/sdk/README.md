# SDK

## Overview

A plugin that recommends resources like articles or users to a user using ChatGP.

### Available Operations

* [getArticles](#getarticles) - Get a list of filtered articles

## getArticles

Get a list of filtered articles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetArticlesRequest;
import org.openapis.openapi.models.operations.GetArticlesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetArticlesRequest req = new GetArticlesRequest() {{
                page = 602763;
                perPage = 857946;
                q = "corrupti";
                top = "illum";
            }};            

            GetArticlesResponse res = sdk.sdk.getArticles(req);

            if (res.getArticlesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
