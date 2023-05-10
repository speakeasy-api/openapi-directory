# clientManagement

### Available Operations

* [client](#client) - List clients
* [clientClientId](#clientclientid) - Delete a client
* [createClient](#createclient) - Register a client
* [getClient](#getclient) - View a client
* [updateClient](#updateclient) - Update a client

## client

Retrieve a list of clients.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClientSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ClientSecurity();
    $requestSecurity->clientRegistrationToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->clientManagement->client($requestSecurity);

    if ($response->clients !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clientClientId

Delete a previously registered client.


OIDC Client Configuration Endpoint
<http://openid.net/specs/openid-connect-registration-1_0.html#ClientConfigurationEndpoint>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClientClientIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClientClientIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClientClientIdRequest();
    $request->clientId = 'ab';

    $requestSecurity = new ClientClientIdSecurity();
    $requestSecurity->clientRegistrationToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->clientManagement->clientClientId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createClient

Register a new client with this Authentiq Connect provider.

This endpoint is compatible with [OIDC's Client Registration](http://openid.net/specs/openid-connect-registration-1_0.html) extension.


OIDC Client Registration Endpoint
<http://openid.net/specs/openid-connect-registration-1_0.html#ClientRegistration>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Client;
use \OpenAPI\OpenAPI\Models\Operations\CreateClientSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Client();
    $request->applicationType = 'quis';
    $request->clientId = 'veritatis';
    $request->clientName = 'deserunt';
    $request->clientUri = 'perferendis';
    $request->contacts = [
        'repellendus',
        'sapiente',
    ];
    $request->defaultMaxAge = 778157;
    $request->defaultScopes = [
        'at',
    ];
    $request->grantTypes = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->logoUri = 'esse';
    $request->policyUri = 'totam';
    $request->redirectUris = [
        'dolorum',
        'dicta',
        'nam',
        'officia',
    ];
    $request->responseTypes = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->tosUri = 'optio';

    $requestSecurity = new CreateClientSecurity();
    $requestSecurity->clientRegistrationToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->clientManagement->createClient($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClient

Retrieve the configuration of a previously registered client.


OIDC Client Configuration Endpoint
<http://openid.net/specs/openid-connect-registration-1_0.html#ClientConfigurationEndpoint>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClientRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetClientSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClientRequest();
    $request->clientId = 'totam';

    $requestSecurity = new GetClientSecurity();
    $requestSecurity->clientRegistrationToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->clientManagement->getClient($request, $requestSecurity);

    if ($response->client !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClient

Update the configuration of a previously registered client.


OIDC Client Configuration Endpoint
<http://openid.net/specs/openid-connect-registration-1_0.html#ClientConfigurationEndpoint>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClientRequest;
use \OpenAPI\OpenAPI\Models\Shared\Client;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClientSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClientRequest();
    $request->client = new Client();
    $request->client->applicationType = 'beatae';
    $request->client->clientId = 'commodi';
    $request->client->clientName = 'molestiae';
    $request->client->clientUri = 'modi';
    $request->client->contacts = [
        'impedit',
    ];
    $request->client->defaultMaxAge = 736918;
    $request->client->defaultScopes = [
        'ipsum',
        'excepturi',
    ];
    $request->client->grantTypes = [
        'perferendis',
    ];
    $request->client->logoUri = 'ad';
    $request->client->policyUri = 'natus';
    $request->client->redirectUris = [
        'iste',
    ];
    $request->client->responseTypes = [
        'natus',
    ];
    $request->client->tosUri = 'laboriosam';
    $request->clientId = 'hic';

    $requestSecurity = new UpdateClientSecurity();
    $requestSecurity->clientRegistrationToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->clientManagement->updateClient($request, $requestSecurity);

    if ($response->client !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
