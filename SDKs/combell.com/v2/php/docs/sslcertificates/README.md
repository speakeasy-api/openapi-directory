# sslCertificates

## Overview

Manage your SSL certificates.

### Available Operations

* [downloadCertificate](#downloadcertificate) - Download a SSL certificate
* [getSslCertificate](#getsslcertificate) - Detail of a SSL certificate
* [getSslCertificates](#getsslcertificates) - Overview of SSL certificates

## downloadCertificate

Returns the certifcate as binary data with the content-type and the filename information in the response headers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DownloadCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\SslCertificateFileFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadCertificateRequest();
    $request->fileFormat = SslCertificateFileFormatEnum::PFX;
    $request->password = 'ullam';
    $request->sha1FingerprintPathParameter = 'nam';
    $request->sha1FingerprintQueryParameter = 'hic';

    $response = $sdk->sslCertificates->downloadCertificate($request);

    if ($response->downloadCertificate200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSslCertificate

Detail of a SSL certificate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSslCertificateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSslCertificateRequest();
    $request->sha1FingerprintPathParameter = 'voluptatem';
    $request->sha1FingerprintQueryParameter = 'cumque';

    $response = $sdk->sslCertificates->getSslCertificate($request);

    if ($response->sslCertificateDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSslCertificates

Overview of SSL certificates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSslCertificatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSslCertificatesRequest();
    $request->skip = 746994;
    $request->take = 748664;

    $response = $sdk->sslCertificates->getSslCertificates($request);

    if ($response->sslCertificates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
