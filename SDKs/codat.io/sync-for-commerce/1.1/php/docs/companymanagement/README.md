# companyManagement

## Overview

Create new and manage existing sync for commerce companies.

### Available Operations

* [createCompany](#createcompany) - Create a sync for commerce company
* [createConnection](#createconnection) - Create a data connection
* [listCompanies](#listcompanies) - List companies
* [listConnections](#listconnections) - List data connections
* [updateConnection](#updateconnection) - Update data connection

## createCompany

Creates a Codat company with a commerce partner data connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateCompany;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCompany();
    $request->name = 'provident';

    $response = $sdk->companyManagement->createCompany($request);

    if ($response->company !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConnection

Create a data connection for company.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConnectionRequest();
    $request->requestBody = 'distinctio';
    $request->companyId = 'd9d8d69a-674e-40f4-a7cc-8796ed151a05';

    $response = $sdk->companyManagement->createConnection($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCompanies

Retrieve a list of all companies the client has created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCompaniesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCompaniesRequest();
    $request->orderBy = 'repellendus';
    $request->page = 957156;
    $request->pageSize = 778157;
    $request->query = 'odit';

    $response = $sdk->companyManagement->listCompanies($request);

    if ($response->companies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConnections

Retrieve previously created data connections.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConnectionsRequest();
    $request->companyId = 'ddf7cc78-ca1b-4a92-8fc8-16742cb73920';
    $request->orderBy = 'ad';
    $request->page = 617636;
    $request->pageSize = 149675;
    $request->query = 'iste';

    $response = $sdk->companyManagement->listConnections($request);

    if ($response->connections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConnection

Update a data connection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConnection;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConnectionRequest();
    $request->updateConnection = new UpdateConnection();
    $request->updateConnection->status = 'dolor';
    $request->companyId = '96fea759-6eb1-40fa-aa23-52c5955907af';
    $request->connectionId = 'f1a3a2fa-9467-4739-a51a-a52c3f5ad019';

    $response = $sdk->companyManagement->updateConnection($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
