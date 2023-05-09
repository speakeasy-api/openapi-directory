# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            KeywordSearchRequest req = new KeywordSearchRequest("corrupti", "provident") {{
                numberOfProducts = 715190L;
                sortBy = "quibusdam";
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [amz](docs/amz/README.md)

* [keywordSearch](docs/amz/README.md#keywordsearch) - fetch results auf a keyword search on Amazon
* [requestBuyRecommendation](docs/amz/README.md#requestbuyrecommendation) - request buy recommendations to a given product
* [requestProduct](docs/amz/README.md#requestproduct) - lookup product information
* [sortOptions](docs/amz/README.md#sortoptions) - request available sort options to use in keyword search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
