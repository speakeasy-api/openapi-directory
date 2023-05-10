# administration

### Available Operations

* [deleteClientsIdClient](#deleteclientsidclient) - Delete a client
* [deleteClientsIdClientLogo](#deleteclientsidclientlogo) - Delete the client logo
* [deleteWebhooks](#deletewebhooks) - Deletes all webhooks
* [deleteWebhooksAuth](#deletewebhooksauth) - Deletes all webhook authentication types
* [deleteWebhooksAuthIdAuth](#deletewebhooksauthidauth) - Deletes the webhook authentication type
* [deleteWebhooksIdWebhook](#deletewebhooksidwebhook) - Deletes a webhook
* [deleteWebhooksIdWebhookAddToData](#deletewebhooksidwebhookaddtodata) - delete all entries
* [deleteWebhooksIdWebhookAddToDataKey](#deletewebhooksidwebhookaddtodatakey) - delete the requested entry
* [getClients](#getclients) - List clients
* [getClientsIdClient](#getclientsidclient) - Get information about a client
* [getConfig](#getconfig) - Get configuration of the API.
* [getConfigLogs](#getconfiglogs) - Get configuration change history of the API.
* [getMonitoring](#getmonitoring) - get performances stats on this instance
* [getPublickey](#getpublickey) - Get public encryption key of the API.
* [getWebhooks](#getwebhooks) - Get webhooks
* [getWebhooksAuth](#getwebhooksauth) - Get webhooks authentication types
* [getWebhooksIdWebhookAddToData](#getwebhooksidwebhookaddtodata) - retrieve the list of the value to add in webhooks when sending the requested webhook
* [getWebhooksIdWebhookAddToDataKey](#getwebhooksidwebhookaddtodatakey) - retrieve the value to add in the requested webhook for the requested name
* [getWebhooksIdWebhookLogs](#getwebhooksidwebhooklogs) - Get webhooks logs.
* [postClients](#postclients) - Create a client
* [postClientsIdClientLogo](#postclientsidclientlogo) - Update the client logo
* [postConfig](#postconfig) - Insert/update configuration key(s)/value(s) on the API.
* [postTestSync](#posttestsync) - Test synchronization on a random connection.
* [postTestWebhooks](#posttestwebhooks) - Test synchronization on a random connection.
* [postWebhooks](#postwebhooks) - Adds a new webhook
* [postWebhooksAuth](#postwebhooksauth) - Adds a new webhook authentication type
* [postWebhooksAuthIdAuth](#postwebhooksauthidauth) - Updates the webhook authentication type
* [postWebhooksIdWebhook](#postwebhooksidwebhook) - Updates a webhook
* [postWebhooksIdWebhookAddToData](#postwebhooksidwebhookaddtodata) - Setup a field to store in user config when calling the endpoint
* [postWebhooksIdWebhookAddToDataKey](#postwebhooksidwebhookaddtodatakey) - upate the requested field to store in user config when calling the endpoint
* [putClientsIdClient](#putclientsidclient) - Update a client
* [putWebhooksAuthIdAuth](#putwebhooksauthidauth) - Updates the webhook authentication type
* [putWebhooksIdWebhook](#putwebhooksidwebhook) - Updates a webhook

## deleteClientsIdClient

Delete a client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClientsIdClientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteClientsIdClientRequest();
    $request->expand = 'distinctio';
    $request->idClient = 844266;

    $response = $sdk->administration->deleteClientsIdClient($request);

    if ($response->client !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteClientsIdClientLogo

Delete the client logo

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClientsIdClientLogoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteClientsIdClientLogoRequest();
    $request->expand = 'unde';
    $request->idClient = 857946;

    $response = $sdk->administration->deleteClientsIdClientLogo($request);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWebhooks

Updates the deleted field with the date of the deletion<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhooksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhooksRequest();
    $request->expand = 'corrupti';

    $response = $sdk->administration->deleteWebhooks($request);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWebhooksAuth

Deletes all webhook authentication types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhooksAuthRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhooksAuthRequest();
    $request->expand = 'illum';

    $response = $sdk->administration->deleteWebhooksAuth($request);

    if ($response->authProvider !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWebhooksAuthIdAuth

Updates the deleted field with the date of the deletion<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhooksAuthIdAuthRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhooksAuthIdAuthRequest();
    $request->expand = 'vel';
    $request->idAuth = 623564;

    $response = $sdk->administration->deleteWebhooksAuthIdAuth($request);

    if ($response->authProvider !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWebhooksIdWebhook

Updates the deleted field with the date of the deletion<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhooksIdWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhooksIdWebhookRequest();
    $request->expand = 'deserunt';
    $request->idWebhook = 384382;

    $response = $sdk->administration->deleteWebhooksIdWebhook($request);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWebhooksIdWebhookAddToData

delete all entries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhooksIdWebhookAddToDataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhooksIdWebhookAddToDataRequest();
    $request->expand = 'iure';
    $request->idWebhook = 297534;

    $response = $sdk->administration->deleteWebhooksIdWebhookAddToData($request);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWebhooksIdWebhookAddToDataKey

delete the requested entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhooksIdWebhookAddToDataKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhooksIdWebhookAddToDataKeyRequest();
    $request->expand = 'debitis';
    $request->idWebhook = 56713;
    $request->key = 'delectus';

    $response = $sdk->administration->deleteWebhooksIdWebhookAddToDataKey($request);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClients

List clients

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClientsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClientsRequest();
    $request->expand = 'tempora';

    $response = $sdk->administration->getClients($request);

    if ($response->getClients200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClientsIdClient

If you use the manage_token or a configuration token, you will get also the client secret.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClientsIdClientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClientsIdClientRequest();
    $request->expand = 'suscipit';
    $request->idClient = 477665;

    $response = $sdk->administration->getClientsIdClient($request);

    if ($response->client !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfig

<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfigRequest();
    $request->search = 'minus';

    $response = $sdk->administration->getConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfigLogs

<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfigLogsRequest();
    $request->expand = 'placeat';
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-01-15');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-03-20');
    $request->search = 'recusandae';
    $request->type = 'temporibus';

    $response = $sdk->administration->getConfigLogs($request);

    if ($response->getConfigLogs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMonitoring

get performances stats on this instance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMonitoringRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMonitoringRequest();
    $request->period = 71036;

    $response = $sdk->administration->getMonitoring($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublickey

Get public encryption key of the API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->administration->getPublickey();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhooks

Get webhooks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhooksRequest();
    $request->expand = 'quis';

    $response = $sdk->administration->getWebhooks($request);

    if ($response->getWebhooks200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhooksAuth

Get webhooks authentication types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksAuthRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhooksAuthRequest();
    $request->expand = 'veritatis';

    $response = $sdk->administration->getWebhooksAuth($request);

    if ($response->getWebhooksAuth200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhooksIdWebhookAddToData

retrieve the list of the value to add in webhooks when sending the requested webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksIdWebhookAddToDataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhooksIdWebhookAddToDataRequest();
    $request->expand = 'deserunt';
    $request->idWebhook = 20218;

    $response = $sdk->administration->getWebhooksIdWebhookAddToData($request);

    if ($response->getWebhooksIdWebhookAddToData200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhooksIdWebhookAddToDataKey

retrieve the value to add in the requested webhook for the requested name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksIdWebhookAddToDataKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhooksIdWebhookAddToDataKeyRequest();
    $request->expand = 'ipsam';
    $request->idWebhook = 832620;
    $request->key = 'sapiente';

    $response = $sdk->administration->getWebhooksIdWebhookAddToDataKey($request);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhooksIdWebhookLogs

Get logs of the webhooks.<br><br>By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksIdWebhookLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhooksIdWebhookLogsRequest();
    $request->expand = 'quo';
    $request->idUser = 140350;
    $request->idWebhook = 870013;
    $request->limit = 870088;
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2021-07-31');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2020-08-07');
    $request->offset = 461479;

    $response = $sdk->administration->getWebhooksIdWebhookLogs($request);

    if ($response->getWebhooksIdWebhookLogs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postClients

Create a client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostClientsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostClientsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostClientsRequest();
    $request->requestBody = new PostClientsRequestBody();
    $request->requestBody->config = 'totam';
    $request->requestBody->generateKeys = false;
    $request->requestBody->name = 'Omar Carroll';
    $request->requestBody->redirectUris = 'occaecati';
    $request->expand = 'fugit';

    $response = $sdk->administration->postClients($request);

    if ($response->client !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postClientsIdClientLogo

Update the client logo

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostClientsIdClientLogoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostClientsIdClientLogoRequest();
    $request->expand = 'deleniti';
    $request->idClient = 944669;

    $response = $sdk->administration->postClientsIdClientLogo($request);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConfig

Insert/update configuration key(s)/value(s) on the API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->administration->postConfig();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTestSync

It can be used to test receiving data on your webhooks.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->administration->postTestSync();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTestWebhooks

It can be used to test receiving data on your webhooks.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->administration->postTestWebhooks();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWebhooks

Adds a new webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWebhooksRequest();
    $request->requestBody = new PostWebhooksRequestBody();
    $request->requestBody->event = 'optio';
    $request->requestBody->idAuth = 'totam';
    $request->requestBody->idService = 105907;
    $request->requestBody->idUser = 414662;
    $request->requestBody->params = 'molestiae';
    $request->requestBody->url = 'modi';
    $request->expand = 'qui';

    $response = $sdk->administration->postWebhooks($request);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWebhooksAuth

Adds a new webhook authentication type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksAuthRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksAuthRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWebhooksAuthRequest();
    $request->requestBody = new PostWebhooksAuthRequestBody();
    $request->requestBody->config = 'impedit';
    $request->requestBody->name = 'Cory Emmerich';
    $request->requestBody->type = 18789;
    $request->expand = 'ad';

    $response = $sdk->administration->postWebhooksAuth($request);

    if ($response->authProvider !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWebhooksAuthIdAuth

Updates the webhook authentication type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksAuthIdAuthRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksAuthIdAuthRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWebhooksAuthIdAuthRequest();
    $request->requestBody = new PostWebhooksAuthIdAuthRequestBody();
    $request->requestBody->config = 'natus';
    $request->requestBody->name = 'Sheryl Fadel';
    $request->requestBody->type = 943749;
    $request->expand = 'saepe';
    $request->idAuth = 681820;

    $response = $sdk->administration->postWebhooksAuthIdAuth($request);

    if ($response->authProvider !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWebhooksIdWebhook

Updates a webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksIdWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksIdWebhookRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWebhooksIdWebhookRequest();
    $request->requestBody = new PostWebhooksIdWebhookRequestBody();
    $request->requestBody->deleted = 'in';
    $request->requestBody->event = 'corporis';
    $request->requestBody->idAuth = 613064;
    $request->requestBody->idService = 437032;
    $request->requestBody->idUser = 902349;
    $request->requestBody->url = 'quidem';
    $request->expand = 'architecto';
    $request->idWebhook = 60225;

    $response = $sdk->administration->postWebhooksIdWebhook($request);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWebhooksIdWebhookAddToData

For each parameter, a value will be added in the webhook data. Use the key to set the name of the field. The values that can be added are to be found in the user configuration.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksIdWebhookAddToDataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWebhooksIdWebhookAddToDataRequest();
    $request->expand = 'reiciendis';
    $request->idWebhook = 666767;

    $response = $sdk->administration->postWebhooksIdWebhookAddToData($request);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWebhooksIdWebhookAddToDataKey

For each parameter, a value will be added in the webhook data. Use the key to set the name of the field. The values that can be added are to be found in the user configuration.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksIdWebhookAddToDataKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWebhooksIdWebhookAddToDataKeyRequest();
    $request->expand = 'mollitia';
    $request->idWebhook = 670638;
    $request->key = 'dolores';

    $response = $sdk->administration->postWebhooksIdWebhookAddToDataKey($request);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putClientsIdClient

Update a client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutClientsIdClientRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutClientsIdClientRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutClientsIdClientRequest();
    $request->requestBody = new PutClientsIdClientRequestBody();
    $request->requestBody->config = 'dolorem';
    $request->requestBody->description = 'corporis';
    $request->requestBody->descriptionBanks = 'explicabo';
    $request->requestBody->descriptionProviders = 'nobis';
    $request->requestBody->generateKeys = false;
    $request->requestBody->name = 'Guadalupe Hickle';
    $request->requestBody->primaryColor = 'accusantium';
    $request->requestBody->pro = false;
    $request->requestBody->redirectUris = 'iure';
    $request->requestBody->secondaryColor = 'culpa';
    $request->requestBody->secret = false;
    $request->requestBody->updateConfig = false;
    $request->expand = 'doloribus';
    $request->idClient = 958950;

    $response = $sdk->administration->putClientsIdClient($request);

    if ($response->client !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putWebhooksAuthIdAuth

Updates the webhook authentication type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutWebhooksAuthIdAuthRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutWebhooksAuthIdAuthRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutWebhooksAuthIdAuthRequest();
    $request->requestBody = new PutWebhooksAuthIdAuthRequestBody();
    $request->requestBody->config = 'architecto';
    $request->requestBody->name = 'Mike Nicolas';
    $request->requestBody->type = 653108;
    $request->expand = 'occaecati';
    $request->idAuth = 253291;

    $response = $sdk->administration->putWebhooksAuthIdAuth($request);

    if ($response->authProvider !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putWebhooksIdWebhook

Updates a webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutWebhooksIdWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutWebhooksIdWebhookRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutWebhooksIdWebhookRequest();
    $request->requestBody = new PutWebhooksIdWebhookRequestBody();
    $request->requestBody->deleted = 'commodi';
    $request->requestBody->event = 'quam';
    $request->requestBody->idAuth = 474697;
    $request->requestBody->idService = 244425;
    $request->requestBody->idUser = 623510;
    $request->requestBody->url = 'quia';
    $request->expand = 'quis';
    $request->idWebhook = 110375;

    $response = $sdk->administration->putWebhooksIdWebhook($request);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
