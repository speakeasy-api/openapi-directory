# SDK

## Overview

Get the latest business news articles.

### Available Operations

* [getNews](#getnews) - Retrieves the latest news whose content contains the query string.

## getNews

Retrieves the latest news whose content contains the query string.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNewsRequest;
import org.openapis.openapi.models.operations.GetNewsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNewsRequest req = new GetNewsRequest() {{
                query = "provident";
            }};            

            GetNewsResponse res = sdk.sdk.getNews(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
