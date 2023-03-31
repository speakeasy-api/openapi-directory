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

import org.openapis.openapi.models.operations.SrcSearchlyApiV1ControllersSimilarityByContentRequestBody;
import org.openapis.openapi.models.operations.SrcSearchlyApiV1ControllersSimilarityByContentRequest;
import org.openapis.openapi.models.operations.SrcSearchlyApiV1ControllersSimilarityByContentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SrcSearchlyApiV1ControllersSimilarityByContentRequest req = new SrcSearchlyApiV1ControllersSimilarityByContentRequest() {{
                request = new SrcSearchlyApiV1ControllersSimilarityByContentRequestBody() {{
                    content = "corrupti";
                }};
            }};            

            SrcSearchlyApiV1ControllersSimilarityByContentResponse res = sdk.similarity.srcSearchlyApiV1ControllersSimilarityByContent(req);

            if (res.apiResponseSimilarity.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### similarity

* `srcSearchlyApiV1ControllersSimilarityByContent` - API endpoint to search similarity using content
* `srcSearchlyApiV1ControllersSimilarityBySong` - API endpoint to search similarity using a song identifier

### song

* `srcSearchlyApiV1ControllersSongSearch` - API endpoint to search songs from the database given a query
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
