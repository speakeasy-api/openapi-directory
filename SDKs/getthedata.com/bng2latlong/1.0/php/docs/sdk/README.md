# SDK

## Overview

Convert an OSGB36 easting and northing (British National Grid) to WGS84 latitude and longitude.

Full documentation
<https://www.getthedata.com/bng2latlong>
### Available Operations

* [getBng2latlongEastingNorthing](#getbng2latlongeastingnorthing) - Returns latitude and longitude for the given easting and northing.

## getBng2latlongEastingNorthing

Takes an OSGB36 easting and northing (British National Grid) and returns the geographically equivalent WGS84 latitude and longitude.
#### A successful request returns the following fields:
* status - this will be `ok`
* easting - the easting provided in the request
* northing - the northing provided in the request
* latitude - the latitude of the converted coordinates
* longitude - the longitude of the converted coordinates
#### An unsuccessful request returns the following fields:
* status - this will be `error`
* error - an error message


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBng2latlongEastingNorthingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBng2latlongEastingNorthingRequest();
    $request->easting = 715190;
    $request->northing = 844266;

    $response = $sdk->sdk->getBng2latlongEastingNorthing($request);

    if ($response->getBng2latlongEastingNorthing200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
