# generation

## Overview

Generate random quotes, names, insults, lorem ipsum etc

Find out more
<http://fungenerators.com/api/shakespeare/>
### Available Operations

* [getShakespeareGenerateInsult](#getshakespearegenerateinsult) - Generate random Shakespeare style insults.
* [getShakespeareGenerateLoremIpsum](#getshakespearegenerateloremipsum) - Generate Shakespeare lorem ipsum.
* [getShakespeareGenerateName](#getshakespearegeneratename) - Generate random Shakespearen names.

## getShakespeareGenerateInsult

Generate random Shakespeare style insults.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShakespeareGenerateInsultRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetShakespeareGenerateInsultSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShakespeareGenerateInsultRequest();
    $request->limit = 592845;

    $requestSecurity = new GetShakespeareGenerateInsultSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->generation->getShakespeareGenerateInsult($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getShakespeareGenerateLoremIpsum

Generate Shakespeare lorem ipsum.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShakespeareGenerateLoremIpsumRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetShakespeareGenerateLoremIpsumSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShakespeareGenerateLoremIpsumRequest();
    $request->limit = 715190;
    $request->type = 'quibusdam';

    $requestSecurity = new GetShakespeareGenerateLoremIpsumSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->generation->getShakespeareGenerateLoremIpsum($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getShakespeareGenerateName

Generate random Shakespearen names.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShakespeareGenerateNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetShakespeareGenerateNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShakespeareGenerateNameRequest();
    $request->limit = 602763;
    $request->variation = 'nulla';

    $requestSecurity = new GetShakespeareGenerateNameSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->generation->getShakespeareGenerateName($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
