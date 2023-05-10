# SDK

## Overview

"Suite of geospatial services including Maps, Places, Routes, Tracking, and Geofencing"

Amazon Web Services documentation
<https://docs.aws.amazon.com/geo/>
### Available Operations

* [associateTrackerConsumer](#associatetrackerconsumer) - <p>Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection. </p> <p>You can associate up to five geofence collections to each tracker resource.</p> <note> <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p> </note>
* [batchDeleteDevicePositionHistory](#batchdeletedevicepositionhistory) - Deletes the position history of one or more devices from a tracker resource.
* [batchDeleteGeofence](#batchdeletegeofence) - <p>Deletes a batch of geofences from a geofence collection.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* [batchEvaluateGeofences](#batchevaluategeofences) - <p>Evaluates device positions against the geofence geometries from a given geofence collection.</p> <p>This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge:</p> <ul> <li> <p> <code>ENTER</code> if Amazon Location determines that the tracked device has entered a geofenced area.</p> </li> <li> <p> <code>EXIT</code> if Amazon Location determines that the tracked device has exited a geofenced area.</p> </li> </ul> <note> <p>The last geofence that a device was observed within is tracked for 30 days after the most recent device position update.</p> </note> <note> <p>Geofence evaluation uses the given device position. It does not account for the optional <code>Accuracy</code> of a <code>DevicePositionUpdate</code>.</p> </note> <note> <p>The <code>DeviceID</code> is used as a string to represent the device. You do not need to have a <code>Tracker</code> associated with the <code>DeviceID</code>.</p> </note>
* [batchGetDevicePosition](#batchgetdeviceposition) - Lists the latest device positions for requested devices.
* [batchPutGeofence](#batchputgeofence) - A batch request for storing geofence geometries into a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.
* [batchUpdateDevicePosition](#batchupdatedeviceposition) - <p>Uploads position update data for one or more devices to a tracker resource. Amazon Location uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30 days.</p> <note> <p>Position updates are handled based on the <code>PositionFiltering</code> property of the tracker. When <code>PositionFiltering</code> is set to <code>TimeBased</code>, updates are evaluated against linked geofence collections, and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than every 30 seconds, only one update per 30 seconds is stored for each unique device ID.</p> <p>When <code>PositionFiltering</code> is set to <code>DistanceBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than 30 m (98.4 ft).</p> <p>When <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than the measured accuracy. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is neither stored or evaluated if the device has moved less than 15 m. If <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, Amazon Location uses the default value <code>{ "Horizontal": 0}</code> when accuracy is not provided on a <code>DevicePositionUpdate</code>.</p> </note>
* [calculateRoute](#calculateroute) - <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters: <code>DeparturePosition</code> and <code>DestinationPosition</code>. Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html">Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates a route based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> <note> <p>If you specify <code>walking</code> for the travel mode and your data provider is Esri, the start and destination must be within 40km.</p> </note> </li> </ul>
* [calculateRouteMatrix](#calculateroutematrix) - <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html"> Calculates a route matrix</a> given the following required parameters: <code>DeparturePositions</code> and <code>DestinationPositions</code>. <code>CalculateRouteMatrix</code> calculates routes and returns the travel time and travel distance from each departure position to each destination position in the request. For example, given departure positions A and B, and destination positions X and Y, <code>CalculateRouteMatrix</code> will return time and distance for routes from A to X, A to Y, B to X, and B to Y (in that order). The number of results returned (and routes calculated) will be the number of <code>DeparturePositions</code> times the number of <code>DestinationPositions</code>.</p> <note> <p>Your account is charged for each route calculated, not the number of requests.</p> </note> <p>Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating routes.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html"> Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates routes based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> </li> </ul>
* [createGeofenceCollection](#creategeofencecollection) - Creates a geofence collection, which manages and stores geofences.
* [createKey](#createkey) - <p>Creates an API key resource in your Amazon Web Services account, which lets you grant <code>geo:GetMap*</code> actions for Amazon Location Map resources to the API key bearer.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
* [createMap](#createmap) - <p>Creates a map resource in your Amazon Web Services account, which provides map tiles of different styles sourced from global location data providers.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
* [createPlaceIndex](#createplaceindex) - <p>Creates a place index resource in your Amazon Web Services account. Use a place index resource to geocode addresses and other text queries by using the <code>SearchPlaceIndexForText</code> operation, and reverse geocode coordinates by using the <code>SearchPlaceIndexForPosition</code> operation, and enable autosuggestions by using the <code>SearchPlaceIndexForSuggestions</code> operation.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
* [createRouteCalculator](#createroutecalculator) - <p>Creates a route calculator resource in your Amazon Web Services account.</p> <p>You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
* [createTracker](#createtracker) - Creates a tracker resource in your Amazon Web Services account, which lets you retrieve current and historical location of devices.
* [deleteGeofenceCollection](#deletegeofencecollection) - <p>Deletes a geofence collection from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored.</p> </note>
* [deleteKey](#deletekey) - Deletes the specified API key. The API key must have been deactivated more than 90 days previously.
* [deleteMap](#deletemap) - <p>Deletes a map resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the map is being used in an application, the map may not render.</p> </note>
* [deletePlaceIndex](#deleteplaceindex) - <p>Deletes a place index resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* [deleteRouteCalculator](#deleteroutecalculator) - <p>Deletes a route calculator resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* [deleteTracker](#deletetracker) - <p>Deletes a tracker resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications.</p> </note>
* [describeGeofenceCollection](#describegeofencecollection) - Retrieves the geofence collection details.
* [describeKey](#describekey) - <p>Retrieves the API key resource details.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
* [describeMap](#describemap) - Retrieves the map resource details.
* [describePlaceIndex](#describeplaceindex) - Retrieves the place index resource details.
* [describeRouteCalculator](#describeroutecalculator) - Retrieves the route calculator resource details.
* [describeTracker](#describetracker) - Retrieves the tracker resource details.
* [disassociateTrackerConsumer](#disassociatetrackerconsumer) - <p>Removes the association between a tracker resource and a geofence collection.</p> <note> <p>Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.</p> </note>
* [getDevicePosition](#getdeviceposition) - <p>Retrieves a device's most recent position according to its sample time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
* [getDevicePositionHistory](#getdevicepositionhistory) - <p>Retrieves the device position history from a tracker resource within a specified range of time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
* [getGeofence](#getgeofence) - Retrieves the geofence details from a geofence collection.
* [getMapGlyphs](#getmapglyphs) - Retrieves glyphs used to display labels on a map.
* [getMapSprites](#getmapsprites) - Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.
* [getMapStyleDescriptor](#getmapstyledescriptor) - <p>Retrieves the map style descriptor from a map resource. </p> <p>The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.</p>
* [getMapTile](#getmaptile) - <p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. </p> <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>
* [getPlace](#getplace) - <p>Finds a place by its unique ID. A <code>PlaceId</code> is returned by other search operations.</p> <note> <p>A PlaceId is valid only if all of the following are the same in the original search request and the call to <code>GetPlace</code>.</p> <ul> <li> <p>Customer Amazon Web Services account</p> </li> <li> <p>Amazon Web Services Region</p> </li> <li> <p>Data provider specified in the place index resource</p> </li> </ul> </note>
* [listDevicePositions](#listdevicepositions) - A batch request to retrieve all device positions.
* [listGeofenceCollections](#listgeofencecollections) - Lists geofence collections in your Amazon Web Services account.
* [listGeofences](#listgeofences) - Lists geofences stored in a given geofence collection.
* [listKeys](#listkeys) - <p>Lists API key resources in your Amazon Web Services account.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
* [listMaps](#listmaps) - Lists map resources in your Amazon Web Services account.
* [listPlaceIndexes](#listplaceindexes) - Lists place index resources in your Amazon Web Services account.
* [listRouteCalculators](#listroutecalculators) - Lists route calculator resources in your Amazon Web Services account.
* [listTagsForResource](#listtagsforresource) - Returns a list of tags that are applied to the specified Amazon Location resource.
* [listTrackerConsumers](#listtrackerconsumers) - Lists geofence collections currently associated to the given tracker resource.
* [listTrackers](#listtrackers) - Lists tracker resources in your Amazon Web Services account.
* [putGeofence](#putgeofence) - Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request. 
* [searchPlaceIndexForPosition](#searchplaceindexforposition) - Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.
* [searchPlaceIndexForSuggestions](#searchplaceindexforsuggestions) - <p>Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching.</p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for suggested place names near a specified position by using <code>BiasPosition</code>, or filter results within a bounding box by using <code>FilterBBox</code>. These parameters are mutually exclusive; using both <code>BiasPosition</code> and <code>FilterBBox</code> in the same command returns an error.</p> </note>
* [searchPlaceIndexForText](#searchplaceindexfortext) - <p>Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest. </p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for places near a given position using <code>BiasPosition</code>, or filter results within a bounding box using <code>FilterBBox</code>. Providing both parameters simultaneously returns an error.</p> </note> <p>Search results are returned in order of highest to lowest relevance.</p>
* [tagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>You can use the <code>TagResource</code> operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag. </p> <p>You can associate up to 50 tags with a resource.</p>
* [untagResource](#untagresource) - Removes one or more tags from the specified Amazon Location resource.
* [updateGeofenceCollection](#updategeofencecollection) - Updates the specified properties of a given geofence collection.
* [updateKey](#updatekey) - <p>Updates the specified properties of a given API key resource.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
* [updateMap](#updatemap) - Updates the specified properties of a given map resource.
* [updatePlaceIndex](#updateplaceindex) - Updates the specified properties of a given place index resource.
* [updateRouteCalculator](#updateroutecalculator) - Updates the specified properties for a given route calculator resource.
* [updateTracker](#updatetracker) - Updates the specified properties of a given tracker resource.

## associateTrackerConsumer

<p>Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection. </p> <p>You can associate up to five geofence collections to each tracker resource.</p> <note> <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateTrackerConsumerRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateTrackerConsumerRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateTrackerConsumerRequest();
    $request->requestBody = new AssociateTrackerConsumerRequestBody();
    $request->requestBody->consumerArn = 'error';
    $request->trackerName = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->associateTrackerConsumer($request);

    if ($response->associateTrackerConsumerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDeleteDevicePositionHistory

Deletes the position history of one or more devices from a tracker resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteDevicePositionHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteDevicePositionHistoryRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteDevicePositionHistoryRequest();
    $request->requestBody = new BatchDeleteDevicePositionHistoryRequestBody();
    $request->requestBody->deviceIds = [
        'molestiae',
        'minus',
    ];
    $request->trackerName = 'placeat';
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';

    $response = $sdk->sdk->batchDeleteDevicePositionHistory($request);

    if ($response->batchDeleteDevicePositionHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDeleteGeofence

<p>Deletes a batch of geofences from a geofence collection.</p> <note> <p>This operation deletes the resource permanently.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteGeofenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteGeofenceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteGeofenceRequest();
    $request->collectionName = 'quis';
    $request->requestBody = new BatchDeleteGeofenceRequestBody();
    $request->requestBody->geofenceIds = [
        'deserunt',
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->batchDeleteGeofence($request);

    if ($response->batchDeleteGeofenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchEvaluateGeofences

<p>Evaluates device positions against the geofence geometries from a given geofence collection.</p> <p>This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge:</p> <ul> <li> <p> <code>ENTER</code> if Amazon Location determines that the tracked device has entered a geofenced area.</p> </li> <li> <p> <code>EXIT</code> if Amazon Location determines that the tracked device has exited a geofenced area.</p> </li> </ul> <note> <p>The last geofence that a device was observed within is tracked for 30 days after the most recent device position update.</p> </note> <note> <p>Geofence evaluation uses the given device position. It does not account for the optional <code>Accuracy</code> of a <code>DevicePositionUpdate</code>.</p> </note> <note> <p>The <code>DeviceID</code> is used as a string to represent the device. You do not need to have a <code>Tracker</code> associated with the <code>DeviceID</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchEvaluateGeofencesRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchEvaluateGeofencesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DevicePositionUpdate;
use \OpenAPI\OpenAPI\Models\Shared\PositionalAccuracy;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchEvaluateGeofencesRequest();
    $request->collectionName = 'at';
    $request->requestBody = new BatchEvaluateGeofencesRequestBody();
    $request->requestBody->devicePositionUpdates = [
        new DevicePositionUpdate(),
        new DevicePositionUpdate(),
        new DevicePositionUpdate(),
        new DevicePositionUpdate(),
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->batchEvaluateGeofences($request);

    if ($response->batchEvaluateGeofencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetDevicePosition

Lists the latest device positions for requested devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetDevicePositionRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetDevicePositionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetDevicePositionRequest();
    $request->requestBody = new BatchGetDevicePositionRequestBody();
    $request->requestBody->deviceIds = [
        'nam',
    ];
    $request->trackerName = 'officia';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->batchGetDevicePosition($request);

    if ($response->batchGetDevicePositionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchPutGeofence

A batch request for storing geofence geometries into a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutGeofenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutGeofenceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BatchPutGeofenceRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\GeofenceGeometry;
use \OpenAPI\OpenAPI\Models\Shared\Circle;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPutGeofenceRequest();
    $request->collectionName = 'commodi';
    $request->requestBody = new BatchPutGeofenceRequestBody();
    $request->requestBody->entries = [
        new BatchPutGeofenceRequestEntry(),
        new BatchPutGeofenceRequestEntry(),
    ];
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->batchPutGeofence($request);

    if ($response->batchPutGeofenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchUpdateDevicePosition

<p>Uploads position update data for one or more devices to a tracker resource. Amazon Location uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30 days.</p> <note> <p>Position updates are handled based on the <code>PositionFiltering</code> property of the tracker. When <code>PositionFiltering</code> is set to <code>TimeBased</code>, updates are evaluated against linked geofence collections, and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than every 30 seconds, only one update per 30 seconds is stored for each unique device ID.</p> <p>When <code>PositionFiltering</code> is set to <code>DistanceBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than 30 m (98.4 ft).</p> <p>When <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than the measured accuracy. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is neither stored or evaluated if the device has moved less than 15 m. If <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, Amazon Location uses the default value <code>{ "Horizontal": 0}</code> when accuracy is not provided on a <code>DevicePositionUpdate</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateDevicePositionRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateDevicePositionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DevicePositionUpdate;
use \OpenAPI\OpenAPI\Models\Shared\PositionalAccuracy;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchUpdateDevicePositionRequest();
    $request->requestBody = new BatchUpdateDevicePositionRequestBody();
    $request->requestBody->updates = [
        new DevicePositionUpdate(),
    ];
    $request->trackerName = 'perferendis';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';

    $response = $sdk->sdk->batchUpdateDevicePosition($request);

    if ($response->batchUpdateDevicePositionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calculateRoute

<p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters: <code>DeparturePosition</code> and <code>DestinationPosition</code>. Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html">Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates a route based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> <note> <p>If you specify <code>walking</code> for the travel mode and your data provider is Esri, the start and destination must be within 40km.</p> </note> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CalculateRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CalculateRouteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CalculateRouteRequestBodyCarModeOptions;
use \OpenAPI\OpenAPI\Models\Operations\CalculateRouteRequestBodyDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalculateRouteRequestBodyTravelModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalculateRouteRequestBodyTruckModeOptions;
use \OpenAPI\OpenAPI\Models\Shared\TruckDimensions;
use \OpenAPI\OpenAPI\Models\Shared\DimensionUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\TruckWeight;
use \OpenAPI\OpenAPI\Models\Shared\VehicleWeightUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalculateRouteRequest();
    $request->calculatorName = 'hic';
    $request->requestBody = new CalculateRouteRequestBody();
    $request->requestBody->carModeOptions = new CalculateRouteRequestBodyCarModeOptions();
    $request->requestBody->carModeOptions->avoidFerries = false;
    $request->requestBody->carModeOptions->avoidTolls = false;
    $request->requestBody->departNow = false;
    $request->requestBody->departurePosition = [
        6818.2,
        4499.5,
        3595.08,
        6130.64,
    ];
    $request->requestBody->departureTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-05T15:25:35.140Z');
    $request->requestBody->destinationPosition = [
        992.8,
        602.25,
        9698.1,
    ];
    $request->requestBody->distanceUnit = CalculateRouteRequestBodyDistanceUnitEnum::MILES;
    $request->requestBody->includeLegGeometry = false;
    $request->requestBody->travelMode = CalculateRouteRequestBodyTravelModeEnum::BICYCLE;
    $request->requestBody->truckModeOptions = new CalculateRouteRequestBodyTruckModeOptions();
    $request->requestBody->truckModeOptions->avoidFerries = false;
    $request->requestBody->truckModeOptions->avoidTolls = false;
    $request->requestBody->truckModeOptions->dimensions = new TruckDimensions();
    $request->requestBody->truckModeOptions->dimensions->height = 6706.38;
    $request->requestBody->truckModeOptions->dimensions->length = 1709.09;
    $request->requestBody->truckModeOptions->dimensions->unit = DimensionUnitEnum::METERS;
    $request->requestBody->truckModeOptions->dimensions->width = 3581.52;
    $request->requestBody->truckModeOptions->weight = new TruckWeight();
    $request->requestBody->truckModeOptions->weight->total = 1289.26;
    $request->requestBody->truckModeOptions->weight->unit = VehicleWeightUnitEnum::POUNDS;
    $request->requestBody->waypointPositions = [
        [
            3637.11,
            3250.47,
            5701.97,
        ],
        [
            4386.01,
        ],
    ];
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->calculateRoute($request);

    if ($response->calculateRouteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calculateRouteMatrix

<p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html"> Calculates a route matrix</a> given the following required parameters: <code>DeparturePositions</code> and <code>DestinationPositions</code>. <code>CalculateRouteMatrix</code> calculates routes and returns the travel time and travel distance from each departure position to each destination position in the request. For example, given departure positions A and B, and destination positions X and Y, <code>CalculateRouteMatrix</code> will return time and distance for routes from A to X, A to Y, B to X, and B to Y (in that order). The number of results returned (and routes calculated) will be the number of <code>DeparturePositions</code> times the number of <code>DestinationPositions</code>.</p> <note> <p>Your account is charged for each route calculated, not the number of requests.</p> </note> <p>Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating routes.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html"> Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates routes based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CalculateRouteMatrixRequest;
use \OpenAPI\OpenAPI\Models\Operations\CalculateRouteMatrixRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CalculateRouteMatrixRequestBodyCarModeOptions;
use \OpenAPI\OpenAPI\Models\Operations\CalculateRouteMatrixRequestBodyDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalculateRouteMatrixRequestBodyTravelModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalculateRouteMatrixRequestBodyTruckModeOptions;
use \OpenAPI\OpenAPI\Models\Shared\TruckDimensions;
use \OpenAPI\OpenAPI\Models\Shared\DimensionUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\TruckWeight;
use \OpenAPI\OpenAPI\Models\Shared\VehicleWeightUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalculateRouteMatrixRequest();
    $request->calculatorName = 'consequuntur';
    $request->requestBody = new CalculateRouteMatrixRequestBody();
    $request->requestBody->carModeOptions = new CalculateRouteMatrixRequestBodyCarModeOptions();
    $request->requestBody->carModeOptions->avoidFerries = false;
    $request->requestBody->carModeOptions->avoidTolls = false;
    $request->requestBody->departNow = false;
    $request->requestBody->departurePositions = [
        [
            5818.5,
            2532.91,
            4143.69,
        ],
        [
            4746.97,
            2444.25,
        ],
        [
            1589.69,
            3380.07,
            1103.75,
        ],
        [
            6563.3,
            3172.02,
            1381.83,
        ],
    ];
    $request->requestBody->departureTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-30T17:48:55.594Z');
    $request->requestBody->destinationPositions = [
        [
            6625.27,
            8209.94,
        ],
        [
            971.01,
        ],
        [
            8379.45,
            6736.6,
            960.98,
        ],
        [
            9764.6,
            8781.94,
            4686.51,
            5096.24,
        ],
    ];
    $request->requestBody->distanceUnit = CalculateRouteMatrixRequestBodyDistanceUnitEnum::MILES;
    $request->requestBody->travelMode = CalculateRouteMatrixRequestBodyTravelModeEnum::CAR;
    $request->requestBody->truckModeOptions = new CalculateRouteMatrixRequestBodyTruckModeOptions();
    $request->requestBody->truckModeOptions->avoidFerries = false;
    $request->requestBody->truckModeOptions->avoidTolls = false;
    $request->requestBody->truckModeOptions->dimensions = new TruckDimensions();
    $request->requestBody->truckModeOptions->dimensions->height = 6048.46;
    $request->requestBody->truckModeOptions->dimensions->length = 4511.59;
    $request->requestBody->truckModeOptions->dimensions->unit = DimensionUnitEnum::FEET;
    $request->requestBody->truckModeOptions->dimensions->width = 199.87;
    $request->requestBody->truckModeOptions->weight = new TruckWeight();
    $request->requestBody->truckModeOptions->weight->total = 391.87;
    $request->requestBody->truckModeOptions->weight->unit = VehicleWeightUnitEnum::KILOGRAMS;
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->calculateRouteMatrix($request);

    if ($response->calculateRouteMatrixResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGeofenceCollection

Creates a geofence collection, which manages and stores geofences.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGeofenceCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGeofenceCollectionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateGeofenceCollectionRequestBodyPricingPlanEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGeofenceCollectionRequest();
    $request->requestBody = new CreateGeofenceCollectionRequestBody();
    $request->requestBody->collectionName = 'harum';
    $request->requestBody->description = 'enim';
    $request->requestBody->kmsKeyId = 'accusamus';
    $request->requestBody->pricingPlan = CreateGeofenceCollectionRequestBodyPricingPlanEnum::MOBILE_ASSET_TRACKING;
    $request->requestBody->pricingPlanDataSource = 'repudiandae';
    $request->requestBody->tags = [
        'ipsum' => 'quidem',
    ];
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';

    $response = $sdk->sdk->createGeofenceCollection($request);

    if ($response->createGeofenceCollectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createKey

<p>Creates an API key resource in your Amazon Web Services account, which lets you grant <code>geo:GetMap*</code> actions for Amazon Location Map resources to the API key bearer.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateKeyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateKeyRequestBodyRestrictions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateKeyRequest();
    $request->requestBody = new CreateKeyRequestBody();
    $request->requestBody->description = 'quasi';
    $request->requestBody->expireTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-10T08:07:33.561Z');
    $request->requestBody->keyName = 'veritatis';
    $request->requestBody->noExpiry = false;
    $request->requestBody->restrictions = new CreateKeyRequestBodyRestrictions();
    $request->requestBody->restrictions->allowActions = [
        'incidunt',
        'enim',
        'consequatur',
        'est',
    ];
    $request->requestBody->restrictions->allowReferers = [
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];
    $request->requestBody->restrictions->allowResources = [
        'modi',
        'qui',
    ];
    $request->requestBody->tags = [
        'cupiditate' => 'quos',
        'perferendis' => 'magni',
    ];
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->createKey($request);

    if ($response->createKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMap

<p>Creates a map resource in your Amazon Web Services account, which provides map tiles of different styles sourced from global location data providers.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMapRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMapRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateMapRequestBodyConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateMapRequestBodyPricingPlanEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMapRequest();
    $request->requestBody = new CreateMapRequestBody();
    $request->requestBody->configuration = new CreateMapRequestBodyConfiguration();
    $request->requestBody->configuration->style = 'facilis';
    $request->requestBody->description = 'tempore';
    $request->requestBody->mapName = 'labore';
    $request->requestBody->pricingPlan = CreateMapRequestBodyPricingPlanEnum::MOBILE_ASSET_MANAGEMENT;
    $request->requestBody->tags = [
        'non' => 'eligendi',
        'sint' => 'aliquid',
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->createMap($request);

    if ($response->createMapResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPlaceIndex

<p>Creates a place index resource in your Amazon Web Services account. Use a place index resource to geocode addresses and other text queries by using the <code>SearchPlaceIndexForText</code> operation, and reverse geocode coordinates by using the <code>SearchPlaceIndexForPosition</code> operation, and enable autosuggestions by using the <code>SearchPlaceIndexForSuggestions</code> operation.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePlaceIndexRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePlaceIndexRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreatePlaceIndexRequestBodyDataSourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\IntendedUseEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreatePlaceIndexRequestBodyPricingPlanEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePlaceIndexRequest();
    $request->requestBody = new CreatePlaceIndexRequestBody();
    $request->requestBody->dataSource = 'dolorum';
    $request->requestBody->dataSourceConfiguration = new CreatePlaceIndexRequestBodyDataSourceConfiguration();
    $request->requestBody->dataSourceConfiguration->intendedUse = IntendedUseEnum::SINGLE_USE;
    $request->requestBody->description = 'in';
    $request->requestBody->indexName = 'illum';
    $request->requestBody->pricingPlan = CreatePlaceIndexRequestBodyPricingPlanEnum::MOBILE_ASSET_MANAGEMENT;
    $request->requestBody->tags = [
        'dicta' => 'magnam',
        'cumque' => 'facere',
        'ea' => 'aliquid',
    ];
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->createPlaceIndex($request);

    if ($response->createPlaceIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRouteCalculator

<p>Creates a route calculator resource in your Amazon Web Services account.</p> <p>You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRouteCalculatorRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRouteCalculatorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateRouteCalculatorRequestBodyPricingPlanEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRouteCalculatorRequest();
    $request->requestBody = new CreateRouteCalculatorRequestBody();
    $request->requestBody->calculatorName = 'quidem';
    $request->requestBody->dataSource = 'provident';
    $request->requestBody->description = 'nam';
    $request->requestBody->pricingPlan = CreateRouteCalculatorRequestBodyPricingPlanEnum::MOBILE_ASSET_TRACKING;
    $request->requestBody->tags = [
        'deleniti' => 'sapiente',
        'amet' => 'deserunt',
        'nisi' => 'vel',
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'distinctio';

    $response = $sdk->sdk->createRouteCalculator($request);

    if ($response->createRouteCalculatorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTracker

Creates a tracker resource in your Amazon Web Services account, which lets you retrieve current and historical location of devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrackerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrackerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrackerRequestBodyPositionFilteringEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrackerRequestBodyPricingPlanEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTrackerRequest();
    $request->requestBody = new CreateTrackerRequestBody();
    $request->requestBody->description = 'id';
    $request->requestBody->kmsKeyId = 'labore';
    $request->requestBody->positionFiltering = CreateTrackerRequestBodyPositionFilteringEnum::TIME_BASED;
    $request->requestBody->pricingPlan = CreateTrackerRequestBodyPricingPlanEnum::MOBILE_ASSET_TRACKING;
    $request->requestBody->pricingPlanDataSource = 'natus';
    $request->requestBody->tags = [
        'eum' => 'vero',
        'aspernatur' => 'architecto',
        'magnam' => 'et',
    ];
    $request->requestBody->trackerName = 'excepturi';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->createTracker($request);

    if ($response->createTrackerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGeofenceCollection

<p>Deletes a geofence collection from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGeofenceCollectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGeofenceCollectionRequest();
    $request->collectionName = 'mollitia';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->deleteGeofenceCollection($request);

    if ($response->deleteGeofenceCollectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteKey

Deletes the specified API key. The API key must have been deactivated more than 90 days previously.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteKeyRequest();
    $request->keyName = 'iure';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->deleteKey($request);

    if ($response->deleteKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMap

<p>Deletes a map resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the map is being used in an application, the map may not render.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMapRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMapRequest();
    $request->mapName = 'architecto';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'quibusdam';

    $response = $sdk->sdk->deleteMap($request);

    if ($response->deleteMapResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePlaceIndex

<p>Deletes a place index resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePlaceIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePlaceIndexRequest();
    $request->indexName = 'sed';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'magni';

    $response = $sdk->sdk->deletePlaceIndex($request);

    if ($response->deletePlaceIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRouteCalculator

<p>Deletes a route calculator resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRouteCalculatorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRouteCalculatorRequest();
    $request->calculatorName = 'sunt';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->deleteRouteCalculator($request);

    if ($response->deleteRouteCalculatorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTracker

<p>Deletes a tracker resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrackerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTrackerRequest();
    $request->trackerName = 'ea';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'autem';

    $response = $sdk->sdk->deleteTracker($request);

    if ($response->deleteTrackerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeGeofenceCollection

Retrieves the geofence collection details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGeofenceCollectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeGeofenceCollectionRequest();
    $request->collectionName = 'nam';
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->describeGeofenceCollection($request);

    if ($response->describeGeofenceCollectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeKey

<p>Retrieves the API key resource details.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeKeyRequest();
    $request->keyName = 'aut';
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->describeKey($request);

    if ($response->describeKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMap

Retrieves the map resource details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMapRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMapRequest();
    $request->mapName = 'totam';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->describeMap($request);

    if ($response->describeMapResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePlaceIndex

Retrieves the place index resource details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePlaceIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePlaceIndexRequest();
    $request->indexName = 'minus';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->describePlaceIndex($request);

    if ($response->describePlaceIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRouteCalculator

Retrieves the route calculator resource details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRouteCalculatorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRouteCalculatorRequest();
    $request->calculatorName = 'facilis';
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'eaque';

    $response = $sdk->sdk->describeRouteCalculator($request);

    if ($response->describeRouteCalculatorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTracker

Retrieves the tracker resource details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTrackerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTrackerRequest();
    $request->trackerName = 'occaecati';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->describeTracker($request);

    if ($response->describeTrackerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateTrackerConsumer

<p>Removes the association between a tracker resource and a geofence collection.</p> <note> <p>Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateTrackerConsumerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateTrackerConsumerRequest();
    $request->consumerArn = 'deleniti';
    $request->trackerName = 'pariatur';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->disassociateTrackerConsumer($request);

    if ($response->disassociateTrackerConsumerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevicePosition

<p>Retrieves a device's most recent position according to its sample time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDevicePositionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDevicePositionRequest();
    $request->deviceId = 'dolorem';
    $request->trackerName = 'dolorem';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->getDevicePosition($request);

    if ($response->getDevicePositionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevicePositionHistory

<p>Retrieves the device position history from a tracker resource within a specified range of time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDevicePositionHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDevicePositionHistoryRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDevicePositionHistoryRequest();
    $request->deviceId = 'dignissimos';
    $request->maxResults = 'reiciendis';
    $request->nextToken = 'amet';
    $request->requestBody = new GetDevicePositionHistoryRequestBody();
    $request->requestBody->endTimeExclusive = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T07:40:27.174Z');
    $request->requestBody->maxResults = 85295;
    $request->requestBody->nextToken = 'ipsa';
    $request->requestBody->startTimeInclusive = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-26T10:30:36.625Z');
    $request->trackerName = 'odio';
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'eos';

    $response = $sdk->sdk->getDevicePositionHistory($request);

    if ($response->getDevicePositionHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeofence

Retrieves the geofence details from a geofence collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGeofenceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeofenceRequest();
    $request->collectionName = 'atque';
    $request->geofenceId = 'sit';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->getGeofence($request);

    if ($response->getGeofenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMapGlyphs

Retrieves glyphs used to display labels on a map.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMapGlyphsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMapGlyphsRequest();
    $request->fontStack = 'deleniti';
    $request->fontUnicodeRange = 'omnis';
    $request->mapName = 'necessitatibus';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'saepe';
    $request->key = 'eius';

    $response = $sdk->sdk->getMapGlyphs($request);

    if ($response->getMapGlyphsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMapSprites

Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMapSpritesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMapSpritesRequest();
    $request->fileName = 'aspernatur';
    $request->mapName = 'perferendis';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->key = 'provident';

    $response = $sdk->sdk->getMapSprites($request);

    if ($response->getMapSpritesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMapStyleDescriptor

<p>Retrieves the map style descriptor from a map resource. </p> <p>The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMapStyleDescriptorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMapStyleDescriptorRequest();
    $request->mapName = 'minima';
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'similique';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'tempora';
    $request->key = 'vel';

    $response = $sdk->sdk->getMapStyleDescriptor($request);

    if ($response->getMapStyleDescriptorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMapTile

<p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. </p> <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMapTileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMapTileRequest();
    $request->mapName = 'quod';
    $request->x = 'officiis';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->y = 'quisquam';
    $request->z = 'tenetur';
    $request->key = 'amet';

    $response = $sdk->sdk->getMapTile($request);

    if ($response->getMapTileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlace

<p>Finds a place by its unique ID. A <code>PlaceId</code> is returned by other search operations.</p> <note> <p>A PlaceId is valid only if all of the following are the same in the original search request and the call to <code>GetPlace</code>.</p> <ul> <li> <p>Customer Amazon Web Services account</p> </li> <li> <p>Amazon Web Services Region</p> </li> <li> <p>Data provider specified in the place index resource</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlaceRequest();
    $request->indexName = 'tempore';
    $request->placeId = 'accusamus';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'sit';
    $request->language = 'expedita';

    $response = $sdk->sdk->getPlace($request);

    if ($response->getPlaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDevicePositions

A batch request to retrieve all device positions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDevicePositionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDevicePositionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDevicePositionsRequest();
    $request->maxResults = 'neque';
    $request->nextToken = 'sed';
    $request->requestBody = new ListDevicePositionsRequestBody();
    $request->requestBody->maxResults = 424685;
    $request->requestBody->nextToken = 'libero';
    $request->trackerName = 'voluptas';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->listDevicePositions($request);

    if ($response->listDevicePositionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGeofenceCollections

Lists geofence collections in your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGeofenceCollectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListGeofenceCollectionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGeofenceCollectionsRequest();
    $request->maxResults = 'pariatur';
    $request->nextToken = 'soluta';
    $request->requestBody = new ListGeofenceCollectionsRequestBody();
    $request->requestBody->maxResults = 117531;
    $request->requestBody->nextToken = 'laborum';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->listGeofenceCollections($request);

    if ($response->listGeofenceCollectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGeofences

Lists geofences stored in a given geofence collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGeofencesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListGeofencesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGeofencesRequest();
    $request->collectionName = 'quam';
    $request->maxResults = 'molestias';
    $request->nextToken = 'temporibus';
    $request->requestBody = new ListGeofencesRequestBody();
    $request->requestBody->maxResults = 183280;
    $request->requestBody->nextToken = 'neque';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->listGeofences($request);

    if ($response->listGeofencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listKeys

<p>Lists API key resources in your Amazon Web Services account.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListKeysRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListKeysRequestBodyFilter;
use \OpenAPI\OpenAPI\Models\Shared\StatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListKeysRequest();
    $request->maxResults = 'voluptatem';
    $request->nextToken = 'cumque';
    $request->requestBody = new ListKeysRequestBody();
    $request->requestBody->filter = new ListKeysRequestBodyFilter();
    $request->requestBody->filter->keyStatus = StatusEnum::EXPIRED;
    $request->requestBody->maxResults = 748664;
    $request->requestBody->nextToken = 'et';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'cupiditate';

    $response = $sdk->sdk->listKeys($request);

    if ($response->listKeysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMaps

Lists map resources in your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMapsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMapsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMapsRequest();
    $request->maxResults = 'aperiam';
    $request->nextToken = 'delectus';
    $request->requestBody = new ListMapsRequestBody();
    $request->requestBody->maxResults = 209157;
    $request->requestBody->nextToken = 'dolore';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quas';

    $response = $sdk->sdk->listMaps($request);

    if ($response->listMapsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPlaceIndexes

Lists place index resources in your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPlaceIndexesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPlaceIndexesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPlaceIndexesRequest();
    $request->maxResults = 'itaque';
    $request->nextToken = 'consequatur';
    $request->requestBody = new ListPlaceIndexesRequestBody();
    $request->requestBody->maxResults = 669917;
    $request->requestBody->nextToken = 'repellendus';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->listPlaceIndexes($request);

    if ($response->listPlaceIndexesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRouteCalculators

Lists route calculator resources in your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRouteCalculatorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRouteCalculatorsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRouteCalculatorsRequest();
    $request->maxResults = 'laudantium';
    $request->nextToken = 'odio';
    $request->requestBody = new ListRouteCalculatorsRequestBody();
    $request->requestBody->maxResults = 580447;
    $request->requestBody->nextToken = 'voluptatibus';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->listRouteCalculators($request);

    if ($response->listRouteCalculatorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns a list of tags that are applied to the specified Amazon Location resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->resourceArn = 'consectetur';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'odio';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTrackerConsumers

Lists geofence collections currently associated to the given tracker resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTrackerConsumersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTrackerConsumersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTrackerConsumersRequest();
    $request->maxResults = 'similique';
    $request->nextToken = 'facilis';
    $request->requestBody = new ListTrackerConsumersRequestBody();
    $request->requestBody->maxResults = 874288;
    $request->requestBody->nextToken = 'ducimus';
    $request->trackerName = 'dolore';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->listTrackerConsumers($request);

    if ($response->listTrackerConsumersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTrackers

Lists tracker resources in your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTrackersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTrackersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTrackersRequest();
    $request->maxResults = 'exercitationem';
    $request->nextToken = 'nulla';
    $request->requestBody = new ListTrackersRequestBody();
    $request->requestBody->maxResults = 148141;
    $request->requestBody->nextToken = 'porro';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->listTrackers($request);

    if ($response->listTrackersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putGeofence

Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutGeofenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutGeofenceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutGeofenceRequestBodyGeometry;
use \OpenAPI\OpenAPI\Models\Shared\Circle;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutGeofenceRequest();
    $request->collectionName = 'tempora';
    $request->geofenceId = 'ipsam';
    $request->requestBody = new PutGeofenceRequestBody();
    $request->requestBody->geometry = new PutGeofenceRequestBodyGeometry();
    $request->requestBody->geometry->circle = new Circle();
    $request->requestBody->geometry->circle->center = [
        1369,
        4282.24,
    ];
    $request->requestBody->geometry->circle->radius = 8221.18;
    $request->requestBody->geometry->polygon = [
        [
            [
                5113.19,
                1206.57,
            ],
        ],
        [
            [
                978.44,
                4061.2,
                8621.92,
                5692.11,
            ],
        ],
    ];
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->putGeofence($request);

    if ($response->putGeofenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchPlaceIndexForPosition

Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchPlaceIndexForPositionRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchPlaceIndexForPositionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchPlaceIndexForPositionRequest();
    $request->indexName = 'corporis';
    $request->requestBody = new SearchPlaceIndexForPositionRequestBody();
    $request->requestBody->language = 'veniam';
    $request->requestBody->maxResults = 399499;
    $request->requestBody->position = [
        3018.31,
    ];
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'eaque';

    $response = $sdk->sdk->searchPlaceIndexForPosition($request);

    if ($response->searchPlaceIndexForPositionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchPlaceIndexForSuggestions

<p>Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching.</p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for suggested place names near a specified position by using <code>BiasPosition</code>, or filter results within a bounding box by using <code>FilterBBox</code>. These parameters are mutually exclusive; using both <code>BiasPosition</code> and <code>FilterBBox</code> in the same command returns an error.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchPlaceIndexForSuggestionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchPlaceIndexForSuggestionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchPlaceIndexForSuggestionsRequest();
    $request->indexName = 'a';
    $request->requestBody = new SearchPlaceIndexForSuggestionsRequestBody();
    $request->requestBody->biasPosition = [
        139.48,
        114.27,
        5334.66,
    ];
    $request->requestBody->filterBBox = [
        3045.82,
        1469.46,
        8828.6,
        795.22,
    ];
    $request->requestBody->filterCountries = [
        'et',
        'dolorum',
    ];
    $request->requestBody->language = 'laborum';
    $request->requestBody->maxResults = 810424;
    $request->requestBody->text = 'velit';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->searchPlaceIndexForSuggestions($request);

    if ($response->searchPlaceIndexForSuggestionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchPlaceIndexForText

<p>Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest. </p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for places near a given position using <code>BiasPosition</code>, or filter results within a bounding box using <code>FilterBBox</code>. Providing both parameters simultaneously returns an error.</p> </note> <p>Search results are returned in order of highest to lowest relevance.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchPlaceIndexForTextRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchPlaceIndexForTextRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchPlaceIndexForTextRequest();
    $request->indexName = 'libero';
    $request->requestBody = new SearchPlaceIndexForTextRequestBody();
    $request->requestBody->biasPosition = [
        2703.28,
    ];
    $request->requestBody->filterBBox = [
        1314.82,
        5919.35,
    ];
    $request->requestBody->filterCountries = [
        'molestiae',
    ];
    $request->requestBody->language = 'magnam';
    $request->requestBody->maxResults = 487935;
    $request->requestBody->text = 'eius';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'fugiat';

    $response = $sdk->sdk->searchPlaceIndexForText($request);

    if ($response->searchPlaceIndexForTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>You can use the <code>TagResource</code> operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag. </p> <p>You can associate up to 50 tags with a resource.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'eum' => 'suscipit',
        'assumenda' => 'eos',
    ];
    $request->resourceArn = 'praesentium';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from the specified Amazon Location resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->resourceArn = 'illum';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->tagKeys = [
        'tempora',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGeofenceCollection

Updates the specified properties of a given geofence collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGeofenceCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGeofenceCollectionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGeofenceCollectionRequestBodyPricingPlanEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGeofenceCollectionRequest();
    $request->collectionName = 'debitis';
    $request->requestBody = new UpdateGeofenceCollectionRequestBody();
    $request->requestBody->description = 'ipsam';
    $request->requestBody->pricingPlan = UpdateGeofenceCollectionRequestBodyPricingPlanEnum::REQUEST_BASED_USAGE;
    $request->requestBody->pricingPlanDataSource = 'sequi';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'dignissimos';

    $response = $sdk->sdk->updateGeofenceCollection($request);

    if ($response->updateGeofenceCollectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateKey

<p>Updates the specified properties of a given API key resource.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateKeyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateKeyRequestBodyRestrictions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateKeyRequest();
    $request->keyName = 'inventore';
    $request->requestBody = new UpdateKeyRequestBody();
    $request->requestBody->description = 'nihil';
    $request->requestBody->expireTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-27T14:55:59.726Z');
    $request->requestBody->forceUpdate = false;
    $request->requestBody->noExpiry = false;
    $request->requestBody->restrictions = new UpdateKeyRequestBodyRestrictions();
    $request->requestBody->restrictions->allowActions = [
        'odio',
        'occaecati',
    ];
    $request->requestBody->restrictions->allowReferers = [
        'sapiente',
        'dolores',
    ];
    $request->requestBody->restrictions->allowResources = [
        'molestiae',
        'accusantium',
        'porro',
    ];
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'fuga';

    $response = $sdk->sdk->updateKey($request);

    if ($response->updateKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMap

Updates the specified properties of a given map resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMapRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMapRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMapRequestBodyPricingPlanEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMapRequest();
    $request->mapName = 'mollitia';
    $request->requestBody = new UpdateMapRequestBody();
    $request->requestBody->description = 'incidunt';
    $request->requestBody->pricingPlan = UpdateMapRequestBodyPricingPlanEnum::MOBILE_ASSET_TRACKING;
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'ratione';

    $response = $sdk->sdk->updateMap($request);

    if ($response->updateMapResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePlaceIndex

Updates the specified properties of a given place index resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePlaceIndexRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePlaceIndexRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePlaceIndexRequestBodyDataSourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\IntendedUseEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePlaceIndexRequestBodyPricingPlanEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePlaceIndexRequest();
    $request->indexName = 'explicabo';
    $request->requestBody = new UpdatePlaceIndexRequestBody();
    $request->requestBody->dataSourceConfiguration = new UpdatePlaceIndexRequestBodyDataSourceConfiguration();
    $request->requestBody->dataSourceConfiguration->intendedUse = IntendedUseEnum::STORAGE;
    $request->requestBody->description = 'occaecati';
    $request->requestBody->pricingPlan = UpdatePlaceIndexRequestBodyPricingPlanEnum::MOBILE_ASSET_TRACKING;
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->updatePlaceIndex($request);

    if ($response->updatePlaceIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRouteCalculator

Updates the specified properties for a given route calculator resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRouteCalculatorRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRouteCalculatorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRouteCalculatorRequestBodyPricingPlanEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRouteCalculatorRequest();
    $request->calculatorName = 'nam';
    $request->requestBody = new UpdateRouteCalculatorRequestBody();
    $request->requestBody->description = 'vero';
    $request->requestBody->pricingPlan = UpdateRouteCalculatorRequestBodyPricingPlanEnum::MOBILE_ASSET_TRACKING;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->updateRouteCalculator($request);

    if ($response->updateRouteCalculatorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTracker

Updates the specified properties of a given tracker resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrackerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrackerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrackerRequestBodyPositionFilteringEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrackerRequestBodyPricingPlanEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTrackerRequest();
    $request->requestBody = new UpdateTrackerRequestBody();
    $request->requestBody->description = 'minima';
    $request->requestBody->positionFiltering = UpdateTrackerRequestBodyPositionFilteringEnum::ACCURACY_BASED;
    $request->requestBody->pricingPlan = UpdateTrackerRequestBodyPricingPlanEnum::MOBILE_ASSET_MANAGEMENT;
    $request->requestBody->pricingPlanDataSource = 'sit';
    $request->trackerName = 'culpa';
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->updateTracker($request);

    if ($response->updateTrackerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
