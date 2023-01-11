package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Promotion {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Promotion(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getListingSet - This method returns the set of listings associated with the promotion_id specified in the path parameter. Call getPromotions to retrieve the IDs of a seller's promotions. The listing details are returned in a paginated set and you can control and results returned using the following query parameters: limit, offset, q, sort, and status. Maximum associated listings returned: 200 Default number of listings returned: 200
    **/
    public openapisdk.models.operations.GetListingSetResponse getListingSet(openapisdk.models.operations.GetListingSetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/promotion/{promotion_id}/get_listing_set", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetListingSetResponse res = new openapisdk.models.operations.GetListingSetResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getPromotions - This method returns a list of a seller's undeleted promotions. The call returns up to 200 currently-available promotions on the specified marketplace. While the response body does not include the promotion's discountRules or inventoryCriterion containers, it does include the promotionHref (which you can use to retrieve the complete details of the promotion). Use query parameters to sort and filter the results by the number of promotions to return, the promotion state or type, and the eBay marketplace. You can also supply keywords to limit the response to the promotions that contain that keywords in the title of the promotion. Maximum returned: 200
    **/
    public openapisdk.models.operations.GetPromotionsResponse getPromotions(openapisdk.models.operations.GetPromotionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/promotion");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPromotionsResponse res = new openapisdk.models.operations.GetPromotionsResponse() {{
            promotionsPagedCollection = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PromotionsPagedCollection out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PromotionsPagedCollection.class);
                res.promotionsPagedCollection = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * pausePromotion - This method pauses a currently-active (RUNNING) threshold promotion and changes the state of the promotion from RUNNING to PAUSED. Pausing a promotion makes the promotion temporarily unavailable to buyers and any currently-incomplete transactions will not receive the promotional offer until the promotion is resumed. Also, promotion teasers are not displayed when a promotion is paused. Pass the ID of the promotion you want to pause using the promotion_id path parameter. Call getPromotions to retrieve the IDs of the seller's promotions. Note: You can only pause threshold promotions (you cannot pause markdown promotions).
    **/
    public openapisdk.models.operations.PausePromotionResponse pausePromotion(openapisdk.models.operations.PausePromotionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/promotion/{promotion_id}/pause", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PausePromotionResponse res = new openapisdk.models.operations.PausePromotionResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * resumePromotion - This method restarts a threshold promotion that was previously paused and changes the state of the promotion from PAUSED to RUNNING. Only promotions that have been previously paused can be resumed. Resuming a promotion reinstates the promotional teasers and any transactions that were in motion before the promotion was paused will again be eligible for the promotion. Pass the ID of the promotion you want to resume using the promotion_id path parameter. Call getPromotions to retrieve the IDs of the seller's promotions.
    **/
    public openapisdk.models.operations.ResumePromotionResponse resumePromotion(openapisdk.models.operations.ResumePromotionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/promotion/{promotion_id}/resume", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ResumePromotionResponse res = new openapisdk.models.operations.ResumePromotionResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
}