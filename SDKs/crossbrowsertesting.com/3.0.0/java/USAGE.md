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