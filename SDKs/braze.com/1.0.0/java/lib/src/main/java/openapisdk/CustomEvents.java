package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class CustomEvents {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public CustomEvents(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * customEventsAnalytics - Custom Events Analytics
     *
     * This endpoint allows you to retrieve a series of the number of occurrences of a custom event in your app over a designated time period.
     * 
     * ### Components Used
     * -[Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
     * 
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
     *             "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
     *             "count" : (int)
     *         },
     *         ...
     *     ]
     * }
     * ```
     * 
     * ### Fatal Error Response Codes
     * The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.
     * 
     * | Error Code       | Reason / Cause                                                   |
     * | ---------------- | ---------------------------------------------------------------- |
     * | 400 Bad Request  | Bad Syntax                                                       |
     * | 401 Unauthorized | Unknown or missing REST API Key                                  |
     * | 429 Rate Limited | Over rate limit                                                  |
     * | 5XX              | Internal server error, you should retry with exponential backoff |
    **/
    public openapisdk.models.operations.CustomEventsAnalyticsResponse customEventsAnalytics(openapisdk.models.operations.CustomEventsAnalyticsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/events/data_series");
        
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

        openapisdk.models.operations.CustomEventsAnalyticsResponse res = new openapisdk.models.operations.CustomEventsAnalyticsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * customEventsList - Custom Events List
     *
     * This endpoint allows you to export a list of custom events that have been recorded for your app. The event names are returned in groups of 250, sorted alphabetically.
     * 
     * 
     * ## Response
     * 
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "events" : [
     *         "Event A",
     *         "Event B",
     *         "Event C",
     *         ...
     *     ]
     * }
     * ```
     * 
     * ### Fatal Error Response Codes
     * 
     * The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.
     * 
     * | Error Code       | Reason / Cause                                                   |
     * | ---------------- | ---------------------------------------------------------------- |
     * | 400 Bad Request  | Bad Syntax                                                       |
     * | 401 Unauthorized | Unknown or missing REST API Key                                  |
     * | 429 Rate Limited | Over rate limit                                                  |
     * | 5XX              | Internal server error, you should retry with exponential backoff |
    **/
    public openapisdk.models.operations.CustomEventsListResponse customEventsList(openapisdk.models.operations.CustomEventsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/events/list");
        
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

        openapisdk.models.operations.CustomEventsListResponse res = new openapisdk.models.operations.CustomEventsListResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}