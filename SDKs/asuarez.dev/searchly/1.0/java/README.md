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
import org.openapis.openapi.models.operations.SrcSearchlyApiV1ControllersSimilarityByContentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SrcSearchlyApiV1ControllersSimilarityByContentRequestBody req = new SrcSearchlyApiV1ControllersSimilarityByContentRequestBody() {{
                content = "corrupti";
            }};            

            SrcSearchlyApiV1ControllersSimilarityByContentResponse res = sdk.similarity.srcSearchlyApiV1ControllersSimilarityByContent(req);

            if (res.apiResponseSimilarity != null) {
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


### [similarity](docs/similarity/README.md)

* [srcSearchlyApiV1ControllersSimilarityByContent](docs/similarity/README.md#srcsearchlyapiv1controllerssimilaritybycontent) - API endpoint to search similarity using content
* [srcSearchlyApiV1ControllersSimilarityBySong](docs/similarity/README.md#srcsearchlyapiv1controllerssimilaritybysong) - API endpoint to search similarity using a song identifier

### [song](docs/song/README.md)

* [srcSearchlyApiV1ControllersSongSearch](docs/song/README.md#srcsearchlyapiv1controllerssongsearch) - API endpoint to search songs from the database given a query
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
