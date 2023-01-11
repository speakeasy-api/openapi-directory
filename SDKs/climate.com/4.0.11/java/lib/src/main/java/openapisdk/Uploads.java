package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Uploads {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Uploads(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * chunkedUpload - Chunked upload of data
     *
     * Send chunked data for an **Upload**.
    **/
    public openapisdk.models.operations.ChunkedUploadResponse chunkedUpload(openapisdk.models.operations.ChunkedUploadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v4/uploads/{uploadId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ChunkedUploadResponse res = new openapisdk.models.operations.ChunkedUploadResponse() {{
            error = null;
            error = null;
            error = null;
            error = null;
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }
        else if (httpRes.statusCode() == 400) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchUploadStatusById - Retrieve Upload status
     *
     * Check the status of an **Upload** by ID.
    **/
    public openapisdk.models.operations.FetchUploadStatusByIdResponse fetchUploadStatusById(openapisdk.models.operations.FetchUploadStatusByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v4/uploads/{uploadId}/status", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUploadStatusByIdResponse res = new openapisdk.models.operations.FetchUploadStatusByIdResponse() {{
            uploadStatus = null;
            error = null;
            error = null;
            error = null;
            error = null;
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UploadStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UploadStatus.class);
                res.uploadStatus = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchUploadStatuses - Retrieve Upload statuses in batch
     *
     * Check the status of multiple **Uploads** (up to 100 per request).
    **/
    public openapisdk.models.operations.FetchUploadStatusesResponse fetchUploadStatuses(openapisdk.models.operations.FetchUploadStatusesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v4/uploads/status/query");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUploadStatusesResponse res = new openapisdk.models.operations.FetchUploadStatusesResponse() {{
            uploadStatuses = null;
            error = null;
            error = null;
            error = null;
            error = null;
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UploadStatuses out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UploadStatuses.class);
                res.uploadStatuses = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * postUpload - Initiate a new upload
     *
     * Step one in uploading a data product. The method will return an **Upload** ID which the caller will use in subsequent `PUT` requests.
     * The following `contentTypes` may be uploaded:
     *     <details><summary>__image/vnd.climate.thermal.geotiff__</summary>
     * 
     *     Allows for the upload of a thermal image. The image is a single band geotiff with 64 bit signed floating point values in degrees Celsius. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
     * 
     *     The following metadata entries are required to be embedded in the geotiff:
     *       * acquisitionStartDate - ISO8601 date
     *       * acquisitionEndDate - ISO8601 date
     *       * isCalibrated - boolean
     * 
     *     The following metadata entries are optional:
     *       * sourceId - uuid referencing the asset in the partner's system
     *       * fieldId - uuid referencing a field in the Climate system
     *       * boundaryId - uuid referencing a boundary in the Climate system
     *       * brandId - uuid referencing a partner's branding in the Climate system
     *       * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
     * 
     *     Requires either imagery:write or platform scope.
     *   </details>
     *   <details><summary>__image/vnd.climate.ndvi.geotiff__</summary>
     * 
     *     Allows for the upload of a NDVI image. The image is a single band geotiff with 64 bit signed floating point values in the range of -1 to 1 inclusive. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
     * 
     *     The following metadata entries are required to be embedded in the geotiff:
     *       * acquisitionStartDate - ISO8601 date
     *       * acquisitionEndDate - ISO8601 date
     * 
     *     The following metadata entries are optional:
     *       * sourceId - uuid referencing the asset in the partner's system
     *       * fieldId - uuid referencing a field in the Climate system
     *       * boundaryId - uuid referencing a boundary in the Climate system
     *       * brandId - uuid referencing a partner's branding in the Climate system
     *       * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
     * 
     *     Requires either imagery:write or platform scope.
     *   </details>
     *   <details><summary> __image/vnd.climate.rgb.geotiff__</summary>
     * 
     *     Allows for the upload of a true color image. The image is a multi band geotiff with 24-bit composite values. Each band is 8 bits with values in the range of 0 to 255. The Coordinate Reference System (CRS) must be UTM with WGS84 datum. The geotiff must contain 3 bands in the order Red, Green, Blue.
     * 
     *     The following metadata entries are required to be embedded in the geotiff:
     *       * acquisitionStartDate - ISO8601 date
     *       * acquisitionEndDate - ISO8601 date
     *       * isCalibrated - boolean
     * 
     *     The following metadata entries are optional:
     *       * sourceId - uuid referencing the asset in the partner's system
     *       * fieldId - uuid referencing a field in the Climate system
     *       * boundaryId - uuid referencing a boundary in the Climate system
     *       * brandId - uuid referencing a partner's branding in the Climate system
     *       * reflectanceComputeMethod - either TOA or GROUND
     *       * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
     * 
     *     Requires either imagery:write or platform scope.
     *   </details>
     *   <details><summary> __image/vnd.climate.rgb-nir.geotiff__</summary>
     * 
     *     Allows for the upload of a Near Infrared (NIR) image. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
     * 
     *     The following metadata entries are required to be embedded in the geotiff:
     *       * acquisitionStartDate - ISO8601 date
     *       * acquisitionEndDate - ISO8601 date
     *       * isCalibrated - boolean
     * 
     *     The following metadata entries are optional:
     *       * sourceId - uuid referencing the asset in the partner's system
     *       * fieldId - uuid referencing a field in the Climate system
     *       * boundaryId - uuid referencing a boundary in the Climate system
     *       * brandId - uuid referencing a partner's branding in the Climate system
     *       * reflectanceComputeMethod - either TOA or GROUND
     *       * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
     * 
     *     Requires either imagery:write or platform scope.
     *   </details>
     *   <details><summary>__image/vnd.climate.rgb-cir.geotiff__</summary>
     * 
     *     Allows for the upload of a Color Infrared (CIR) image. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
     * 
     *     The following metadata entries are required to be embedded in the geotiff:
     *       * acquisitionStartDate - ISO8601 date
     *       * acquisitionEndDate - ISO8601 date
     *       * isCalibrated - boolean
     * 
     *     The following metadata entries are optional:
     *       * sourceId - uuid referencing the asset in the partner's system
     *       * fieldId - uuid referencing a field in the Climate system
     *       * boundaryId - uuid referencing a boundary in the Climate system
     *       * brandId - uuid referencing a partner's branding in the Climate system
     *       * reflectanceComputeMethod - either TOA or GROUND
     *       * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
     * 
     *     Requires either imagery:write or platform scope.
     *   </details>
     *   <details><summary> __application/vnd.climate.field.geojson__</summary>
     * 
     *     Allows for the upload of a valid geojson feature (https://tools.ietf.org/html/rfc7946#section-3.2).
     * 
     *     The feature must contain the following entry in the properties section:
     *       * fieldName
     * 
     *     Optionally, the feature may contain the following entries in the properties properties:
     *       * farmName - defaults to *default*
     *       * clientName - defaults to *default*
     * 
     *     Additionally, the type field of the geometry field must one of the following:
     *       * Polygon
     *       * MultiPolygon
     * 
     *     The coordinates field of the geometry field must contain no more than 10,000 points.
     *     The total area of the field may not be larger than 20,000 acres in size.
     * 
     *     Requires either fields:write or platform scope.
     *   </details>
     *   <details><summary> __application/vnd.climate.rx.planting.shp__</summary>
     * 
     *     Allows for the upload of a planting prescription in shapefile format.  The upload must be an archive in the zip format.  It should contain one and only one of each of the following file types:
     *       * .shp
     *       * .shx
     *       * .dbf
     * 
     *     All files with the above suffixes must have the same prefix, ie Back40.shp, Back40.shx and Back40.dbf.
     * 
     *     Requires either rx:write or platform scope.
     *   </details>
     *   <details><summary> __application/vnd.climate.modus.xml__</summary>
     * 
     *     Allows for the upload of a soil sampling file in the modus 1.0 format with some restrictions.  The upload must be a single xml file.
     * 
     *     The following elements are required to be present in the modus file.
     *       * EventCode - Max length of 64 bytes
     *       * EventDate - Must be in ISO8601
     *       * SoilSample - Has a maxOccurs of 20k
     *       * Depth - Has a maxOccurs of 50
     *       * LabName - Must be non-empty.
     *       * StartingDepth - 0 to 36 inclusive, default 0
     *       * EndingDepth - 1 - 36 inclusive, default 1
     *       * ColumnDepth
     *       * DepthUnit - must be inches
     *       * Geometry - point in wgs84
     *     
     *     Requires the soil:write scope.
     *    </details>
     *    <details><summary> __application/vnd.climate.stand-count.geojson__</summary>
     * 
     *     Allows for the upload of a valid [geojson feature collection](https://tools.ietf.org/html/rfc7946#section-3.3).
     * 
     *     Each feature in the collection must contain the following entry in its properties section:
     *       * StandPPA - A count of the number of plants per acre:
     * 
     *     Additionally, the type field of each feature's geometry field must be:
     *       * Point
     * 
     *     Requires `imagery:write` scope.
     *    </details>
     *    <details><summary> __application/vnd.climate.weed-count.geojson__</summary>
     * 
     *     Allows for the upload of a valid [geojson feature collection](https://tools.ietf.org/html/rfc7946#section-3.3).
     * 
     *     Each feature in the collection must contain the following entry in its properties section:
     *       * StandPPA - A count of the number of plants per acre:
     * 
     *     Additionally, the type field of each feature's geometry field must be:
     *       * Point
     * 
     *     Requires `imagery:write` scope.
     *    </details>
    **/
    public openapisdk.models.operations.PostUploadResponse postUpload(openapisdk.models.operations.PostUploadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v4/uploads");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostUploadResponse res = new openapisdk.models.operations.PostUploadResponse() {{
            createdUpload = null;
            error = null;
            error = null;
            error = null;
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.createdUpload = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
}