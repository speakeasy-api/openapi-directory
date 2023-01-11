package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class ClassificationInclusion {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ClassificationInclusion(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getClassificationInclusions - Get ClassificationInclusion records
     *
     * Classification Inclusions connect classifications with entities like series, episodes, or campaigns, amongst others.
     * 
     * In order to retrieve a set of classification inclusions, at least one of the following filter parameters must
     * be provided. Failing to do so renders a `400 Bad Request` response.
     * 
     * - `ids[]`
     * - `classified_id` and `classified_type`
     * - `classified_id` and `classification_type`
     * - `classification_id` and `classified_type`
     * 
    **/
    public openapisdk.models.operations.GetClassificationInclusionsResponse getClassificationInclusions(openapisdk.models.operations.GetClassificationInclusionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/classification_inclusions");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetClassificationInclusionsResponse res = new openapisdk.models.operations.GetClassificationInclusionsResponse() {{
            getClassificationInclusions200ApplicationVndApiPlusJsonObject = null;
            getClassificationInclusions400ApplicationVndApiPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/vnd.api+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetClassificationInclusions200ApplicationVndApiPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetClassificationInclusions200ApplicationVndApiPlusJson.class);
                res.getClassificationInclusions200ApplicationVndApiPlusJsonObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/vnd.api+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetClassificationInclusions400ApplicationVndApiPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetClassificationInclusions400ApplicationVndApiPlusJson.class);
                res.getClassificationInclusions400ApplicationVndApiPlusJsonObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }

        return res;
    }
	
	
    /**
     * getClassificationInclusionsId - Get a specific classification inclusion
    **/
    public openapisdk.models.operations.GetClassificationInclusionsIdResponse getClassificationInclusionsId(openapisdk.models.operations.GetClassificationInclusionsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/classification_inclusions/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetClassificationInclusionsIdResponse res = new openapisdk.models.operations.GetClassificationInclusionsIdResponse() {{
            getClassificationInclusionsId200ApplicationVndApiPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/vnd.api+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetClassificationInclusionsId200ApplicationVndApiPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetClassificationInclusionsId200ApplicationVndApiPlusJson.class);
                res.getClassificationInclusionsId200ApplicationVndApiPlusJsonObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }

        return res;
    }
	
}