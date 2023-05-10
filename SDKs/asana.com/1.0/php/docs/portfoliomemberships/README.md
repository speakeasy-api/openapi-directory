# portfolioMemberships

## Overview

This object determines if a user is a member of a portfolio.

### Available Operations

* [getPortfolioMembership](#getportfoliomembership) - Get a portfolio membership
* [getPortfolioMemberships](#getportfoliomemberships) - Get multiple portfolio memberships
* [getPortfolioMembershipsForPortfolio](#getportfoliomembershipsforportfolio) - Get memberships from a portfolio

## getPortfolioMembership

Returns the complete portfolio record for a single portfolio membership.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPortfolioMembershipRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPortfolioMembershipRequest();
    $request->optFields = [
        'occaecati',
    ];
    $request->optPretty = false;
    $request->portfolioMembershipGid = 'enim';

    $response = $sdk->portfolioMemberships->getPortfolioMembership($request);

    if ($response->getPortfolioMembership200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPortfolioMemberships

Returns a list of portfolio memberships in compact representation. You must specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPortfolioMembershipsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPortfolioMembershipsRequest();
    $request->limit = 881736;
    $request->offset = 'delectus';
    $request->optFields = [
        'provident',
        'nam',
        'id',
    ];
    $request->optPretty = false;
    $request->portfolio = 'blanditiis';
    $request->user = 'deleniti';
    $request->workspace = 'sapiente';

    $response = $sdk->portfolioMemberships->getPortfolioMemberships($request);

    if ($response->getPortfolioMemberships200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPortfolioMembershipsForPortfolio

Returns the compact portfolio membership records for the portfolio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPortfolioMembershipsForPortfolioRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPortfolioMembershipsForPortfolioRequest();
    $request->limit = 230533;
    $request->offset = 'deserunt';
    $request->optFields = [
        'vel',
        'natus',
    ];
    $request->optPretty = false;
    $request->portfolioGid = 'omnis';
    $request->user = 'molestiae';

    $response = $sdk->portfolioMemberships->getPortfolioMembershipsForPortfolio($request);

    if ($response->getPortfolioMembershipsForPortfolio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
