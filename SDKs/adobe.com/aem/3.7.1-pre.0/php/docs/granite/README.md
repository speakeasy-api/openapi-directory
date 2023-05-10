# granite

### Available Operations

* [sslSetup](#sslsetup)

## sslSetup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SslSetupRequest;
use \OpenAPI\OpenAPI\Models\Operations\SslSetupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SslSetupRequestBodyCertificateFile;
use \OpenAPI\OpenAPI\Models\Operations\SslSetupRequestBodyPrivatekeyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SslSetupRequest();
    $request->requestBody = new SslSetupRequestBody();
    $request->requestBody->certificateFile = new SslSetupRequestBodyCertificateFile();
    $request->requestBody->certificateFile->certificateFile = 'natus';
    $request->requestBody->certificateFile->content = 'laboriosam';
    $request->requestBody->privatekeyFile = new SslSetupRequestBodyPrivatekeyFile();
    $request->requestBody->privatekeyFile->content = 'hic';
    $request->requestBody->privatekeyFile->privatekeyFile = 'saepe';
    $request->httpsHostname = 'fuga';
    $request->httpsPort = 'in';
    $request->keystorePassword = 'corporis';
    $request->keystorePasswordConfirm = 'iste';
    $request->truststorePassword = 'iure';
    $request->truststorePasswordConfirm = 'saepe';

    $response = $sdk->granite->sslSetup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
