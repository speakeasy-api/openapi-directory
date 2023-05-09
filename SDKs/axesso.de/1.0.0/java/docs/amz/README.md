# amz

## Overview

APIs for request on Amazon

Find out more
<http://api.axesso.de/>
### Available Operations

* [keywordSearch](#keywordsearch) - fetch results auf a keyword search on Amazon
* [requestBuyRecommendation](#requestbuyrecommendation) - request buy recommendations to a given product
* [requestProduct](#requestproduct) - lookup product information
* [sortOptions](#sortoptions) - request available sort options to use in keyword search

## keywordSearch

fetch results auf a keyword search on Amazon

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeywordSearchRequest;
import org.openapis.openapi.models.operations.KeywordSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeywordSearchRequest req = new KeywordSearchRequest("unde", "nulla") {{
                numberOfProducts = 544883L;
                sortBy = "illum";
            }};            

            KeywordSearchResponse res = sdk.amz.keywordSearch(req);

            if (res.keywordSearchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestBuyRecommendation

request buy recommendations to a given product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestBuyRecommendationRequest;
import org.openapis.openapi.models.operations.RequestBuyRecommendationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RequestBuyRecommendationRequest req = new RequestBuyRecommendationRequest("vel");            

            RequestBuyRecommendationResponse res = sdk.amz.requestBuyRecommendation(req);

            if (res.buyRecommendationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestProduct

lookup product information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestProductRequest;
import org.openapis.openapi.models.operations.RequestProductResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RequestProductRequest req = new RequestProductRequest("error") {{
                size = "deserunt";
            }};            

            RequestProductResponse res = sdk.amz.requestProduct(req);

            if (res.productDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sortOptions

request available sort options to use in keyword search

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SortOptionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SortOptionsResponse res = sdk.amz.sortOptions();

            if (res.sortOptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
