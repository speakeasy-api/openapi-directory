# locations

## Overview

GeoJSON response for matching incidents

### Available Operations

* [getVersionLocationsFormat](#getversionlocationsformat) - Unpaginated geojson response
* [getVersionLocationsMarkersFormat](#getversionlocationsmarkersformat) - Unpaginated geojson response with simplestyled markers

## getVersionLocationsFormat

<p><strong>This endpoint behaves exactly like</strong> <code>incidents</code>, but returns a valid geojson <code>FeatureCollection</code> that looks like this:</p>

<pre><code>{
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
      id: 4474199,
      type: "Theft",
      occurred_at: 1428536937
    },
      geometry: {
      type: "Point",
      coordinates: [ -122.6244177, 45.5164386 ]
    }
  }
}
</code></pre>

<p>It doesn’t paginate. If you pass the <code>all</code> parameter it returns all matches (which can be big, &gt; 4mb), otherwise it returns the 100 most recent.</p>

<p><strong>Go forth and make maps!</strong></p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETVersionLocationsFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETVersionLocationsFormatIncidentTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETVersionLocationsFormatRequest();
    $request->all = false;
    $request->incidentType = GETVersionLocationsFormatIncidentTypeEnum::HAZARD;
    $request->limit = 383441;
    $request->occurredAfter = 477665;
    $request->occurredBefore = 791725;
    $request->proximity = 'placeat';
    $request->proximitySquare = 528895;
    $request->query = 'iusto';

    $response = $sdk->locations->getVersionLocationsFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVersionLocationsMarkersFormat

<p>This behaves exactly like the root <code>locations</code> endpoint, but returns <a href="https://github.com/mapbox/simplestyle-spec">simplestyled markers</a> (<a href="https://www.mapbox.com/guides/markers/#simple-style">mapbox styled markers</a>)</p>

<p><strong>Go forth and make maps!</strong></p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETVersionLocationsMarkersFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETVersionLocationsMarkersFormatIncidentTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETVersionLocationsMarkersFormatRequest();
    $request->all = false;
    $request->incidentType = GETVersionLocationsMarkersFormatIncidentTypeEnum::UNCONFIRMED;
    $request->limit = 392785;
    $request->occurredAfter = 925597;
    $request->occurredBefore = 836079;
    $request->proximity = 'ab';
    $request->proximitySquare = 337396;
    $request->query = 'veritatis';

    $response = $sdk->locations->getVersionLocationsMarkersFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
