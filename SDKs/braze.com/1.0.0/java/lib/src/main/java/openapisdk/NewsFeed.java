package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class NewsFeed {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public NewsFeed(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
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
	
}