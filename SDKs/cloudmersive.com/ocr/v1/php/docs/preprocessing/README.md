# preprocessing

### Available Operations

* [preprocessingBinarize](#preprocessingbinarize) - Convert an image of text into a binarized (light and dark) view
* [preprocessingBinarizeAdvanced](#preprocessingbinarizeadvanced) - Convert an image of text into a binary (light and dark) view with ML
* [preprocessingGetPageAngle](#preprocessinggetpageangle) - Get the angle of the page / document / receipt
* [preprocessingUnrotate](#preprocessingunrotate) - Detect and unrotate a document image
* [preprocessingUnrotateAdvanced](#preprocessingunrotateadvanced) - Detect and unrotate a document image (advanced)
* [preprocessingUnskew](#preprocessingunskew) - Detect and unskew a photo of a document

## preprocessingBinarize

Perform an adaptive binarization algorithm on the input image to prepare it for further OCR operations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingBinarizeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingBinarizeRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingBinarizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreprocessingBinarizeRequestBody();
    $request->imageFile = new PreprocessingBinarizeRequestBodyImageFile();
    $request->imageFile->content = 'optio';
    $request->imageFile->imageFile = 'totam';

    $requestSecurity = new PreprocessingBinarizeSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->preprocessing->preprocessingBinarize($request, $requestSecurity);

    if ($response->preprocessingBinarize200ApplicationJSONByteString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## preprocessingBinarizeAdvanced

Perform an advanced adaptive, Deep Learning-based binarization algorithm on the input image to prepare it for further OCR operations.  Provides enhanced accuracy than adaptive binarization.  Image will be upsampled to 300 DPI if it has a DPI below 300.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingBinarizeAdvancedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingBinarizeAdvancedRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingBinarizeAdvancedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreprocessingBinarizeAdvancedRequestBody();
    $request->imageFile = new PreprocessingBinarizeAdvancedRequestBodyImageFile();
    $request->imageFile->content = 'beatae';
    $request->imageFile->imageFile = 'commodi';

    $requestSecurity = new PreprocessingBinarizeAdvancedSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->preprocessing->preprocessingBinarizeAdvanced($request, $requestSecurity);

    if ($response->preprocessingBinarizeAdvanced200ApplicationJSONByteString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## preprocessingGetPageAngle

Analyzes a photo or image of a document and identifies the rotation angle of the page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingGetPageAngleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingGetPageAngleRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingGetPageAngleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreprocessingGetPageAngleRequestBody();
    $request->imageFile = new PreprocessingGetPageAngleRequestBodyImageFile();
    $request->imageFile->content = 'molestiae';
    $request->imageFile->imageFile = 'modi';

    $requestSecurity = new PreprocessingGetPageAngleSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->preprocessing->preprocessingGetPageAngle($request, $requestSecurity);

    if ($response->getPageAngleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## preprocessingUnrotate

Detect and unrotate an image of a document (e.g. that was scanned at an angle).  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingUnrotateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingUnrotateRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingUnrotateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreprocessingUnrotateRequestBody();
    $request->imageFile = new PreprocessingUnrotateRequestBodyImageFile();
    $request->imageFile->content = 'qui';
    $request->imageFile->imageFile = 'impedit';

    $requestSecurity = new PreprocessingUnrotateSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->preprocessing->preprocessingUnrotate($request, $requestSecurity);

    if ($response->preprocessingUnrotate200ApplicationJSONByteString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## preprocessingUnrotateAdvanced

Detect and unrotate an image of a document (e.g. that was scanned at an angle) using deep learning.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingUnrotateAdvancedRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingUnrotateAdvancedRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingUnrotateAdvancedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreprocessingUnrotateAdvancedRequestBody();
    $request->imageFile = new PreprocessingUnrotateAdvancedRequestBodyImageFile();
    $request->imageFile->content = 'cum';
    $request->imageFile->imageFile = 'esse';

    $requestSecurity = new PreprocessingUnrotateAdvancedSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->preprocessing->preprocessingUnrotateAdvanced($request, $requestSecurity);

    if ($response->preprocessingUnrotateAdvanced200ApplicationJSONByteString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## preprocessingUnskew

Detect and unskew a photo of a document (e.g. taken on a cell phone) into a perfectly square image.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingUnskewRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingUnskewRequestBodyImageFile;
use \OpenAPI\OpenAPI\Models\Operations\PreprocessingUnskewSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreprocessingUnskewRequestBody();
    $request->imageFile = new PreprocessingUnskewRequestBodyImageFile();
    $request->imageFile->content = 'ipsum';
    $request->imageFile->imageFile = 'excepturi';

    $requestSecurity = new PreprocessingUnskewSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->preprocessing->preprocessingUnskew($request, $requestSecurity);

    if ($response->preprocessingUnskew200ApplicationJSONByteString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
