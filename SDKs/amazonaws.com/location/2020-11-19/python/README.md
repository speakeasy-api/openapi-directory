# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/location/2020-11-19/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateTrackerConsumerRequest(
    request_body=operations.AssociateTrackerConsumerRequestBody(
        consumer_arn="corrupti",
    ),
    tracker_name="provident",
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
)
    
res = s.associate_tracker_consumer(req)

if res.associate_tracker_consumer_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associate_tracker_consumer` - <p>Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection. </p> <p>You can associate up to five geofence collections to each tracker resource.</p> <note> <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p> </note>
* `batch_delete_device_position_history` - Deletes the position history of one or more devices from a tracker resource.
* `batch_delete_geofence` - <p>Deletes a batch of geofences from a geofence collection.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* `batch_evaluate_geofences` - <p>Evaluates device positions against the geofence geometries from a given geofence collection.</p> <p>This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge:</p> <ul> <li> <p> <code>ENTER</code> if Amazon Location determines that the tracked device has entered a geofenced area.</p> </li> <li> <p> <code>EXIT</code> if Amazon Location determines that the tracked device has exited a geofenced area.</p> </li> </ul> <note> <p>The last geofence that a device was observed within is tracked for 30 days after the most recent device position update.</p> </note> <note> <p>Geofence evaluation uses the given device position. It does not account for the optional <code>Accuracy</code> of a <code>DevicePositionUpdate</code>.</p> </note> <note> <p>The <code>DeviceID</code> is used as a string to represent the device. You do not need to have a <code>Tracker</code> associated with the <code>DeviceID</code>.</p> </note>
* `batch_get_device_position` - Lists the latest device positions for requested devices.
* `batch_put_geofence` - A batch request for storing geofence geometries into a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.
* `batch_update_device_position` - <p>Uploads position update data for one or more devices to a tracker resource. Amazon Location uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30 days.</p> <note> <p>Position updates are handled based on the <code>PositionFiltering</code> property of the tracker. When <code>PositionFiltering</code> is set to <code>TimeBased</code>, updates are evaluated against linked geofence collections, and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than every 30 seconds, only one update per 30 seconds is stored for each unique device ID.</p> <p>When <code>PositionFiltering</code> is set to <code>DistanceBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than 30 m (98.4 ft).</p> <p>When <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than the measured accuracy. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is neither stored or evaluated if the device has moved less than 15 m. If <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, Amazon Location uses the default value <code>{ "Horizontal": 0}</code> when accuracy is not provided on a <code>DevicePositionUpdate</code>.</p> </note>
* `calculate_route` - <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters: <code>DeparturePosition</code> and <code>DestinationPosition</code>. Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html">Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates a route based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> <note> <p>If you specify <code>walking</code> for the travel mode and your data provider is Esri, the start and destination must be within 40km.</p> </note> </li> </ul>
* `calculate_route_matrix` - <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html"> Calculates a route matrix</a> given the following required parameters: <code>DeparturePositions</code> and <code>DestinationPositions</code>. <code>CalculateRouteMatrix</code> calculates routes and returns the travel time and travel distance from each departure position to each destination position in the request. For example, given departure positions A and B, and destination positions X and Y, <code>CalculateRouteMatrix</code> will return time and distance for routes from A to X, A to Y, B to X, and B to Y (in that order). The number of results returned (and routes calculated) will be the number of <code>DeparturePositions</code> times the number of <code>DestinationPositions</code>.</p> <note> <p>Your account is charged for each route calculated, not the number of requests.</p> </note> <p>Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating routes.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html"> Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates routes based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> </li> </ul>
* `create_geofence_collection` - Creates a geofence collection, which manages and stores geofences.
* `create_key` - <p>Creates an API key resource in your Amazon Web Services account, which lets you grant <code>geo:GetMap*</code> actions for Amazon Location Map resources to the API key bearer.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
* `create_map` - <p>Creates a map resource in your Amazon Web Services account, which provides map tiles of different styles sourced from global location data providers.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
* `create_place_index` - <p>Creates a place index resource in your Amazon Web Services account. Use a place index resource to geocode addresses and other text queries by using the <code>SearchPlaceIndexForText</code> operation, and reverse geocode coordinates by using the <code>SearchPlaceIndexForPosition</code> operation, and enable autosuggestions by using the <code>SearchPlaceIndexForSuggestions</code> operation.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
* `create_route_calculator` - <p>Creates a route calculator resource in your Amazon Web Services account.</p> <p>You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
* `create_tracker` - Creates a tracker resource in your Amazon Web Services account, which lets you retrieve current and historical location of devices.
* `delete_geofence_collection` - <p>Deletes a geofence collection from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored.</p> </note>
* `delete_key` - Deletes the specified API key. The API key must have been deactivated more than 90 days previously.
* `delete_map` - <p>Deletes a map resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the map is being used in an application, the map may not render.</p> </note>
* `delete_place_index` - <p>Deletes a place index resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* `delete_route_calculator` - <p>Deletes a route calculator resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* `delete_tracker` - <p>Deletes a tracker resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications.</p> </note>
* `describe_geofence_collection` - Retrieves the geofence collection details.
* `describe_key` - <p>Retrieves the API key resource details.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
* `describe_map` - Retrieves the map resource details.
* `describe_place_index` - Retrieves the place index resource details.
* `describe_route_calculator` - Retrieves the route calculator resource details.
* `describe_tracker` - Retrieves the tracker resource details.
* `disassociate_tracker_consumer` - <p>Removes the association between a tracker resource and a geofence collection.</p> <note> <p>Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.</p> </note>
* `get_device_position` - <p>Retrieves a device's most recent position according to its sample time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
* `get_device_position_history` - <p>Retrieves the device position history from a tracker resource within a specified range of time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
* `get_geofence` - Retrieves the geofence details from a geofence collection.
* `get_map_glyphs` - Retrieves glyphs used to display labels on a map.
* `get_map_sprites` - Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.
* `get_map_style_descriptor` - <p>Retrieves the map style descriptor from a map resource. </p> <p>The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.</p>
* `get_map_tile` - <p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. </p> <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>
* `get_place` - <p>Finds a place by its unique ID. A <code>PlaceId</code> is returned by other search operations.</p> <note> <p>A PlaceId is valid only if all of the following are the same in the original search request and the call to <code>GetPlace</code>.</p> <ul> <li> <p>Customer Amazon Web Services account</p> </li> <li> <p>Amazon Web Services Region</p> </li> <li> <p>Data provider specified in the place index resource</p> </li> </ul> </note>
* `list_device_positions` - A batch request to retrieve all device positions.
* `list_geofence_collections` - Lists geofence collections in your Amazon Web Services account.
* `list_geofences` - Lists geofences stored in a given geofence collection.
* `list_keys` - <p>Lists API key resources in your Amazon Web Services account.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
* `list_maps` - Lists map resources in your Amazon Web Services account.
* `list_place_indexes` - Lists place index resources in your Amazon Web Services account.
* `list_route_calculators` - Lists route calculator resources in your Amazon Web Services account.
* `list_tags_for_resource` - Returns a list of tags that are applied to the specified Amazon Location resource.
* `list_tracker_consumers` - Lists geofence collections currently associated to the given tracker resource.
* `list_trackers` - Lists tracker resources in your Amazon Web Services account.
* `put_geofence` - Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request. 
* `search_place_index_for_position` - Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.
* `search_place_index_for_suggestions` - <p>Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching.</p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for suggested place names near a specified position by using <code>BiasPosition</code>, or filter results within a bounding box by using <code>FilterBBox</code>. These parameters are mutually exclusive; using both <code>BiasPosition</code> and <code>FilterBBox</code> in the same command returns an error.</p> </note>
* `search_place_index_for_text` - <p>Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest. </p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for places near a given position using <code>BiasPosition</code>, or filter results within a bounding box using <code>FilterBBox</code>. Providing both parameters simultaneously returns an error.</p> </note> <p>Search results are returned in order of highest to lowest relevance.</p>
* `tag_resource` - <p>Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>You can use the <code>TagResource</code> operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag. </p> <p>You can associate up to 50 tags with a resource.</p>
* `untag_resource` - Removes one or more tags from the specified Amazon Location resource.
* `update_geofence_collection` - Updates the specified properties of a given geofence collection.
* `update_key` - <p>Updates the specified properties of a given API key resource.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
* `update_map` - Updates the specified properties of a given map resource.
* `update_place_index` - Updates the specified properties of a given place index resource.
* `update_route_calculator` - Updates the specified properties for a given route calculator resource.
* `update_tracker` - Updates the specified properties of a given tracker resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
