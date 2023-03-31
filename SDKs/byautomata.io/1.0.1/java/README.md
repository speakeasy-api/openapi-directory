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

import org.openapis.openapi.models.operations.GetContentproSearchQueryParams;
import org.openapis.openapi.models.operations.GetContentproSearchRequest;
import org.openapis.openapi.models.operations.GetContentproSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContentproSearchRequest req = new GetContentproSearchRequest() {{
                queryParams = new GetContentproSearchQueryParams() {{
                    terms = "corrupti";
                }};
            }};            

            GetContentproSearchResponse res = sdk.contentproSearch.getContentproSearch(req);

            if (res.getContentproSearch200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### contentproSearch

* `getContentproSearch` - Send search terms to receive the most relevant articles and companies.

### contentproSimilarText

* `postContentproSimilarText` - The /contentpro-similar-text endpoint accepts and arbitrary piece of text and returns similar articles and blogs written by companies.

### search

* `getSearch` - Send search terms to receive the most relevant companies along with text snippets.

### similar

* `getSimilar` - Send a company website to receive a list of companies related to them.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
