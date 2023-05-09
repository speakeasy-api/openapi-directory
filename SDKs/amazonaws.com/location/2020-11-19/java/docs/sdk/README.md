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
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateTrackerConsumerRequest req = new AssociateTrackerConsumerRequest(                new AssociateTrackerConsumerRequestBody("suscipit");, "iure") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AssociateTrackerConsumerResponse res = sdk.sdk.associateTrackerConsumer(req);

            if (res.associateTrackerConsumerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDeleteDevicePositionHistory

Deletes the position history of one or more devices from a tracker resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteDevicePositionHistoryRequest;
import org.openapis.openapi.models.operations.BatchDeleteDevicePositionHistoryRequestBody;
import org.openapis.openapi.models.operations.BatchDeleteDevicePositionHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteDevicePositionHistoryRequest req = new BatchDeleteDevicePositionHistoryRequest(                new BatchDeleteDevicePositionHistoryRequestBody(                new String[]{{
                                                add("voluptatum"),
                                                add("iusto"),
                                                add("excepturi"),
                                                add("nisi"),
                                            }});, "recusandae") {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "ab";
                xAmzCredential = "quis";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ipsam";
            }};            

            BatchDeleteDevicePositionHistoryResponse res = sdk.sdk.batchDeleteDevicePositionHistory(req);

            if (res.batchDeleteDevicePositionHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDeleteGeofence

<p>Deletes a batch of geofences from a geofence collection.</p> <note> <p>This operation deletes the resource permanently.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteGeofenceRequest;
import org.openapis.openapi.models.operations.BatchDeleteGeofenceRequestBody;
import org.openapis.openapi.models.operations.BatchDeleteGeofenceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteGeofenceRequest req = new BatchDeleteGeofenceRequest("sapiente",                 new BatchDeleteGeofenceRequestBody(                new String[]{{
                                                add("odit"),
                                                add("at"),
                                                add("at"),
                                                add("maiores"),
                                            }});) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
            }};            

            BatchDeleteGeofenceResponse res = sdk.sdk.batchDeleteGeofence(req);

            if (res.batchDeleteGeofenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchEvaluateGeofences

<p>Evaluates device positions against the geofence geometries from a given geofence collection.</p> <p>This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge:</p> <ul> <li> <p> <code>ENTER</code> if Amazon Location determines that the tracked device has entered a geofenced area.</p> </li> <li> <p> <code>EXIT</code> if Amazon Location determines that the tracked device has exited a geofenced area.</p> </li> </ul> <note> <p>The last geofence that a device was observed within is tracked for 30 days after the most recent device position update.</p> </note> <note> <p>Geofence evaluation uses the given device position. It does not account for the optional <code>Accuracy</code> of a <code>DevicePositionUpdate</code>.</p> </note> <note> <p>The <code>DeviceID</code> is used as a string to represent the device. You do not need to have a <code>Tracker</code> associated with the <code>DeviceID</code>.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchEvaluateGeofencesRequest;
import org.openapis.openapi.models.operations.BatchEvaluateGeofencesRequestBody;
import org.openapis.openapi.models.operations.BatchEvaluateGeofencesResponse;
import org.openapis.openapi.models.shared.DevicePositionUpdate;
import org.openapis.openapi.models.shared.PositionalAccuracy;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchEvaluateGeofencesRequest req = new BatchEvaluateGeofencesRequest("nam",                 new BatchEvaluateGeofencesRequestBody(                new org.openapis.openapi.models.shared.DevicePositionUpdate[]{{
                                                add(new DevicePositionUpdate("excepturi",                 new Double[]{{
                                                                    add(187.89),
                                                                }}, OffsetDateTime.parse("2022-05-20T13:30:46.463Z")) {{
                                                    accuracy = new PositionalAccuracy(1433.53) {{
                                                        horizontal = 5820.2;
                                                    }};
                                                    deviceId = "deleniti";
                                                    position = new Double[]{{
                                                        add(7586.16),
                                                        add(5218.48),
                                                        add(1059.07),
                                                        add(4146.62),
                                                    }};
                                                    positionProperties = new java.util.HashMap<String, String>() {{
                                                        put("modi", "qui");
                                                        put("impedit", "cum");
                                                    }};
                                                    sampleTime = OffsetDateTime.parse("2022-10-13T23:01:07.168Z");
                                                }}),
                                                add(new DevicePositionUpdate("reiciendis",                 new Double[]{{
                                                                    add(6531.4),
                                                                    add(6706.38),
                                                                    add(1709.09),
                                                                }}, OffsetDateTime.parse("2022-08-23T06:35:12.519Z")) {{
                                                    accuracy = new PositionalAccuracy(6120.96) {{
                                                        horizontal = 1496.75;
                                                    }};
                                                    deviceId = "dolor";
                                                    position = new Double[]{{
                                                        add(3864.89),
                                                        add(9437.49),
                                                        add(9025.99),
                                                    }};
                                                    positionProperties = new java.util.HashMap<String, String>() {{
                                                        put("in", "corporis");
                                                        put("iste", "iure");
                                                        put("saepe", "quidem");
                                                    }};
                                                    sampleTime = OffsetDateTime.parse("2022-12-10T00:25:28.749Z");
                                                }}),
                                                add(new DevicePositionUpdate("architecto",                 new Double[]{{
                                                                    add(2088.76),
                                                                    add(6350.59),
                                                                    add(1613.09),
                                                                }}, OffsetDateTime.parse("2021-01-15T20:18:47.519Z")) {{
                                                    accuracy = new PositionalAccuracy(7506.86) {{
                                                        horizontal = 1289.26;
                                                    }};
                                                    deviceId = "enim";
                                                    position = new Double[]{{
                                                        add(3637.11),
                                                        add(3250.47),
                                                        add(5701.97),
                                                    }};
                                                    positionProperties = new java.util.HashMap<String, String>() {{
                                                        put("iure", "culpa");
                                                    }};
                                                    sampleTime = OffsetDateTime.parse("2020-02-15T22:48:47.492Z");
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            BatchEvaluateGeofencesResponse res = sdk.sdk.batchEvaluateGeofences(req);

            if (res.batchEvaluateGeofencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetDevicePosition

Lists the latest device positions for requested devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetDevicePositionRequest;
import org.openapis.openapi.models.operations.BatchGetDevicePositionRequestBody;
import org.openapis.openapi.models.operations.BatchGetDevicePositionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetDevicePositionRequest req = new BatchGetDevicePositionRequest(                new BatchGetDevicePositionRequestBody(                new String[]{{
                                                add("vitae"),
                                                add("laborum"),
                                            }});, "animi") {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "odit";
                xAmzCredential = "quo";
                xAmzDate = "sequi";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "id";
            }};            

            BatchGetDevicePositionResponse res = sdk.sdk.batchGetDevicePosition(req);

            if (res.batchGetDevicePositionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchPutGeofence

A batch request for storing geofence geometries into a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchPutGeofenceRequest;
import org.openapis.openapi.models.operations.BatchPutGeofenceRequestBody;
import org.openapis.openapi.models.operations.BatchPutGeofenceResponse;
import org.openapis.openapi.models.shared.BatchPutGeofenceRequestEntry;
import org.openapis.openapi.models.shared.Circle;
import org.openapis.openapi.models.shared.GeofenceGeometry;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchPutGeofenceRequest req = new BatchPutGeofenceRequest("aut",                 new BatchPutGeofenceRequestBody(                new org.openapis.openapi.models.shared.BatchPutGeofenceRequestEntry[]{{
                                                add(new BatchPutGeofenceRequestEntry("itaque",                 new GeofenceGeometry() {{
                                                                    circle = new Circle(                new Double[]{{
                                                                                        add(3185.69),
                                                                                        add(93.56),
                                                                                    }}, 6674.11);;
                                                                    polygon = new Double[][][]{{
                                                                        add(new Double[][]{{
                                                                            add(new Double[]{{
                                                                                add(7163.27),
                                                                                add(8413.86),
                                                                                add(2894.06),
                                                                            }}),
                                                                        }}),
                                                                        add(new Double[][]{{
                                                                            add(new Double[]{{
                                                                                add(3978.21),
                                                                            }}),
                                                                            add(new Double[]{{
                                                                                add(5528.22),
                                                                                add(201.07),
                                                                                add(1649.4),
                                                                            }}),
                                                                        }}),
                                                                        add(new Double[][]{{
                                                                            add(new Double[]{{
                                                                                add(46.95),
                                                                                add(1464.41),
                                                                            }}),
                                                                            add(new Double[]{{
                                                                                add(5696.18),
                                                                                add(2700.08),
                                                                                add(7037.37),
                                                                            }}),
                                                                            add(new Double[]{{
                                                                                add(2884.76),
                                                                                add(9621.89),
                                                                                add(4332.88),
                                                                            }}),
                                                                            add(new Double[]{{
                                                                                add(7561.07),
                                                                            }}),
                                                                        }}),
                                                                        add(new Double[][]{{
                                                                            add(new Double[]{{
                                                                                add(5920.42),
                                                                                add(8960.39),
                                                                            }}),
                                                                            add(new Double[]{{
                                                                                add(6389.21),
                                                                                add(2230.81),
                                                                                add(8915.55),
                                                                            }}),
                                                                            add(new Double[]{{
                                                                                add(6800.56),
                                                                                add(4471.25),
                                                                                add(4491.98),
                                                                                add(8464.09),
                                                                            }}),
                                                                        }}),
                                                                    }};
                                                                }};) {{
                                                    geofenceId = "error";
                                                    geometry = new GeofenceGeometry() {{
                                                        circle = new Circle(                new Double[]{{
                                                                            add(5096.24),
                                                                            add(9767.62),
                                                                        }}, 557.14) {{
                                                            center = new Double[]{{
                                                                add(6736.6),
                                                                add(960.98),
                                                                add(9719.45),
                                                                add(9764.6),
                                                            }};
                                                            radius = 8781.94;
                                                        }};
                                                        polygon = new Double[][][]{{
                                                            add(new Double[][]{{
                                                                add(new Double[]{{
                                                                    add(199.87),
                                                                    add(391.87),
                                                                    add(4417.11),
                                                                }}),
                                                                add(new Double[]{{
                                                                    add(9795.87),
                                                                    add(1201.96),
                                                                }}),
                                                            }}),
                                                            add(new Double[][]{{
                                                                add(new Double[]{{
                                                                    add(4808.94),
                                                                    add(1187.27),
                                                                }}),
                                                                add(new Double[]{{
                                                                    add(3179.83),
                                                                    add(8804.76),
                                                                    add(4142.63),
                                                                }}),
                                                            }}),
                                                            add(new Double[][]{{
                                                                add(new Double[]{{
                                                                    add(2168.22),
                                                                }}),
                                                                add(new Double[]{{
                                                                    add(5651.89),
                                                                    add(5666.02),
                                                                    add(8651.03),
                                                                }}),
                                                                add(new Double[]{{
                                                                    add(5089.69),
                                                                    add(5232.48),
                                                                }}),
                                                                add(new Double[]{{
                                                                    add(939.4),
                                                                    add(9211.58),
                                                                    add(5759.47),
                                                                    add(831.12),
                                                                }}),
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "dicta";
                xAmzDate = "magnam";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "ea";
            }};            

            BatchPutGeofenceResponse res = sdk.sdk.batchPutGeofence(req);

            if (res.batchPutGeofenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchUpdateDevicePosition

<p>Uploads position update data for one or more devices to a tracker resource. Amazon Location uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30 days.</p> <note> <p>Position updates are handled based on the <code>PositionFiltering</code> property of the tracker. When <code>PositionFiltering</code> is set to <code>TimeBased</code>, updates are evaluated against linked geofence collections, and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than every 30 seconds, only one update per 30 seconds is stored for each unique device ID.</p> <p>When <code>PositionFiltering</code> is set to <code>DistanceBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than 30 m (98.4 ft).</p> <p>When <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than the measured accuracy. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is neither stored or evaluated if the device has moved less than 15 m. If <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, Amazon Location uses the default value <code>{ "Horizontal": 0}</code> when accuracy is not provided on a <code>DevicePositionUpdate</code>.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchUpdateDevicePositionRequest;
import org.openapis.openapi.models.operations.BatchUpdateDevicePositionRequestBody;
import org.openapis.openapi.models.operations.BatchUpdateDevicePositionResponse;
import org.openapis.openapi.models.shared.DevicePositionUpdate;
import org.openapis.openapi.models.shared.PositionalAccuracy;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchUpdateDevicePositionRequest req = new BatchUpdateDevicePositionRequest(                new BatchUpdateDevicePositionRequestBody(                new org.openapis.openapi.models.shared.DevicePositionUpdate[]{{
                                                add(new DevicePositionUpdate("nisi",                 new Double[]{{
                                                                    add(6188.09),
                                                                    add(6063.93),
                                                                }}, OffsetDateTime.parse("2022-12-24T23:52:02.245Z")) {{
                                                    accuracy = new PositionalAccuracy(2497.96) {{
                                                        horizontal = 8811.04;
                                                    }};
                                                    deviceId = "occaecati";
                                                    position = new Double[]{{
                                                        add(8817.36),
                                                        add(9654.17),
                                                    }};
                                                    positionProperties = new java.util.HashMap<String, String>() {{
                                                        put("provident", "nam");
                                                        put("id", "blanditiis");
                                                        put("deleniti", "sapiente");
                                                    }};
                                                    sampleTime = OffsetDateTime.parse("2022-05-10T22:38:44.806Z");
                                                }}),
                                                add(new DevicePositionUpdate("ullam",                 new Double[]{{
                                                                    add(5518.16),
                                                                    add(5743.25),
                                                                    add(336.25),
                                                                }}, OffsetDateTime.parse("2021-01-23T15:47:23.464Z")) {{
                                                    accuracy = new PositionalAccuracy(3015.75) {{
                                                        horizontal = 4701.32;
                                                    }};
                                                    deviceId = "distinctio";
                                                    position = new Double[]{{
                                                        add(2879.91),
                                                        add(2900.77),
                                                        add(3834.62),
                                                    }};
                                                    positionProperties = new java.util.HashMap<String, String>() {{
                                                        put("nobis", "eum");
                                                        put("vero", "aspernatur");
                                                        put("architecto", "magnam");
                                                    }};
                                                    sampleTime = OffsetDateTime.parse("2022-06-06T23:06:26.119Z");
                                                }}),
                                                add(new DevicePositionUpdate("debitis",                 new Double[]{{
                                                                    add(8061.94),
                                                                    add(5370.23),
                                                                }}, OffsetDateTime.parse("2022-02-08T00:19:59.821Z")) {{
                                                    accuracy = new PositionalAccuracy(3209.97) {{
                                                        horizontal = 6521.03;
                                                    }};
                                                    deviceId = "eum";
                                                    position = new Double[]{{
                                                        add(8965.47),
                                                    }};
                                                    positionProperties = new java.util.HashMap<String, String>() {{
                                                        put("nemo", "quasi");
                                                    }};
                                                    sampleTime = OffsetDateTime.parse("2022-01-06T19:47:24.047Z");
                                                }}),
                                            }});, "architecto") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "ullam";
                xAmzDate = "expedita";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "quibusdam";
            }};            

            BatchUpdateDevicePositionResponse res = sdk.sdk.batchUpdateDevicePosition(req);

            if (res.batchUpdateDevicePositionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calculateRoute

<p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters: <code>DeparturePosition</code> and <code>DestinationPosition</code>. Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html">Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates a route based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> <note> <p>If you specify <code>walking</code> for the travel mode and your data provider is Esri, the start and destination must be within 40km.</p> </note> </li> </ul>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalculateRouteRequest;
import org.openapis.openapi.models.operations.CalculateRouteRequestBody;
import org.openapis.openapi.models.operations.CalculateRouteRequestBodyCarModeOptions;
import org.openapis.openapi.models.operations.CalculateRouteRequestBodyDistanceUnitEnum;
import org.openapis.openapi.models.operations.CalculateRouteRequestBodyTravelModeEnum;
import org.openapis.openapi.models.operations.CalculateRouteRequestBodyTruckModeOptions;
import org.openapis.openapi.models.operations.CalculateRouteResponse;
import org.openapis.openapi.models.shared.DimensionUnitEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TruckDimensions;
import org.openapis.openapi.models.shared.TruckWeight;
import org.openapis.openapi.models.shared.VehicleWeightUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CalculateRouteRequest req = new CalculateRouteRequest("saepe",                 new CalculateRouteRequestBody(                new Double[]{{
                                                add(375.59),
                                                add(1624.93),
                                                add(5083.15),
                                                add(6155.6),
                                            }},                 new Double[]{{
                                                add(1238.2),
                                            }}) {{
                                carModeOptions = new CalculateRouteRequestBodyCarModeOptions() {{
                                    avoidFerries = false;
                                    avoidTolls = false;
                                }};;
                                departNow = false;
                                departureTime = OffsetDateTime.parse("2020-06-16T10:20:37.479Z");
                                distanceUnit = CalculateRouteRequestBodyDistanceUnitEnum.MILES;
                                includeLegGeometry = false;
                                travelMode = CalculateRouteRequestBodyTravelModeEnum.MOTORCYCLE;
                                truckModeOptions = new CalculateRouteRequestBodyTruckModeOptions() {{
                                    avoidFerries = false;
                                    avoidTolls = false;
                                    dimensions = new TruckDimensions() {{
                                        height = 4113.97;
                                        length = 5691.01;
                                        unit = DimensionUnitEnum.METERS;
                                        width = 4071.83;
                                    }};;
                                    weight = new TruckWeight() {{
                                        total = 332.22;
                                        unit = VehicleWeightUnitEnum.KILOGRAMS;
                                    }};;
                                }};;
                                waypointPositions = new Double[][]{{
                                    add(new Double[]{{
                                        add(3732.91),
                                        add(4535.43),
                                        add(4200.75),
                                    }}),
                                    add(new Double[]{{
                                        add(505.88),
                                        add(8663.83),
                                        add(3654.96),
                                    }}),
                                    add(new Double[]{{
                                        add(166.27),
                                        add(8558.04),
                                        add(2307.42),
                                        add(117.14),
                                    }}),
                                    add(new Double[]{{
                                        add(3599.78),
                                        add(9441.24),
                                        add(7299.91),
                                        add(7499.99),
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "quis";
                xAmzCredential = "totam";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "nesciunt";
            }};            

            CalculateRouteResponse res = sdk.sdk.calculateRoute(req);

            if (res.calculateRouteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calculateRouteMatrix

<p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html"> Calculates a route matrix</a> given the following required parameters: <code>DeparturePositions</code> and <code>DestinationPositions</code>. <code>CalculateRouteMatrix</code> calculates routes and returns the travel time and travel distance from each departure position to each destination position in the request. For example, given departure positions A and B, and destination positions X and Y, <code>CalculateRouteMatrix</code> will return time and distance for routes from A to X, A to Y, B to X, and B to Y (in that order). The number of results returned (and routes calculated) will be the number of <code>DeparturePositions</code> times the number of <code>DestinationPositions</code>.</p> <note> <p>Your account is charged for each route calculated, not the number of requests.</p> </note> <p>Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating routes.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html"> Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates routes based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalculateRouteMatrixRequest;
import org.openapis.openapi.models.operations.CalculateRouteMatrixRequestBody;
import org.openapis.openapi.models.operations.CalculateRouteMatrixRequestBodyCarModeOptions;
import org.openapis.openapi.models.operations.CalculateRouteMatrixRequestBodyDistanceUnitEnum;
import org.openapis.openapi.models.operations.CalculateRouteMatrixRequestBodyTravelModeEnum;
import org.openapis.openapi.models.operations.CalculateRouteMatrixRequestBodyTruckModeOptions;
import org.openapis.openapi.models.operations.CalculateRouteMatrixResponse;
import org.openapis.openapi.models.shared.DimensionUnitEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TruckDimensions;
import org.openapis.openapi.models.shared.TruckWeight;
import org.openapis.openapi.models.shared.VehicleWeightUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CalculateRouteMatrixRequest req = new CalculateRouteMatrixRequest("perferendis",                 new CalculateRouteMatrixRequestBody(                new Double[][]{{
                                                add(new Double[]{{
                                                    add(4634.51),
                                                    add(2239.24),
                                                    add(8745.73),
                                                    add(3453.52),
                                                }}),
                                            }},                 new Double[][]{{
                                                add(new Double[]{{
                                                    add(6082.53),
                                                    add(7044.15),
                                                    add(5966.56),
                                                    add(318.38),
                                                }}),
                                                add(new Double[]{{
                                                    add(1646.94),
                                                    add(5000.26),
                                                    add(6214.79),
                                                    add(503.7),
                                                }}),
                                                add(new Double[]{{
                                                    add(6990.98),
                                                    add(2378.93),
                                                    add(9923.97),
                                                }}),
                                                add(new Double[]{{
                                                    add(2672.62),
                                                    add(6139.66),
                                                    add(6790.91),
                                                    add(5356.33),
                                                }}),
                                            }}) {{
                                carModeOptions = new CalculateRouteMatrixRequestBodyCarModeOptions() {{
                                    avoidFerries = false;
                                    avoidTolls = false;
                                }};;
                                departNow = false;
                                departureTime = OffsetDateTime.parse("2021-03-26T01:09:56.415Z");
                                distanceUnit = CalculateRouteMatrixRequestBodyDistanceUnitEnum.MILES;
                                travelMode = CalculateRouteMatrixRequestBodyTravelModeEnum.BICYCLE;
                                truckModeOptions = new CalculateRouteMatrixRequestBodyTruckModeOptions() {{
                                    avoidFerries = false;
                                    avoidTolls = false;
                                    dimensions = new TruckDimensions() {{
                                        height = 9644.9;
                                        length = 3119.45;
                                        unit = DimensionUnitEnum.FEET;
                                        width = 3982.21;
                                    }};;
                                    weight = new TruckWeight() {{
                                        total = 2123.9;
                                        unit = VehicleWeightUnitEnum.KILOGRAMS;
                                    }};;
                                }};;
                            }};) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "qui";
                xAmzCredential = "ipsum";
                xAmzDate = "hic";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "voluptate";
            }};            

            CalculateRouteMatrixResponse res = sdk.sdk.calculateRouteMatrix(req);

            if (res.calculateRouteMatrixResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGeofenceCollection

Creates a geofence collection, which manages and stores geofences.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGeofenceCollectionRequest;
import org.openapis.openapi.models.operations.CreateGeofenceCollectionRequestBody;
import org.openapis.openapi.models.operations.CreateGeofenceCollectionRequestBodyPricingPlanEnum;
import org.openapis.openapi.models.operations.CreateGeofenceCollectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGeofenceCollectionRequest req = new CreateGeofenceCollectionRequest(                new CreateGeofenceCollectionRequestBody("reiciendis") {{
                                description = "amet";
                                kmsKeyId = "dolorum";
                                pricingPlan = CreateGeofenceCollectionRequestBodyPricingPlanEnum.REQUEST_BASED_USAGE;
                                pricingPlanDataSource = "veritatis";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("ipsa", "iure");
                                }};
                            }};) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "accusamus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "natus";
            }};            

            CreateGeofenceCollectionResponse res = sdk.sdk.createGeofenceCollection(req);

            if (res.createGeofenceCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createKey

<p>Creates an API key resource in your Amazon Web Services account, which lets you grant <code>geo:GetMap*</code> actions for Amazon Location Map resources to the API key bearer.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateKeyRequest;
import org.openapis.openapi.models.operations.CreateKeyRequestBody;
import org.openapis.openapi.models.operations.CreateKeyRequestBodyRestrictions;
import org.openapis.openapi.models.operations.CreateKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateKeyRequest req = new CreateKeyRequest(                new CreateKeyRequestBody("atque",                 new CreateKeyRequestBodyRestrictions() {{
                                                allowActions = new String[]{{
                                                    add("fugiat"),
                                                }};
                                                allowReferers = new String[]{{
                                                    add("soluta"),
                                                }};
                                                allowResources = new String[]{{
                                                    add("iusto"),
                                                    add("voluptate"),
                                                    add("dolorum"),
                                                }};
                                            }};) {{
                                description = "deleniti";
                                expireTime = OffsetDateTime.parse("2021-03-17T10:19:08.276Z");
                                noExpiry = false;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("asperiores", "nihil");
                                    put("ipsum", "voluptate");
                                    put("id", "saepe");
                                }};
                            }};) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "perferendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "optio";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "ad";
            }};            

            CreateKeyResponse res = sdk.sdk.createKey(req);

            if (res.createKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMap

<p>Creates a map resource in your Amazon Web Services account, which provides map tiles of different styles sourced from global location data providers.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMapRequest;
import org.openapis.openapi.models.operations.CreateMapRequestBody;
import org.openapis.openapi.models.operations.CreateMapRequestBodyConfiguration;
import org.openapis.openapi.models.operations.CreateMapRequestBodyPricingPlanEnum;
import org.openapis.openapi.models.operations.CreateMapResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMapRequest req = new CreateMapRequest(                new CreateMapRequestBody(                new CreateMapRequestBodyConfiguration() {{
                                                style = "suscipit";
                                            }};, "deserunt") {{
                                description = "provident";
                                pricingPlan = CreateMapRequestBodyPricingPlanEnum.REQUEST_BASED_USAGE;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("totam", "similique");
                                    put("alias", "at");
                                    put("quaerat", "tempora");
                                    put("vel", "quod");
                                }};
                            }};) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "qui";
                xAmzCredential = "dolorum";
                xAmzDate = "a";
                xAmzSecurityToken = "esse";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "iusto";
            }};            

            CreateMapResponse res = sdk.sdk.createMap(req);

            if (res.createMapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPlaceIndex

<p>Creates a place index resource in your Amazon Web Services account. Use a place index resource to geocode addresses and other text queries by using the <code>SearchPlaceIndexForText</code> operation, and reverse geocode coordinates by using the <code>SearchPlaceIndexForPosition</code> operation, and enable autosuggestions by using the <code>SearchPlaceIndexForSuggestions</code> operation.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePlaceIndexRequest;
import org.openapis.openapi.models.operations.CreatePlaceIndexRequestBody;
import org.openapis.openapi.models.operations.CreatePlaceIndexRequestBodyDataSourceConfiguration;
import org.openapis.openapi.models.operations.CreatePlaceIndexRequestBodyPricingPlanEnum;
import org.openapis.openapi.models.operations.CreatePlaceIndexResponse;
import org.openapis.openapi.models.shared.IntendedUseEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePlaceIndexRequest req = new CreatePlaceIndexRequest(                new CreatePlaceIndexRequestBody("quisquam", "tenetur") {{
                                dataSourceConfiguration = new CreatePlaceIndexRequestBodyDataSourceConfiguration() {{
                                    intendedUse = IntendedUseEnum.SINGLE_USE;
                                }};;
                                description = "tempore";
                                pricingPlan = CreatePlaceIndexRequestBodyPricingPlanEnum.MOBILE_ASSET_MANAGEMENT;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("enim", "dolorem");
                                    put("sapiente", "totam");
                                }};
                            }};) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "sit";
                xAmzCredential = "expedita";
                xAmzDate = "neque";
                xAmzSecurityToken = "sed";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "libero";
            }};            

            CreatePlaceIndexResponse res = sdk.sdk.createPlaceIndex(req);

            if (res.createPlaceIndexResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRouteCalculator

<p>Creates a route calculator resource in your Amazon Web Services account.</p> <p>You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRouteCalculatorRequest;
import org.openapis.openapi.models.operations.CreateRouteCalculatorRequestBody;
import org.openapis.openapi.models.operations.CreateRouteCalculatorRequestBodyPricingPlanEnum;
import org.openapis.openapi.models.operations.CreateRouteCalculatorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRouteCalculatorRequest req = new CreateRouteCalculatorRequest(                new CreateRouteCalculatorRequestBody("deserunt", "quam") {{
                                description = "ipsum";
                                pricingPlan = CreateRouteCalculatorRequestBodyPricingPlanEnum.REQUEST_BASED_USAGE;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("cupiditate", "maxime");
                                }};
                            }};) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dicta";
                xAmzDate = "laborum";
                xAmzSecurityToken = "totam";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "aspernatur";
            }};            

            CreateRouteCalculatorResponse res = sdk.sdk.createRouteCalculator(req);

            if (res.createRouteCalculatorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTracker

Creates a tracker resource in your Amazon Web Services account, which lets you retrieve current and historical location of devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTrackerRequest;
import org.openapis.openapi.models.operations.CreateTrackerRequestBody;
import org.openapis.openapi.models.operations.CreateTrackerRequestBodyPositionFilteringEnum;
import org.openapis.openapi.models.operations.CreateTrackerRequestBodyPricingPlanEnum;
import org.openapis.openapi.models.operations.CreateTrackerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTrackerRequest req = new CreateTrackerRequest(                new CreateTrackerRequestBody("distinctio") {{
                                description = "facilis";
                                kmsKeyId = "aliquid";
                                positionFiltering = CreateTrackerRequestBodyPositionFilteringEnum.DISTANCE_BASED;
                                pricingPlan = CreateTrackerRequestBodyPricingPlanEnum.MOBILE_ASSET_TRACKING;
                                pricingPlanDataSource = "temporibus";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("neque", "fugit");
                                }};
                            }};) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "odio";
                xAmzCredential = "sunt";
                xAmzDate = "ullam";
                xAmzSecurityToken = "nam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "voluptatem";
            }};            

            CreateTrackerResponse res = sdk.sdk.createTracker(req);

            if (res.createTrackerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGeofenceCollection

<p>Deletes a geofence collection from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGeofenceCollectionRequest;
import org.openapis.openapi.models.operations.DeleteGeofenceCollectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGeofenceCollectionRequest req = new DeleteGeofenceCollectionRequest("soluta") {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "et";
                xAmzCredential = "saepe";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "quos";
            }};            

            DeleteGeofenceCollectionResponse res = sdk.sdk.deleteGeofenceCollection(req);

            if (res.deleteGeofenceCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteKey

Deletes the specified API key. The API key must have been deactivated more than 90 days previously.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteKeyRequest;
import org.openapis.openapi.models.operations.DeleteKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteKeyRequest req = new DeleteKeyRequest("cupiditate") {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "dolorem";
                xAmzDate = "dolore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "dolorum";
            }};            

            DeleteKeyResponse res = sdk.sdk.deleteKey(req);

            if (res.deleteKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMap

<p>Deletes a map resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the map is being used in an application, the map may not render.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMapRequest;
import org.openapis.openapi.models.operations.DeleteMapResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMapRequest req = new DeleteMapRequest("quae") {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quas";
                xAmzCredential = "itaque";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "porro";
            }};            

            DeleteMapResponse res = sdk.sdk.deleteMap(req);

            if (res.deleteMapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePlaceIndex

<p>Deletes a place index resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePlaceIndexRequest;
import org.openapis.openapi.models.operations.DeletePlaceIndexResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePlaceIndexRequest req = new DeletePlaceIndexRequest("ut") {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "qui";
                xAmzDate = "quae";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "occaecati";
            }};            

            DeletePlaceIndexResponse res = sdk.sdk.deletePlaceIndex(req);

            if (res.deletePlaceIndexResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRouteCalculator

<p>Deletes a route calculator resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRouteCalculatorRequest;
import org.openapis.openapi.models.operations.DeleteRouteCalculatorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRouteCalculatorRequest req = new DeleteRouteCalculatorRequest("quisquam") {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "quis";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "consectetur";
            }};            

            DeleteRouteCalculatorResponse res = sdk.sdk.deleteRouteCalculator(req);

            if (res.deleteRouteCalculatorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTracker

<p>Deletes a tracker resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTrackerRequest;
import org.openapis.openapi.models.operations.DeleteTrackerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTrackerRequest req = new DeleteTrackerRequest("tenetur") {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "hic";
                xAmzCredential = "distinctio";
                xAmzDate = "quod";
                xAmzSecurityToken = "odio";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "facilis";
            }};            

            DeleteTrackerResponse res = sdk.sdk.deleteTracker(req);

            if (res.deleteTrackerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeGeofenceCollection

Retrieves the geofence collection details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeGeofenceCollectionRequest;
import org.openapis.openapi.models.operations.DescribeGeofenceCollectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeGeofenceCollectionRequest req = new DescribeGeofenceCollectionRequest("ducimus") {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "illum";
                xAmzDate = "sequi";
                xAmzSecurityToken = "natus";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "aut";
            }};            

            DescribeGeofenceCollectionResponse res = sdk.sdk.describeGeofenceCollection(req);

            if (res.describeGeofenceCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeKey

<p>Retrieves the API key resource details.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeKeyRequest;
import org.openapis.openapi.models.operations.DescribeKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeKeyRequest req = new DescribeKeyRequest("exercitationem") {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "porro";
                xAmzDate = "maiores";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "eligendi";
            }};            

            DescribeKeyResponse res = sdk.sdk.describeKey(req);

            if (res.describeKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMap

Retrieves the map resource details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMapRequest;
import org.openapis.openapi.models.operations.DescribeMapResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMapRequest req = new DescribeMapRequest("alias") {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "ipsam";
                xAmzDate = "ea";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "possimus";
            }};            

            DescribeMapResponse res = sdk.sdk.describeMap(req);

            if (res.describeMapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePlaceIndex

Retrieves the place index resource details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePlaceIndexRequest;
import org.openapis.openapi.models.operations.DescribePlaceIndexResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePlaceIndexRequest req = new DescribePlaceIndexRequest("ratione") {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "dicta";
                xAmzDate = "dolor";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "ex";
            }};            

            DescribePlaceIndexResponse res = sdk.sdk.describePlaceIndex(req);

            if (res.describePlaceIndexResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRouteCalculator

Retrieves the route calculator resource details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRouteCalculatorRequest;
import org.openapis.openapi.models.operations.DescribeRouteCalculatorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRouteCalculatorRequest req = new DescribeRouteCalculatorRequest("excepturi") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "sapiente";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "impedit";
            }};            

            DescribeRouteCalculatorResponse res = sdk.sdk.describeRouteCalculator(req);

            if (res.describeRouteCalculatorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTracker

Retrieves the tracker resource details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTrackerRequest;
import org.openapis.openapi.models.operations.DescribeTrackerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTrackerRequest req = new DescribeTrackerRequest("veniam") {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "magnam";
                xAmzDate = "ea";
                xAmzSecurityToken = "quo";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "recusandae";
            }};            

            DescribeTrackerResponse res = sdk.sdk.describeTracker(req);

            if (res.describeTrackerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateTrackerConsumer

<p>Removes the association between a tracker resource and a geofence collection.</p> <note> <p>Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateTrackerConsumerRequest;
import org.openapis.openapi.models.operations.DisassociateTrackerConsumerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateTrackerConsumerRequest req = new DisassociateTrackerConsumerRequest("minima", "eaque") {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "libero";
                xAmzCredential = "aut";
                xAmzDate = "aut";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "aliquam";
            }};            

            DisassociateTrackerConsumerResponse res = sdk.sdk.disassociateTrackerConsumer(req);

            if (res.disassociateTrackerConsumerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevicePosition

<p>Retrieves a device's most recent position according to its sample time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDevicePositionRequest;
import org.openapis.openapi.models.operations.GetDevicePositionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDevicePositionRequest req = new GetDevicePositionRequest("accusamus", "inventore") {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "et";
                xAmzCredential = "dolorum";
                xAmzDate = "laborum";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "eum";
            }};            

            GetDevicePositionResponse res = sdk.sdk.getDevicePosition(req);

            if (res.getDevicePositionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevicePositionHistory

<p>Retrieves the device position history from a tracker resource within a specified range of time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDevicePositionHistoryRequest;
import org.openapis.openapi.models.operations.GetDevicePositionHistoryRequestBody;
import org.openapis.openapi.models.operations.GetDevicePositionHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDevicePositionHistoryRequest req = new GetDevicePositionHistoryRequest("nobis",                 new GetDevicePositionHistoryRequestBody() {{
                                endTimeExclusive = OffsetDateTime.parse("2021-05-05T09:22:07.208Z");
                                maxResults = 860552L;
                                nextToken = "voluptas";
                                startTimeInclusive = OffsetDateTime.parse("2022-10-22T12:27:01.822Z");
                            }};, "tempora") {{
                maxResults = "numquam";
                nextToken = "explicabo";
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "molestiae";
                xAmzDate = "magnam";
                xAmzSecurityToken = "odio";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "esse";
            }};            

            GetDevicePositionHistoryResponse res = sdk.sdk.getDevicePositionHistory(req);

            if (res.getDevicePositionHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeofence

Retrieves the geofence details from a geofence collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeofenceRequest;
import org.openapis.openapi.models.operations.GetGeofenceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGeofenceRequest req = new GetGeofenceRequest("rem", "fuga") {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "fugiat";
                xAmzDate = "ut";
                xAmzSecurityToken = "eum";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "assumenda";
            }};            

            GetGeofenceResponse res = sdk.sdk.getGeofence(req);

            if (res.getGeofenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMapGlyphs

Retrieves glyphs used to display labels on a map.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMapGlyphsRequest;
import org.openapis.openapi.models.operations.GetMapGlyphsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMapGlyphsRequest req = new GetMapGlyphsRequest("praesentium", "quisquam", "veritatis") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "id";
                xAmzCredential = "quidem";
                xAmzDate = "neque";
                xAmzSecurityToken = "quo";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "quo";
                key = "fuga";
            }};            

            GetMapGlyphsResponse res = sdk.sdk.getMapGlyphs(req);

            if (res.getMapGlyphsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMapSprites

Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMapSpritesRequest;
import org.openapis.openapi.models.operations.GetMapSpritesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMapSpritesRequest req = new GetMapSpritesRequest("eos", "voluptas") {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "consequatur";
                xAmzDate = "tempora";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "aspernatur";
                key = "sequi";
            }};            

            GetMapSpritesResponse res = sdk.sdk.getMapSprites(req);

            if (res.getMapSpritesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMapStyleDescriptor

<p>Retrieves the map style descriptor from a map resource. </p> <p>The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMapStyleDescriptorRequest;
import org.openapis.openapi.models.operations.GetMapStyleDescriptorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMapStyleDescriptorRequest req = new GetMapStyleDescriptorRequest("esse") {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "distinctio";
                xAmzDate = "quod";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "nihil";
                key = "totam";
            }};            

            GetMapStyleDescriptorResponse res = sdk.sdk.getMapStyleDescriptor(req);

            if (res.getMapStyleDescriptorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMapTile

<p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. </p> <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMapTileRequest;
import org.openapis.openapi.models.operations.GetMapTileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMapTileRequest req = new GetMapTileRequest("aliquam", "odio", "occaecati", "commodi") {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "deserunt";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "eum";
                key = "quas";
            }};            

            GetMapTileResponse res = sdk.sdk.getMapTile(req);

            if (res.getMapTileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlace

<p>Finds a place by its unique ID. A <code>PlaceId</code> is returned by other search operations.</p> <note> <p>A PlaceId is valid only if all of the following are the same in the original search request and the call to <code>GetPlace</code>.</p> <ul> <li> <p>Customer Amazon Web Services account</p> </li> <li> <p>Amazon Web Services Region</p> </li> <li> <p>Data provider specified in the place index resource</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlaceRequest;
import org.openapis.openapi.models.operations.GetPlaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPlaceRequest req = new GetPlaceRequest("consequuntur", "deleniti") {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "mollitia";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "atque";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "minima";
                language = "nisi";
            }};            

            GetPlaceResponse res = sdk.sdk.getPlace(req);

            if (res.getPlaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDevicePositions

A batch request to retrieve all device positions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDevicePositionsRequest;
import org.openapis.openapi.models.operations.ListDevicePositionsRequestBody;
import org.openapis.openapi.models.operations.ListDevicePositionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDevicePositionsRequest req = new ListDevicePositionsRequest(                new ListDevicePositionsRequestBody() {{
                                maxResults = 956406L;
                                nextToken = "consequuntur";
                            }};, "ratione") {{
                maxResults = "explicabo";
                nextToken = "saepe";
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "atque";
                xAmzCredential = "et";
                xAmzDate = "esse";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "veritatis";
            }};            

            ListDevicePositionsResponse res = sdk.sdk.listDevicePositions(req);

            if (res.listDevicePositionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGeofenceCollections

Lists geofence collections in your Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGeofenceCollectionsRequest;
import org.openapis.openapi.models.operations.ListGeofenceCollectionsRequestBody;
import org.openapis.openapi.models.operations.ListGeofenceCollectionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGeofenceCollectionsRequest req = new ListGeofenceCollectionsRequest(                new ListGeofenceCollectionsRequestBody() {{
                                maxResults = 800379L;
                                nextToken = "nam";
                            }};) {{
                maxResults = "vero";
                nextToken = "aliquid";
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "vel";
                xAmzDate = "harum";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "occaecati";
            }};            

            ListGeofenceCollectionsResponse res = sdk.sdk.listGeofenceCollections(req);

            if (res.listGeofenceCollectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGeofences

Lists geofences stored in a given geofence collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGeofencesRequest;
import org.openapis.openapi.models.operations.ListGeofencesRequestBody;
import org.openapis.openapi.models.operations.ListGeofencesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGeofencesRequest req = new ListGeofencesRequest("distinctio",                 new ListGeofencesRequestBody() {{
                                maxResults = 756779L;
                                nextToken = "sit";
                            }};) {{
                maxResults = "culpa";
                nextToken = "tempore";
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "consequuntur";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "minus";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "sapiente";
            }};            

            ListGeofencesResponse res = sdk.sdk.listGeofences(req);

            if (res.listGeofencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listKeys

<p>Lists API key resources in your Amazon Web Services account.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListKeysRequest;
import org.openapis.openapi.models.operations.ListKeysRequestBody;
import org.openapis.openapi.models.operations.ListKeysRequestBodyFilter;
import org.openapis.openapi.models.operations.ListKeysResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListKeysRequest req = new ListKeysRequest(                new ListKeysRequestBody() {{
                                filter = new ListKeysRequestBodyFilter() {{
                                    keyStatus = StatusEnum.ACTIVE;
                                }};;
                                maxResults = 503427L;
                                nextToken = "provident";
                            }};) {{
                maxResults = "a";
                nextToken = "nulla";
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "esse";
                xAmzCredential = "quasi";
                xAmzDate = "a";
                xAmzSecurityToken = "error";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "pariatur";
            }};            

            ListKeysResponse res = sdk.sdk.listKeys(req);

            if (res.listKeysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMaps

Lists map resources in your Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMapsRequest;
import org.openapis.openapi.models.operations.ListMapsRequestBody;
import org.openapis.openapi.models.operations.ListMapsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMapsRequest req = new ListMapsRequest(                new ListMapsRequestBody() {{
                                maxResults = 157632L;
                                nextToken = "eveniet";
                            }};) {{
                maxResults = "asperiores";
                nextToken = "facere";
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "quasi";
                xAmzDate = "similique";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "tenetur";
            }};            

            ListMapsResponse res = sdk.sdk.listMaps(req);

            if (res.listMapsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPlaceIndexes

Lists place index resources in your Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPlaceIndexesRequest;
import org.openapis.openapi.models.operations.ListPlaceIndexesRequestBody;
import org.openapis.openapi.models.operations.ListPlaceIndexesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPlaceIndexesRequest req = new ListPlaceIndexesRequest(                new ListPlaceIndexesRequestBody() {{
                                maxResults = 936747L;
                                nextToken = "vel";
                            }};) {{
                maxResults = "in";
                nextToken = "eius";
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "illum";
                xAmzCredential = "soluta";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "dicta";
            }};            

            ListPlaceIndexesResponse res = sdk.sdk.listPlaceIndexes(req);

            if (res.listPlaceIndexesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRouteCalculators

Lists route calculator resources in your Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRouteCalculatorsRequest;
import org.openapis.openapi.models.operations.ListRouteCalculatorsRequestBody;
import org.openapis.openapi.models.operations.ListRouteCalculatorsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRouteCalculatorsRequest req = new ListRouteCalculatorsRequest(                new ListRouteCalculatorsRequestBody() {{
                                maxResults = 443879L;
                                nextToken = "ullam";
                            }};) {{
                maxResults = "nisi";
                nextToken = "aut";
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "qui";
                xAmzCredential = "quibusdam";
                xAmzDate = "ex";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "dolorum";
            }};            

            ListRouteCalculatorsResponse res = sdk.sdk.listRouteCalculators(req);

            if (res.listRouteCalculatorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns a list of tags that are applied to the specified Amazon Location resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("omnis") {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "at";
                xAmzDate = "et";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "minima";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTrackerConsumers

Lists geofence collections currently associated to the given tracker resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTrackerConsumersRequest;
import org.openapis.openapi.models.operations.ListTrackerConsumersRequestBody;
import org.openapis.openapi.models.operations.ListTrackerConsumersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTrackerConsumersRequest req = new ListTrackerConsumersRequest(                new ListTrackerConsumersRequestBody() {{
                                maxResults = 232744L;
                                nextToken = "adipisci";
                            }};, "iste") {{
                maxResults = "temporibus";
                nextToken = "accusantium";
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "aut";
                xAmzCredential = "laudantium";
                xAmzDate = "eum";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "corrupti";
            }};            

            ListTrackerConsumersResponse res = sdk.sdk.listTrackerConsumers(req);

            if (res.listTrackerConsumersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTrackers

Lists tracker resources in your Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTrackersRequest;
import org.openapis.openapi.models.operations.ListTrackersRequestBody;
import org.openapis.openapi.models.operations.ListTrackersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTrackersRequest req = new ListTrackersRequest(                new ListTrackersRequestBody() {{
                                maxResults = 32465L;
                                nextToken = "dolor";
                            }};) {{
                maxResults = "occaecati";
                nextToken = "numquam";
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "voluptas";
                xAmzDate = "aut";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "maiores";
            }};            

            ListTrackersResponse res = sdk.sdk.listTrackers(req);

            if (res.listTrackersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putGeofence

Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutGeofenceRequest;
import org.openapis.openapi.models.operations.PutGeofenceRequestBody;
import org.openapis.openapi.models.operations.PutGeofenceRequestBodyGeometry;
import org.openapis.openapi.models.operations.PutGeofenceResponse;
import org.openapis.openapi.models.shared.Circle;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutGeofenceRequest req = new PutGeofenceRequest("velit", "voluptatibus",                 new PutGeofenceRequestBody(                new PutGeofenceRequestBodyGeometry() {{
                                                circle = new Circle(                new Double[]{{
                                                                    add(9903.45),
                                                                    add(456.59),
                                                                }}, 4090.54);;
                                                polygon = new Double[][][]{{
                                                    add(new Double[][]{{
                                                        add(new Double[]{{
                                                            add(6387.62),
                                                            add(8070.23),
                                                            add(4903.05),
                                                            add(6400.24),
                                                        }}),
                                                    }}),
                                                    add(new Double[][]{{
                                                        add(new Double[]{{
                                                            add(653.04),
                                                            add(3127.53),
                                                        }}),
                                                        add(new Double[]{{
                                                            add(8018.36),
                                                            add(2883.98),
                                                            add(704.47),
                                                            add(2414.18),
                                                        }}),
                                                        add(new Double[]{{
                                                            add(6625.05),
                                                            add(3807.29),
                                                            add(2460.63),
                                                        }}),
                                                        add(new Double[]{{
                                                            add(6658.59),
                                                            add(9268.8),
                                                            add(5173.09),
                                                        }}),
                                                    }}),
                                                }};
                                            }};);) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "vel";
                xAmzCredential = "ducimus";
                xAmzDate = "quos";
                xAmzSecurityToken = "vel";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "possimus";
            }};            

            PutGeofenceResponse res = sdk.sdk.putGeofence(req);

            if (res.putGeofenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchPlaceIndexForPosition

Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchPlaceIndexForPositionRequest;
import org.openapis.openapi.models.operations.SearchPlaceIndexForPositionRequestBody;
import org.openapis.openapi.models.operations.SearchPlaceIndexForPositionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchPlaceIndexForPositionRequest req = new SearchPlaceIndexForPositionRequest("cum",                 new SearchPlaceIndexForPositionRequestBody(                new Double[]{{
                                                add(4471.44),
                                                add(3605.45),
                                            }}) {{
                                language = "reiciendis";
                                maxResults = 828657L;
                            }};) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aliquid";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "cum";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "in";
            }};            

            SearchPlaceIndexForPositionResponse res = sdk.sdk.searchPlaceIndexForPosition(req);

            if (res.searchPlaceIndexForPositionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchPlaceIndexForSuggestions

<p>Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching.</p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for suggested place names near a specified position by using <code>BiasPosition</code>, or filter results within a bounding box by using <code>FilterBBox</code>. These parameters are mutually exclusive; using both <code>BiasPosition</code> and <code>FilterBBox</code> in the same command returns an error.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchPlaceIndexForSuggestionsRequest;
import org.openapis.openapi.models.operations.SearchPlaceIndexForSuggestionsRequestBody;
import org.openapis.openapi.models.operations.SearchPlaceIndexForSuggestionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchPlaceIndexForSuggestionsRequest req = new SearchPlaceIndexForSuggestionsRequest("earum",                 new SearchPlaceIndexForSuggestionsRequestBody("facere") {{
                                biasPosition = new Double[]{{
                                    add(9854.92),
                                    add(3817.6),
                                }};
                                filterBBox = new Double[]{{
                                    add(6971.42),
                                    add(9049.49),
                                    add(8970.71),
                                    add(2965.56),
                                }};
                                filterCountries = new String[]{{
                                    add("asperiores"),
                                }};
                                language = "adipisci";
                                maxResults = 249420L;
                            }};) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "dignissimos";
                xAmzDate = "a";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "corporis";
            }};            

            SearchPlaceIndexForSuggestionsResponse res = sdk.sdk.searchPlaceIndexForSuggestions(req);

            if (res.searchPlaceIndexForSuggestionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchPlaceIndexForText

<p>Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest. </p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for places near a given position using <code>BiasPosition</code>, or filter results within a bounding box using <code>FilterBBox</code>. Providing both parameters simultaneously returns an error.</p> </note> <p>Search results are returned in order of highest to lowest relevance.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchPlaceIndexForTextRequest;
import org.openapis.openapi.models.operations.SearchPlaceIndexForTextRequestBody;
import org.openapis.openapi.models.operations.SearchPlaceIndexForTextResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchPlaceIndexForTextRequest req = new SearchPlaceIndexForTextRequest("laboriosam",                 new SearchPlaceIndexForTextRequestBody("ipsa") {{
                                biasPosition = new Double[]{{
                                    add(7307.09),
                                    add(1138.16),
                                    add(8817.21),
                                    add(6311.26),
                                }};
                                filterBBox = new Double[]{{
                                    add(1328.15),
                                    add(3790.57),
                                }};
                                filterCountries = new String[]{{
                                    add("voluptas"),
                                    add("minima"),
                                }};
                                language = "nobis";
                                maxResults = 680116L;
                            }};) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "minus";
                xAmzCredential = "dolores";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "in";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "aliquam";
            }};            

            SearchPlaceIndexForTextResponse res = sdk.sdk.searchPlaceIndexForText(req);

            if (res.searchPlaceIndexForTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>You can use the <code>TagResource</code> operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag. </p> <p>You can associate up to 50 tags with a resource.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("ullam", "adipisci");
                                                put("cum", "blanditiis");
                                                put("quas", "hic");
                                                put("nesciunt", "culpa");
                                            }});, "corrupti") {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "totam";
                xAmzCredential = "hic";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "rerum";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes one or more tags from the specified Amazon Location resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("reiciendis",                 new String[]{{
                                add("asperiores"),
                            }}) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "expedita";
                xAmzDate = "ab";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "laborum";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGeofenceCollection

Updates the specified properties of a given geofence collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGeofenceCollectionRequest;
import org.openapis.openapi.models.operations.UpdateGeofenceCollectionRequestBody;
import org.openapis.openapi.models.operations.UpdateGeofenceCollectionRequestBodyPricingPlanEnum;
import org.openapis.openapi.models.operations.UpdateGeofenceCollectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGeofenceCollectionRequest req = new UpdateGeofenceCollectionRequest("in",                 new UpdateGeofenceCollectionRequestBody() {{
                                description = "commodi";
                                pricingPlan = UpdateGeofenceCollectionRequestBodyPricingPlanEnum.MOBILE_ASSET_MANAGEMENT;
                                pricingPlanDataSource = "explicabo";
                            }};) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "unde";
                xAmzCredential = "architecto";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "illo";
            }};            

            UpdateGeofenceCollectionResponse res = sdk.sdk.updateGeofenceCollection(req);

            if (res.updateGeofenceCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateKey

<p>Updates the specified properties of a given API key resource.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateKeyRequest;
import org.openapis.openapi.models.operations.UpdateKeyRequestBody;
import org.openapis.openapi.models.operations.UpdateKeyRequestBodyRestrictions;
import org.openapis.openapi.models.operations.UpdateKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateKeyRequest req = new UpdateKeyRequest("perferendis",                 new UpdateKeyRequestBody() {{
                                description = "corrupti";
                                expireTime = OffsetDateTime.parse("2022-03-06T01:38:10.905Z");
                                forceUpdate = false;
                                noExpiry = false;
                                restrictions = new UpdateKeyRequestBodyRestrictions() {{
                                    allowActions = new String[]{{
                                        add("provident"),
                                    }};
                                    allowReferers = new String[]{{
                                        add("necessitatibus"),
                                        add("ipsum"),
                                    }};
                                    allowResources = new String[]{{
                                        add("occaecati"),
                                        add("quos"),
                                    }};
                                }};;
                            }};) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "tempora";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "sit";
            }};            

            UpdateKeyResponse res = sdk.sdk.updateKey(req);

            if (res.updateKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMap

Updates the specified properties of a given map resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMapRequest;
import org.openapis.openapi.models.operations.UpdateMapRequestBody;
import org.openapis.openapi.models.operations.UpdateMapRequestBodyPricingPlanEnum;
import org.openapis.openapi.models.operations.UpdateMapResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMapRequest req = new UpdateMapRequest("officiis",                 new UpdateMapRequestBody() {{
                                description = "praesentium";
                                pricingPlan = UpdateMapRequestBodyPricingPlanEnum.MOBILE_ASSET_MANAGEMENT;
                            }};) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "ipsam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "rem";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "nobis";
            }};            

            UpdateMapResponse res = sdk.sdk.updateMap(req);

            if (res.updateMapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePlaceIndex

Updates the specified properties of a given place index resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePlaceIndexRequest;
import org.openapis.openapi.models.operations.UpdatePlaceIndexRequestBody;
import org.openapis.openapi.models.operations.UpdatePlaceIndexRequestBodyDataSourceConfiguration;
import org.openapis.openapi.models.operations.UpdatePlaceIndexRequestBodyPricingPlanEnum;
import org.openapis.openapi.models.operations.UpdatePlaceIndexResponse;
import org.openapis.openapi.models.shared.IntendedUseEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePlaceIndexRequest req = new UpdatePlaceIndexRequest("veniam",                 new UpdatePlaceIndexRequestBody() {{
                                dataSourceConfiguration = new UpdatePlaceIndexRequestBodyDataSourceConfiguration() {{
                                    intendedUse = IntendedUseEnum.SINGLE_USE;
                                }};;
                                description = "recusandae";
                                pricingPlan = UpdatePlaceIndexRequestBodyPricingPlanEnum.MOBILE_ASSET_MANAGEMENT;
                            }};) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "magni";
                xAmzCredential = "aperiam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "in";
            }};            

            UpdatePlaceIndexResponse res = sdk.sdk.updatePlaceIndex(req);

            if (res.updatePlaceIndexResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRouteCalculator

Updates the specified properties for a given route calculator resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRouteCalculatorRequest;
import org.openapis.openapi.models.operations.UpdateRouteCalculatorRequestBody;
import org.openapis.openapi.models.operations.UpdateRouteCalculatorRequestBodyPricingPlanEnum;
import org.openapis.openapi.models.operations.UpdateRouteCalculatorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRouteCalculatorRequest req = new UpdateRouteCalculatorRequest("beatae",                 new UpdateRouteCalculatorRequestBody() {{
                                description = "laudantium";
                                pricingPlan = UpdateRouteCalculatorRequestBodyPricingPlanEnum.MOBILE_ASSET_TRACKING;
                            }};) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "cum";
                xAmzCredential = "laboriosam";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "error";
                xAmzSignedHeaders = "hic";
            }};            

            UpdateRouteCalculatorResponse res = sdk.sdk.updateRouteCalculator(req);

            if (res.updateRouteCalculatorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTracker

Updates the specified properties of a given tracker resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTrackerRequest;
import org.openapis.openapi.models.operations.UpdateTrackerRequestBody;
import org.openapis.openapi.models.operations.UpdateTrackerRequestBodyPositionFilteringEnum;
import org.openapis.openapi.models.operations.UpdateTrackerRequestBodyPricingPlanEnum;
import org.openapis.openapi.models.operations.UpdateTrackerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTrackerRequest req = new UpdateTrackerRequest(                new UpdateTrackerRequestBody() {{
                                description = "debitis";
                                positionFiltering = UpdateTrackerRequestBodyPositionFilteringEnum.TIME_BASED;
                                pricingPlan = UpdateTrackerRequestBodyPricingPlanEnum.MOBILE_ASSET_MANAGEMENT;
                                pricingPlanDataSource = "nostrum";
                            }};, "officia") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "accusamus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "atque";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "ut";
            }};            

            UpdateTrackerResponse res = sdk.sdk.updateTracker(req);

            if (res.updateTrackerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
