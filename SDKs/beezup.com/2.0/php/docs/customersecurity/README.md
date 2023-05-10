# customerSecurity

### Available Operations

* [logout](#logout) - Log out the current user from go2
* [zendeskToken](#zendesktoken) - Zendesk token

## logout

Log out the current user from go2

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->customerSecurity->logout();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## zendeskToken

Zendesk token - Generates a JWT token to access BeezUP restricted Help Center in SSO as described here: https://support.zendesk.com/hc/en-us/articles/222874768-Using-restricted-Help-Center-content-with-the-Web-Widget

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->customerSecurity->zendeskToken();

    if ($response->zendeskToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
