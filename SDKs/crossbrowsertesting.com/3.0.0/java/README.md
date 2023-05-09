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
import org.openapis.openapi.models.operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdRequest;
import org.openapis.openapi.models.operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdResponse;
import org.openapis.openapi.models.operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdRequest req = new GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdRequest(548814L, 592845L, 715190L) {{
                callback = "quibusdam";
                format = "unde";
                tolerance = 8579.46;
            }};            

            GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdResponse res = sdk.getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionId(req, new GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdSecurity("corrupti", "illum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.singleComparisonTests != null) {
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

### [SDK](docs/sdk/README.md)

* [getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionId](docs/sdk/README.md#getscreenshotstargetscreenshottestidtargetversionidcomparisonparallelbaseversionid) - Compare Screenshot Test Versions
* [getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultId](docs/sdk/README.md#getscreenshotstargetscreenshottestidtargetversionidcomparisonbaseresultid) - Compare Full Screenshot Test
* [getScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultId](docs/sdk/README.md#getscreenshotstargetscreenshottestidtargetversionidtargetresultidcomparisonbaseresultid) - Compare Single Screenshot
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
