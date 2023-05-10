# connections

## Overview

A connection represents an account of a consumer for a connector. For example a consumer with ID "test-consumer" has a Salesforce connection for the CRM API. Connections securely save credentials and settings for a connector.

### Available Operations

* [connectionSettingsAll](#connectionsettingsall) - Get resource settings
* [connectionSettingsUpdate](#connectionsettingsupdate) - Update settings
* [connectionsAdd](#connectionsadd) - Create connection
* [connectionsAll](#connectionsall) - Get all connections
* [connectionsCallback](#connectionscallback) - Callback
* [connectionsDelete](#connectionsdelete) - Deletes a connection
* [connectionsImport](#connectionsimport) - Import connection
* [connectionsOne](#connectionsone) - Get connection
* [connectionsRevoke](#connectionsrevoke) - Revoke connection
* [connectionsToken](#connectionstoken) - Get Access Token
* [connectionsUpdate](#connectionsupdate) - Update connection

## connectionSettingsAll

This endpoint returns custom settings and their defaults required by connection for a given resource.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionSettingsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionSettingsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionSettingsAllRequest();
    $request->resource = 'nulla';
    $request->serviceId = 'corrupti';
    $request->unifiedApi = 'illum';
    $request->xApideckAppId = 'vel';
    $request->xApideckConsumerId = 'error';

    $requestSecurity = new ConnectionSettingsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->connections->connectionSettingsAll($request, $requestSecurity);

    if ($response->getConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectionSettingsUpdate

Update default values for a connection's resource settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionSettingsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionConfigurationDefaultsInput;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionSettingsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionSettingsUpdateRequest();
    $request->connectionInput = new ConnectionInput();
    $request->connectionInput->configuration = [
        new ConnectionConfigurationInput(),
        new ConnectionConfigurationInput(),
        new ConnectionConfigurationInput(),
    ];
    $request->connectionInput->enabled = true;
    $request->connectionInput->metadata = [
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->connectionInput->settings = [
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
        'iusto' => 'excepturi',
    ];
    $request->resource = 'nisi';
    $request->serviceId = 'recusandae';
    $request->unifiedApi = 'temporibus';
    $request->xApideckAppId = 'ab';
    $request->xApideckConsumerId = 'quis';

    $requestSecurity = new ConnectionSettingsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->connections->connectionSettingsUpdate($request, $requestSecurity);

    if ($response->updateConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectionsAdd

Create an authorized connection


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionConfigurationDefaultsInput;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionsAddRequest();
    $request->connectionInput = new ConnectionInput();
    $request->connectionInput->configuration = [
        new ConnectionConfigurationInput(),
    ];
    $request->connectionInput->enabled = true;
    $request->connectionInput->metadata = [
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->connectionInput->settings = [
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
    ];
    $request->serviceId = 'dolorum';
    $request->unifiedApi = 'dicta';
    $request->xApideckAppId = 'nam';
    $request->xApideckConsumerId = 'officia';

    $requestSecurity = new ConnectionsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->connections->connectionsAdd($request, $requestSecurity);

    if ($response->createConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectionsAll

This endpoint includes all the configured integrations and contains the required assets
to build an integrations page where your users can install integrations.
OAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionsAllRequest();
    $request->api = 'occaecati';
    $request->configured = false;
    $request->xApideckAppId = 'fugit';
    $request->xApideckConsumerId = 'deleniti';

    $requestSecurity = new ConnectionsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->connections->connectionsAll($request, $requestSecurity);

    if ($response->getConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectionsCallback

This endpoint gets called after the triggering the authorize flow.

Callback links need a state and code parameter to verify the validity of the request.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionsCallbackRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionsCallbackRequest();
    $request->code = 'hic';
    $request->state = 'optio';

    $response = $sdk->connections->connectionsCallback($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectionsDelete

Deletes a connection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionsDeleteRequest();
    $request->serviceId = 'totam';
    $request->unifiedApi = 'beatae';
    $request->xApideckAppId = 'commodi';
    $request->xApideckConsumerId = 'molestiae';

    $requestSecurity = new ConnectionsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->connections->connectionsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectionsImport

Import an authorized connection.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionImportData;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionImportDataCredentials;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionsImportRequest();
    $request->connectionImportData = new ConnectionImportData();
    $request->connectionImportData->credentials = new ConnectionImportDataCredentials();
    $request->connectionImportData->credentials->accessToken = '1234567890abcdefghijklmnopqrstuvwxyz';
    $request->connectionImportData->credentials->expiresIn = 3600;
    $request->connectionImportData->credentials->issuedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-01T00:00:00Z');
    $request->connectionImportData->credentials->refreshToken = '1234567890abcdefghijklmnopqrstuvwxyz';
    $request->connectionImportData->metadata = [
        'qui' => 'impedit',
        'cum' => 'esse',
    ];
    $request->connectionImportData->settings = [
        'excepturi' => 'aspernatur',
    ];
    $request->serviceId = 'perferendis';
    $request->unifiedApi = 'ad';
    $request->xApideckAppId = 'natus';
    $request->xApideckConsumerId = 'sed';

    $requestSecurity = new ConnectionsImportSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->connections->connectionsImport($request, $requestSecurity);

    if ($response->createConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectionsOne

Get a connection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionsOneRequest();
    $request->serviceId = 'iste';
    $request->unifiedApi = 'dolor';
    $request->xApideckAppId = 'natus';
    $request->xApideckConsumerId = 'laboriosam';

    $requestSecurity = new ConnectionsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->connections->connectionsOne($request, $requestSecurity);

    if ($response->getConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectionsRevoke

__In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__

Use this endpoint to revoke an existing OAuth connector.

Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.

Vault handles the complete revoke flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionsRevokeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionsRevokeRequest();
    $request->applicationId = 'hic';
    $request->redirectUri = 'saepe';
    $request->serviceId = 'fuga';
    $request->state = 'in';

    $response = $sdk->connections->connectionsRevoke($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectionsToken

Get an access token for a connection and store it in Vault. Currently only supported for connections with the client_credentials OAuth grant type.

Note that the access token will not be returned in the response. A 200 response code indicates a valid access token was stored on the connection.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionsTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionsTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionsTokenRequest();
    $request->requestBody = [
        'iste' => 'iure',
        'saepe' => 'quidem',
    ];
    $request->serviceId = 'architecto';
    $request->unifiedApi = 'ipsa';
    $request->xApideckAppId = 'reiciendis';
    $request->xApideckConsumerId = 'est';

    $requestSecurity = new ConnectionsTokenSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->connections->connectionsToken($request, $requestSecurity);

    if ($response->getConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectionsUpdate

Update a connection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionConfigurationDefaultsInput;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionsUpdateRequest();
    $request->connectionInput = new ConnectionInput();
    $request->connectionInput->configuration = [
        new ConnectionConfigurationInput(),
        new ConnectionConfigurationInput(),
        new ConnectionConfigurationInput(),
    ];
    $request->connectionInput->enabled = true;
    $request->connectionInput->metadata = [
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
        'nobis' => 'enim',
    ];
    $request->connectionInput->settings = [
        'nemo' => 'minima',
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->serviceId = 'doloribus';
    $request->unifiedApi = 'sapiente';
    $request->xApideckAppId = 'architecto';
    $request->xApideckConsumerId = 'mollitia';

    $requestSecurity = new ConnectionsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->connections->connectionsUpdate($request, $requestSecurity);

    if ($response->updateConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
