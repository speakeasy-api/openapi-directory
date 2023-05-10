# generation

## Overview

Generate names, insults, lorem ipsum etc

Find out more
<http://fungenerators.com/api/pirate/>
### Available Operations

* [getPirateGenerateInsult](#getpirategenerateinsult) - Generate random pirate insults.
* [getPirateGenerateLoremIpsum](#getpirategenerateloremipsum) - Generate pirate lorem ipsum.
* [getPirateGenerateName](#getpirategeneratename) - Generate random pirate names.

## getPirateGenerateInsult

Generate random pirate insults.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPirateGenerateInsultRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPirateGenerateInsultSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPirateGenerateInsultRequest();
    $request->limit = 592845;

    $requestSecurity = new GetPirateGenerateInsultSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->generation->getPirateGenerateInsult($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPirateGenerateLoremIpsum

Generate pirate lorem ipsum.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPirateGenerateLoremIpsumRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPirateGenerateLoremIpsumSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPirateGenerateLoremIpsumRequest();
    $request->limit = 715190;
    $request->type = 'quibusdam';

    $requestSecurity = new GetPirateGenerateLoremIpsumSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->generation->getPirateGenerateLoremIpsum($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPirateGenerateName

Generate random pirate names.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPirateGenerateNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPirateGenerateNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPirateGenerateNameRequest();
    $request->limit = 602763;
    $request->variation = 'nulla';

    $requestSecurity = new GetPirateGenerateNameSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->generation->getPirateGenerateName($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
