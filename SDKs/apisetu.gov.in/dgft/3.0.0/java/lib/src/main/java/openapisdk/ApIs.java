package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class ApIs {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ApIs(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * importerExporterCodeVerificationApi - Importer-Exporter Code (IEC) Verification API.
     *
     * Description of Importer-Exporter Code (IEC) Verification API.
    **/
    public openapisdk.models.operations.ImporterExporterCodeVerificationApiResponse importerExporterCodeVerificationApi(openapisdk.models.operations.ImporterExporterCodeVerificationApiRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/iec/{iec}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ImporterExporterCodeVerificationApiResponse res = new openapisdk.models.operations.ImporterExporterCodeVerificationApiResponse() {{
            importerExporterCodeVerificationAPI200ApplicationJSONObject = null;
            importerExporterCodeVerificationAPI400ApplicationJSONObject = null;
            importerExporterCodeVerificationAPI401ApplicationJSONObject = null;
            importerExporterCodeVerificationAPI404ApplicationJSONObject = null;
            importerExporterCodeVerificationAPI500ApplicationJSONObject = null;
            importerExporterCodeVerificationAPI502ApplicationJSONObject = null;
            importerExporterCodeVerificationAPI503ApplicationJSONObject = null;
            importerExporterCodeVerificationAPI504ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ImporterExporterCodeVerificationApi200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ImporterExporterCodeVerificationApi200ApplicationJson.class);
                res.importerExporterCodeVerificationAPI200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ImporterExporterCodeVerificationApi400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ImporterExporterCodeVerificationApi400ApplicationJson.class);
                res.importerExporterCodeVerificationAPI400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ImporterExporterCodeVerificationApi401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ImporterExporterCodeVerificationApi401ApplicationJson.class);
                res.importerExporterCodeVerificationAPI401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ImporterExporterCodeVerificationApi404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ImporterExporterCodeVerificationApi404ApplicationJson.class);
                res.importerExporterCodeVerificationAPI404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ImporterExporterCodeVerificationApi500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ImporterExporterCodeVerificationApi500ApplicationJson.class);
                res.importerExporterCodeVerificationAPI500ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 502) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ImporterExporterCodeVerificationApi502ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ImporterExporterCodeVerificationApi502ApplicationJson.class);
                res.importerExporterCodeVerificationAPI502ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ImporterExporterCodeVerificationApi503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ImporterExporterCodeVerificationApi503ApplicationJson.class);
                res.importerExporterCodeVerificationAPI503ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 504) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ImporterExporterCodeVerificationApi504ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ImporterExporterCodeVerificationApi504ApplicationJson.class);
                res.importerExporterCodeVerificationAPI504ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}