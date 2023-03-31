# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/crossbrowsertesting.com/3.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `get_screenshots_target_screenshot_test_id_target_version_id_comparison_parallel_base_version_id_` - Compare Screenshot Test Versions
* `get_screenshots_target_screenshot_test_id_target_version_id_comparison_base_result_id_` - Compare Full Screenshot Test
* `get_screenshots_target_screenshot_test_id_target_version_id_target_result_id_comparison_base_result_id_` - Compare Single Screenshot
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
