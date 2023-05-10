# domains

## Overview

Domains Database

### Available Operations

* [getDomainsTldZoneIdDownload](#getdomainstldzoneiddownload) - Download Whole Dataset for TLD
* [getDomainsTldZoneIdSearch](#getdomainstldzoneidsearch) - Domains Search for TLD
* [getDomainsUpdatesAdded](#getdomainsupdatesadded) - Get added domains, latest if date not specified
* [getDomainsUpdatesAddedDownload](#getdomainsupdatesaddeddownload) - Download added domains, latest if date not specified
* [getDomainsUpdatesDeleted](#getdomainsupdatesdeleted) - Get deleted domains, latest if date not specified
* [getDomainsUpdatesDeletedDownload](#getdomainsupdatesdeleteddownload) - Download deleted domains, latest if date not specified
* [getDomainsUpdatesList](#getdomainsupdateslist) - List of updates
* [getSearchDomainItem](#getsearchdomainitem) - Domains Database Search
* [getTldDomainItem](#gettlddomainitem) - Get TLD records

## getDomainsTldZoneIdDownload

Download Whole Dataset for TLD

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainsTldZoneIdDownloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainsTldZoneIdDownloadRequest();
    $request->apiKey = 'quibusdam';
    $request->date = 'unde';
    $request->zoneId = 'nulla';

    $response = $sdk->domains->getDomainsTldZoneIdDownload($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainsTldZoneIdSearch

Domains Search for TLD

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainsTldZoneIdSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainsTldZoneIdSearchRequest();
    $request->a = 'corrupti';
    $request->cname = 'illum';
    $request->mx = 'vel';
    $request->ns = 'error';
    $request->txt = 'deserunt';
    $request->apiKey = 'suscipit';
    $request->country = 'Jamaica';
    $request->date = 'magnam';
    $request->domain = 'debitis';
    $request->isDead = false;
    $request->limit = 56713;
    $request->page = 'delectus';
    $request->zoneId = 'tempora';

    $response = $sdk->domains->getDomainsTldZoneIdSearch($request);

    if ($response->searchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainsUpdatesAdded

Get added domains, latest if date not specified

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainsUpdatesAddedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainsUpdatesAddedRequest();
    $request->apiKey = 'suscipit';
    $request->date = 'molestiae';
    $request->limit = 791725;
    $request->page = 'placeat';

    $response = $sdk->domains->getDomainsUpdatesAdded($request);

    if ($response->searchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainsUpdatesAddedDownload

Download added domains, latest if date not specified

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainsUpdatesAddedDownloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainsUpdatesAddedDownloadRequest();
    $request->apiKey = 'voluptatum';
    $request->date = 'iusto';

    $response = $sdk->domains->getDomainsUpdatesAddedDownload($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainsUpdatesDeleted

Get deleted domains, latest if date not specified

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainsUpdatesDeletedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainsUpdatesDeletedRequest();
    $request->apiKey = 'excepturi';
    $request->date = 'nisi';
    $request->limit = 925597;
    $request->page = 'temporibus';

    $response = $sdk->domains->getDomainsUpdatesDeleted($request);

    if ($response->searchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainsUpdatesDeletedDownload

Download deleted domains, latest if date not specified

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainsUpdatesDeletedDownloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainsUpdatesDeletedDownloadRequest();
    $request->apiKey = 'ab';
    $request->date = 'quis';

    $response = $sdk->domains->getDomainsUpdatesDeletedDownload($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainsUpdatesList

List of updates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainsUpdatesListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainsUpdatesListRequest();
    $request->apiKey = 'veritatis';

    $response = $sdk->domains->getDomainsUpdatesList($request);

    if ($response->updateModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchDomainItem

Domains Database Search

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchDomainItemRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchDomainItemRequest();
    $request->a = 'deserunt';
    $request->cname = 'perferendis';
    $request->mx = 'ipsam';
    $request->ns = 'repellendus';
    $request->txt = 'sapiente';
    $request->apiKey = 'quo';
    $request->country = 'Burundi';
    $request->date = 'at';
    $request->domain = 'at';
    $request->isDead = false;
    $request->limit = 978619;
    $request->page = 'molestiae';
    $request->zone = 'quod';

    $response = $sdk->domains->getSearchDomainItem($request);

    if ($response->searchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTldDomainItem

Get TLD records

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTldDomainItemRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTldDomainItemRequest();
    $request->a = 'quod';
    $request->cname = 'esse';
    $request->mx = 'totam';
    $request->ns = 'porro';
    $request->txt = 'dolorum';
    $request->apiKey = 'dicta';
    $request->country = 'Puerto Rico';
    $request->date = 'officia';
    $request->domain = 'occaecati';
    $request->isDead = false;
    $request->limit = 143353;
    $request->page = 'deleniti';
    $request->zoneId = 'hic';

    $response = $sdk->domains->getTldDomainItem($request);

    if ($response->searchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
