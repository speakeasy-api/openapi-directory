# SDK

## Overview

"Suite of geospatial services including Maps, Places, Routes, Tracking, and Geofencing"

Amazon Web Services documentation
<https://docs.aws.amazon.com/geo/>
### Available Operations

* [AssociateTrackerConsumer](#associatetrackerconsumer) - <p>Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection. </p> <p>You can associate up to five geofence collections to each tracker resource.</p> <note> <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p> </note>
* [BatchDeleteDevicePositionHistory](#batchdeletedevicepositionhistory) - Deletes the position history of one or more devices from a tracker resource.
* [BatchDeleteGeofence](#batchdeletegeofence) - <p>Deletes a batch of geofences from a geofence collection.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* [BatchEvaluateGeofences](#batchevaluategeofences) - <p>Evaluates device positions against the geofence geometries from a given geofence collection.</p> <p>This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge:</p> <ul> <li> <p> <code>ENTER</code> if Amazon Location determines that the tracked device has entered a geofenced area.</p> </li> <li> <p> <code>EXIT</code> if Amazon Location determines that the tracked device has exited a geofenced area.</p> </li> </ul> <note> <p>The last geofence that a device was observed within is tracked for 30 days after the most recent device position update.</p> </note> <note> <p>Geofence evaluation uses the given device position. It does not account for the optional <code>Accuracy</code> of a <code>DevicePositionUpdate</code>.</p> </note> <note> <p>The <code>DeviceID</code> is used as a string to represent the device. You do not need to have a <code>Tracker</code> associated with the <code>DeviceID</code>.</p> </note>
* [BatchGetDevicePosition](#batchgetdeviceposition) - Lists the latest device positions for requested devices.
* [BatchPutGeofence](#batchputgeofence) - A batch request for storing geofence geometries into a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.
* [BatchUpdateDevicePosition](#batchupdatedeviceposition) - <p>Uploads position update data for one or more devices to a tracker resource. Amazon Location uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30 days.</p> <note> <p>Position updates are handled based on the <code>PositionFiltering</code> property of the tracker. When <code>PositionFiltering</code> is set to <code>TimeBased</code>, updates are evaluated against linked geofence collections, and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than every 30 seconds, only one update per 30 seconds is stored for each unique device ID.</p> <p>When <code>PositionFiltering</code> is set to <code>DistanceBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than 30 m (98.4 ft).</p> <p>When <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than the measured accuracy. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is neither stored or evaluated if the device has moved less than 15 m. If <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, Amazon Location uses the default value <code>{ "Horizontal": 0}</code> when accuracy is not provided on a <code>DevicePositionUpdate</code>.</p> </note>
* [CalculateRoute](#calculateroute) - <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters: <code>DeparturePosition</code> and <code>DestinationPosition</code>. Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html">Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates a route based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> <note> <p>If you specify <code>walking</code> for the travel mode and your data provider is Esri, the start and destination must be within 40km.</p> </note> </li> </ul>
* [CalculateRouteMatrix](#calculateroutematrix) - <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html"> Calculates a route matrix</a> given the following required parameters: <code>DeparturePositions</code> and <code>DestinationPositions</code>. <code>CalculateRouteMatrix</code> calculates routes and returns the travel time and travel distance from each departure position to each destination position in the request. For example, given departure positions A and B, and destination positions X and Y, <code>CalculateRouteMatrix</code> will return time and distance for routes from A to X, A to Y, B to X, and B to Y (in that order). The number of results returned (and routes calculated) will be the number of <code>DeparturePositions</code> times the number of <code>DestinationPositions</code>.</p> <note> <p>Your account is charged for each route calculated, not the number of requests.</p> </note> <p>Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating routes.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html"> Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates routes based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> </li> </ul>
* [CreateGeofenceCollection](#creategeofencecollection) - Creates a geofence collection, which manages and stores geofences.
* [CreateKey](#createkey) - <p>Creates an API key resource in your Amazon Web Services account, which lets you grant <code>geo:GetMap*</code> actions for Amazon Location Map resources to the API key bearer.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
* [CreateMap](#createmap) - <p>Creates a map resource in your Amazon Web Services account, which provides map tiles of different styles sourced from global location data providers.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
* [CreatePlaceIndex](#createplaceindex) - <p>Creates a place index resource in your Amazon Web Services account. Use a place index resource to geocode addresses and other text queries by using the <code>SearchPlaceIndexForText</code> operation, and reverse geocode coordinates by using the <code>SearchPlaceIndexForPosition</code> operation, and enable autosuggestions by using the <code>SearchPlaceIndexForSuggestions</code> operation.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
* [CreateRouteCalculator](#createroutecalculator) - <p>Creates a route calculator resource in your Amazon Web Services account.</p> <p>You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
* [CreateTracker](#createtracker) - Creates a tracker resource in your Amazon Web Services account, which lets you retrieve current and historical location of devices.
* [DeleteGeofenceCollection](#deletegeofencecollection) - <p>Deletes a geofence collection from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored.</p> </note>
* [DeleteKey](#deletekey) - Deletes the specified API key. The API key must have been deactivated more than 90 days previously.
* [DeleteMap](#deletemap) - <p>Deletes a map resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the map is being used in an application, the map may not render.</p> </note>
* [DeletePlaceIndex](#deleteplaceindex) - <p>Deletes a place index resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* [DeleteRouteCalculator](#deleteroutecalculator) - <p>Deletes a route calculator resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
* [DeleteTracker](#deletetracker) - <p>Deletes a tracker resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications.</p> </note>
* [DescribeGeofenceCollection](#describegeofencecollection) - Retrieves the geofence collection details.
* [DescribeKey](#describekey) - <p>Retrieves the API key resource details.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
* [DescribeMap](#describemap) - Retrieves the map resource details.
* [DescribePlaceIndex](#describeplaceindex) - Retrieves the place index resource details.
* [DescribeRouteCalculator](#describeroutecalculator) - Retrieves the route calculator resource details.
* [DescribeTracker](#describetracker) - Retrieves the tracker resource details.
* [DisassociateTrackerConsumer](#disassociatetrackerconsumer) - <p>Removes the association between a tracker resource and a geofence collection.</p> <note> <p>Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.</p> </note>
* [GetDevicePosition](#getdeviceposition) - <p>Retrieves a device's most recent position according to its sample time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
* [GetDevicePositionHistory](#getdevicepositionhistory) - <p>Retrieves the device position history from a tracker resource within a specified range of time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
* [GetGeofence](#getgeofence) - Retrieves the geofence details from a geofence collection.
* [GetMapGlyphs](#getmapglyphs) - Retrieves glyphs used to display labels on a map.
* [GetMapSprites](#getmapsprites) - Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.
* [GetMapStyleDescriptor](#getmapstyledescriptor) - <p>Retrieves the map style descriptor from a map resource. </p> <p>The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.</p>
* [GetMapTile](#getmaptile) - <p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. </p> <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>
* [GetPlace](#getplace) - <p>Finds a place by its unique ID. A <code>PlaceId</code> is returned by other search operations.</p> <note> <p>A PlaceId is valid only if all of the following are the same in the original search request and the call to <code>GetPlace</code>.</p> <ul> <li> <p>Customer Amazon Web Services account</p> </li> <li> <p>Amazon Web Services Region</p> </li> <li> <p>Data provider specified in the place index resource</p> </li> </ul> </note>
* [ListDevicePositions](#listdevicepositions) - A batch request to retrieve all device positions.
* [ListGeofenceCollections](#listgeofencecollections) - Lists geofence collections in your Amazon Web Services account.
* [ListGeofences](#listgeofences) - Lists geofences stored in a given geofence collection.
* [ListKeys](#listkeys) - <p>Lists API key resources in your Amazon Web Services account.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
* [ListMaps](#listmaps) - Lists map resources in your Amazon Web Services account.
* [ListPlaceIndexes](#listplaceindexes) - Lists place index resources in your Amazon Web Services account.
* [ListRouteCalculators](#listroutecalculators) - Lists route calculator resources in your Amazon Web Services account.
* [ListTagsForResource](#listtagsforresource) - Returns a list of tags that are applied to the specified Amazon Location resource.
* [ListTrackerConsumers](#listtrackerconsumers) - Lists geofence collections currently associated to the given tracker resource.
* [ListTrackers](#listtrackers) - Lists tracker resources in your Amazon Web Services account.
* [PutGeofence](#putgeofence) - Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request. 
* [SearchPlaceIndexForPosition](#searchplaceindexforposition) - Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.
* [SearchPlaceIndexForSuggestions](#searchplaceindexforsuggestions) - <p>Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching.</p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for suggested place names near a specified position by using <code>BiasPosition</code>, or filter results within a bounding box by using <code>FilterBBox</code>. These parameters are mutually exclusive; using both <code>BiasPosition</code> and <code>FilterBBox</code> in the same command returns an error.</p> </note>
* [SearchPlaceIndexForText](#searchplaceindexfortext) - <p>Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest. </p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for places near a given position using <code>BiasPosition</code>, or filter results within a bounding box using <code>FilterBBox</code>. Providing both parameters simultaneously returns an error.</p> </note> <p>Search results are returned in order of highest to lowest relevance.</p>
* [TagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>You can use the <code>TagResource</code> operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag. </p> <p>You can associate up to 50 tags with a resource.</p>
* [UntagResource](#untagresource) - Removes one or more tags from the specified Amazon Location resource.
* [UpdateGeofenceCollection](#updategeofencecollection) - Updates the specified properties of a given geofence collection.
* [UpdateKey](#updatekey) - <p>Updates the specified properties of a given API key resource.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
* [UpdateMap](#updatemap) - Updates the specified properties of a given map resource.
* [UpdatePlaceIndex](#updateplaceindex) - Updates the specified properties of a given place index resource.
* [UpdateRouteCalculator](#updateroutecalculator) - Updates the specified properties for a given route calculator resource.
* [UpdateTracker](#updatetracker) - Updates the specified properties of a given tracker resource.

## AssociateTrackerConsumer

<p>Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection. </p> <p>You can associate up to five geofence collections to each tracker resource.</p> <note> <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateTrackerConsumer(ctx, operations.AssociateTrackerConsumerRequest{
        RequestBody: operations.AssociateTrackerConsumerRequestBody{
            ConsumerArn: "error",
        },
        TrackerName: "deserunt",
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateTrackerConsumerResponse != nil {
        // handle response
    }
}
```

## BatchDeleteDevicePositionHistory

Deletes the position history of one or more devices from a tracker resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDeleteDevicePositionHistory(ctx, operations.BatchDeleteDevicePositionHistoryRequest{
        RequestBody: operations.BatchDeleteDevicePositionHistoryRequestBody{
            DeviceIds: []string{
                "molestiae",
                "minus",
            },
        },
        TrackerName: "placeat",
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteDevicePositionHistoryResponse != nil {
        // handle response
    }
}
```

## BatchDeleteGeofence

<p>Deletes a batch of geofences from a geofence collection.</p> <note> <p>This operation deletes the resource permanently.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDeleteGeofence(ctx, operations.BatchDeleteGeofenceRequest{
        CollectionName: "quis",
        RequestBody: operations.BatchDeleteGeofenceRequestBody{
            GeofenceIds: []string{
                "deserunt",
            },
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteGeofenceResponse != nil {
        // handle response
    }
}
```

## BatchEvaluateGeofences

<p>Evaluates device positions against the geofence geometries from a given geofence collection.</p> <p>This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge:</p> <ul> <li> <p> <code>ENTER</code> if Amazon Location determines that the tracked device has entered a geofenced area.</p> </li> <li> <p> <code>EXIT</code> if Amazon Location determines that the tracked device has exited a geofenced area.</p> </li> </ul> <note> <p>The last geofence that a device was observed within is tracked for 30 days after the most recent device position update.</p> </note> <note> <p>Geofence evaluation uses the given device position. It does not account for the optional <code>Accuracy</code> of a <code>DevicePositionUpdate</code>.</p> </note> <note> <p>The <code>DeviceID</code> is used as a string to represent the device. You do not need to have a <code>Tracker</code> associated with the <code>DeviceID</code>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchEvaluateGeofences(ctx, operations.BatchEvaluateGeofencesRequest{
        CollectionName: "at",
        RequestBody: operations.BatchEvaluateGeofencesRequestBody{
            DevicePositionUpdates: []shared.DevicePositionUpdate{
                shared.DevicePositionUpdate{
                    Accuracy: &shared.PositionalAccuracy{
                        Horizontal: 4736.08,
                    },
                    DeviceID: "quod",
                    Position: []float64{
                        4614.79,
                        5204.78,
                        7805.29,
                        6788.8,
                    },
                    PositionProperties: map[string]string{
                        "nam": "officia",
                    },
                    SampleTime: types.MustTimeFromString("2022-09-18T08:27:00.721Z"),
                },
                shared.DevicePositionUpdate{
                    Accuracy: &shared.PositionalAccuracy{
                        Horizontal: 5373.73,
                    },
                    DeviceID: "hic",
                    Position: []float64{
                        5218.48,
                        1059.07,
                        4146.62,
                        4736,
                    },
                    PositionProperties: map[string]string{
                        "qui": "impedit",
                        "cum": "esse",
                    },
                    SampleTime: types.MustTimeFromString("2022-06-07T12:31:06.574Z"),
                },
                shared.DevicePositionUpdate{
                    Accuracy: &shared.PositionalAccuracy{
                        Horizontal: 1352.18,
                    },
                    DeviceID: "perferendis",
                    Position: []float64{
                        6176.36,
                        1496.75,
                    },
                    PositionProperties: map[string]string{
                        "dolor": "natus",
                        "laboriosam": "hic",
                        "saepe": "fuga",
                    },
                    SampleTime: types.MustTimeFromString("2022-08-22T18:42:38.160Z"),
                },
                shared.DevicePositionUpdate{
                    Accuracy: &shared.PositionalAccuracy{
                        Horizontal: 6130.64,
                    },
                    DeviceID: "iure",
                    Position: []float64{
                        6976.31,
                        992.8,
                        602.25,
                        9698.1,
                    },
                    PositionProperties: map[string]string{
                        "mollitia": "laborum",
                        "dolores": "dolorem",
                        "corporis": "explicabo",
                    },
                    SampleTime: types.MustTimeFromString("2022-01-20T14:32:34.011Z"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchEvaluateGeofencesResponse != nil {
        // handle response
    }
}
```

## BatchGetDevicePosition

Lists the latest device positions for requested devices.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetDevicePosition(ctx, operations.BatchGetDevicePositionRequest{
        RequestBody: operations.BatchGetDevicePositionRequestBody{
            DeviceIds: []string{
                "sapiente",
                "architecto",
                "mollitia",
                "dolorem",
            },
        },
        TrackerName: "culpa",
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetDevicePositionResponse != nil {
        // handle response
    }
}
```

## BatchPutGeofence

A batch request for storing geofence geometries into a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchPutGeofence(ctx, operations.BatchPutGeofenceRequest{
        CollectionName: "molestiae",
        RequestBody: operations.BatchPutGeofenceRequestBody{
            Entries: []shared.BatchPutGeofenceRequestEntry{
                shared.BatchPutGeofenceRequestEntry{
                    GeofenceID: "error",
                    Geometry: shared.GeofenceGeometry{
                        Circle: &shared.Circle{
                            Center: []float64{
                                3380.07,
                            },
                            Radius: 1103.75,
                        },
                        Polygon: [][][]float64{
                            [][]float64{
                                []float64{
                                    1381.83,
                                    7783.46,
                                },
                                []float64{
                                    9495.72,
                                },
                                []float64{
                                    6625.27,
                                    8209.94,
                                },
                            },
                            [][]float64{
                                []float64{
                                    6228.46,
                                },
                            },
                            [][]float64{
                                []float64{
                                    960.98,
                                    9719.45,
                                    9764.6,
                                },
                                []float64{
                                    4686.51,
                                    5096.24,
                                    9767.62,
                                    557.14,
                                },
                                []float64{
                                    4511.59,
                                    7392.64,
                                    199.87,
                                },
                                []float64{
                                    4417.11,
                                },
                            },
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutGeofenceResponse != nil {
        // handle response
    }
}
```

## BatchUpdateDevicePosition

<p>Uploads position update data for one or more devices to a tracker resource. Amazon Location uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30 days.</p> <note> <p>Position updates are handled based on the <code>PositionFiltering</code> property of the tracker. When <code>PositionFiltering</code> is set to <code>TimeBased</code>, updates are evaluated against linked geofence collections, and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than every 30 seconds, only one update per 30 seconds is stored for each unique device ID.</p> <p>When <code>PositionFiltering</code> is set to <code>DistanceBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than 30 m (98.4 ft).</p> <p>When <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than the measured accuracy. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is neither stored or evaluated if the device has moved less than 15 m. If <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, Amazon Location uses the default value <code>{ "Horizontal": 0}</code> when accuracy is not provided on a <code>DevicePositionUpdate</code>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchUpdateDevicePosition(ctx, operations.BatchUpdateDevicePositionRequest{
        RequestBody: operations.BatchUpdateDevicePositionRequestBody{
            Updates: []shared.DevicePositionUpdate{
                shared.DevicePositionUpdate{
                    Accuracy: &shared.PositionalAccuracy{
                        Horizontal: 3179.83,
                    },
                    DeviceID: "accusamus",
                    Position: []float64{
                        9182.36,
                        641.47,
                    },
                    PositionProperties: map[string]string{
                        "quidem": "molestias",
                    },
                    SampleTime: types.MustTimeFromString("2021-04-09T11:24:10.949Z"),
                },
                shared.DevicePositionUpdate{
                    Accuracy: &shared.PositionalAccuracy{
                        Horizontal: 2653.89,
                    },
                    DeviceID: "praesentium",
                    Position: []float64{
                        9167.23,
                        939.4,
                        9211.58,
                    },
                    PositionProperties: map[string]string{
                        "veritatis": "itaque",
                        "incidunt": "enim",
                        "consequatur": "est",
                    },
                    SampleTime: types.MustTimeFromString("2022-08-09T16:21:07.003Z"),
                },
                shared.DevicePositionUpdate{
                    Accuracy: &shared.PositionalAccuracy{
                        Horizontal: 6471.74,
                    },
                    DeviceID: "distinctio",
                    Position: []float64{
                        2894.06,
                        2647.3,
                        1831.91,
                        3978.21,
                    },
                    PositionProperties: map[string]string{
                        "quos": "perferendis",
                        "magni": "assumenda",
                        "ipsam": "alias",
                    },
                    SampleTime: types.MustTimeFromString("2022-04-28T14:19:37.294Z"),
                },
            },
        },
        TrackerName: "excepturi",
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateDevicePositionResponse != nil {
        // handle response
    }
}
```

## CalculateRoute

<p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters: <code>DeparturePosition</code> and <code>DestinationPosition</code>. Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html">Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates a route based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> <note> <p>If you specify <code>walking</code> for the travel mode and your data provider is Esri, the start and destination must be within 40km.</p> </note> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CalculateRoute(ctx, operations.CalculateRouteRequest{
        CalculatorName: "eligendi",
        RequestBody: operations.CalculateRouteRequestBody{
            CarModeOptions: &operations.CalculateRouteRequestBodyCarModeOptions{
                AvoidFerries: sdk.Bool(false),
                AvoidTolls: sdk.Bool(false),
            },
            DepartNow: sdk.Bool(false),
            DeparturePosition: []float64{
                3960.98,
                5920.42,
                8960.39,
            },
            DepartureTime: types.MustTimeFromString("2021-09-21T14:06:09.271Z"),
            DestinationPosition: []float64{
                8915.55,
            },
            DistanceUnit: operations.CalculateRouteRequestBodyDistanceUnitEnumMiles.ToPointer(),
            IncludeLegGeometry: sdk.Bool(false),
            TravelMode: operations.CalculateRouteRequestBodyTravelModeEnumBicycle.ToPointer(),
            TruckModeOptions: &operations.CalculateRouteRequestBodyTruckModeOptions{
                AvoidFerries: sdk.Bool(false),
                AvoidTolls: sdk.Bool(false),
                Dimensions: &shared.TruckDimensions{
                    Height: sdk.Float64(4471.25),
                    Length: sdk.Float64(4491.98),
                    Unit: shared.DimensionUnitEnumFeet.ToPointer(),
                    Width: sdk.Float64(9785.71),
                },
                Weight: &shared.TruckWeight{
                    Total: sdk.Float64(6994.79),
                    Unit: shared.VehicleWeightUnitEnumKilograms.ToPointer(),
                },
            },
            WaypointPositions: [][]float64{
                []float64{
                    8137.98,
                    4118.2,
                    3965.06,
                    6754.39,
                },
                []float64{
                    2497.96,
                    5812.73,
                    3132.18,
                    8817.36,
                },
            },
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalculateRouteResponse != nil {
        // handle response
    }
}
```

## CalculateRouteMatrix

<p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html"> Calculates a route matrix</a> given the following required parameters: <code>DeparturePositions</code> and <code>DestinationPositions</code>. <code>CalculateRouteMatrix</code> calculates routes and returns the travel time and travel distance from each departure position to each destination position in the request. For example, given departure positions A and B, and destination positions X and Y, <code>CalculateRouteMatrix</code> will return time and distance for routes from A to X, A to Y, B to X, and B to Y (in that order). The number of results returned (and routes calculated) will be the number of <code>DeparturePositions</code> times the number of <code>DestinationPositions</code>.</p> <note> <p>Your account is charged for each route calculated, not the number of requests.</p> </note> <p>Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating routes.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html"> Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates routes based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CalculateRouteMatrix(ctx, operations.CalculateRouteMatrixRequest{
        CalculatorName: "sapiente",
        RequestBody: operations.CalculateRouteMatrixRequestBody{
            CarModeOptions: &operations.CalculateRouteMatrixRequestBodyCarModeOptions{
                AvoidFerries: sdk.Bool(false),
                AvoidTolls: sdk.Bool(false),
            },
            DepartNow: sdk.Bool(false),
            DeparturePositions: [][]float64{
                []float64{
                    3948.69,
                    4238.55,
                    6188.09,
                },
            },
            DepartureTime: types.MustTimeFromString("2022-01-19T08:19:15.156Z"),
            DestinationPositions: [][]float64{
                []float64{
                    3015.75,
                    7160.75,
                },
            },
            DistanceUnit: operations.CalculateRouteMatrixRequestBodyDistanceUnitEnumMiles.ToPointer(),
            TravelMode: operations.CalculateRouteMatrixRequestBodyTravelModeEnumTruck.ToPointer(),
            TruckModeOptions: &operations.CalculateRouteMatrixRequestBodyTruckModeOptions{
                AvoidFerries: sdk.Bool(false),
                AvoidTolls: sdk.Bool(false),
                Dimensions: &shared.TruckDimensions{
                    Height: sdk.Float64(2900.77),
                    Length: sdk.Float64(3834.62),
                    Unit: shared.DimensionUnitEnumFeet.ToPointer(),
                    Width: sdk.Float64(7491.7),
                },
                Weight: &shared.TruckWeight{
                    Total: sdk.Float64(4287.69),
                    Unit: shared.VehicleWeightUnitEnumPounds.ToPointer(),
                },
            },
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalculateRouteMatrixResponse != nil {
        // handle response
    }
}
```

## CreateGeofenceCollection

Creates a geofence collection, which manages and stores geofences.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateGeofenceCollection(ctx, operations.CreateGeofenceCollectionRequest{
        RequestBody: operations.CreateGeofenceCollectionRequestBody{
            CollectionName: "quos",
            Description: sdk.String("sint"),
            KmsKeyID: sdk.String("accusantium"),
            PricingPlan: operations.CreateGeofenceCollectionRequestBodyPricingPlanEnumMobileAssetTracking.ToPointer(),
            PricingPlanDataSource: sdk.String("reiciendis"),
            Tags: map[string]string{
                "ad": "eum",
                "dolor": "necessitatibus",
                "odit": "nemo",
            },
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGeofenceCollectionResponse != nil {
        // handle response
    }
}
```

## CreateKey

<p>Creates an API key resource in your Amazon Web Services account, which lets you grant <code>geo:GetMap*</code> actions for Amazon Location Map resources to the API key bearer.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateKey(ctx, operations.CreateKeyRequest{
        RequestBody: operations.CreateKeyRequestBody{
            Description: sdk.String("facilis"),
            ExpireTime: types.MustTimeFromString("2022-11-25T10:00:44.006Z"),
            KeyName: "architecto",
            NoExpiry: sdk.Bool(false),
            Restrictions: operations.CreateKeyRequestBodyRestrictions{
                AllowActions: []string{
                    "ullam",
                    "expedita",
                    "nihil",
                    "repellat",
                },
                AllowReferers: []string{
                    "sed",
                    "saepe",
                    "pariatur",
                    "accusantium",
                },
                AllowResources: []string{
                    "praesentium",
                },
            },
            Tags: map[string]string{
                "magni": "sunt",
                "quo": "illum",
                "pariatur": "maxime",
            },
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateKeyResponse != nil {
        // handle response
    }
}
```

## CreateMap

<p>Creates a map resource in your Amazon Web Services account, which provides map tiles of different styles sourced from global location data providers.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateMap(ctx, operations.CreateMapRequest{
        RequestBody: operations.CreateMapRequestBody{
            Configuration: operations.CreateMapRequestBodyConfiguration{
                Style: sdk.String("quidem"),
            },
            Description: sdk.String("ipsam"),
            MapName: "voluptate",
            PricingPlan: operations.CreateMapRequestBodyPricingPlanEnumMobileAssetTracking.ToPointer(),
            Tags: map[string]string{
                "eaque": "pariatur",
                "nemo": "voluptatibus",
                "perferendis": "fugiat",
            },
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMapResponse != nil {
        // handle response
    }
}
```

## CreatePlaceIndex

<p>Creates a place index resource in your Amazon Web Services account. Use a place index resource to geocode addresses and other text queries by using the <code>SearchPlaceIndexForText</code> operation, and reverse geocode coordinates by using the <code>SearchPlaceIndexForPosition</code> operation, and enable autosuggestions by using the <code>SearchPlaceIndexForSuggestions</code> operation.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePlaceIndex(ctx, operations.CreatePlaceIndexRequest{
        RequestBody: operations.CreatePlaceIndexRequestBody{
            DataSource: "dolores",
            DataSourceConfiguration: &operations.CreatePlaceIndexRequestBodyDataSourceConfiguration{
                IntendedUse: shared.IntendedUseEnumSingleUse.ToPointer(),
            },
            Description: sdk.String("totam"),
            IndexName: "dignissimos",
            PricingPlan: operations.CreatePlaceIndexRequestBodyPricingPlanEnumRequestBasedUsage.ToPointer(),
            Tags: map[string]string{
                "nesciunt": "eos",
                "perferendis": "dolores",
            },
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePlaceIndexResponse != nil {
        // handle response
    }
}
```

## CreateRouteCalculator

<p>Creates a route calculator resource in your Amazon Web Services account.</p> <p>You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateRouteCalculator(ctx, operations.CreateRouteCalculatorRequest{
        RequestBody: operations.CreateRouteCalculatorRequestBody{
            CalculatorName: "omnis",
            DataSource: "facilis",
            Description: sdk.String("perspiciatis"),
            PricingPlan: operations.CreateRouteCalculatorRequestBodyPricingPlanEnumRequestBasedUsage.ToPointer(),
            Tags: map[string]string{
                "consequuntur": "blanditiis",
                "error": "eaque",
                "occaecati": "rerum",
                "adipisci": "asperiores",
            },
        },
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRouteCalculatorResponse != nil {
        // handle response
    }
}
```

## CreateTracker

Creates a tracker resource in your Amazon Web Services account, which lets you retrieve current and historical location of devices.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateTracker(ctx, operations.CreateTrackerRequest{
        RequestBody: operations.CreateTrackerRequestBody{
            Description: sdk.String("nobis"),
            KmsKeyID: sdk.String("libero"),
            PositionFiltering: operations.CreateTrackerRequestBodyPositionFilteringEnumAccuracyBased.ToPointer(),
            PricingPlan: operations.CreateTrackerRequestBodyPricingPlanEnumRequestBasedUsage.ToPointer(),
            PricingPlanDataSource: sdk.String("quos"),
            Tags: map[string]string{
                "dolorem": "dolorem",
                "dolor": "qui",
            },
            TrackerName: "ipsum",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTrackerResponse != nil {
        // handle response
    }
}
```

## DeleteGeofenceCollection

<p>Deletes a geofence collection from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteGeofenceCollection(ctx, operations.DeleteGeofenceCollectionRequest{
        CollectionName: "dolorum",
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGeofenceCollectionResponse != nil {
        // handle response
    }
}
```

## DeleteKey

Deletes the specified API key. The API key must have been deactivated more than 90 days previously.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteKey(ctx, operations.DeleteKeyRequest{
        KeyName: "accusamus",
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteKeyResponse != nil {
        // handle response
    }
}
```

## DeleteMap

<p>Deletes a map resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the map is being used in an application, the map may not render.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteMap(ctx, operations.DeleteMapRequest{
        MapName: "fugiat",
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMapResponse != nil {
        // handle response
    }
}
```

## DeletePlaceIndex

<p>Deletes a place index resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePlaceIndex(ctx, operations.DeletePlaceIndexRequest{
        IndexName: "omnis",
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePlaceIndexResponse != nil {
        // handle response
    }
}
```

## DeleteRouteCalculator

<p>Deletes a route calculator resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRouteCalculator(ctx, operations.DeleteRouteCalculatorRequest{
        CalculatorName: "saepe",
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRouteCalculatorResponse != nil {
        // handle response
    }
}
```

## DeleteTracker

<p>Deletes a tracker resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteTracker(ctx, operations.DeleteTrackerRequest{
        TrackerName: "saepe",
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("similique"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTrackerResponse != nil {
        // handle response
    }
}
```

## DescribeGeofenceCollection

Retrieves the geofence collection details.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeGeofenceCollection(ctx, operations.DescribeGeofenceCollectionRequest{
        CollectionName: "alias",
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGeofenceCollectionResponse != nil {
        // handle response
    }
}
```

## DescribeKey

<p>Retrieves the API key resource details.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeKey(ctx, operations.DescribeKeyRequest{
        KeyName: "dolorum",
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeKeyResponse != nil {
        // handle response
    }
}
```

## DescribeMap

Retrieves the map resource details.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeMap(ctx, operations.DescribeMapRequest{
        MapName: "amet",
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMapResponse != nil {
        // handle response
    }
}
```

## DescribePlaceIndex

Retrieves the place index resource details.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribePlaceIndex(ctx, operations.DescribePlaceIndexRequest{
        IndexName: "nihil",
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePlaceIndexResponse != nil {
        // handle response
    }
}
```

## DescribeRouteCalculator

Retrieves the route calculator resource details.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRouteCalculator(ctx, operations.DescribeRouteCalculatorRequest{
        CalculatorName: "deserunt",
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRouteCalculatorResponse != nil {
        // handle response
    }
}
```

## DescribeTracker

Retrieves the tracker resource details.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeTracker(ctx, operations.DescribeTrackerRequest{
        TrackerName: "soluta",
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTrackerResponse != nil {
        // handle response
    }
}
```

## DisassociateTrackerConsumer

<p>Removes the association between a tracker resource and a geofence collection.</p> <note> <p>Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateTrackerConsumer(ctx, operations.DisassociateTrackerConsumerRequest{
        ConsumerArn: "facilis",
        TrackerName: "aliquid",
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateTrackerConsumerResponse != nil {
        // handle response
    }
}
```

## GetDevicePosition

<p>Retrieves a device's most recent position according to its sample time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDevicePosition(ctx, operations.GetDevicePositionRequest{
        DeviceID: "odio",
        TrackerName: "sunt",
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDevicePositionResponse != nil {
        // handle response
    }
}
```

## GetDevicePositionHistory

<p>Retrieves the device position history from a tracker resource within a specified range of time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDevicePositionHistory(ctx, operations.GetDevicePositionHistoryRequest{
        DeviceID: "et",
        MaxResults: sdk.String("saepe"),
        NextToken: sdk.String("ipsum"),
        RequestBody: operations.GetDevicePositionHistoryRequestBody{
            EndTimeExclusive: types.MustTimeFromString("2022-04-02T12:31:52.465Z"),
            MaxResults: sdk.Int64(552193),
            NextToken: sdk.String("tempore"),
            StartTimeInclusive: types.MustTimeFromString("2022-11-28T16:49:52.722Z"),
        },
        TrackerName: "delectus",
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDevicePositionHistoryResponse != nil {
        // handle response
    }
}
```

## GetGeofence

Retrieves the geofence details from a geofence collection.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetGeofence(ctx, operations.GetGeofenceRequest{
        CollectionName: "aut",
        GeofenceID: "quas",
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("ut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGeofenceResponse != nil {
        // handle response
    }
}
```

## GetMapGlyphs

Retrieves glyphs used to display labels on a map.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetMapGlyphs(ctx, operations.GetMapGlyphsRequest{
        FontStack: "facilis",
        FontUnicodeRange: "cupiditate",
        MapName: "qui",
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("vero"),
        Key: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMapGlyphsResponse != nil {
        // handle response
    }
}
```

## GetMapSprites

Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetMapSprites(ctx, operations.GetMapSpritesRequest{
        FileName: "quis",
        MapName: "ipsum",
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("hic"),
        Key: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMapSpritesResponse != nil {
        // handle response
    }
}
```

## GetMapStyleDescriptor

<p>Retrieves the map style descriptor from a map resource. </p> <p>The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetMapStyleDescriptor(ctx, operations.GetMapStyleDescriptorRequest{
        MapName: "quod",
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        Key: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMapStyleDescriptorResponse != nil {
        // handle response
    }
}
```

## GetMapTile

<p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. </p> <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetMapTile(ctx, operations.GetMapTileRequest{
        MapName: "sequi",
        X: "natus",
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("porro"),
        Y: "maiores",
        Z: "doloribus",
        Key: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMapTileResponse != nil {
        // handle response
    }
}
```

## GetPlace

<p>Finds a place by its unique ID. A <code>PlaceId</code> is returned by other search operations.</p> <note> <p>A PlaceId is valid only if all of the following are the same in the original search request and the call to <code>GetPlace</code>.</p> <ul> <li> <p>Customer Amazon Web Services account</p> </li> <li> <p>Amazon Web Services Region</p> </li> <li> <p>Data provider specified in the place index resource</p> </li> </ul> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetPlace(ctx, operations.GetPlaceRequest{
        IndexName: "eligendi",
        PlaceID: "ducimus",
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("vel"),
        Language: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPlaceResponse != nil {
        // handle response
    }
}
```

## ListDevicePositions

A batch request to retrieve all device positions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDevicePositions(ctx, operations.ListDevicePositionsRequest{
        MaxResults: sdk.String("magnam"),
        NextToken: sdk.String("ratione"),
        RequestBody: operations.ListDevicePositionsRequestBody{
            MaxResults: sdk.Int64(401132),
            NextToken: sdk.String("laudantium"),
        },
        TrackerName: "dicta",
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDevicePositionsResponse != nil {
        // handle response
    }
}
```

## ListGeofenceCollections

Lists geofence collections in your Amazon Web Services account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListGeofenceCollections(ctx, operations.ListGeofenceCollectionsRequest{
        MaxResults: sdk.String("nostrum"),
        NextToken: sdk.String("sapiente"),
        RequestBody: operations.ListGeofenceCollectionsRequestBody{
            MaxResults: sdk.Int64(788873),
            NextToken: sdk.String("saepe"),
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGeofenceCollectionsResponse != nil {
        // handle response
    }
}
```

## ListGeofences

Lists geofences stored in a given geofence collection.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListGeofences(ctx, operations.ListGeofencesRequest{
        CollectionName: "ea",
        MaxResults: sdk.String("quo"),
        NextToken: sdk.String("consectetur"),
        RequestBody: operations.ListGeofencesRequestBody{
            MaxResults: sdk.Int64(926213),
            NextToken: sdk.String("aspernatur"),
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGeofencesResponse != nil {
        // handle response
    }
}
```

## ListKeys

<p>Lists API key resources in your Amazon Web Services account.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListKeys(ctx, operations.ListKeysRequest{
        MaxResults: sdk.String("impedit"),
        NextToken: sdk.String("aliquam"),
        RequestBody: operations.ListKeysRequestBody{
            Filter: &operations.ListKeysRequestBodyFilter{
                KeyStatus: shared.StatusEnumActive.ToPointer(),
            },
            MaxResults: sdk.Int64(882860),
            NextToken: sdk.String("inventore"),
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListKeysResponse != nil {
        // handle response
    }
}
```

## ListMaps

Lists map resources in your Amazon Web Services account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListMaps(ctx, operations.ListMapsRequest{
        MaxResults: sdk.String("autem"),
        NextToken: sdk.String("nobis"),
        RequestBody: operations.ListMapsRequestBody{
            MaxResults: sdk.Int64(557369),
            NextToken: sdk.String("assumenda"),
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMapsResponse != nil {
        // handle response
    }
}
```

## ListPlaceIndexes

Lists place index resources in your Amazon Web Services account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPlaceIndexes(ctx, operations.ListPlaceIndexesRequest{
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("ipsa"),
        RequestBody: operations.ListPlaceIndexesRequestBody{
            MaxResults: sdk.Int64(476477),
            NextToken: sdk.String("magnam"),
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPlaceIndexesResponse != nil {
        // handle response
    }
}
```

## ListRouteCalculators

Lists route calculator resources in your Amazon Web Services account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRouteCalculators(ctx, operations.ListRouteCalculatorsRequest{
        MaxResults: sdk.String("quidem"),
        NextToken: sdk.String("fugiat"),
        RequestBody: operations.ListRouteCalculatorsRequestBody{
            MaxResults: sdk.Int64(283519),
            NextToken: sdk.String("eum"),
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRouteCalculatorsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Returns a list of tags that are applied to the specified Amazon Location resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ResourceArn: "id",
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTrackerConsumers

Lists geofence collections currently associated to the given tracker resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTrackerConsumers(ctx, operations.ListTrackerConsumersRequest{
        MaxResults: sdk.String("eos"),
        NextToken: sdk.String("voluptas"),
        RequestBody: operations.ListTrackerConsumersRequestBody{
            MaxResults: sdk.Int64(69859),
            NextToken: sdk.String("cupiditate"),
        },
        TrackerName: "consequatur",
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTrackerConsumersResponse != nil {
        // handle response
    }
}
```

## ListTrackers

Lists tracker resources in your Amazon Web Services account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTrackers(ctx, operations.ListTrackersRequest{
        MaxResults: sdk.String("recusandae"),
        NextToken: sdk.String("aperiam"),
        RequestBody: operations.ListTrackersRequestBody{
            MaxResults: sdk.Int64(715179),
            NextToken: sdk.String("quod"),
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTrackersResponse != nil {
        // handle response
    }
}
```

## PutGeofence

Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutGeofence(ctx, operations.PutGeofenceRequest{
        CollectionName: "occaecati",
        GeofenceID: "commodi",
        RequestBody: operations.PutGeofenceRequestBody{
            Geometry: operations.PutGeofenceRequestBodyGeometry{
                Circle: &shared.Circle{
                    Center: []float64{
                        1741.12,
                        6455.7,
                        4752.89,
                        353.62,
                    },
                    Radius: 7836.48,
                },
                Polygon: [][][]float64{
                    [][]float64{
                        []float64{
                            1598.67,
                            5361.78,
                            1438.29,
                        },
                        []float64{
                            6494.63,
                            2775.96,
                            5392.24,
                        },
                        []float64{
                            3256.85,
                        },
                    },
                    [][]float64{
                        []float64{
                            9564.06,
                        },
                        []float64{
                            1871.31,
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("eveniet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutGeofenceResponse != nil {
        // handle response
    }
}
```

## SearchPlaceIndexForPosition

Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchPlaceIndexForPosition(ctx, operations.SearchPlaceIndexForPositionRequest{
        IndexName: "accusamus",
        RequestBody: operations.SearchPlaceIndexForPositionRequestBody{
            Language: sdk.String("veritatis"),
            MaxResults: sdk.Int64(458604),
            Position: []float64{
                7241.68,
                8771.31,
                3990.25,
                934.59,
            },
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchPlaceIndexForPositionResponse != nil {
        // handle response
    }
}
```

## SearchPlaceIndexForSuggestions

<p>Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching.</p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for suggested place names near a specified position by using <code>BiasPosition</code>, or filter results within a bounding box by using <code>FilterBBox</code>. These parameters are mutually exclusive; using both <code>BiasPosition</code> and <code>FilterBBox</code> in the same command returns an error.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchPlaceIndexForSuggestions(ctx, operations.SearchPlaceIndexForSuggestionsRequest{
        IndexName: "distinctio",
        RequestBody: operations.SearchPlaceIndexForSuggestionsRequestBody{
            BiasPosition: []float64{
                270.69,
                6360.61,
                7313.98,
                2400.2,
            },
            FilterBBox: []float64{
                1605.38,
                97.66,
                7963.92,
                3082.86,
            },
            FilterCountries: []string{
                "consectetur",
                "esse",
                "blanditiis",
                "provident",
            },
            Language: sdk.String("a"),
            MaxResults: sdk.Int64(857723),
            Text: "quas",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchPlaceIndexForSuggestionsResponse != nil {
        // handle response
    }
}
```

## SearchPlaceIndexForText

<p>Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest. </p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for places near a given position using <code>BiasPosition</code>, or filter results within a bounding box using <code>FilterBBox</code>. Providing both parameters simultaneously returns an error.</p> </note> <p>Search results are returned in order of highest to lowest relevance.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchPlaceIndexForText(ctx, operations.SearchPlaceIndexForTextRequest{
        IndexName: "quia",
        RequestBody: operations.SearchPlaceIndexForTextRequestBody{
            BiasPosition: []float64{
                9924.3,
                8155.24,
                850.01,
                1594.14,
            },
            FilterBBox: []float64{
                6288.99,
            },
            FilterCountries: []string{
                "aliquid",
                "tenetur",
                "quae",
            },
            Language: sdk.String("earum"),
            MaxResults: sdk.Int64(424032),
            Text: "in",
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchPlaceIndexForTextResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>You can use the <code>TagResource</code> operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag. </p> <p>You can associate up to 50 tags with a resource.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "ullam": "reprehenderit",
            },
        },
        ResourceArn: "ullam",
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes one or more tags from the specified Amazon Location resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        ResourceArn: "itaque",
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("et"),
        TagKeys: []string{
            "ipsa",
            "minima",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateGeofenceCollection

Updates the specified properties of a given geofence collection.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateGeofenceCollection(ctx, operations.UpdateGeofenceCollectionRequest{
        CollectionName: "veritatis",
        RequestBody: operations.UpdateGeofenceCollectionRequestBody{
            Description: sdk.String("consectetur"),
            PricingPlan: operations.UpdateGeofenceCollectionRequestBodyPricingPlanEnumRequestBasedUsage.ToPointer(),
            PricingPlanDataSource: sdk.String("iste"),
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGeofenceCollectionResponse != nil {
        // handle response
    }
}
```

## UpdateKey

<p>Updates the specified properties of a given API key resource.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateKey(ctx, operations.UpdateKeyRequest{
        KeyName: "ab",
        RequestBody: operations.UpdateKeyRequestBody{
            Description: sdk.String("corrupti"),
            ExpireTime: types.MustTimeFromString("2022-12-20T03:36:13.455Z"),
            ForceUpdate: sdk.Bool(false),
            NoExpiry: sdk.Bool(false),
            Restrictions: &operations.UpdateKeyRequestBodyRestrictions{
                AllowActions: []string{
                    "occaecati",
                },
                AllowReferers: []string{
                    "impedit",
                    "explicabo",
                },
                AllowResources: []string{
                    "aut",
                    "dignissimos",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateKeyResponse != nil {
        // handle response
    }
}
```

## UpdateMap

Updates the specified properties of a given map resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateMap(ctx, operations.UpdateMapRequest{
        MapName: "aperiam",
        RequestBody: operations.UpdateMapRequestBody{
            Description: sdk.String("ea"),
            PricingPlan: operations.UpdateMapRequestBodyPricingPlanEnumRequestBasedUsage.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMapResponse != nil {
        // handle response
    }
}
```

## UpdatePlaceIndex

Updates the specified properties of a given place index resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePlaceIndex(ctx, operations.UpdatePlaceIndexRequest{
        IndexName: "nemo",
        RequestBody: operations.UpdatePlaceIndexRequestBody{
            DataSourceConfiguration: &operations.UpdatePlaceIndexRequestBodyDataSourceConfiguration{
                IntendedUse: shared.IntendedUseEnumSingleUse.ToPointer(),
            },
            Description: sdk.String("quaerat"),
            PricingPlan: operations.UpdatePlaceIndexRequestBodyPricingPlanEnumMobileAssetManagement.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePlaceIndexResponse != nil {
        // handle response
    }
}
```

## UpdateRouteCalculator

Updates the specified properties for a given route calculator resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateRouteCalculator(ctx, operations.UpdateRouteCalculatorRequest{
        CalculatorName: "velit",
        RequestBody: operations.UpdateRouteCalculatorRequestBody{
            Description: sdk.String("culpa"),
            PricingPlan: operations.UpdateRouteCalculatorRequestBodyPricingPlanEnumMobileAssetTracking.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRouteCalculatorResponse != nil {
        // handle response
    }
}
```

## UpdateTracker

Updates the specified properties of a given tracker resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateTracker(ctx, operations.UpdateTrackerRequest{
        RequestBody: operations.UpdateTrackerRequestBody{
            Description: sdk.String("labore"),
            PositionFiltering: operations.UpdateTrackerRequestBodyPositionFilteringEnumAccuracyBased.ToPointer(),
            PricingPlan: operations.UpdateTrackerRequestBodyPricingPlanEnumMobileAssetManagement.ToPointer(),
            PricingPlanDataSource: sdk.String("cum"),
        },
        TrackerName: "commodi",
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTrackerResponse != nil {
        // handle response
    }
}
```
