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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdRequest();
    $request->baseVersionId = 544883;
    $request->callback = 'illum';
    $request->format = 'vel';
    $request->targetScreenshotTestId = 623564;
    $request->targetVersionId = 645894;
    $request->tolerance = 3843.82;

    $requestSecurity = new GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionIdSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonParallelBaseVersionId($request, $requestSecurity);

    if ($response->singleComparisonTests !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultId

Get comparison results for all browsers in target screenshot test against a base screenshot result. The base result can be from the same test or from another test run at an earlier time. This is a one-to-many comparison.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultIdRequest();
    $request->baseResultId = 437587;
    $request->callback = 'magnam';
    $request->format = 'debitis';
    $request->targetScreenshotTestId = 56713;
    $request->targetVersionId = 963663;
    $request->tolerance = 2726.56;

    $requestSecurity = new GetScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultIdSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->getScreenshotsTargetScreenshotTestIdTargetVersionIdComparisonBaseResultId($request, $requestSecurity);

    if ($response->fullComparisonTest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultId

Get comparison results for a single target screenshot result against a base screenshot result. This is a one-to-one comparison.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdRequest();
    $request->baseResultId = 383441;
    $request->callback = 'molestiae';
    $request->format = 'minus';
    $request->targetResultId = 812169;
    $request->targetScreenshotTestId = 528895;
    $request->targetVersionId = 479977;
    $request->tolerance = 5680.45;

    $requestSecurity = new GetScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultIdSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->getScreenshotsTargetScreenshotTestIdTargetVersionIdTargetResultIdComparisonBaseResultId($request, $requestSecurity);

    if ($response->singleComparisonTest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
