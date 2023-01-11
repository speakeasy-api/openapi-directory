package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

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
     * ercer - Registration Certificate of Establishment Employing Contract Labour
     *
     * API to verify Registration Certificate of Establishment Employing Contract Labour.
    **/
    public openapisdk.models.operations.ErcerResponse ercer(openapisdk.models.operations.ErcerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ercer/certificate");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ErcerResponse res = new openapisdk.models.operations.ErcerResponse() {{
            ercer400ApplicationJSONObject = null;
            ercer401ApplicationJSONObject = null;
            ercer404ApplicationJSONObject = null;
            ercer500ApplicationJSONObject = null;
            ercer502ApplicationJSONObject = null;
            ercer503ApplicationJSONObject = null;
            ercer504ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Ercer400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Ercer400ApplicationJson.class);
                res.ercer400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Ercer401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Ercer401ApplicationJson.class);
                res.ercer401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Ercer404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Ercer404ApplicationJson.class);
                res.ercer404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Ercer500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Ercer500ApplicationJson.class);
                res.ercer500ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 502) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Ercer502ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Ercer502ApplicationJson.class);
                res.ercer502ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Ercer503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Ercer503ApplicationJson.class);
                res.ercer503ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 504) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Ercer504ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Ercer504ApplicationJson.class);
                res.ercer504ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * pfdaw - Permission/ Certificate for Well
     *
     * API to verify Permission/ Certificate for Well.
    **/
    public openapisdk.models.operations.PfdawResponse pfdaw(openapisdk.models.operations.PfdawRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/pfdaw/certificate");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PfdawResponse res = new openapisdk.models.operations.PfdawResponse() {{
            pfdaw400ApplicationJSONObject = null;
            pfdaw401ApplicationJSONObject = null;
            pfdaw404ApplicationJSONObject = null;
            pfdaw500ApplicationJSONObject = null;
            pfdaw502ApplicationJSONObject = null;
            pfdaw503ApplicationJSONObject = null;
            pfdaw504ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Pfdaw400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Pfdaw400ApplicationJson.class);
                res.pfdaw400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Pfdaw401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Pfdaw401ApplicationJson.class);
                res.pfdaw401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Pfdaw404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Pfdaw404ApplicationJson.class);
                res.pfdaw404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Pfdaw500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Pfdaw500ApplicationJson.class);
                res.pfdaw500ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 502) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Pfdaw502ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Pfdaw502ApplicationJson.class);
                res.pfdaw502ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Pfdaw503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Pfdaw503ApplicationJson.class);
                res.pfdaw503ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 504) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Pfdaw504ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Pfdaw504ApplicationJson.class);
                res.pfdaw504ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * tpcer - Permission/ Certificate for Transportation (Petroleum Products, Water etc.)
     *
     * API to verify Permission/ Certificate for Transportation (Petroleum Products, Water etc.).
    **/
    public openapisdk.models.operations.TpcerResponse tpcer(openapisdk.models.operations.TpcerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/tpcer/certificate");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TpcerResponse res = new openapisdk.models.operations.TpcerResponse() {{
            tpcer400ApplicationJSONObject = null;
            tpcer401ApplicationJSONObject = null;
            tpcer404ApplicationJSONObject = null;
            tpcer500ApplicationJSONObject = null;
            tpcer502ApplicationJSONObject = null;
            tpcer503ApplicationJSONObject = null;
            tpcer504ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Tpcer400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Tpcer400ApplicationJson.class);
                res.tpcer400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Tpcer401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Tpcer401ApplicationJson.class);
                res.tpcer401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Tpcer404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Tpcer404ApplicationJson.class);
                res.tpcer404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Tpcer500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Tpcer500ApplicationJson.class);
                res.tpcer500ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 502) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Tpcer502ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Tpcer502ApplicationJson.class);
                res.tpcer502ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Tpcer503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Tpcer503ApplicationJson.class);
                res.tpcer503ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 504) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Tpcer504ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Tpcer504ApplicationJson.class);
                res.tpcer504ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}