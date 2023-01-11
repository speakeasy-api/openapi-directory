package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class CodesOfConduct {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public CodesOfConduct(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * codesOfConductGetAllCodesOfConduct - Get all codes of conduct
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/codes-of-conduct#get-all-codes-of-conduct - API method documentation
    **/
    public openapisdk.models.operations.CodesOfConductGetAllCodesOfConductResponse codesOfConductGetAllCodesOfConduct() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/codes_of_conduct");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CodesOfConductGetAllCodesOfConductResponse res = new openapisdk.models.operations.CodesOfConductGetAllCodesOfConductResponse() {{
            codeOfConducts = null;
            codesOfConductGetAllCodesOfConduct415ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CodeOfConduct[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CodeOfConduct[].class);
                res.codeOfConducts = out;
            }
        }
        else if (httpRes.statusCode() == 304) {
        }
        else if (httpRes.statusCode() == 415) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CodesOfConductGetAllCodesOfConduct415ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CodesOfConductGetAllCodesOfConduct415ApplicationJson.class);
                res.codesOfConductGetAllCodesOfConduct415ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * codesOfConductGetConductCode - Get a code of conduct
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/codes-of-conduct#get-a-code-of-conduct - API method documentation
    **/
    public openapisdk.models.operations.CodesOfConductGetConductCodeResponse codesOfConductGetConductCode(openapisdk.models.operations.CodesOfConductGetConductCodeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/codes_of_conduct/{key}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CodesOfConductGetConductCodeResponse res = new openapisdk.models.operations.CodesOfConductGetConductCodeResponse() {{
            codeOfConduct = null;
            basicError = null;
            codesOfConductGetConductCode415ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CodeOfConduct out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CodeOfConduct.class);
                res.codeOfConduct = out;
            }
        }
        else if (httpRes.statusCode() == 304) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 415) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CodesOfConductGetConductCode415ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CodesOfConductGetConductCode415ApplicationJson.class);
                res.codesOfConductGetConductCode415ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}