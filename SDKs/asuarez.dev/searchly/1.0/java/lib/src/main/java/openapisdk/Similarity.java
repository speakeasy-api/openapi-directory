package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Similarity {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Similarity(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * srcSearchlyApiV1ControllersSimilarityByContent - API endpoint to search similarity using content
     *
     * Endpoint for an end-user client to search similarity by content.
     * 
     * If you want to run the /similarity/by_content operation, you can do so via an HTTP POST command to the following URL:
     * 
     * ```
     * https://searchly.asuarez.dev/api/v1/similarity/by_content
     * ```
     * 
    **/
    public openapisdk.models.operations.SrcSearchlyApiV1ControllersSimilarityByContentResponse srcSearchlyApiV1ControllersSimilarityByContent(openapisdk.models.operations.SrcSearchlyApiV1ControllersSimilarityByContentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/similarity/by_content");
        
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

        openapisdk.models.operations.SrcSearchlyApiV1ControllersSimilarityByContentResponse res = new openapisdk.models.operations.SrcSearchlyApiV1ControllersSimilarityByContentResponse() {{
            apiResponseSimilarity = null;
            srcSearchlyApiV1ControllersSimilarityByContentDefaultApplicationTextString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiResponseSimilarity out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiResponseSimilarity.class);
                res.apiResponseSimilarity = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/text")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.srcSearchlyApiV1ControllersSimilarityByContentDefaultApplicationTextString = out;
            }
        }

        return res;
    }
	
	
    /**
     * srcSearchlyApiV1ControllersSimilarityBySong - API endpoint to search similarity using a song identifier
     *
     * Endpoint for an end-user client to search similarity by song identifier.
     * 
     * If you want to run the /similarity/by_song operation, you can do so via an HTTP GET command to the following URL:
     * 
     * ```
     * https://searchly.asuarez.dev/api/v1/similarity/by_song
     * ```
     * 
    **/
    public openapisdk.models.operations.SrcSearchlyApiV1ControllersSimilarityBySongResponse srcSearchlyApiV1ControllersSimilarityBySong(openapisdk.models.operations.SrcSearchlyApiV1ControllersSimilarityBySongRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/similarity/by_song");
        
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

        openapisdk.models.operations.SrcSearchlyApiV1ControllersSimilarityBySongResponse res = new openapisdk.models.operations.SrcSearchlyApiV1ControllersSimilarityBySongResponse() {{
            apiResponseSimilarity = null;
            srcSearchlyApiV1ControllersSimilarityBySongDefaultApplicationTextString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiResponseSimilarity out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiResponseSimilarity.class);
                res.apiResponseSimilarity = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/text")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.srcSearchlyApiV1ControllersSimilarityBySongDefaultApplicationTextString = out;
            }
        }

        return res;
    }
	
}