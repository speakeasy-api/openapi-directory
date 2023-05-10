# providers

### Available Operations

* [deleteConnectionsIdConnectionSourcesIdSource](#deleteconnectionsidconnectionsourcesidsource) - Disable a connection source
* [deleteConnectorsIdConnectorLogosIdLogo](#deleteconnectorsidconnectorlogosidlogo) - Delete a single Logo object.
* [deleteUsersIdUserConnections](#deleteusersiduserconnections) - Delete all connections
* [deleteUsersIdUserConnectionsIdConnection](#deleteusersiduserconnectionsidconnection) - Delete a connection.
* [deleteUsersIdUserConnectionsIdConnectionSourcesIdSource](#deleteusersiduserconnectionsidconnectionsourcesidsource) - Disable a connection source
* [getBanks](#getbanks) - Get list of connectors
* [getBanksIdBank](#getbanksidbank) - Get a connector
* [getBanksIdConnectorLogos](#getbanksidconnectorlogos) - Get all links to the files associated with this connector.
* [getBanksIdConnectorLogosMain](#getbanksidconnectorlogosmain) - Get all links to the files associated with this connector.
* [getBanksIdConnectorLogosThumbnail](#getbanksidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [getBanksIdConnectorSources](#getbanksidconnectorsources) - Get list of connector sources
* [getBanksIdConnectorSourcesIdSource](#getbanksidconnectorsourcesidsource) - Get the connector source
* [getConnections](#getconnections) - Get connections without a user
* [getConnectionsIdConnectionLogs](#getconnectionsidconnectionlogs) - Get connection logs
* [getConnectionsIdConnectionSources](#getconnectionsidconnectionsources) - Get connection sources
* [getConnectors](#getconnectors) - Get list of connectors
* [getConnectorsIdConnector](#getconnectorsidconnector) - Get a connector
* [getConnectorsIdConnectorLogos](#getconnectorsidconnectorlogos) - Get all links to the files associated with this connector.
* [getConnectorsIdConnectorLogosMain](#getconnectorsidconnectorlogosmain) - Get all links to the files associated with this connector.
* [getConnectorsIdConnectorLogosThumbnail](#getconnectorsidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [getConnectorsIdConnectorSources](#getconnectorsidconnectorsources) - Get list of connector sources
* [getConnectorsIdConnectorSourcesIdSource](#getconnectorsidconnectorsourcesidsource) - Get the connector source
* [getLogs](#getlogs) - Get connection logs
* [getProviders](#getproviders) - Get list of connectors
* [getProvidersIdConnectorLogos](#getprovidersidconnectorlogos) - Get all links to the files associated with this connector.
* [getProvidersIdConnectorLogosMain](#getprovidersidconnectorlogosmain) - Get all links to the files associated with this connector.
* [getProvidersIdConnectorLogosThumbnail](#getprovidersidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [getProvidersIdConnectorSources](#getprovidersidconnectorsources) - Get list of connector sources
* [getProvidersIdConnectorSourcesIdSource](#getprovidersidconnectorsourcesidsource) - Get the connector source
* [getProvidersIdProvider](#getprovidersidprovider) - Get a connector
* [getUsersIdUserConnections](#getusersiduserconnections) - Get connections
* [getUsersIdUserConnectionsIdConnectionInformations](#getusersiduserconnectionsidconnectioninformations) - Get connection additionnal informations
* [getUsersIdUserConnectionsIdConnectionLogs](#getusersiduserconnectionsidconnectionlogs) - Get connection logs
* [getUsersIdUserConnectionsIdConnectionSources](#getusersiduserconnectionsidconnectionsources) - Get connection sources
* [getUsersIdUserLogs](#getusersiduserlogs) - Get connection logs
* [postConnectionsIdConnectionSourcesIdSource](#postconnectionsidconnectionsourcesidsource) - "
* [postConnectors](#postconnectors) - Request a new connector
* [postConnectorsIdConnectorLogos](#postconnectorsidconnectorlogos) - Create a connector Logo
* [postUsersIdUserConnections](#postusersiduserconnections) - Add a new connection.
* [postUsersIdUserConnectionsIdConnection](#postusersiduserconnectionsidconnection) - Update a connection.
* [postUsersIdUserConnectionsIdConnectionSourcesIdSource](#postusersiduserconnectionsidconnectionsourcesidsource) - "
* [putConnectionsIdConnectionSourcesIdSource](#putconnectionsidconnectionsourcesidsource) - Update connection source
* [putConnectorsIdConnectorLogos](#putconnectorsidconnectorlogos) - Create or Update a connector Logo
* [putConnectorsIdConnectorLogosIdLogo](#putconnectorsidconnectorlogosidlogo) - Create or Update a connector Logo.
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
    $request->expand = 'adipisci';
    $request->idConnection = 683573;
    $request->idSource = 662505;

    $response = $sdk->providers->deleteConnectionsIdConnectionSourcesIdSource($request);

    if ($response->connectionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnectorsIdConnectorLogosIdLogo

Delete a single Logo object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectorsIdConnectorLogosIdLogoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectorsIdConnectorLogosIdLogoRequest();
    $request->expand = 'suscipit';
    $request->idConnector = 246063;
    $request->idLogo = 633931;

    $response = $sdk->providers->deleteConnectorsIdConnectorLogosIdLogo($request);

    if ($response->connectorLogo !== null) {
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
    $request->expand = 'est';
    $request->idUser = 'recusandae';

    $response = $sdk->providers->deleteUsersIdUserConnections($request);

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
    $request->expand = 'totam';
    $request->idConnection = 853940;
    $request->idUser = 'vel';

    $response = $sdk->providers->deleteUsersIdUserConnectionsIdConnection($request);

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
    $request->expand = 'ducimus';
    $request->idConnection = 554688;
    $request->idSource = 427834;
    $request->idUser = 'labore';

    $response = $sdk->providers->deleteUsersIdUserConnectionsIdConnectionSourcesIdSource($request);

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
    $request->expand = 'possimus';

    $response = $sdk->providers->getBanks($request);

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
    $request->expand = 'facilis';
    $request->idBank = 738227;

    $response = $sdk->providers->getBanksIdBank($request);

    if ($response->connector !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanksIdConnectorLogos

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksIdConnectorLogosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksIdConnectorLogosRequest();
    $request->expand = 'commodi';
    $request->idConnector = 447144;

    $response = $sdk->providers->getBanksIdConnectorLogos($request);

    if ($response->getBanksIdConnectorLogos200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanksIdConnectorLogosMain

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksIdConnectorLogosMainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksIdConnectorLogosMainRequest();
    $request->expand = 'corporis';
    $request->idConnector = 968904;

    $response = $sdk->providers->getBanksIdConnectorLogosMain($request);

    if ($response->getBanksIdConnectorLogosMain200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBanksIdConnectorLogosThumbnail

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBanksIdConnectorLogosThumbnailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBanksIdConnectorLogosThumbnailRequest();
    $request->expand = 'assumenda';
    $request->idConnector = 363161;

    $response = $sdk->providers->getBanksIdConnectorLogosThumbnail($request);

    if ($response->getBanksIdConnectorLogosThumbnail200ApplicationJSONObject !== null) {
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
    $request->expand = 'recusandae';
    $request->idConnector = 397533;

    $response = $sdk->providers->getBanksIdConnectorSources($request);

    if ($response->getBanksIdConnectorSources200ApplicationJSONObject !== null) {
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
    $request->expand = 'aperiam';
    $request->idConnector = 738683;
    $request->idSource = 232627;

    $response = $sdk->providers->getBanksIdConnectorSourcesIdSource($request);

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
    $request->expand = 'in';

    $response = $sdk->providers->getConnections($request);

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
    $request->connectorUuid = 'exercitationem';
    $request->error = 'earum';
    $request->expand = 'facere';
    $request->idConnectionPathParameter = 257233;
    $request->idConnectionQueryParameter = 985492;
    $request->idConnector = 381760;
    $request->idMax = 968972;
    $request->idSource = 697142;
    $request->idUser = 904949;
    $request->limit = 897071;
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-11-17');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-04-11');
    $request->offset = 249420;
    $request->period = 'amet';

    $response = $sdk->providers->getConnectionsIdConnectionLogs($request);

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
    $request->expand = 'beatae';
    $request->idConnection = 489509;

    $response = $sdk->providers->getConnectionsIdConnectionSources($request);

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
    $request->expand = 'a';

    $response = $sdk->providers->getConnectors($request);

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
    $request->expand = 'debitis';
    $request->idConnector = 233420;

    $response = $sdk->providers->getConnectorsIdConnector($request);

    if ($response->connector !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectorsIdConnectorLogos

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsIdConnectorLogosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsIdConnectorLogosRequest();
    $request->expand = 'corporis';
    $request->idConnector = 689768;

    $response = $sdk->providers->getConnectorsIdConnectorLogos($request);

    if ($response->getConnectorsIdConnectorLogos200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectorsIdConnectorLogosMain

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsIdConnectorLogosMainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsIdConnectorLogosMainRequest();
    $request->expand = 'laboriosam';
    $request->idConnector = 58356;

    $response = $sdk->providers->getConnectorsIdConnectorLogosMain($request);

    if ($response->getConnectorsIdConnectorLogosMain200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectorsIdConnectorLogosThumbnail

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsIdConnectorLogosThumbnailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsIdConnectorLogosThumbnailRequest();
    $request->expand = 'voluptates';
    $request->idConnector = 730709;

    $response = $sdk->providers->getConnectorsIdConnectorLogosThumbnail($request);

    if ($response->getConnectorsIdConnectorLogosThumbnail200ApplicationJSONObject !== null) {
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
    $request->expand = 'vitae';
    $request->idConnector = 881721;

    $response = $sdk->providers->getConnectorsIdConnectorSources($request);

    if ($response->getConnectorsIdConnectorSources200ApplicationJSONObject !== null) {
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
    $request->expand = 'similique';
    $request->idConnector = 272437;
    $request->idSource = 132815;

    $response = $sdk->providers->getConnectorsIdConnectorSourcesIdSource($request);

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
    $request->connectorUuid = 'voluptas';
    $request->error = 'voluptas';
    $request->expand = 'voluptas';
    $request->idConnection = 324405;
    $request->idConnector = 748789;
    $request->idMax = 680116;
    $request->idSource = 237807;
    $request->idUser = 795535;
    $request->limit = 171853;
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-02-07');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-09-11');
    $request->offset = 885963;
    $request->period = 'temporibus';

    $response = $sdk->providers->getLogs($request);

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
    $request->expand = 'ullam';

    $response = $sdk->providers->getProviders($request);

    if ($response->getProviders200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvidersIdConnectorLogos

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersIdConnectorLogosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersIdConnectorLogosRequest();
    $request->expand = 'adipisci';
    $request->idConnector = 738391;

    $response = $sdk->providers->getProvidersIdConnectorLogos($request);

    if ($response->getProvidersIdConnectorLogos200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvidersIdConnectorLogosMain

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersIdConnectorLogosMainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersIdConnectorLogosMainRequest();
    $request->expand = 'blanditiis';
    $request->idConnector = 555361;

    $response = $sdk->providers->getProvidersIdConnectorLogosMain($request);

    if ($response->getProvidersIdConnectorLogosMain200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvidersIdConnectorLogosThumbnail

This endpoint returns all links to files associated with this connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvidersIdConnectorLogosThumbnailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvidersIdConnectorLogosThumbnailRequest();
    $request->expand = 'hic';
    $request->idConnector = 201517;

    $response = $sdk->providers->getProvidersIdConnectorLogosThumbnail($request);

    if ($response->getProvidersIdConnectorLogosThumbnail200ApplicationJSONObject !== null) {
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
    $request->expand = 'culpa';
    $request->idConnector = 548519;

    $response = $sdk->providers->getProvidersIdConnectorSources($request);

    if ($response->getProvidersIdConnectorSources200ApplicationJSONObject !== null) {
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
    $request->expand = 'pariatur';
    $request->idConnector = 519643;
    $request->idSource = 940210;

    $response = $sdk->providers->getProvidersIdConnectorSourcesIdSource($request);

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
    $request->expand = 'exercitationem';
    $request->idProvider = 750765;

    $response = $sdk->providers->getProvidersIdProvider($request);

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
    $request->expand = 'sit';
    $request->idUser = 'rerum';

    $response = $sdk->providers->getUsersIdUserConnections($request);

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
    $request->expand = 'sed';
    $request->idConnection = 967966;
    $request->idUser = 'explicabo';

    $response = $sdk->providers->getUsersIdUserConnectionsIdConnectionInformations($request);

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
    $request->connectorUuid = 'asperiores';
    $request->error = 'facilis';
    $request->expand = 'voluptate';
    $request->idConnectionPathParameter = 709072;
    $request->idConnectionQueryParameter = 70869;
    $request->idConnector = 611749;
    $request->idMax = 292794;
    $request->idSource = 671907;
    $request->idUserPathParameter = 'sed';
    $request->idUserQueryParameter = 447516;
    $request->limit = 417486;
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-09-27');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-05-25');
    $request->offset = 100032;
    $request->period = 'suscipit';

    $response = $sdk->providers->getUsersIdUserConnectionsIdConnectionLogs($request);

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
    $request->expand = 'sapiente';
    $request->idConnection = 895386;
    $request->idUser = 'illo';

    $response = $sdk->providers->getUsersIdUserConnectionsIdConnectionSources($request);

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
    $request->connectorUuid = 'reiciendis';
    $request->error = 'perferendis';
    $request->expand = 'corrupti';
    $request->idConnection = 979574;
    $request->idConnector = 274823;
    $request->idMax = 148478;
    $request->idSource = 592231;
    $request->idUserPathParameter = 'eius';
    $request->idUserQueryParameter = 896762;
    $request->limit = 215529;
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-06-03');
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2021-01-18');
    $request->offset = 271653;
    $request->period = 'tempora';

    $response = $sdk->providers->getUsersIdUserLogs($request);

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
    $request->expand = 'voluptate';
    $request->idConnection = 970076;
    $request->idSource = 401713;

    $response = $sdk->providers->postConnectionsIdConnectionSourcesIdSource($request);

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
    $request->requestBody->comment = 'sit';
    $request->requestBody->email = 'Shyann.Lakin27@gmail.com';
    $request->requestBody->login = 'ipsam';
    $request->requestBody->name = 'Ian Balistreri';
    $request->requestBody->password = 'veniam';
    $request->requestBody->sendmail = false;
    $request->requestBody->types = 'minima';
    $request->requestBody->url = 'recusandae';
    $request->expand = 'reiciendis';

    $response = $sdk->providers->postConnectors($request);

    if ($response->connector !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConnectorsIdConnectorLogos

This endpoint creates a connector logo. You can either pass a file to as a parameter to insert and link it with the connector or pass an id_file to link a connector with an existing file. Will fail if the file is already linked with that connector.<br><br>Form params: - id_file (integer): The id of the file to link with that connector. - img (string): Path to the image to link with that connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostConnectorsIdConnectorLogosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConnectorsIdConnectorLogosRequest();
    $request->expand = 'nulla';
    $request->idConnector = 168576;

    $response = $sdk->providers->postConnectorsIdConnectorLogos($request);

    if ($response->connectorLogo !== null) {
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
    $request->requestBody->connectorUuid = 'aperiam';
    $request->requestBody->idConnector = 901483;
    $request->expand = 'numquam';
    $request->idUser = 'veniam';
    $request->source = 'in';

    $response = $sdk->providers->postUsersIdUserConnections($request);

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
    $request->requestBody->expire = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-08T10:22:44.124Z');
    $request->requestBody->login = 'laudantium';
    $request->requestBody->password = 'exercitationem';
    $request->background = false;
    $request->expand = 'praesentium';
    $request->idConnection = 740098;
    $request->idUser = 'laboriosam';
    $request->psuRequested = false;
    $request->refreshPsd2Auth = false;

    $response = $sdk->providers->postUsersIdUserConnectionsIdConnection($request);

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
    $request->expand = 'dolorum';
    $request->idConnection = 530089;
    $request->idSource = 622385;
    $request->idUser = 'hic';

    $response = $sdk->providers->postUsersIdUserConnectionsIdConnectionSourcesIdSource($request);

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
    $request->expand = 'expedita';
    $request->idConnection = 892863;
    $request->idSource = 204923;

    $response = $sdk->providers->putConnectionsIdConnectionSourcesIdSource($request);

    if ($response->connectionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConnectorsIdConnectorLogos

This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectorsIdConnectorLogosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConnectorsIdConnectorLogosRequest();
    $request->expand = 'dolorum';
    $request->idConnector = 341698;

    $response = $sdk->providers->putConnectorsIdConnectorLogos($request);

    if ($response->connectorLogo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConnectorsIdConnectorLogosIdLogo

This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutConnectorsIdConnectorLogosIdLogoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConnectorsIdConnectorLogosIdLogoRequest();
    $request->expand = 'officia';
    $request->idConnector = 676243;
    $request->idLogo = 548361;

    $response = $sdk->providers->putConnectorsIdConnectorLogosIdLogo($request);

    if ($response->connectorLogo !== null) {
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
    $request->requestBody->disabledCapabilities = 'accusamus';
    $request->requestBody->unavailableCapabilities = 'tempora';
    $request->expand = 'atque';
    $request->idConnector = 148268;

    $response = $sdk->providers->putConnectorsIdConnectorSources($request);

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
    $request->requestBody->authMechanism = 'ut';
    $request->requestBody->disabled = false;
    $request->requestBody->disabledCapabilities = 'fugiat';
    $request->requestBody->unavailable = false;
    $request->requestBody->unavailableCapabilities = 'voluptatem';
    $request->expand = 'culpa';
    $request->idConnector = 710337;
    $request->idSource = 299643;

    $response = $sdk->providers->putConnectorsIdConnectorSourcesIdSource($request);

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
    $request->expand = 'consequatur';
    $request->idConnection = 460220;
    $request->idUser = 'ipsam';
    $request->lastUpdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-21T08:29:37.931Z');
    $request->psuRequested = false;

    $response = $sdk->providers->putUsersIdUserConnectionsIdConnection($request);

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
    $request->expand = 'quas';
    $request->idConnection = 922112;
    $request->idSource = 361151;
    $request->idUser = 'et';

    $response = $sdk->providers->putUsersIdUserConnectionsIdConnectionSourcesIdSource($request);

    if ($response->connectionSource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
