import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://geo.{region}.amazonaws.com", "https://geo.{region}.amazonaws.com", "http://geo.{region}.amazonaws.com.cn", "https://geo.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * "Suite of geospatial services including Maps, Places, Routes, Tracking, and Geofencing"
 *
 * @see {@link https://docs.aws.amazon.com/geo/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * <p>Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection. </p> <p>You can associate up to five geofence collections to each tracker resource.</p> <note> <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p> </note>
     */
    associateTrackerConsumer(req: operations.AssociateTrackerConsumerRequest, config?: AxiosRequestConfig): Promise<operations.AssociateTrackerConsumerResponse>;
    /**
     * Deletes the position history of one or more devices from a tracker resource.
     */
    batchDeleteDevicePositionHistory(req: operations.BatchDeleteDevicePositionHistoryRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteDevicePositionHistoryResponse>;
    /**
     * <p>Deletes a batch of geofences from a geofence collection.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
     */
    batchDeleteGeofence(req: operations.BatchDeleteGeofenceRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteGeofenceResponse>;
    /**
     * <p>Evaluates device positions against the geofence geometries from a given geofence collection.</p> <p>This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge:</p> <ul> <li> <p> <code>ENTER</code> if Amazon Location determines that the tracked device has entered a geofenced area.</p> </li> <li> <p> <code>EXIT</code> if Amazon Location determines that the tracked device has exited a geofenced area.</p> </li> </ul> <note> <p>The last geofence that a device was observed within is tracked for 30 days after the most recent device position update.</p> </note> <note> <p>Geofence evaluation uses the given device position. It does not account for the optional <code>Accuracy</code> of a <code>DevicePositionUpdate</code>.</p> </note> <note> <p>The <code>DeviceID</code> is used as a string to represent the device. You do not need to have a <code>Tracker</code> associated with the <code>DeviceID</code>.</p> </note>
     */
    batchEvaluateGeofences(req: operations.BatchEvaluateGeofencesRequest, config?: AxiosRequestConfig): Promise<operations.BatchEvaluateGeofencesResponse>;
    /**
     * Lists the latest device positions for requested devices.
     */
    batchGetDevicePosition(req: operations.BatchGetDevicePositionRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetDevicePositionResponse>;
    /**
     * A batch request for storing geofence geometries into a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.
     */
    batchPutGeofence(req: operations.BatchPutGeofenceRequest, config?: AxiosRequestConfig): Promise<operations.BatchPutGeofenceResponse>;
    /**
     * <p>Uploads position update data for one or more devices to a tracker resource. Amazon Location uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30 days.</p> <note> <p>Position updates are handled based on the <code>PositionFiltering</code> property of the tracker. When <code>PositionFiltering</code> is set to <code>TimeBased</code>, updates are evaluated against linked geofence collections, and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than every 30 seconds, only one update per 30 seconds is stored for each unique device ID.</p> <p>When <code>PositionFiltering</code> is set to <code>DistanceBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than 30 m (98.4 ft).</p> <p>When <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than the measured accuracy. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is neither stored or evaluated if the device has moved less than 15 m. If <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, Amazon Location uses the default value <code>{ "Horizontal": 0}</code> when accuracy is not provided on a <code>DevicePositionUpdate</code>.</p> </note>
     */
    batchUpdateDevicePosition(req: operations.BatchUpdateDevicePositionRequest, config?: AxiosRequestConfig): Promise<operations.BatchUpdateDevicePositionResponse>;
    /**
     * <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters: <code>DeparturePosition</code> and <code>DestinationPosition</code>. Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html">Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates a route based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> <note> <p>If you specify <code>walking</code> for the travel mode and your data provider is Esri, the start and destination must be within 40km.</p> </note> </li> </ul>
     */
    calculateRoute(req: operations.CalculateRouteRequest, config?: AxiosRequestConfig): Promise<operations.CalculateRouteResponse>;
    /**
     * <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html"> Calculates a route matrix</a> given the following required parameters: <code>DeparturePositions</code> and <code>DestinationPositions</code>. <code>CalculateRouteMatrix</code> calculates routes and returns the travel time and travel distance from each departure position to each destination position in the request. For example, given departure positions A and B, and destination positions X and Y, <code>CalculateRouteMatrix</code> will return time and distance for routes from A to X, A to Y, B to X, and B to Y (in that order). The number of results returned (and routes calculated) will be the number of <code>DeparturePositions</code> times the number of <code>DestinationPositions</code>.</p> <note> <p>Your account is charged for each route calculated, not the number of requests.</p> </note> <p>Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating routes.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html"> Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates routes based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> </li> </ul>
     */
    calculateRouteMatrix(req: operations.CalculateRouteMatrixRequest, config?: AxiosRequestConfig): Promise<operations.CalculateRouteMatrixResponse>;
    /**
     * Creates a geofence collection, which manages and stores geofences.
     */
    createGeofenceCollection(req: operations.CreateGeofenceCollectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateGeofenceCollectionResponse>;
    /**
     * <p>Creates an API key resource in your Amazon Web Services account, which lets you grant <code>geo:GetMap*</code> actions for Amazon Location Map resources to the API key bearer.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
     */
    createKey(req: operations.CreateKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateKeyResponse>;
    /**
     * <p>Creates a map resource in your Amazon Web Services account, which provides map tiles of different styles sourced from global location data providers.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
     */
    createMap(req: operations.CreateMapRequest, config?: AxiosRequestConfig): Promise<operations.CreateMapResponse>;
    /**
     * <p>Creates a place index resource in your Amazon Web Services account. Use a place index resource to geocode addresses and other text queries by using the <code>SearchPlaceIndexForText</code> operation, and reverse geocode coordinates by using the <code>SearchPlaceIndexForPosition</code> operation, and enable autosuggestions by using the <code>SearchPlaceIndexForSuggestions</code> operation.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
     */
    createPlaceIndex(req: operations.CreatePlaceIndexRequest, config?: AxiosRequestConfig): Promise<operations.CreatePlaceIndexResponse>;
    /**
     * <p>Creates a route calculator resource in your Amazon Web Services account.</p> <p>You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>
     */
    createRouteCalculator(req: operations.CreateRouteCalculatorRequest, config?: AxiosRequestConfig): Promise<operations.CreateRouteCalculatorResponse>;
    /**
     * Creates a tracker resource in your Amazon Web Services account, which lets you retrieve current and historical location of devices.
     */
    createTracker(req: operations.CreateTrackerRequest, config?: AxiosRequestConfig): Promise<operations.CreateTrackerResponse>;
    /**
     * <p>Deletes a geofence collection from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored.</p> </note>
     */
    deleteGeofenceCollection(req: operations.DeleteGeofenceCollectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGeofenceCollectionResponse>;
    /**
     * Deletes the specified API key. The API key must have been deactivated more than 90 days previously.
     */
    deleteKey(req: operations.DeleteKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteKeyResponse>;
    /**
     * <p>Deletes a map resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the map is being used in an application, the map may not render.</p> </note>
     */
    deleteMap(req: operations.DeleteMapRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMapResponse>;
    /**
     * <p>Deletes a place index resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
     */
    deletePlaceIndex(req: operations.DeletePlaceIndexRequest, config?: AxiosRequestConfig): Promise<operations.DeletePlaceIndexResponse>;
    /**
     * <p>Deletes a route calculator resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
     */
    deleteRouteCalculator(req: operations.DeleteRouteCalculatorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRouteCalculatorResponse>;
    /**
     * <p>Deletes a tracker resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications.</p> </note>
     */
    deleteTracker(req: operations.DeleteTrackerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTrackerResponse>;
    /**
     * Retrieves the geofence collection details.
     */
    describeGeofenceCollection(req: operations.DescribeGeofenceCollectionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeGeofenceCollectionResponse>;
    /**
     * <p>Retrieves the API key resource details.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
     */
    describeKey(req: operations.DescribeKeyRequest, config?: AxiosRequestConfig): Promise<operations.DescribeKeyResponse>;
    /**
     * Retrieves the map resource details.
     */
    describeMap(req: operations.DescribeMapRequest, config?: AxiosRequestConfig): Promise<operations.DescribeMapResponse>;
    /**
     * Retrieves the place index resource details.
     */
    describePlaceIndex(req: operations.DescribePlaceIndexRequest, config?: AxiosRequestConfig): Promise<operations.DescribePlaceIndexResponse>;
    /**
     * Retrieves the route calculator resource details.
     */
    describeRouteCalculator(req: operations.DescribeRouteCalculatorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRouteCalculatorResponse>;
    /**
     * Retrieves the tracker resource details.
     */
    describeTracker(req: operations.DescribeTrackerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTrackerResponse>;
    /**
     * <p>Removes the association between a tracker resource and a geofence collection.</p> <note> <p>Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.</p> </note>
     */
    disassociateTrackerConsumer(req: operations.DisassociateTrackerConsumerRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateTrackerConsumerResponse>;
    /**
     * <p>Retrieves a device's most recent position according to its sample time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
     */
    getDevicePosition(req: operations.GetDevicePositionRequest, config?: AxiosRequestConfig): Promise<operations.GetDevicePositionResponse>;
    /**
     * <p>Retrieves the device position history from a tracker resource within a specified range of time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>
     */
    getDevicePositionHistory(req: operations.GetDevicePositionHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDevicePositionHistoryResponse>;
    /**
     * Retrieves the geofence details from a geofence collection.
     */
    getGeofence(req: operations.GetGeofenceRequest, config?: AxiosRequestConfig): Promise<operations.GetGeofenceResponse>;
    /**
     * Retrieves glyphs used to display labels on a map.
     */
    getMapGlyphs(req: operations.GetMapGlyphsRequest, config?: AxiosRequestConfig): Promise<operations.GetMapGlyphsResponse>;
    /**
     * Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.
     */
    getMapSprites(req: operations.GetMapSpritesRequest, config?: AxiosRequestConfig): Promise<operations.GetMapSpritesResponse>;
    /**
     * <p>Retrieves the map style descriptor from a map resource. </p> <p>The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.</p>
     */
    getMapStyleDescriptor(req: operations.GetMapStyleDescriptorRequest, config?: AxiosRequestConfig): Promise<operations.GetMapStyleDescriptorResponse>;
    /**
     * <p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. </p> <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>
     */
    getMapTile(req: operations.GetMapTileRequest, config?: AxiosRequestConfig): Promise<operations.GetMapTileResponse>;
    /**
     * <p>Finds a place by its unique ID. A <code>PlaceId</code> is returned by other search operations.</p> <note> <p>A PlaceId is valid only if all of the following are the same in the original search request and the call to <code>GetPlace</code>.</p> <ul> <li> <p>Customer Amazon Web Services account</p> </li> <li> <p>Amazon Web Services Region</p> </li> <li> <p>Data provider specified in the place index resource</p> </li> </ul> </note>
     */
    getPlace(req: operations.GetPlaceRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaceResponse>;
    /**
     * A batch request to retrieve all device positions.
     */
    listDevicePositions(req: operations.ListDevicePositionsRequest, config?: AxiosRequestConfig): Promise<operations.ListDevicePositionsResponse>;
    /**
     * Lists geofence collections in your Amazon Web Services account.
     */
    listGeofenceCollections(req: operations.ListGeofenceCollectionsRequest, config?: AxiosRequestConfig): Promise<operations.ListGeofenceCollectionsResponse>;
    /**
     * Lists geofences stored in a given geofence collection.
     */
    listGeofences(req: operations.ListGeofencesRequest, config?: AxiosRequestConfig): Promise<operations.ListGeofencesResponse>;
    /**
     * <p>Lists API key resources in your Amazon Web Services account.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
     */
    listKeys(req: operations.ListKeysRequest, config?: AxiosRequestConfig): Promise<operations.ListKeysResponse>;
    /**
     * Lists map resources in your Amazon Web Services account.
     */
    listMaps(req: operations.ListMapsRequest, config?: AxiosRequestConfig): Promise<operations.ListMapsResponse>;
    /**
     * Lists place index resources in your Amazon Web Services account.
     */
    listPlaceIndexes(req: operations.ListPlaceIndexesRequest, config?: AxiosRequestConfig): Promise<operations.ListPlaceIndexesResponse>;
    /**
     * Lists route calculator resources in your Amazon Web Services account.
     */
    listRouteCalculators(req: operations.ListRouteCalculatorsRequest, config?: AxiosRequestConfig): Promise<operations.ListRouteCalculatorsResponse>;
    /**
     * Returns a list of tags that are applied to the specified Amazon Location resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists geofence collections currently associated to the given tracker resource.
     */
    listTrackerConsumers(req: operations.ListTrackerConsumersRequest, config?: AxiosRequestConfig): Promise<operations.ListTrackerConsumersResponse>;
    /**
     * Lists tracker resources in your Amazon Web Services account.
     */
    listTrackers(req: operations.ListTrackersRequest, config?: AxiosRequestConfig): Promise<operations.ListTrackersResponse>;
    /**
     * Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.
     */
    putGeofence(req: operations.PutGeofenceRequest, config?: AxiosRequestConfig): Promise<operations.PutGeofenceResponse>;
    /**
     * Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.
     */
    searchPlaceIndexForPosition(req: operations.SearchPlaceIndexForPositionRequest, config?: AxiosRequestConfig): Promise<operations.SearchPlaceIndexForPositionResponse>;
    /**
     * <p>Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching.</p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for suggested place names near a specified position by using <code>BiasPosition</code>, or filter results within a bounding box by using <code>FilterBBox</code>. These parameters are mutually exclusive; using both <code>BiasPosition</code> and <code>FilterBBox</code> in the same command returns an error.</p> </note>
     */
    searchPlaceIndexForSuggestions(req: operations.SearchPlaceIndexForSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.SearchPlaceIndexForSuggestionsResponse>;
    /**
     * <p>Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest. </p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for places near a given position using <code>BiasPosition</code>, or filter results within a bounding box using <code>FilterBBox</code>. Providing both parameters simultaneously returns an error.</p> </note> <p>Search results are returned in order of highest to lowest relevance.</p>
     */
    searchPlaceIndexForText(req: operations.SearchPlaceIndexForTextRequest, config?: AxiosRequestConfig): Promise<operations.SearchPlaceIndexForTextResponse>;
    /**
     * <p>Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>You can use the <code>TagResource</code> operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag. </p> <p>You can associate up to 50 tags with a resource.</p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes one or more tags from the specified Amazon Location resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates the specified properties of a given geofence collection.
     */
    updateGeofenceCollection(req: operations.UpdateGeofenceCollectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGeofenceCollectionResponse>;
    /**
     * <p>Updates the specified properties of a given API key resource.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>
     */
    updateKey(req: operations.UpdateKeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateKeyResponse>;
    /**
     * Updates the specified properties of a given map resource.
     */
    updateMap(req: operations.UpdateMapRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMapResponse>;
    /**
     * Updates the specified properties of a given place index resource.
     */
    updatePlaceIndex(req: operations.UpdatePlaceIndexRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePlaceIndexResponse>;
    /**
     * Updates the specified properties for a given route calculator resource.
     */
    updateRouteCalculator(req: operations.UpdateRouteCalculatorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRouteCalculatorResponse>;
    /**
     * Updates the specified properties of a given tracker resource.
     */
    updateTracker(req: operations.UpdateTrackerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTrackerResponse>;
}
