# program

### Available Operations

* [getOptedInPrograms](#getoptedinprograms) - This method gets a list of the seller programs that the seller has opted-in to.
* [optInToProgram](#optintoprogram) - This method opts the seller in to an eBay seller program. Refer to the <a href="/api-docs/sell/account/overview.html#opt-in" target="_blank">Account API overview</a> for information about available eBay seller programs.<br /><br /><span class="tablenote"><b>Note:</b> It can take up to 24-hours for eBay to process your request to opt-in to a Seller Program. Use the <a href="/api-docs/sell/account/resources/program/methods/getOptedInPrograms" target="_blank">getOptedInPrograms</a> call to check the status of your request after the processing period has passed.</span>
* [optOutOfProgram](#optoutofprogram) - This method opts the seller out of a seller program to which you have previously opted-in to. Get a list of the seller programs you have opted-in to using the <b>getOptedInPrograms</b> call.

## getOptedInPrograms

This method gets a list of the seller programs that the seller has opted-in to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOptedInProgramsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetOptedInProgramsSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->program->getOptedInPrograms($requestSecurity);

    if ($response->programs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optInToProgram

This method opts the seller in to an eBay seller program. Refer to the <a href="/api-docs/sell/account/overview.html#opt-in" target="_blank">Account API overview</a> for information about available eBay seller programs.<br /><br /><span class="tablenote"><b>Note:</b> It can take up to 24-hours for eBay to process your request to opt-in to a Seller Program. Use the <a href="/api-docs/sell/account/resources/program/methods/getOptedInPrograms" target="_blank">getOptedInPrograms</a> call to check the status of your request after the processing period has passed.</span>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Program;
use \OpenAPI\OpenAPI\Models\Operations\OptInToProgramSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Program();
    $request->programType = 'repellat';

    $requestSecurity = new OptInToProgramSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->program->optInToProgram($request, $requestSecurity);

    if ($response->optInToProgram200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optOutOfProgram

This method opts the seller out of a seller program to which you have previously opted-in to. Get a list of the seller programs you have opted-in to using the <b>getOptedInPrograms</b> call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Program;
use \OpenAPI\OpenAPI\Models\Operations\OptOutOfProgramSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Program();
    $request->programType = 'mollitia';

    $requestSecurity = new OptOutOfProgramSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->program->optOutOfProgram($request, $requestSecurity);

    if ($response->optOutOfProgram200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
