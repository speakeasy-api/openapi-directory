package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class Canvas {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Canvas(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * canvasDataAnalyticsSummary - Canvas Data Analytics Summary
     *
     * This endpoint allows you to export rollups of time series data for a Canvas, providing a concise summary of a Canvas' results.
     * 
     * ### Components Used
     * - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
     * 
     * ## Response
     * 
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *   "data": {
     *     "name": (string) Canvas name,
     *     "total_stats": {
     *       "revenue": (float),
     *       "conversions": (int),
     *       "conversions_by_entry_time": (int),
     *       "entries": (int)
     *     },
     *     "variant_stats": (optional) {
     *       "00000000-0000-0000-0000-0000000000000": (API identifier for variant) {
     *         "name": (string) name of variant,
     *         "revenue": (float),
     *         "conversions": (int),
     *         "entries": (int)
     *       },
     *       ... (more variants)
     *     },
     *     "step_stats": (optional) {
     *       "00000000-0000-0000-0000-0000000000000": (API identifier for step) {
     *         "name": (string) name of step,
     *         "revenue": (float),
     *         "conversions": (int),
     *         "conversions_by_entry_time": (int),
     *         "messages": {
     *           "android_push": (name of channel) [
     *             {
     *               "sent": (int),
     *               "opens": (int),
     *               "influenced_opens": (int),
     *               "bounces": (int)
     *               ... (more stats for channel)
     *             }
     *           ],
     *           ... (more channels)
     *         }
     *       },
     *       ... (more steps)
     *     }
     *   },
     *   "message": (required, string) the status of the export, returns 'success' when completed without errors
     * }
     * ```
    **/
    public openapisdk.models.operations.CanvasDataAnalyticsSummaryResponse canvasDataAnalyticsSummary(openapisdk.models.operations.CanvasDataAnalyticsSummaryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/canvas/data_summary");
        
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

        openapisdk.models.operations.CanvasDataAnalyticsSummaryResponse res = new openapisdk.models.operations.CanvasDataAnalyticsSummaryResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * canvasDataSeriesAnalytics - Canvas Data Series Analytics
     *
     * This endpoint allows you to export time series data for a Canvas.
     * 
     * ### Components Used
     * - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
     * 
     * ## Response
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *   "data": {
     *     "name": (string) Canvas name,
     *     "stats": [
     *       {
     *         "time": (string) date as ISO 8601 date,
     *         "total_stats": {
     *           "revenue": (float),
     *           "conversions": (int),
     *           "conversions_by_entry_time": (int),
     *           "entries": (int)
     *         },
     *         "variant_stats": (optional) {
     *           "00000000-0000-0000-0000-0000000000000": (API identifier for variant) {
     *             "name": (string) name of variant,
     *             "revenue": (int),
     *             "conversions": (int),
     *             "conversions_by_entry_time": (int),
     *             "entries": (int)
     *           },
     *           ... (more variants)
     *         },
     *         "step_stats": (optional) {
     *           "00000000-0000-0000-0000-0000000000000": (API identifier for step) {
     *             "name": (string) name of step,
     *             "revenue": (float),
     *             "conversions": (int),
     *             "conversions_by_entry_time": (int),
     *             "messages": {
     *               "email": [
     *                 {
     *                   "sent": (int),
     *                   "opens": (int),
     *                   "unique_opens": (int),
     *                   "clicks": (int),
     *                   ... (more stats)
     *                 }
     *               ],
     *               ... (more channels)
     *             }
     *           },
     *           ... (more steps)
     *         }
     *       },
     *       ... (more stats by time)
     *     ]
     *   },
     *   "message": (required, string) the status of the export, returns 'success' when completed without errors
     * }
     * ```
    **/
    public openapisdk.models.operations.CanvasDataSeriesAnalyticsResponse canvasDataSeriesAnalytics(openapisdk.models.operations.CanvasDataSeriesAnalyticsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/canvas/data_series");
        
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

        openapisdk.models.operations.CanvasDataSeriesAnalyticsResponse res = new openapisdk.models.operations.CanvasDataSeriesAnalyticsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * canvasDetails - Canvas Details
     *
     * This endpoint allows you to export metadata about a Canvas, such as its name, when it was created, its current status, and more.
     * 
     * ### Components Used
     * - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
     * 
     * ## Response
     * 
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *   "created_at": (string) date created as ISO 8601 date,
     *   "updated_at": (string) date updated as ISO 8601 date,
     *   "name": (string) Canvas name,
     *   "description": (string) Canvas description,
     *   "archived": (boolean) whether this Canvas is archived,
     *   "draft": (boolean) whether this Canvas is a draft,
     *   "schedule_type": (string) type of scheduling action,
     *   "first_entry": (string) date of first entry as ISO 8601 date,
     *   "last_entry": (string) date of last entry as ISO 8601 date,
     *   "channels": (array of strings) step channels used with Canvas,
     *   "variants": [
     *     {
     *       "name": (string) name of variant,
     *       "id": (string) API identifier of the variant,
     *       "first_step_ids": (array of strings) API identifiers for first steps in variant,
     *       "first_step_id": (string) API identifier of first step in variant (deprecated in November 2017, only included if the variant has only one first step)
     *     },
     *     ... (more variations)
     *   ],
     *   "tags": (array of strings) tag names associated with the Canvas,
     *   "steps": [
     *     {
     *       "name": (string) name of step,
     *       "id": (string) API identifier of the step,
     *       "next_step_ids": (array of strings) API identifiers of steps following step,
     *       "channels": (array of strings) channels used in step,
     *       "messages": {
     *           "message_variation_id": (string) {  // <=This is the actual id
     *               "channel": (string) channel type of the message (eg., "email"),
     *               ... channel-specific fields for this message, see Campaign Details Endpoint API Response for example message responses ...
     *           }
     *       }
     *     },
     *     ... (more steps)
     *   ],
     *   "message": (required, string) the status of the export, returns 'success' when completed without errors
     * }
     * ```
    **/
    public openapisdk.models.operations.CanvasDetailsResponse canvasDetails(openapisdk.models.operations.CanvasDetailsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/canvas/details");
        
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

        openapisdk.models.operations.CanvasDetailsResponse res = new openapisdk.models.operations.CanvasDetailsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * canvasList - Canvas List
     *
     * This endpoint allows you to export a list of Canvases, including the name, Canvas API Identifier and associated Tags. The Canvases are returned in groups of 100 sorted by time of creation (oldest to newest by default).
     * 
     * > Archived Canvases will not be included in the API response unless the `include_archived` field is specified. Canvases that are stopped but not archived, however, will be returned by default.
     * 
     * 
     * ## Response
     * 
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *   "canvases" : [
     *   	{
     *   		"id" : (string) Canvas API Identifier,
     *   		"last_edited": (ISO 8601 string) the last edited time for the message,
     *   		"name" : (string) Canvas name,
     *   		"tags" : (array) tag names associated with the Canvas,
     *   	},
     *     ... (more Canvases)
     *   ],
     *   "message": (required, string) the status of the export, returns 'success' when completed without errors
     * }
     * ```
    **/
    public openapisdk.models.operations.CanvasListResponse canvasList(openapisdk.models.operations.CanvasListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/canvas/list");
        
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

        openapisdk.models.operations.CanvasListResponse res = new openapisdk.models.operations.CanvasListResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}