<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonParallelBaseVersionIDRequest(
    base_version_id=548814,
    callback="provident",
    format="distinctio",
    target_screenshot_test_id=844266,
    target_version_id=602763,
    tolerance=8579.46,
)
    
res = s.get_screenshots_target_screenshot_test_id_target_version_id_comparison_parallel_base_version_id_(req, operations.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonParallelBaseVersionIDSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.single_comparison_tests is not None:
    # handle response
```
<!-- End SDK Example Usage -->