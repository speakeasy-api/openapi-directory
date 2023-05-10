# incidents

## Overview

Incidents matching parameters

### Available Operations

* [getVersionIncidentsFormat](#getversionincidentsformat) - Paginated incidents matching parameters
* [getVersionIncidentsIdFormat](#getversionincidentsidformat)

## getVersionIncidentsFormat


<p>If you’d like more detailed information about bike incidents, use this endpoint. For mapping, <code>locations</code> is probably a better bet.</p>

<p><strong>Notes on location searching</strong>: <br />
- <code>proximity</code> accepts an ip address, an address, zipcode, city, or latitude,longitude - i.e. <code>70.210.133.87</code>, <code>210 NW 11th Ave, Portland, OR</code>, <code>60647</code>, <code>Chicago, IL</code>, and <code>45.521728,-122.67326</code> are all acceptable<br />
- <code>proximity_square</code> sets the length of the sides of the square to find matches inside of. The square is centered on the location specified by <code>proximity</code>. It defaults to 100.</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETVersionIncidentsFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETVersionIncidentsFormatIncidentTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETVersionIncidentsFormatRequest();
    $request->incidentType = GETVersionIncidentsFormatIncidentTypeEnum::THEFT;
    $request->occurredAfter = 623564;
    $request->occurredBefore = 645894;
    $request->page = 384382;
    $request->perPage = 437587;
    $request->proximity = 'magnam';
    $request->proximitySquare = 891773;
    $request->query = 'ipsa';

    $response = $sdk->incidents->getVersionIncidentsFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVersionIncidentsIdFormat

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETVersionIncidentsIdFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETVersionIncidentsIdFormatRequest();
    $request->id = 963663;

    $response = $sdk->incidents->getVersionIncidentsIdFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
