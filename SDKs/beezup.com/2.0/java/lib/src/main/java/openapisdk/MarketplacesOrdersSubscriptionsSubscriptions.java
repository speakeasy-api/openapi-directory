package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class MarketplacesOrdersSubscriptionsSubscriptions {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public MarketplacesOrdersSubscriptionsSubscriptions(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * activateSubscription - Activate a subscription to the orders
     *
     * At this moment, BeezUP will ensure that your callback url is respecting this specification: 
     * - https://app.swaggerhub.com/apis/BeezUP/public_marketplaces_orders_subscriptions_consumer-dev/1.0#/Subscriptions/Verification
     * 
     * After that we will send you the orders related to your subscription, respecting this specification: 
     * - https://app.swaggerhub.com/apis/BeezUP/public_marketplaces_orders_subscriptions_consumer-dev/1.0#/Subscriptions/PushOrders
     * 
    **/
    public openapisdk.models.operations.ActivateSubscriptionResponse activateSubscription(openapisdk.models.operations.ActivateSubscriptionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/marketplaces/orders/subscriptions/{id}/activate", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActivateSubscriptionResponse res = new openapisdk.models.operations.ActivateSubscriptionResponse() {{
            errorResponseMessage = null;
            errorResponseMessage = null;
            errorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorResponseMessage.class);
                res.errorResponseMessage = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorResponseMessage.class);
                res.errorResponseMessage = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorResponseMessage.class);
                res.errorResponseMessage = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSubscription - Creates a subscription to the orders
     *
     * Please take a look at this sequence diagram to understand the subscription process to follow [here](https://www.websequencediagrams.com/files/render?link=SBYbeIc8NGshk6ooCbmjoBLIMl4fIGO1xjJbPBQAglBo0n6BwEReh7NXQiPSjOTX)
    **/
    public openapisdk.models.operations.CreateSubscriptionResponse createSubscription(openapisdk.models.operations.CreateSubscriptionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/marketplaces/orders/subscriptions/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSubscriptionResponse res = new openapisdk.models.operations.CreateSubscriptionResponse() {{
            errorResponseMessage = null;
            errorResponseMessage = null;
            errorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorResponseMessage.class);
                res.errorResponseMessage = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorResponseMessage.class);
                res.errorResponseMessage = out;
            }
        }
        else if (httpRes.statusCode() == 409) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorResponseMessage.class);
                res.errorResponseMessage = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * deactivateSubscription - Deactivate a subscription to the orders
    **/
    public openapisdk.models.operations.DeactivateSubscriptionResponse deactivateSubscription(openapisdk.models.operations.DeactivateSubscriptionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/marketplaces/orders/subscriptions/{id}/deactivate", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeactivateSubscriptionResponse res = new openapisdk.models.operations.DeactivateSubscriptionResponse() {{
            errorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorResponseMessage.class);
                res.errorResponseMessage = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteSubscription - Delete a subscription to the orders
    **/
    public openapisdk.models.operations.DeleteSubscriptionResponse deleteSubscription(openapisdk.models.operations.DeleteSubscriptionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/marketplaces/orders/subscriptions/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSubscriptionResponse res = new openapisdk.models.operations.DeleteSubscriptionResponse() {{
            errorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorResponseMessage.class);
                res.errorResponseMessage = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSubscription - Get a subscription to the orders
    **/
    public openapisdk.models.operations.GetSubscriptionResponse getSubscription(openapisdk.models.operations.GetSubscriptionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/marketplaces/orders/subscriptions/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSubscriptionResponse res = new openapisdk.models.operations.GetSubscriptionResponse() {{
            subscriptionIndex = null;
            errorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SubscriptionIndex out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SubscriptionIndex.class);
                res.subscriptionIndex = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorResponseMessage.class);
                res.errorResponseMessage = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSubscriptionList - Get the subscription list
    **/
    public openapisdk.models.operations.GetSubscriptionListResponse getSubscriptionList() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/marketplaces/orders/subscriptions/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSubscriptionListResponse res = new openapisdk.models.operations.GetSubscriptionListResponse() {{
            subscriptionIndices = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SubscriptionIndex[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SubscriptionIndex[].class);
                res.subscriptionIndices = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSubscriptionPushReporting - Get the push reporting related to this subscription
    **/
    public openapisdk.models.operations.GetSubscriptionPushReportingResponse getSubscriptionPushReporting(openapisdk.models.operations.GetSubscriptionPushReportingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/marketplaces/orders/subscriptions/{id}/reporting", request.pathParams);
        
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

        openapisdk.models.operations.GetSubscriptionPushReportingResponse res = new openapisdk.models.operations.GetSubscriptionPushReportingResponse() {{
            subscriptionPushReportings = null;
            errorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SubscriptionPushReporting[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SubscriptionPushReporting[].class);
                res.subscriptionPushReportings = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorResponseMessage.class);
                res.errorResponseMessage = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * retryPushOrders - Force retry push orders immediatly
     *
     * In case your subscription consumption is unavailable and your subscription is still active you can ask to retry immediatly to push orders instead of waiting the next scheduled retry date
    **/
    public openapisdk.models.operations.RetryPushOrdersResponse retryPushOrders(openapisdk.models.operations.RetryPushOrdersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/marketplaces/orders/subscriptions/{id}/retry", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RetryPushOrdersResponse res = new openapisdk.models.operations.RetryPushOrdersResponse() {{
            errorResponseMessage = null;
            errorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorResponseMessage.class);
                res.errorResponseMessage = out;
            }
        }
        else if (httpRes.statusCode() == 409) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ErrorResponseMessage.class);
                res.errorResponseMessage = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }

        return res;
    }
	
}