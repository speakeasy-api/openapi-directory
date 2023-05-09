# SDK

## Overview

What's in this version: 
 1. Compare two screenshots for layout differences 
 2. Compare a full screenshot test of browsers to a single baseline browser for layout differences. 
 3. Compare a screenshot test version to another test version - good for regression tests. 
 4. Get links to the Comparison UI for visual representation of layout differences

### Available Operations

* [getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionId](#getscreenshotstargetscreenshottestidtargetversionidcomparisonparallelbaseversionid) - Compare Screenshot Test Versions
* [getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultId](#getscreenshotstargetscreenshottestidtargetversionidcomparisonbaseresultid) - Compare Full Screenshot Test
* [getScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultId](#getscreenshotstargetscreenshottestidtargetversionidtargetresultidcomparisonbaseresultid) - Compare Single Screenshot

## getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionId

Get comparison results for all browsers in target screenshot test against the same browser in the base screenshot test. This is a good method for regression testing. For example, you've run a screenshot test against a set of browsers that is "good". Then, after some changes, you run a new screenshot test against the same set of browsers. This method will compare each of the same browsers against each other. For example, IE9 will be compared to IE9 from an earlier test. This is a many-to-many comparison where the OS/Browser/Resolution must match between the two test versions in order for the comparison to return results. The two versions can be from the same screenshot_test_id or not.

### Example Usage

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

            GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdRequest req = new GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdRequest(423655L, 623564L, 645894L) {{
                callback = "suscipit";
                format = "iure";
                tolerance = 2975.34;
            }};            

            GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdResponse res = sdk.sdk.getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionId(req, new GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdSecurity("debitis", "ipsa") {{
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

## getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultId

Get comparison results for all browsers in target screenshot test against a base screenshot result. The base result can be from the same test or from another test run at an earlier time. This is a one-to-many comparison.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultIdRequest;
import org.openapis.openapi.models.operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultIdResponse;
import org.openapis.openapi.models.operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultIdRequest req = new GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultIdRequest(963663L, 272656L, 383441L) {{
                callback = "molestiae";
                format = "minus";
                tolerance = 8121.69;
            }};            

            GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultIdResponse res = sdk.sdk.getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultId(req, new GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultIdSecurity("voluptatum", "iusto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.fullComparisonTest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultId

Get comparison results for a single target screenshot result against a base screenshot result. This is a one-to-one comparison.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdRequest;
import org.openapis.openapi.models.operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdResponse;
import org.openapis.openapi.models.operations.GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdRequest req = new GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdRequest(568045L, 392785L, 925597L, 836079L) {{
                callback = "ab";
                format = "quis";
                tolerance = 871.29;
            }};            

            GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdResponse res = sdk.sdk.getScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultId(req, new GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdSecurity("deserunt", "perferendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.singleComparisonTest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
