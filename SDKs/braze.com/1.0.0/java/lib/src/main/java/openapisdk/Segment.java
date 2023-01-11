package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class Segment {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Segment(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * segmentAnalytics - Segment Analytics
     *
     * This endpoint allows you to retrieve a daily series of the size of a segment over time for a segment.
     * 
     * ### Request Components
     * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
     * 
     * ## Response
     * 
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "data" : [
     *         {
     *             "time" : (string) date as ISO 8601 date,
     *             "size" : (int) size of the segment on that date
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    public openapisdk.models.operations.SegmentAnalyticsResponse segmentAnalytics(openapisdk.models.operations.SegmentAnalyticsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/segments/data_series");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SegmentAnalyticsResponse res = new openapisdk.models.operations.SegmentAnalyticsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * segmentDetails - Segment Details
     *
     * This endpoint allows you to retrieve relevant information on the segment, which can be identified by the `segment_id`.
     * 
     * ### Request Components
     * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
     * 
     * ## Response
     * 
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *       "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *       "created_at" : (string) date created as ISO 8601 date,
     *       "updated_at" : (string) date last updated as ISO 8601 date,
     *       "name" : (string) segment name,
     *       "description" : (string) human-readable description of filters,
     *       "text_description" : (string) segment description, 
     *       "tags" : (array) tag names associated with the segment
     * }
     * ```
    **/
    public openapisdk.models.operations.SegmentDetailsResponse segmentDetails(openapisdk.models.operations.SegmentDetailsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/segments/details");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SegmentDetailsResponse res = new openapisdk.models.operations.SegmentDetailsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * segmentList - Segment List
     *
     * This endpoint allows you to export a list of segments, each of which will include its name, Segment API Identifier, and whether it has analytics tracking enabled. The segments are returned in groups of 100 sorted by time of creation (oldest to newest by default). Archived segments are not included.
     * 
     * ### Request Components
     * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
     * 
     * 
     * ## Response
     * 
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "segments" : [
     *         {
     *             "id" : (string) Segment API Identifier,
     *             "name" : (string) segment name,
     *             "analytics_tracking_enabled" : (boolean) whether the segment has analytics tracking enabled,
     *             "tags" : (array) tag names associated with the segment
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    public openapisdk.models.operations.SegmentListResponse segmentList(openapisdk.models.operations.SegmentListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/segments/list");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SegmentListResponse res = new openapisdk.models.operations.SegmentListResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}