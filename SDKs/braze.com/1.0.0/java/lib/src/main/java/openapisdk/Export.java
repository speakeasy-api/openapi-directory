package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class Export {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Export(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * appSessionsByTime - App Sessions by Time
     *
     * This endpoint allows you to retrieve a series of the number of sessions for your app over a designated time period.
     * 
     * ### Components Used
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
     *             "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
     *             "sessions" : (int)
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    public openapisdk.models.operations.AppSessionsByTimeResponse appSessionsByTime(openapisdk.models.operations.AppSessionsByTimeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/sessions/data_series");
        
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

        openapisdk.models.operations.AppSessionsByTimeResponse res = new openapisdk.models.operations.AppSessionsByTimeResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * campaignAnalytics - Campaign Analytics
     *
     * This endpoint allows you to retrieve a daily series of various stats for a campaign over time. Data returned includes how many messages were sent, opened, clicked, converted, etc., broken down by message channel. 
     * 
     * ### Components Used
     * -[Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)
     * 
     * 
     * ### Responses
     * 
     * #### Multi-Channel Response
     * 
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "data" : [
     *         {
     *             "time" : (string) date as ISO 8601 date,
     *             "messages" : {
     *                 "ios_push" : [
     *                     {
     *                       "variation_name": "iOS_Push",
     *                       "sent" : (int),
     *                       "direct_opens" : (int),
     *                       "total_opens" : (int),
     *                       "bounces" : (int),
     *                       "body_clicks" : (int)
     *                       "revenue": 0,
     *                       "unique_recipients": 1,
     *                       "conversions": 0,
     *                       "conversions_by_send_time": 0,
     *                       "conversions1": 0,
     *                       "conversions1_by_send_time": 0,
     *                       "conversions2": 0,
     *                       "conversions2_by_send_time": 0,
     *                       "conversions3": 0,
     *                       "conversions3_by_send_time": 0,
     *                       "carousel_slide_[NUM]_[TITLE]_click": (optional, int),
     *                       "notif_button_[NUM]_[TITLE]_click": (optional, int)
     *                     }
     *                 ],
     *                 "android_push" : [
     *                     {
     *                       "sent" : (int),
     *                       "direct_opens" : (int),
     *                       "total_opens" : (int),
     *                       "bounces" : (int),
     *                       "body_clicks" : (int)
     *                     }
     *                 ],
     *                 "webhook": [
     *                     {
     *                       "sent": (int),
     *                       "errors": (int)
     *                     }
     *                 ],
     *                 "email" : [
     *                     {
     *                       "sent": (int),
     *                       "opens": (int),
     *                       "unique_opens": (int),
     *                       "clicks": (int),
     *                       "unique_clicks": (int),
     *                       "unsubscribes": (int),
     *                       "bounces": (int),
     *                       "delivered": (int),
     *                       "reported_spam": (int)
     *                     }
     *                 ],
     *                 "sms" : [
     *                   {
     *                     "sent": (int),
     *                     "delivered": (int),
     *                     "undelivered": (int),
     *                     "delivery_failed": (int)
     *                   }
     *                 ]
     *               },
     *            "conversions_by_send_time": (optional, int),
     *            "conversions1_by_send_time": (optional, int),
     *            "conversions2_by_send_time": (optional, int),
     *            "conversions3_by_send_time": (optional, int),
     *            "conversions": (int),
     *            "conversions1": (optional, int),
     *            "conversions2": (optional, int),
     *            "conversions3": (optional, int),
     *            "unique_recipients": (int),
     *            "revenue": (optional, float)
     *         },
     *         ...
     *     ],
     *     ...
     * }
     * ```
     * 
     * #### Multivariate Response
     * 
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "data" : [
     *         {
     *             "time" : (string) date as ISO 8601 date,
     *             "conversions" : (int),
     *             "revenue": (float),
     *             "conversions_by_send_time": (int),
     *             "messages" : {
     *                "trigger_in_app_message": [{
     *       				"variation_name": (optional, string),
     *       				"impressions": (int),
     *       				"clicks": (int),
     *       				"first_button_clicks": (int),
     *       				"second_button_clicks": (int),
     *       				"revenue": (optional, float),,
     *       				"unique_recipients": (int),
     *       				"conversions": (optional, int),
     *       				"conversions_by_send_time": (optional, int),
     *       				"conversions1": (optional, int),
     *       				"conversions1_by_send_time": (optional, int),
     *       				"conversions2": (optional, int),
     *       				"conversions2_by_send_time": (optional, int),
     *       				"conversions3": (optional, int),
     *       				"conversions3_by_send_time": (optional, int)
     *       			}, {
     *       				"variation_name": (optional, string),
     *       				"impressions": (int),
     *       				"clicks": (int),
     *       				"first_button_clicks": (int),
     *       				"second_button_clicks": (int),
     *       				"revenue": (optional, float),,
     *       				"unique_recipients": (int),
     *       				"conversions": (optional, int),
     *       				"conversions_by_send_time": (optional, int),
     *       				"conversions1": (optional, int),
     *       				"conversions1_by_send_time": (optional, int),
     *       				"conversions2": (optional, int),
     *       				"conversions2_by_send_time": (optional, int),
     *       				"conversions3": (optional, int).
     *       				"conversions3_by_send_time": (optional, int)
     *       			}, {
     *       				"variation_name": (optional, string),
     *       				"revenue": (optional, float),,
     *       				"unique_recipients": (int),
     *       				"conversions": (optional, int),
     *       				"conversions_by_send_time": (optional, int),
     *       				"conversions1": (optional, int),
     *       				"conversions1_by_send_time": (optional, int),
     *       				"conversions2": (optional, int),
     *       				"conversions2_by_send_time": (optional, int),
     *       				"conversions3": (optional, int),
     *       				"conversions3_by_send_time": (optional, int),
     *       				"enrolled": (optional, int)
     *       			}]
     *       		},
     *       		"conversions_by_send_time": (optional, int),
     *       		"conversions1_by_send_time": (optional, int),
     *       		"conversions2_by_send_time": (optional, int),
     *       		"conversions3_by_send_time": (optional, int),
     *       		"conversions": (optional, int,
     *       		"conversions1": (optional, int),
     *       		"conversions2": (optional, int),
     *       		"conversions3": (optional, int),
     *       		"unique_recipients": (int),
     *       		"revenue": (optional, float)
     *          }],
     *          ...
     * }
     * ```
     * 
     * Possible message types are `email`, `in_app_message`, `webhook`, `android_push`, `apple_push`, `kindle_push`, `web_push`, `windows_phone8_push`, and `windows_universal_push`. All push message types will have the same statistics shown for `android_push` above.
    **/
    public openapisdk.models.operations.CampaignAnalyticsResponse campaignAnalytics(openapisdk.models.operations.CampaignAnalyticsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/campaigns/data_series");
        
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

        openapisdk.models.operations.CampaignAnalyticsResponse res = new openapisdk.models.operations.CampaignAnalyticsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * campaignDetails - Campaign Details
     *
     * This endpoint allows you to retrieve relevant information on a specified campaign, which can be identified by the `campaign_id`. 
     * 
     * > The campaign_id for API campaigns can be found on the Developer Console page and the campaign details page within your dashboard or you can use the Campaign List Endpoint.
     * 
     * ### Components Used
     * - [Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)
     * 
     * 
     * ### Campaign Details Endpoint API Response
     * 
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "created_at" : (string) date created as ISO 8601 date,
     *     "updated_at" : (string) date last updated as ISO 8601 date,
     *     "archived": (boolean) whether this Campaign is archived,
     *     "draft": (boolean) whether this Campaign is a draft,
     *     "name" : (string) campaign name,
     *     "description" : (string) campaign description,
     *     "schedule_type" : (string) type of scheduling action,
     *     "channels" : (array) list of channels to send via,
     *     "first_sent" : (string) date and hour of first sent as ISO 8601 date,
     *     "last_sent" : (string) date and hour of last sent as ISO 8601 date,
     *     "tags" : (array) tag names associated with the campaign,
     *     "messages": {
     *         "message_variation_id": (string) { // <=This is the actual id
     *             "channel": (string) channel type of the message (as in, "email", "ios_push", "webhook", "content_card", "in-app_message", "sms"),
     *             "name": (string) name of the message in the Dashboard (eg., "Variation 1")
     *             ... channel-specific fields for this message, see below ...
     *         }
     *     },
     *     "conversion_behaviors": (array) conversion event behaviors assigned to the campaign (see below)
     * }
     * ```
     * 
     * #### Messages
     * 
     * The `messages` response will contain information about each message. Example message responses for channels are below:
     * 
     * ##### Push Channels
     * 
     * ```json
     * {
     *     "channel": (string) description of the channel, such as "ios_push" or "android_push"
     *     "alert": (string) alert body text,
     *     "extras": (hash) any key value pairs provided
     * }
     * ```
     * 
     * ##### Email Channel
     * 
     * ```json
     * {
     *     "channel": "email",
     *     "subject": (string) subject,
     *     "body": (string) HTML body,
     *     "from": (string) from address and display name,
     *     "reply_to": (string) reply-to for message, if different than "from" address,
     *     "title": (string) name of the email,
     *     "extras": (hash) any key value pairs provided
     * }
     * ```
     * 
     * ##### Content Card Channel
     * 
     * ```json
     * {
     *     "channel": "content_cards",
     *     "name": (string) name of variant,
     *     "extras": (hash) any key value pairs provided; only present if at least one key-value pair has been set
     * }
     * ```
     * 
     * ##### Webhook Channel
     * 
     * ```json
     * {
     *     "channel": "webhook",
     *     "url": (string) url for webhook,
     *     "body": (string) payload body,
     *     "type": (string) body content type,
     *     "headers": (hash) specified request headers,
     *     "method": (string) HTTP method (e.g., "POST" or "GET"),
     * }
     * ```
     * 
     * ##### SMS Channel
     * 
     * ```json
     * {
     *   "channel": "sms",
     *   "body": (string) payload body,
     *   "from": (string) list of numbers associated with the subscription group,
     *   "subscription_group_id": (string) API id of the subscription group targeted in the SMS message
     * }
     * ```
     * 
     * ##### Control Messages
     * 
     * ```json
     * {
     *     "channel": (string) description of the channel that the control is for,
     *     "type": "control"
     * }
     * ```
     * 
     * #### Conversion Behaviors
     * 
     * The `conversion_behaviors` array will contain information about each conversion event behavior set for the campaign. These behaviors are in order as set by the campaign. For example, Conversion Event A will be the first item in the array, Conversion Event B will be second, etc. Example conversion event behavior responses for are below:
     * 
     * ##### Clicks Email
     * 
     * ```json
     * {
     *     "type": "Clicks Email",
     *     "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours
     * }
     * ```
     * 
     * ##### Opens Email
     * 
     * ```json
     * {
     *     "type": "Opens Email",
     *     "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours
     * }
     * ```
     * 
     * ##### Makes Purchase (any purchase)
     * 
     * ```json
     * {
     *     "type": "Makes Any Purchase",
     *     "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours
     * }
     * ```
     * 
     * ##### Makes Purchase (specific product)
     * 
     * ```json
     * {
     *     "type": "Makes Specific Purchase",
     *     "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
     *     "product": (string) name of the product, i.e. - "Feline Body Armor"
     * }
     * ```
     * 
     * ##### Performs Custom Event
     * 
     * ```json
     * {
     *     "type": "Performs Custom Event",
     *     "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
     *     "custom_event_name": (string) name of the event, i.e. - "Used Feline Body Armor"
     * }
     * ```
     * 
     * ##### Upgrades App
     * 
     * ```json
     * {
     *     "type": "Upgrades App",
     *     "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
     *     "app_ids": (array|null) array of app ids, i.e. - ["12345", "67890"], or `null` if "Track sessions for any app" is selected in the UI
     * }
     * ```
     * 
     * ##### Uses App
     * 
     * ```json
     * {
     *     "type": "Starts Session",
     *     "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
     *     "app_ids": (array|null) array of app ids, i.e. - ["12345", "67890"], or `null` if "Track sessions for any app" is selected in the UI
     * }
     * ```
    **/
    public openapisdk.models.operations.CampaignDetailsResponse campaignDetails(openapisdk.models.operations.CampaignDetailsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/campaigns/details");
        
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

        openapisdk.models.operations.CampaignDetailsResponse res = new openapisdk.models.operations.CampaignDetailsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * campaignList - Campaign List
     *
     * This endpoint allows you to export a list of campaigns, each of which will include its name, Campaign API Identifier, whether it is an API Campaign, and Tags associated with the campaign. The campaigns are returned in groups of 100 sorted by time of creation (oldest to newest by default).
     * 
     * ## Campaign List Endpoint API Response
     * 
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "campaigns" : [
     *         {
     *             "id" : (string) Campaign API Identifier,
     *             "last_edited": (ISO 8601 string) the last edited time for the message 
     *             "name" : (string) campaign name,
     *             "is_api_campaign" : (boolean) whether the campaign is an API Campaign,
     *             "tags" : (array) tag names associated with the campaign
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    public openapisdk.models.operations.CampaignListResponse campaignList(openapisdk.models.operations.CampaignListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/campaigns/list");
        
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

        openapisdk.models.operations.CampaignListResponse res = new openapisdk.models.operations.CampaignListResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
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
	
	
    /**
     * dailyActiveUsersByDate - Daily Active Users by Date
     *
     * This endpoint allows you to retrieve a daily series of the total number of unique active users on each date.
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
     *             "time" : (string) date as ISO 8601 date,
     *             "dau" : (int)
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    public openapisdk.models.operations.DailyActiveUsersByDateResponse dailyActiveUsersByDate(openapisdk.models.operations.DailyActiveUsersByDateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/kpi/dau/data_series");
        
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

        openapisdk.models.operations.DailyActiveUsersByDateResponse res = new openapisdk.models.operations.DailyActiveUsersByDateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * dailyNewUsersByDate - Daily New Users by Date
     *
     * This endpoint allows you to retrieve a daily series of the total number of new users on each date.
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
     *             "time" : (string) date as ISO 8601 date,
     *             "new_users" : (int)
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    public openapisdk.models.operations.DailyNewUsersByDateResponse dailyNewUsersByDate(openapisdk.models.operations.DailyNewUsersByDateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/kpi/new_users/data_series");
        
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

        openapisdk.models.operations.DailyNewUsersByDateResponse res = new openapisdk.models.operations.DailyNewUsersByDateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * kpIsForDailyAppUninstallsByDate - KPIs for Daily App Uninstalls by Date
     *
     * This endpoint allows you to retrieve a daily series of the total number of uninstalls on each date.
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
     *             "uninstalls" : (int)
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    public openapisdk.models.operations.KpIsForDailyAppUninstallsByDateResponse kpIsForDailyAppUninstallsByDate(openapisdk.models.operations.KpIsForDailyAppUninstallsByDateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/kpi/uninstalls/data_series");
        
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

        openapisdk.models.operations.KpIsForDailyAppUninstallsByDateResponse res = new openapisdk.models.operations.KpIsForDailyAppUninstallsByDateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * monthlyActiveUsersForLast30Days - Monthly Active Users for Last 30 Days
     *
     * This endpoint allows you to retrieve a daily series of the total number of unique active users over a 30-day rolling window.
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
     *             "mau" : (int)
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    public openapisdk.models.operations.MonthlyActiveUsersForLast30DaysResponse monthlyActiveUsersForLast30Days(openapisdk.models.operations.MonthlyActiveUsersForLast30DaysRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/kpi/mau/data_series");
        
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

        openapisdk.models.operations.MonthlyActiveUsersForLast30DaysResponse res = new openapisdk.models.operations.MonthlyActiveUsersForLast30DaysResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * newsFeedCardAnalytics - News Feed Card Analytics
     *
     * This endpoint allows you to retrieve a daily series of engagement stats for a card over time.
     * 
     * ### Components Used
     * - [Card ID](https://www.braze.com/docs/api/identifier_types/)
     * - [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)
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
     *             "clicks" : (int) ,
     *             "impressions" : (int),
     *             "unique_clicks" : (int),
     *             "unique_impressions" : (int)
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    public openapisdk.models.operations.NewsFeedCardAnalyticsResponse newsFeedCardAnalytics(openapisdk.models.operations.NewsFeedCardAnalyticsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/feed/data_series");
        
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

        openapisdk.models.operations.NewsFeedCardAnalyticsResponse res = new openapisdk.models.operations.NewsFeedCardAnalyticsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * newsFeedCardsDetails - News Feed Cards Details
     *
     * This endpoint allows you to retrieve relevant information on the card, which can be identified by the `card_id`.
     * 
     * ### Components Used
     * - [Card ID](https://www.braze.com/docs/api/identifier_types/)
     * - [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)
     * 
     * 
     * ## Response
     * 
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) The status of the export, returns 'success' when completed without errors,
     *     "created_at" : (string) Date created as ISO 8601 date,
     *     "updated_at" : (string) Date last updated as ISO 8601 date,
     *     "name" : (string) Card name,
     *     "publish_at" : (string) Date card was published as ISO 8601 date,
     *     "end_at" : (string) Date card will stop displaying for users as ISO 8601 date,
     *     "tags" : (array) Tag names associated with the card,
     *     "title" : (string) Title of the card,
     *     "image_url" : (string) Image URL used by this card,
     *     "extras" : (dictionary) Dictionary containing key-value pair data attached to this card,
     *     "description" : (string) Description text used by this card,
     *     "archived": (boolean) whether this Card is archived,
     *     "draft": (boolean) whether this Card is a draft,
     * }
     * ```
    **/
    public openapisdk.models.operations.NewsFeedCardsDetailsResponse newsFeedCardsDetails(openapisdk.models.operations.NewsFeedCardsDetailsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/feed/details");
        
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

        openapisdk.models.operations.NewsFeedCardsDetailsResponse res = new openapisdk.models.operations.NewsFeedCardsDetailsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * newsFeedCardsList - News Feed Cards List
     *
     * This endpoint allows you to export a list of News Feed cards, each of which will include its name and Card API Identifier. The cards are returned in groups of 100 sorted by time of creation (oldest to newest by default).
     * 
     * 
     * ## Response
     * 
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "cards" : [
     *         {
     *             "id" : (string) Card API Identifier,
     *             "type" : (string) type of the card - NewsItem (classic cards), CaptionedImage, Banner or DevPick (cross-promotional cards),
     *             "title" : (string) title of the card,
     *             "tags" : (array) tag names associated with the card
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    public openapisdk.models.operations.NewsFeedCardsListResponse newsFeedCardsList(openapisdk.models.operations.NewsFeedCardsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/feed/list");
        
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

        openapisdk.models.operations.NewsFeedCardsListResponse res = new openapisdk.models.operations.NewsFeedCardsListResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
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
	
	
    /**
     * sendAnalytics - Send Analytics
     *
     * This endpoint allows you to retrieve a daily series of various stats for a tracked `send_id`. Braze stores send analytics for 14 days after the send.
     * 
     * Campaign conversions will be attributed towards the most recent send id that a given user has received from the campaign.
     * 
     * > The `send_id` is only generated for API campaign sends targeting segments, connected audiences or broadcasts. When relevant, the `send_id` is included in response for the `messages/send`, `messages/schedule`, `campaign/trigger/send` and `campaign/trigger/schedule` endpoints.
     * 
     * ### Components Used
     * - [Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)
     * 
     * ### Send Analytics Endpoint API Response
     * 
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *             "variation_name": (string) variation name,
     *             "sent": (int) the number of sends,
     *             "delivered": (int) the number of messages successfully delivered,
     *             "undelivered": (int) the number of undelivered,
     *             "delivery_failed": (int) the number of rejected,
     *             "direct_opens": (int) the number of direct opens,
     *             "total_opens": (int) the number of total opens,
     *             "bounces": (int) the number of bounces,
     *             "body_clicks": (int) the number of body clicks,
     *             "revenue": (float) the number of dollars of revenue (USD),
     *             "unique_recipients": (int) the number of unique recipients,
     *             "conversions": (int) the number of conversions,
     *             "conversions_by_send_time": (int) the number of conversions,
     *             "conversions1": (int, optional) the number of conversions for the second conversion event,
     *             "conversions1_by_send_time": (int, optional) the number of conversions for the second conversion event by send time,
     *             "conversions2": (int, optional) the number of conversions for the third conversion event,
     *             "conversions2_by_send_time": (int, optional) the number of conversions for the third conversion event by send time,
     *             "conversions3": (int, optional) the number of conversions for the fourth conversion event,
     *             "conversions3_by_send_time": (int, optional) the number of conversions for the fourth conversion event by send time
     *           }
     *         ]
     *       },
     *       "conversions_by_send_time": 0,
     *       "conversions1_by_send_time": 0,
     *       "conversions2_by_send_time": 0,
     *       "conversions3_by_send_time": 0,
     *       "conversions": 0,
     *       "conversions1": 0,
     *       "conversions2": 0,
     *       "conversions3": 0,
     *       "unique_recipients": 1,
     *       "revenue": 0
     *     }
     *   ],
     *   "message": "success"
     * }
     * ```
    **/
    public openapisdk.models.operations.SendAnalyticsResponse sendAnalytics(openapisdk.models.operations.SendAnalyticsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/sends/data_series");
        
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

        openapisdk.models.operations.SendAnalyticsResponse res = new openapisdk.models.operations.SendAnalyticsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}