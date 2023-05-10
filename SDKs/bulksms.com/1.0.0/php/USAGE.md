<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PreSignRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRmmPreSignAttachmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreSignRequest();
    $request->fileExtension = 'pdf';
    $request->mediaType = 'application/pdf';

    $requestSecurity = new PostRmmPreSignAttachmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->attachments->postRmmPreSignAttachment($request, $requestSecurity);

    if ($response->preSignInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->