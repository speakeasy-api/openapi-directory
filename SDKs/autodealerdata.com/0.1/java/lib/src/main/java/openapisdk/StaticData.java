package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class StaticData {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public StaticData(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getBrandNamesGetBrandsGet - Get a list of brand names
     *
     * Get vehicle brand names. 
     * 
     * These names are used as arguments for other endpoints. The names are generally not case sensitive
     * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
    **/
    public openapisdk.models.operations.GetBrandNamesGetBrandsGetResponse getBrandNamesGetBrandsGet(openapisdk.models.operations.GetBrandNamesGetBrandsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/getBrands");
        
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

        openapisdk.models.operations.GetBrandNamesGetBrandsGetResponse res = new openapisdk.models.operations.GetBrandNamesGetBrandsGetResponse() {{
            brandResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BrandResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BrandResp.class);
                res.brandResp = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.HttpValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.HttpValidationError.class);
                res.httpValidationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * getModelNamesAllGetInactiveModelsGet - Get a list of model names including discontinued models
     *
     * Get all model names including discontinued models. Because these models are no longer built, or have very poor market performance
     * they are not incuded in the normal getModels endpoint. Many users itterate through the model names with our new vehicle sales
     * endpoints and waste some of their quota making self contradictory requests. This endpoint was created to aleviate the use case where
     * someone requests information on new vehicle sales for a model that has not been sold new for a long, long, time. 
     * 
     * These names are used as arguments for other endpoints. The names are generally not case sensitive
     * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
    **/
    public openapisdk.models.operations.GetModelNamesAllGetInactiveModelsGetResponse getModelNamesAllGetInactiveModelsGet(openapisdk.models.operations.GetModelNamesAllGetInactiveModelsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/getInactiveModels");
        
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

        openapisdk.models.operations.GetModelNamesAllGetInactiveModelsGetResponse res = new openapisdk.models.operations.GetModelNamesAllGetInactiveModelsGetResponse() {{
            modelResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ModelResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ModelResp.class);
                res.modelResp = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.HttpValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.HttpValidationError.class);
                res.httpValidationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * getModelNamesGetModelsGet - Get a list of model names
     *
     * Get brand model names for currently active models. This endpoint does not return model names that have been discontinued or have 
     * sold less than 10 vehicles in the last month and a half.
     * 
     * These names are used as arguments for other endpoints. The names are generally not case sensitive
     * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
    **/
    public openapisdk.models.operations.GetModelNamesGetModelsGetResponse getModelNamesGetModelsGet(openapisdk.models.operations.GetModelNamesGetModelsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/getModels");
        
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

        openapisdk.models.operations.GetModelNamesGetModelsGetResponse res = new openapisdk.models.operations.GetModelNamesGetModelsGetResponse() {{
            modelResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ModelResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ModelResp.class);
                res.modelResp = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.HttpValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.HttpValidationError.class);
                res.httpValidationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRegionsGetRegionsGet - Get a list of region names
     *
     * Get region names. These names are used as arguments for other endpoints. The names are generally not case sensitive
     * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
    **/
    public openapisdk.models.operations.GetRegionsGetRegionsGetResponse getRegionsGetRegionsGet(openapisdk.models.operations.GetRegionsGetRegionsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/getRegions");
        
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

        openapisdk.models.operations.GetRegionsGetRegionsGetResponse res = new openapisdk.models.operations.GetRegionsGetRegionsGetResponse() {{
            regionResp = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RegionResp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RegionResp.class);
                res.regionResp = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.HttpValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.HttpValidationError.class);
                res.httpValidationError = out;
            }
        }

        return res;
    }
	
}