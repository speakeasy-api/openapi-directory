# sslCertificateRequests

## Overview

Create new SSL certificates. In the provisioning documentation you can find more info on the flow that should be followed.

### Available Operations

* [addSslCertificateRequest](#addsslcertificaterequest) - Add a SSL certificate request
* [getSslCertificateRequest](#getsslcertificaterequest) - Detail of a SSL certificate request
* [getSslCertificateRequests](#getsslcertificaterequests) - Overview of SSL certificate requests
* [verifySslCertificateRequestDomainValidations](#verifysslcertificaterequestdomainvalidations) - Verify the SSL certificate request domain validations

## addSslCertificateRequest

Executing this method causes the purchase of a paying product.<br />
Log on to our website to see your current (renewal) prices or contact our Sales department.<br />
Please note that promotional pricing does not apply for purchases made through our API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateSslCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalValidationAttribute;
use \OpenAPI\OpenAPI\Models\Shared\SslCertificateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslCertificateValidationLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSslCertificateRequest();
    $request->additionalValidationAttributes = [
        new AdditionalValidationAttribute(),
        new AdditionalValidationAttribute(),
        new AdditionalValidationAttribute(),
    ];
    $request->certificateType = SslCertificateTypeEnum::WILDCARD;
    $request->csr = 'qui';
    $request->validationLevel = SslCertificateValidationLevelEnum::DOMAIN_VALIDATED;

    $response = $sdk->sslCertificateRequests->addSslCertificateRequest($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSslCertificateRequest

Detail of a SSL certificate request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSslCertificateRequestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSslCertificateRequestRequest();
    $request->id = 144847;

    $response = $sdk->sslCertificateRequests->getSslCertificateRequest($request);

    if ($response->sslCertificateRequestDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSslCertificateRequests

Overview of SSL certificate requests

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSslCertificateRequestsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSslCertificateRequestsRequest();
    $request->skip = 164959;
    $request->take = 488056;

    $response = $sdk->sslCertificateRequests->getSslCertificateRequests($request);

    if ($response->sslCertificateRequests !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## verifySslCertificateRequestDomainValidations

Verify the SSL certificate request domain validations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VerifySslCertificateRequestDomainValidationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifySslCertificateRequestDomainValidationsRequest();
    $request->id = 124833;

    $response = $sdk->sslCertificateRequests->verifySslCertificateRequestDomainValidations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
