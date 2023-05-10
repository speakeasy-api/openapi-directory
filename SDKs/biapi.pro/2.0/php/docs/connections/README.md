# connections

### Available Operations

* [deleteConnectionsIdConnectionSourcesIdSource](#deleteconnectionsidconnectionsourcesidsource) - Disable a connection source
* [deleteUsersIdUserConnections](#deleteusersiduserconnections) - Delete all connections
* [deleteUsersIdUserConnectionsIdConnection](#deleteusersiduserconnectionsidconnection) - Delete a connection.
* [deleteUsersIdUserConnectionsIdConnectionSourcesIdSource](#deleteusersiduserconnectionsidconnectionsourcesidsource) - Disable a connection source
* [getBanks](#getbanks) - Get list of connectors
* [getBanksIdBank](#getbanksidbank) - Get a connector
* [getBanksIdConnectorConnections](#getbanksidconnectorconnections) - Get a subset of id_connection for a given bank. Different selection methode are possible
* [getBanksIdConnectorSources](#getbanksidconnectorsources) - Get list of connector sources
* [getBanksIdConnectorSourcesIdConnectorSourceFields](#getbanksidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [getBanksIdConnectorSourcesIdSource](#getbanksidconnectorsourcesidsource) - Get the connector source
* [getConnections](#getconnections) - Get connections without a user
* [getConnectionsIdConnectionLogs](#getconnectionsidconnectionlogs) - Get connection logs
* [getConnectionsIdConnectionSources](#getconnectionsidconnectionsources) - Get connection sources
* [getConnectors](#getconnectors) - Get list of connectors
* [getConnectorsIdConnector](#getconnectorsidconnector) - Get a connector
* [getConnectorsIdConnectorSources](#getconnectorsidconnectorsources) - Get list of connector sources
* [getConnectorsIdConnectorSourcesIdConnectorSourceFields](#getconnectorsidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [getConnectorsIdConnectorSourcesIdSource](#getconnectorsidconnectorsourcesidsource) - Get the connector source
* [getLogs](#getlogs) - Get connection logs
* [getProviders](#getproviders) - Get list of connectors
* [getProvidersIdConnectorConnections](#getprovidersidconnectorconnections) - Get a random subset of provider's id_connection
* [getProvidersIdConnectorSources](#getprovidersidconnectorsources) - Get list of connector sources
* [getProvidersIdConnectorSourcesIdConnectorSourceFields](#getprovidersidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [getProvidersIdConnectorSourcesIdSource](#getprovidersidconnectorsourcesidsource) - Get the connector source
* [getProvidersIdProvider](#getprovidersidprovider) - Get a connector
* [getUsersIdUserConnections](#getusersiduserconnections) - Get connections
* [getUsersIdUserConnectionsIdConnectionInformations](#getusersiduserconnectionsidconnectioninformations) - Get connection additionnal informations
* [getUsersIdUserConnectionsIdConnectionLogs](#getusersiduserconnectionsidconnectionlogs) - Get connection logs
* [getUsersIdUserConnectionsIdConnectionSources](#getusersiduserconnectionsidconnectionsources) - Get connection sources
* [getUsersIdUserLogs](#getusersiduserlogs) - Get connection logs
* [postConnectionsIdConnectionSourcesIdSource](#postconnectionsidconnectionsourcesidsource) - "
* [postConnectors](#postconnectors) - Request a new connector
* [postUsersIdUserConnections](#postusersiduserconnections) - Add a new connection.
* [postUsersIdUserConnectionsIdConnection](#postusersiduserconnectionsidconnection) - Update a connection.
* [postUsersIdUserConnectionsIdConnectionSourcesIdSource](#postusersiduserconnectionsidconnectionsourcesidsource) - "
* [putConnectionsIdConnectionSourcesIdSource](#putconnectionsidconnectionsourcesidsource) - Update connection source
* [putConnectorsIdConnectorSources](#putconnectorsidconnectorsources) - Edit several connector sources
* [putConnectorsIdConnectorSourcesIdSource](#putconnectorsidconnectorsourcesidsource) - Edit the provided connector source
* [putUsersIdUserConnectionsIdConnection](#putusersiduserconnectionsidconnection) - Force synchronisation of a connection.
* [putUsersIdUserConnectionsIdConnectionSourcesIdSource](#putusersiduserconnectionsidconnectionsourcesidsource) - Update connection source

## deleteConnectionsIdConnectionSourcesIdSource

This will make it so the specified source will not be synchronized anymore.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionsIdConnectionSourcesIdSourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectionsIdConnectionSourcesIdSourceRequest();
    $request->expand = 'fuga';
    $request->idConnection = 442015;
    $request->idSource = 695626;

    $response = $sdk->connections->deleteConnectionsIdConnectionSourcesIdSource($request);

    if ($response->connectionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserConnections

Delete all connections

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserConnectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserConnectionsRequest();
    $request->expand = 'fugiat';
    $request->idUser = 'ut';

    $response = $sdk->connections->deleteUsersIdUserConnections($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserConnectionsIdConnection

This endpoint deletes a connection and all related accounts and transactions.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserConnectionsIdConnectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserConnectionsIdConnectionRequest();
    $request->expand = 'eum';
    $request->idConnection = 379927;
    $request->idUser = 'assumenda';

    $response = $sdk->connections->deleteUsersIdUserConnectionsIdConnection($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsersIdUserConnectionsIdConnectionSourcesIdSource

This will make it so the specified source will not be synchronized anymore.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest();
    $request->expand = 'eos';
    $request->idConnection = 509342;
    $request->idSource = 788546;
    $request->idUser = 'veritatis';

    $response = $sdk->connections->deleteUsersIdUserConnectionsIdConnectionSourcesIdSource($request);

    if ($response->connectionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanks

Get list of connectors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksRequest();
    $request->expand = 'ipsa';

    $response = $sdk->connections->getBanks($request);

    if ($response->getBanks200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanksIdBank

Get a connector

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksIdBankRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksIdBankRequest();
    $request->expand = 'id';
    $request->idBank = 696997;

    $response = $sdk->connections->getBanksIdBank($request);

    if ($response->connector !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanksIdConnectorConnections

By default, it selects a set of 3 connections with the 'diversity' method<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksIdConnectorConnectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksIdConnectorConnectionsRequest();
    $request->expand = 'neque';
    $request->idConnector = 778696;
    $request->method = 'illum';
    $request->minutesWithoutSync = 777408;
    $request->n = 681359;
    $request->occurences = 259422;
    $request->source = 'eos';
    $request->type = 373813;

    $response = $sdk->connections->getBanksIdConnectorConnections($request);

    if ($response->getBanksIdConnectorConnections200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanksIdConnectorSources

Get list of connector sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksIdConnectorSourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksIdConnectorSourcesRequest();
    $request->expand = 'ab';
    $request->idConnector = 587600;

    $response = $sdk->connections->getBanksIdConnectorSources($request);

    if ($response->getBanksIdConnectorSources200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanksIdConnectorSourcesIdConnectorSourceFields

Get fields specific to a domain and a source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksIdConnectorSourcesIdConnectorSourceFieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksIdConnectorSourcesIdConnectorSourceFieldsRequest();
    $request->expand = 'consequatur';
    $request->idConnector = 272822;
    $request->idConnectorSource = 892050;

    $response = $sdk->connections->getBanksIdConnectorSourcesIdConnectorSourceFields($request);

    if ($response->getBanksIdConnectorSourcesIdConnectorSourceFields200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanksIdConnectorSourcesIdSource

Get the connector source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksIdConnectorSourcesIdSourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksIdConnectorSourcesIdSourceRequest();
    $request->expand = 'ipsam';
    $request->idConnector = 133465;
    $request->idSource = 197054;

    $response = $sdk->connections->getBanksIdConnectorSourcesIdSource($request);

    if ($response->connectorSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnections

Get connections without a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectionsRequest();
    $request->expand = 'quo';

    $response = $sdk->connections->getConnections($request);

    if ($response->getConnections200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectionsIdConnectionLogs

Get logs about connections.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionsIdConnectionLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectionsIdConnectionLogsRequest();
    $request->connectorUuid = 'esse';
    $request->error = 'recusandae';
    $request->expand = 'aperiam';
    $request->idConnectionPathParameter = 715179;
    $request->idConnectionQueryParameter = 799796;
    $request->idConnector = 490819;
    $request->idMax = 76956;
    $request->idSource = 469498;
    $request->idUser = 518835;
    $request->limit = 882710;
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-07-06');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-03-04');
    $request->offset = 959434;
    $request->period = 'dolores';

    $response = $sdk->connections->getConnectionsIdConnectionLogs($request);

    if ($response->getConnectionsIdConnectionLogs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectionsIdConnectionSources

Get connection sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionsIdConnectionSourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectionsIdConnectionSourcesRequest();
    $request->expand = 'deserunt';
    $request->idConnection = 475289;

    $response = $sdk->connections->getConnectionsIdConnectionSources($request);

    if ($response->getConnectionsIdConnectionSources200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectors

Get list of connectors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsRequest();
    $request->expand = 'accusantium';

    $response = $sdk->connections->getConnectors($request);

    if ($response->getConnectors200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectorsIdConnector

Get a connector

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsIdConnectorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsIdConnectorRequest();
    $request->expand = 'porro';
    $request->idConnector = 430402;

    $response = $sdk->connections->getConnectorsIdConnector($request);

    if ($response->connector !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectorsIdConnectorSources

Get list of connector sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsIdConnectorSourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsIdConnectorSourcesRequest();
    $request->expand = 'quas';
    $request->idConnector = 510017;

    $response = $sdk->connections->getConnectorsIdConnectorSources($request);

    if ($response->getConnectorsIdConnectorSources200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectorsIdConnectorSourcesIdConnectorSourceFields

Get fields specific to a domain and a source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsRequest();
    $request->expand = 'consequuntur';
    $request->idConnector = 536178;
    $request->idConnectorSource = 143829;

    $response = $sdk->connections->getConnectorsIdConnectorSourcesIdConnectorSourceFields($request);

    if ($response->getConnectorsIdConnectorSourcesIdConnectorSourceFields200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectorsIdConnectorSourcesIdSource

Get the connector source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsIdConnectorSourcesIdSourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsIdConnectorSourcesIdSourceRequest();
    $request->expand = 'fuga';
    $request->idConnector = 649463;
    $request->idSource = 277596;

    $response = $sdk->connections->getConnectorsIdConnectorSourcesIdSource($request);

    if ($response->connectorSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLogs

Get logs about connections.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLogsRequest();
    $request->connectorUuid = 'atque';
    $request->error = 'explicabo';
    $request->expand = 'minima';
    $request->idConnection = 392676;
    $request->idConnector = 147014;
    $request->idMax = 956406;
    $request->idSource = 159870;
    $request->idUser = 187131;
    $request->limit = 129412;
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2021-04-07');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-10-25');
    $request->offset = 456911;
    $request->period = 'eveniet';

    $response = $sdk->connections->getLogs($request);

    if ($response->getLogs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProviders

Get list of connectors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersRequest();
    $request->expand = 'accusamus';

    $response = $sdk->connections->getProviders($request);

    if ($response->getProviders200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvidersIdConnectorConnections

By default, it selects a set of 3 connections.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersIdConnectorConnectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersIdConnectorConnectionsRequest();
    $request->expand = 'veritatis';
    $request->idConnector = 458604;
    $request->range = 800379;

    $response = $sdk->connections->getProvidersIdConnectorConnections($request);

    if ($response->getProvidersIdConnectorConnections200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvidersIdConnectorSources

Get list of connector sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersIdConnectorSourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersIdConnectorSourcesRequest();
    $request->expand = 'nam';
    $request->idConnector = 877131;

    $response = $sdk->connections->getProvidersIdConnectorSources($request);

    if ($response->getProvidersIdConnectorSources200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvidersIdConnectorSourcesIdConnectorSourceFields

Get fields specific to a domain and a source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersIdConnectorSourcesIdConnectorSourceFieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersIdConnectorSourcesIdConnectorSourceFieldsRequest();
    $request->expand = 'aliquid';
    $request->idConnector = 93459;
    $request->idConnectorSource = 904045;

    $response = $sdk->connections->getProvidersIdConnectorSourcesIdConnectorSourceFields($request);

    if ($response->getProvidersIdConnectorSourcesIdConnectorSourceFields200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvidersIdConnectorSourcesIdSource

Get the connector source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersIdConnectorSourcesIdSourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersIdConnectorSourcesIdSourceRequest();
    $request->expand = 'vel';
    $request->idConnector = 690025;
    $request->idSource = 473221;

    $response = $sdk->connections->getProvidersIdConnectorSourcesIdSource($request);

    if ($response->connectorSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvidersIdProvider

Get a connector

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersIdProviderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersIdProviderRequest();
    $request->expand = 'rerum';
    $request->idProvider = 580197;

    $response = $sdk->connections->getProvidersIdProvider($request);

    if ($response->connector !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnections

Get connections

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsRequest();
    $request->expand = 'minima';
    $request->idUser = 'distinctio';

    $response = $sdk->connections->getUsersIdUserConnections($request);

    if ($response->getUsersIdUserConnections200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnectionsIdConnectionInformations

<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsIdConnectionInformationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsIdConnectionInformationsRequest();
    $request->expand = 'eligendi';
    $request->idConnection = 27069;
    $request->idUser = 'culpa';

    $response = $sdk->connections->getUsersIdUserConnectionsIdConnectionInformations($request);

    if ($response->getUsersIdUserConnectionsIdConnectionInformations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnectionsIdConnectionLogs

Get logs about connections.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsIdConnectionLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsIdConnectionLogsRequest();
    $request->connectorUuid = 'tempore';
    $request->error = 'adipisci';
    $request->expand = 'cumque';
    $request->idConnectionPathParameter = 160538;
    $request->idConnectionQueryParameter = 9766;
    $request->idConnector = 796392;
    $request->idMax = 308286;
    $request->idSource = 959167;
    $request->idUserPathParameter = 'consectetur';
    $request->idUserQueryParameter = 458139;
    $request->limit = 503427;
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2021-02-03');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2021-04-30');
    $request->offset = 457223;
    $request->period = 'quasi';

    $response = $sdk->connections->getUsersIdUserConnectionsIdConnectionLogs($request);

    if ($response->getUsersIdUserConnectionsIdConnectionLogs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserConnectionsIdConnectionSources

Get connection sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserConnectionsIdConnectionSourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserConnectionsIdConnectionSourcesRequest();
    $request->expand = 'a';
    $request->idConnection = 621679;
    $request->idUser = 'sint';

    $response = $sdk->connections->getUsersIdUserConnectionsIdConnectionSources($request);

    if ($response->getUsersIdUserConnectionsIdConnectionSources200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdUserLogs

Get logs about connections.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdUserLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdUserLogsRequest();
    $request->connectorUuid = 'pariatur';
    $request->error = 'possimus';
    $request->expand = 'quia';
    $request->idConnection = 908844;
    $request->idConnector = 992430;
    $request->idMax = 815524;
    $request->idSource = 85001;
    $request->idUserPathParameter = 'consequuntur';
    $request->idUserQueryParameter = 94458;
    $request->limit = 628899;
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-03-16');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-10-24');
    $request->offset = 936747;
    $request->period = 'vel';

    $response = $sdk->connections->getUsersIdUserLogs($request);

    if ($response->getUsersIdUserLogs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConnectionsIdConnectionSourcesIdSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostConnectionsIdConnectionSourcesIdSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostConnectionsIdConnectionSourcesIdSourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConnectionsIdConnectionSourcesIdSourceRequest();
    $request->requestBody = new PostConnectionsIdConnectionSourcesIdSourceRequestBody();
    $request->requestBody->disabled = false;
    $request->requestBody->synchronize = false;
    $request->background = false;
    $request->expand = 'in';
    $request->idConnection = 258684;
    $request->idSource = 727697;

    $response = $sdk->connections->postConnectionsIdConnectionSourcesIdSource($request);

    if ($response->connectionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConnectors

Send a request to add a new connector<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostConnectorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostConnectorsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConnectorsRequest();
    $request->requestBody = new PostConnectorsRequestBody();
    $request->requestBody->comment = 'illum';
    $request->requestBody->email = 'Alexie.Hackett35@hotmail.com';
    $request->requestBody->login = 'reprehenderit';
    $request->requestBody->name = 'Alma Armstrong';
    $request->requestBody->password = 'quibusdam';
    $request->requestBody->sendmail = false;
    $request->requestBody->types = 'ex';
    $request->requestBody->url = 'deleniti';
    $request->expand = 'itaque';

    $response = $sdk->connections->postConnectors($request);

    if ($response->connector !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdUserConnections

Create a new connection to a given bank or provider. You have to give all needed parameters (use /banks/ID/fields or /providers/ID/fields to get them).<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdUserConnectionsRequest();
    $request->requestBody = new PostUsersIdUserConnectionsRequestBody();
    $request->requestBody->connectorUuid = 'dolorum';
    $request->requestBody->idConnector = 99615;
    $request->expand = 'omnis';
    $request->idUser = 'tenetur';
    $request->source = 'quasi';

    $response = $sdk->connections->postUsersIdUserConnections($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdUserConnectionsIdConnection

Give new parameters to change on the configuration of this connection (for example "password").<br><br>It tests connection to website, and if it fails, a 400 response is given with the error code "wrongpass" or "websiteUnavailable".<br><br>You can also supply meta-parameters on connection, like 'active' or 'expire'.<br><br>It's possible to execute the update/synchronization in the background with a query parameter. If done in background this endpoint will respond with data that is not yet updated. To obtain updated data, polling is required as the the data will be filled in the background.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsIdConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsIdConnectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdUserConnectionsIdConnectionRequest();
    $request->requestBody = new PostUsersIdUserConnectionsIdConnectionRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->decoupled = false;
    $request->requestBody->expire = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-22T05:30:53.483Z');
    $request->requestBody->login = 'voluptate';
    $request->requestBody->password = 'ipsa';
    $request->background = false;
    $request->expand = 'minima';
    $request->idConnection = 86532;
    $request->idUser = 'consectetur';
    $request->psuRequested = false;
    $request->refreshPsd2Auth = false;

    $response = $sdk->connections->postUsersIdUserConnectionsIdConnection($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdUserConnectionsIdConnectionSourcesIdSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest();
    $request->requestBody = new PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody();
    $request->requestBody->disabled = false;
    $request->requestBody->synchronize = false;
    $request->background = false;
    $request->expand = 'adipisci';
    $request->idConnection = 614465;
    $request->idSource = 839513;
    $request->idUser = 'accusantium';

    $response = $sdk->connections->postUsersIdUserConnectionsIdConnectionSourcesIdSource($request);

    if ($response->connectionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConnectionsIdConnectionSourcesIdSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectionsIdConnectionSourcesIdSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectionsIdConnectionSourcesIdSourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConnectionsIdConnectionSourcesIdSourceRequest();
    $request->requestBody = new PutConnectionsIdConnectionSourcesIdSourceRequestBody();
    $request->requestBody->disabled = false;
    $request->requestBody->force = false;
    $request->requestBody->synchronize = false;
    $request->background = false;
    $request->expand = 'rem';
    $request->idConnection = 15606;
    $request->idSource = 513075;

    $response = $sdk->connections->putConnectionsIdConnectionSourcesIdSource($request);

    if ($response->connectionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConnectorsIdConnectorSources

Edit several connector sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectorsIdConnectorSourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectorsIdConnectorSourcesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConnectorsIdConnectorSourcesRequest();
    $request->requestBody = new PutConnectorsIdConnectorSourcesRequestBody();
    $request->requestBody->disabledCapabilities = 'eum';
    $request->requestBody->unavailableCapabilities = 'mollitia';
    $request->expand = 'ab';
    $request->idConnector = 544591;

    $response = $sdk->connections->putConnectorsIdConnectorSources($request);

    if ($response->connectorSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConnectorsIdConnectorSourcesIdSource

Edit the provided connector source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectorsIdConnectorSourcesIdSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectorsIdConnectorSourcesIdSourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConnectorsIdConnectorSourcesIdSourceRequest();
    $request->requestBody = new PutConnectorsIdConnectorSourcesIdSourceRequestBody();
    $request->requestBody->authMechanism = 'non';
    $request->requestBody->disabled = false;
    $request->requestBody->disabledCapabilities = 'voluptatem';
    $request->requestBody->unavailable = false;
    $request->requestBody->unavailableCapabilities = 'dolor';
    $request->expand = 'occaecati';
    $request->idConnector = 253191;
    $request->idSource = 771089;

    $response = $sdk->connections->putConnectorsIdConnectorSourcesIdSource($request);

    if ($response->connectorSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersIdUserConnectionsIdConnection

We suggest to pass parameter expand=accounts[transactions] to get all *new* and *updated* transactions.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserConnectionsIdConnectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersIdUserConnectionsIdConnectionRequest();
    $request->background = false;
    $request->expand = 'explicabo';
    $request->idConnection = 376226;
    $request->idUser = 'aut';
    $request->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-19T20:21:26.456Z');
    $request->psuRequested = false;

    $response = $sdk->connections->putUsersIdUserConnectionsIdConnection($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUsersIdUserConnectionsIdConnectionSourcesIdSource

This endpoint is used to enable a source or force a synchronization on it.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest();
    $request->requestBody = new PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody();
    $request->requestBody->disabled = false;
    $request->requestBody->force = false;
    $request->requestBody->synchronize = false;
    $request->background = false;
    $request->expand = 'maiores';
    $request->idConnection = 618480;
    $request->idSource = 244651;
    $request->idUser = 'voluptatibus';

    $response = $sdk->connections->putUsersIdUserConnectionsIdConnectionSourcesIdSource($request);

    if ($response->connectionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
