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

public class MarketplacesOrdersOrder {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public MarketplacesOrdersOrder(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * changeOrder - [DEPRECATED] Change your marketplace Order Information (accept, ship, etc.)
    **/
    public openapisdk.models.operations.ChangeOrderResponse changeOrder(openapisdk.models.operations.ChangeOrderRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/{changeOrderType}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ChangeOrderResponse res = new openapisdk.models.operations.ChangeOrderResponse() {{
            beezUPCommonErrorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
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
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }
        else if (httpRes.statusCode() == 409) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }
        else if (httpRes.statusCode() == 412) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
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
     * clearMerchantOrderInfo - [DEPRECATED] Clear an Order's merchant information
    **/
    public openapisdk.models.operations.ClearMerchantOrderInfoResponse clearMerchantOrderInfo(openapisdk.models.operations.ClearMerchantOrderInfoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/clearMerchantOrderInfo", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ClearMerchantOrderInfoResponse res = new openapisdk.models.operations.ClearMerchantOrderInfoResponse() {{
            beezUPCommonErrorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
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
     * getOrder - [DEPRECATED] DEPRECATED - Get full Order and Order Item(s) properties
     *
     * DEPRECATED - Use /orders/v3 instead
    **/
    public openapisdk.models.operations.GetOrderResponse getOrder(openapisdk.models.operations.GetOrderRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrderResponse res = new openapisdk.models.operations.GetOrderResponse() {{
            order = null;
            beezUPCommonErrorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Order out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Order.class);
                res.order = out;
            }
        }
        else if (httpRes.statusCode() == 304) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
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
     * getOrderHistory - [DEPRECATED] Get an Order's harvest and change history
    **/
    public openapisdk.models.operations.GetOrderHistoryResponse getOrderHistory(openapisdk.models.operations.GetOrderHistoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/history", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrderHistoryResponse res = new openapisdk.models.operations.GetOrderHistoryResponse() {{
            orderHistory = null;
            beezUPCommonErrorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OrderHistory out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OrderHistory.class);
                res.orderHistory = out;
            }
        }
        else if (httpRes.statusCode() == 304) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
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
     * harvestOrder - [DEPRECATED] Send harvest request for a single Order
    **/
    public openapisdk.models.operations.HarvestOrderResponse harvestOrder(openapisdk.models.operations.HarvestOrderRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/harvest", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HarvestOrderResponse res = new openapisdk.models.operations.HarvestOrderResponse() {{
            beezUPCommonErrorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }
        else if (httpRes.statusCode() == 409) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
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
     * headOrder - [DEPRECATED] DEPRECATED - Get the meta information about the order (ETag, Last-Modified)
     *
     * DEPRECATED - Use /orders/v3 instead
     * The purpose of this operation is to reduce the bandwith usage by getting just the meta information about the order (ETag, Last-Modified) with the body.
     * This could be useful
     * 
    **/
    public openapisdk.models.operations.HeadOrderResponse headOrder(openapisdk.models.operations.HeadOrderRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("HEAD");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HeadOrderResponse res = new openapisdk.models.operations.HeadOrderResponse() {{
            beezUPCommonErrorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }
        else if (httpRes.statusCode() == 304) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
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
     * setMerchantOrderInfo - [DEPRECATED] Set an Order's merchant information
    **/
    public openapisdk.models.operations.SetMerchantOrderInfoResponse setMerchantOrderInfo(openapisdk.models.operations.SetMerchantOrderInfoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}/setMerchantOrderInfo", request.pathParams);
        
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

        openapisdk.models.operations.SetMerchantOrderInfoResponse res = new openapisdk.models.operations.SetMerchantOrderInfoResponse() {{
            beezUPCommonErrorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
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