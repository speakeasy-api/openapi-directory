# as2Partners

## Overview

Operations about as2_partners

### Available Operations

* [deleteAs2PartnersId](#deleteas2partnersid) - Delete As2 Partner
* [getAs2Partners](#getas2partners) - List As2 Partners
* [getAs2PartnersId](#getas2partnersid) - Show As2 Partner
* [patchAs2PartnersId](#patchas2partnersid) - Update As2 Partner
* [postAs2Partners](#postas2partners) - Create As2 Partner

## deleteAs2PartnersId

Delete As2 Partner

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAs2PartnersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAs2PartnersIdRequest();
    $request->id = 451159;

    $response = $sdk->as2Partners->deleteAs2PartnersId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAs2Partners

List As2 Partners

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAs2PartnersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAs2PartnersRequest();
    $request->cursor = 'cum';
    $request->perPage = 19987;

    $response = $sdk->as2Partners->getAs2Partners($request);

    if ($response->as2PartnerEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAs2PartnersId

Show As2 Partner

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAs2PartnersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAs2PartnersIdRequest();
    $request->id = 39187;

    $response = $sdk->as2Partners->getAs2PartnersId($request);

    if ($response->as2PartnerEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchAs2PartnersId

Update As2 Partner

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchAs2PartnersIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchAs2PartnersIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchAs2PartnersIdRequest();
    $request->requestBody = new PatchAs2PartnersIdRequestBody();
    $request->requestBody->enableDedicatedIps = false;
    $request->requestBody->name = 'Mrs. April Wuckert';
    $request->requestBody->publicCertificate = 'iusto';
    $request->requestBody->serverCertificate = 'dicta';
    $request->requestBody->uri = 'https://frugal-sympathy.info';
    $request->id = 918236;

    $response = $sdk->as2Partners->patchAs2PartnersId($request);

    if ($response->as2PartnerEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAs2Partners

Create As2 Partner

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAs2PartnersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAs2PartnersRequestBody();
    $request->as2StationId = 64147;
    $request->enableDedicatedIps = false;
    $request->name = 'Alison Mann';
    $request->publicCertificate = 'modi';
    $request->serverCertificate = 'praesentium';
    $request->uri = 'https://useful-bonnet.org';

    $response = $sdk->as2Partners->postAs2Partners($request);

    if ($response->as2PartnerEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
