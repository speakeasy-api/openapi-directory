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
import org.openapis.openapi.models.operations.PostRequestSubjectErasureResponse;
import org.openapis.openapi.models.operations.PostRequestSubjectErasureSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.SubjectErasureByPspReferenceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SubjectErasureByPspReferenceRequest req = new SubjectErasureByPspReferenceRequest() {{
                forceErasure = false;
                merchantAccount = "corrupti";
                pspReference = "provident";
            }};            

            PostRequestSubjectErasureResponse res = sdk.general.postRequestSubjectErasure(req, new PostRequestSubjectErasureSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.subjectErasureResponse != null) {
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


### [general](docs/general/README.md)

* [postRequestSubjectErasure](docs/general/README.md#postrequestsubjecterasure) - Submit a Subject Erasure Request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
