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

import org.openapis.openapi.models.operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdSecurity;
import org.openapis.openapi.models.operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdPathParams;
import org.openapis.openapi.models.operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdQueryParams;
import org.openapis.openapi.models.operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdRequest;
import org.openapis.openapi.models.operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdResponse;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdRequest req = new GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdRequest() {{
                security = new GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdPathParams() {{
                    baseVersionId = 548814;
                    targetScreenshotTestId = 592845;
                    targetVersionId = 715190;
                }};
                queryParams = new GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdQueryParams() {{
                    callback = "quibusdam";
                    format = "unde";
                    tolerance = 8579.46;
                }};
            }};            

            GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdResponse res = sdk.getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionId(req);

            if (res.singleComparisonTests.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionId` - Compare Screenshot Test Versions
* `getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultId` - Compare Full Screenshot Test
* `getScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultId` - Compare Single Screenshot
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
