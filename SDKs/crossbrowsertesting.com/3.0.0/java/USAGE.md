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