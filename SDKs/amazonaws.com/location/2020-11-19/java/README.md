# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateTrackerConsumerRequest;
import org.openapis.openapi.models.operations.AssociateTrackerConsumerRequestBody;
import org.openapis.openapi.models.operations.AssociateTrackerConsumerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateTrackerConsumerRequest req = new AssociateTrackerConsumerRequest(                new AssociateTrackerConsumerRequestBody("provident");, "distinctio") {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AssociateTrackerConsumerResponse res = sdk.associateTrackerConsumer(req);

            if (res.associateTrackerConsumerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [associateTrackerConsumer](docs/sdk/README.md#associatetrackerconsumer) - <p>Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection. </p> <p>You can associate up to five geofence collections to each tracker resource.</p> <note> <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p> </note>
* [batchDeleteDevicePositionHistory](docs/sdk/README.md#batchdeletedevicepositionhistory) - Deletes the position history of one or more devices from a tracker resource.
* [batchDeleteGeofence](docs/sdk/README.md#batchdeletegeofence) - <p>Deletes a batch of geofences from a geofence collection.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* [batchEvaluateGeofences](docs/sdk/README.md#batchevaluategeofences) - <p>Evaluates device positions against the geofence geometries from a given geofence collection.</p> <p>This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge:</p> <ul> <li> <p> <code>ENTER</code> if Amazon Location determines that the tracked device has entered a geofenced area.</p> </li> <li> <p> <code>EXIT</code> if Amazon Location determines that the tracked device has exited a geofenced area.</p> </li> </ul> <note> <p>The last geofence that a device was observed within is tracked for 30 days after the most recent device position update.</p> </note> <note> <p>Geofence evaluation uses the given device position. It does not account for the optional <code>Accuracy</code> of a <code>DevicePositionUpdate</code>.</p> </note> <note> <p>The <code>DeviceID</code> is used as a string to represent the device. You do not need to have a <code>Tracker</code> associated with the <code>DeviceID</code>.</p> </note>
* [batchGetDevicePosition](docs/sdk/README.md#batchgetdeviceposition) - Lists the latest device positions for requested devices.
* [batchPutGeofence](docs/sdk/README.md#batchputgeofence) - A batch request for storing geofence geometries into a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.
* [batchUpdateDevicePosition](docs/sdk/README.md#batchupdatedeviceposition) - <p>Uploads position update data for one or more devices to a tracker resource. Amazon Location uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30 days.</p> <note> <p>Position updates are handled based on the <code>PositionFiltering</code> property of the tracker. When <code>PositionFiltering</code> is set to <code>TimeBased</code>, updates are evaluated against linked geofence collections, and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than every 30 seconds, only one update per 30 seconds is stored for each unique device ID.</p> <p>When <code>PositionFiltering</code> is set to <code>DistanceBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than 30 m (98.4 ft).</p> <p>When <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than the measured accuracy. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is neither stored or evaluated if the device has moved less than 15 m. If <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, Amazon Location uses the default value <code>{ "Horizontal": 0}</code> when accuracy is not provided on a <code>DevicePositionUpdate</code>.</p> </note>
* [calculateRoute](docs/sdk/README.md#calculateroute) - <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters: <code>DeparturePosition</code> and <code>DestinationPosition</code>. Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html">Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates a route based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> <note> <p>If you specify <code>walking</code> for the travel mode and your data provider is Esri, the start and destination must be within 40km.</p> </note> </li> </ul>
* [calculateRouteMatrix](docs/sdk/README.md#calculateroutematrix) - <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html"> Calculates a route matrix</a> given the following required parameters: <code>DeparturePositions</code> and <code>DestinationPositions</code>. <code>CalculateRouteMatrix</code> calculates routes and returns the travel time and travel distance from each departure position to each destination position in the request. For example, given departure positions A and B, and destination positions X and Y, <code>CalculateRouteMatrix</code> will return time and distance for routes from A to X, A to Y, B to X, and B to Y (in that order). The number of results returned (and routes calculated) will be the number of <code>DeparturePositions</code> times the number of <code>DestinationPositions</code>.</p> <note> <p>Your account is charged for each route calculated, not the number of requests.</p> </note> <p>Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating routes.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html"> Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates routes based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> </li> </ul>
* [createGeofenceCollection](docs/sdk/README.md#creategeofencecollection) - Creates a geofence collection, which manages and stores geofences.
* [createKey](docs/sdk/README.md#createkey) - <p>Creates an API key resource in your Amazon Web Services account, which lets you grant <code>geo:GetMap*</code> actions for Amazon Location Map resources to the API key bearer.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
* [createMap](docs/sdk/README.md#createmap) - <p>Creates a map resource in your Amazon Web Services account, which provides map tiles of different styles sourced from global location data providers.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
* [createPlaceIndex](docs/sdk/README.md#createplaceindex) - <p>Creates a place index resource in your Amazon Web Services account. Use a place index resource to geocode addresses and other text queries by using the <code>SearchPlaceIndexForText</code> operation, and reverse geocode coordinates by using the <code>SearchPlaceIndexForPosition</code> operation, and enable autosuggestions by using the <code>SearchPlaceIndexForSuggestions</code> operation.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
* [createRouteCalculator](docs/sdk/README.md#createroutecalculator) - <p>Creates a route calculator resource in your Amazon Web Services account.</p> <p>You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
* [createTracker](docs/sdk/README.md#createtracker) - Creates a tracker resource in your Amazon Web Services account, which lets you retrieve current and historical location of devices.
* [deleteGeofenceCollection](docs/sdk/README.md#deletegeofencecollection) - <p>Deletes a geofence collection from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored.</p> </note>
* [deleteKey](docs/sdk/README.md#deletekey) - Deletes the specified API key. The API key must have been deactivated more than 90 days previously.
* [deleteMap](docs/sdk/README.md#deletemap) - <p>Deletes a map resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the map is being used in an application, the map may not render.</p> </note>
* [deletePlaceIndex](docs/sdk/README.md#deleteplaceindex) - <p>Deletes a place index resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* [deleteRouteCalculator](docs/sdk/README.md#deleteroutecalculator) - <p>Deletes a route calculator resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* [deleteTracker](docs/sdk/README.md#deletetracker) - <p>Deletes a tracker resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications.</p> </note>
* [describeGeofenceCollection](docs/sdk/README.md#describegeofencecollection) - Retrieves the geofence collection details.
* [describeKey](docs/sdk/README.md#describekey) - <p>Retrieves the API key resource details.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
* [describeMap](docs/sdk/README.md#describemap) - Retrieves the map resource details.
* [describePlaceIndex](docs/sdk/README.md#describeplaceindex) - Retrieves the place index resource details.
* [describeRouteCalculator](docs/sdk/README.md#describeroutecalculator) - Retrieves the route calculator resource details.
* [describeTracker](docs/sdk/README.md#describetracker) - Retrieves the tracker resource details.
* [disassociateTrackerConsumer](docs/sdk/README.md#disassociatetrackerconsumer) - <p>Removes the association between a tracker resource and a geofence collection.</p> <note> <p>Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.</p> </note>
* [getDevicePosition](docs/sdk/README.md#getdeviceposition) - <p>Retrieves a device's most recent position according to its sample time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
* [getDevicePositionHistory](docs/sdk/README.md#getdevicepositionhistory) - <p>Retrieves the device position history from a tracker resource within a specified range of time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
* [getGeofence](docs/sdk/README.md#getgeofence) - Retrieves the geofence details from a geofence collection.
* [getMapGlyphs](docs/sdk/README.md#getmapglyphs) - Retrieves glyphs used to display labels on a map.
* [getMapSprites](docs/sdk/README.md#getmapsprites) - Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.
* [getMapStyleDescriptor](docs/sdk/README.md#getmapstyledescriptor) - <p>Retrieves the map style descriptor from a map resource. </p> <p>The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.</p>
* [getMapTile](docs/sdk/README.md#getmaptile) - <p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. </p> <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>
* [getPlace](docs/sdk/README.md#getplace) - <p>Finds a place by its unique ID. A <code>PlaceId</code> is returned by other search operations.</p> <note> <p>A PlaceId is valid only if all of the following are the same in the original search request and the call to <code>GetPlace</code>.</p> <ul> <li> <p>Customer Amazon Web Services account</p> </li> <li> <p>Amazon Web Services Region</p> </li> <li> <p>Data provider specified in the place index resource</p> </li> </ul> </note>
* [listDevicePositions](docs/sdk/README.md#listdevicepositions) - A batch request to retrieve all device positions.
* [listGeofenceCollections](docs/sdk/README.md#listgeofencecollections) - Lists geofence collections in your Amazon Web Services account.
* [listGeofences](docs/sdk/README.md#listgeofences) - Lists geofences stored in a given geofence collection.
* [listKeys](docs/sdk/README.md#listkeys) - <p>Lists API key resources in your Amazon Web Services account.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
* [listMaps](docs/sdk/README.md#listmaps) - Lists map resources in your Amazon Web Services account.
* [listPlaceIndexes](docs/sdk/README.md#listplaceindexes) - Lists place index resources in your Amazon Web Services account.
* [listRouteCalculators](docs/sdk/README.md#listroutecalculators) - Lists route calculator resources in your Amazon Web Services account.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns a list of tags that are applied to the specified Amazon Location resource.
* [listTrackerConsumers](docs/sdk/README.md#listtrackerconsumers) - Lists geofence collections currently associated to the given tracker resource.
* [listTrackers](docs/sdk/README.md#listtrackers) - Lists tracker resources in your Amazon Web Services account.
* [putGeofence](docs/sdk/README.md#putgeofence) - Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request. 
* [searchPlaceIndexForPosition](docs/sdk/README.md#searchplaceindexforposition) - Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.
* [searchPlaceIndexForSuggestions](docs/sdk/README.md#searchplaceindexforsuggestions) - <p>Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching.</p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for suggested place names near a specified position by using <code>BiasPosition</code>, or filter results within a bounding box by using <code>FilterBBox</code>. These parameters are mutually exclusive; using both <code>BiasPosition</code> and <code>FilterBBox</code> in the same command returns an error.</p> </note>
* [searchPlaceIndexForText](docs/sdk/README.md#searchplaceindexfortext) - <p>Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest. </p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for places near a given position using <code>BiasPosition</code>, or filter results within a bounding box using <code>FilterBBox</code>. Providing both parameters simultaneously returns an error.</p> </note> <p>Search results are returned in order of highest to lowest relevance.</p>
* [tagResource](docs/sdk/README.md#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>You can use the <code>TagResource</code> operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag. </p> <p>You can associate up to 50 tags with a resource.</p>
* [untagResource](docs/sdk/README.md#untagresource) - Removes one or more tags from the specified Amazon Location resource.
* [updateGeofenceCollection](docs/sdk/README.md#updategeofencecollection) - Updates the specified properties of a given geofence collection.
* [updateKey](docs/sdk/README.md#updatekey) - <p>Updates the specified properties of a given API key resource.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
* [updateMap](docs/sdk/README.md#updatemap) - Updates the specified properties of a given map resource.
* [updatePlaceIndex](docs/sdk/README.md#updateplaceindex) - Updates the specified properties of a given place index resource.
* [updateRouteCalculator](docs/sdk/README.md#updateroutecalculator) - Updates the specified properties for a given route calculator resource.
* [updateTracker](docs/sdk/README.md#updatetracker) - Updates the specified properties of a given tracker resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
