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
     * btcer - Birth Certificate
     *
     * API to verify Birth Certificate.
    **/
    public openapisdk.models.operations.BtcerResponse btcer(openapisdk.models.operations.BtcerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/btcer/certificate");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BtcerResponse res = new openapisdk.models.operations.BtcerResponse() {{
            btcer400ApplicationJSONObject = null;
            btcer401ApplicationJSONObject = null;
            btcer404ApplicationJSONObject = null;
            btcer500ApplicationJSONObject = null;
            btcer502ApplicationJSONObject = null;
            btcer503ApplicationJSONObject = null;
            btcer504ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Btcer400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Btcer400ApplicationJson.class);
                res.btcer400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Btcer401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Btcer401ApplicationJson.class);
                res.btcer401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Btcer404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Btcer404ApplicationJson.class);
                res.btcer404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Btcer500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Btcer500ApplicationJson.class);
                res.btcer500ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 502) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Btcer502ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Btcer502ApplicationJson.class);
                res.btcer502ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Btcer503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Btcer503ApplicationJson.class);
                res.btcer503ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 504) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Btcer504ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Btcer504ApplicationJson.class);
                res.btcer504ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * dtcer - Death Certificate
     *
     * API to verify Death Certificate.
    **/
    public openapisdk.models.operations.DtcerResponse dtcer(openapisdk.models.operations.DtcerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/dtcer/certificate");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DtcerResponse res = new openapisdk.models.operations.DtcerResponse() {{
            dtcer400ApplicationJSONObject = null;
            dtcer401ApplicationJSONObject = null;
            dtcer404ApplicationJSONObject = null;
            dtcer500ApplicationJSONObject = null;
            dtcer502ApplicationJSONObject = null;
            dtcer503ApplicationJSONObject = null;
            dtcer504ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Dtcer400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Dtcer400ApplicationJson.class);
                res.dtcer400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Dtcer401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Dtcer401ApplicationJson.class);
                res.dtcer401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Dtcer404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Dtcer404ApplicationJson.class);
                res.dtcer404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Dtcer500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Dtcer500ApplicationJson.class);
                res.dtcer500ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 502) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Dtcer502ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Dtcer502ApplicationJson.class);
                res.dtcer502ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Dtcer503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Dtcer503ApplicationJson.class);
                res.dtcer503ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 504) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Dtcer504ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Dtcer504ApplicationJson.class);
                res.dtcer504ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * ewcer - Economically Weaker Section Certificate
     *
     * API to verify Economically Weaker Section Certificate.
    **/
    public openapisdk.models.operations.EwcerResponse ewcer(openapisdk.models.operations.EwcerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/ewcer/certificate");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EwcerResponse res = new openapisdk.models.operations.EwcerResponse() {{
            ewcer400ApplicationJSONObject = null;
            ewcer401ApplicationJSONObject = null;
            ewcer404ApplicationJSONObject = null;
            ewcer500ApplicationJSONObject = null;
            ewcer502ApplicationJSONObject = null;
            ewcer503ApplicationJSONObject = null;
            ewcer504ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Ewcer400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Ewcer400ApplicationJson.class);
                res.ewcer400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Ewcer401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Ewcer401ApplicationJson.class);
                res.ewcer401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Ewcer404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Ewcer404ApplicationJson.class);
                res.ewcer404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Ewcer500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Ewcer500ApplicationJson.class);
                res.ewcer500ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 502) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Ewcer502ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Ewcer502ApplicationJson.class);
                res.ewcer502ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Ewcer503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Ewcer503ApplicationJson.class);
                res.ewcer503ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 504) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Ewcer504ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Ewcer504ApplicationJson.class);
                res.ewcer504ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * obcer - OBC Certificate
     *
     * API to verify OBC Certificate.
    **/
    public openapisdk.models.operations.ObcerResponse obcer(openapisdk.models.operations.ObcerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/obcer/certificate");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ObcerResponse res = new openapisdk.models.operations.ObcerResponse() {{
            obcer400ApplicationJSONObject = null;
            obcer401ApplicationJSONObject = null;
            obcer404ApplicationJSONObject = null;
            obcer500ApplicationJSONObject = null;
            obcer502ApplicationJSONObject = null;
            obcer503ApplicationJSONObject = null;
            obcer504ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Obcer400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Obcer400ApplicationJson.class);
                res.obcer400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Obcer401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Obcer401ApplicationJson.class);
                res.obcer401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Obcer404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Obcer404ApplicationJson.class);
                res.obcer404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Obcer500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Obcer500ApplicationJson.class);
                res.obcer500ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 502) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Obcer502ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Obcer502ApplicationJson.class);
                res.obcer502ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Obcer503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Obcer503ApplicationJson.class);
                res.obcer503ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 504) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Obcer504ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Obcer504ApplicationJson.class);
                res.obcer504ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * racer - Rural Area Certificate
     *
     * API to verify Rural Area Certificate.
    **/
    public openapisdk.models.operations.RacerResponse racer(openapisdk.models.operations.RacerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/racer/certificate");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RacerResponse res = new openapisdk.models.operations.RacerResponse() {{
            racer400ApplicationJSONObject = null;
            racer401ApplicationJSONObject = null;
            racer404ApplicationJSONObject = null;
            racer500ApplicationJSONObject = null;
            racer502ApplicationJSONObject = null;
            racer503ApplicationJSONObject = null;
            racer504ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Racer400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Racer400ApplicationJson.class);
                res.racer400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Racer401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Racer401ApplicationJson.class);
                res.racer401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Racer404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Racer404ApplicationJson.class);
                res.racer404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Racer500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Racer500ApplicationJson.class);
                res.racer500ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 502) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Racer502ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Racer502ApplicationJson.class);
                res.racer502ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Racer503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Racer503ApplicationJson.class);
                res.racer503ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 504) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Racer504ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Racer504ApplicationJson.class);
                res.racer504ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * rscer - Residence Certificate
     *
     * API to verify Residence Certificate.
    **/
    public openapisdk.models.operations.RscerResponse rscer(openapisdk.models.operations.RscerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rscer/certificate");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RscerResponse res = new openapisdk.models.operations.RscerResponse() {{
            rscer400ApplicationJSONObject = null;
            rscer401ApplicationJSONObject = null;
            rscer404ApplicationJSONObject = null;
            rscer500ApplicationJSONObject = null;
            rscer502ApplicationJSONObject = null;
            rscer503ApplicationJSONObject = null;
            rscer504ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Rscer400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Rscer400ApplicationJson.class);
                res.rscer400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Rscer401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Rscer401ApplicationJson.class);
                res.rscer401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Rscer404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Rscer404ApplicationJson.class);
                res.rscer404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Rscer500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Rscer500ApplicationJson.class);
                res.rscer500ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 502) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Rscer502ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Rscer502ApplicationJson.class);
                res.rscer502ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Rscer503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Rscer503ApplicationJson.class);
                res.rscer503ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 504) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Rscer504ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Rscer504ApplicationJson.class);
                res.rscer504ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * shcer - SC/ST  Certificate
     *
     * API to verify SC/ST  Certificate.
    **/
    public openapisdk.models.operations.ShcerResponse shcer(openapisdk.models.operations.ShcerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/shcer/certificate");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ShcerResponse res = new openapisdk.models.operations.ShcerResponse() {{
            shcer400ApplicationJSONObject = null;
            shcer401ApplicationJSONObject = null;
            shcer404ApplicationJSONObject = null;
            shcer500ApplicationJSONObject = null;
            shcer502ApplicationJSONObject = null;
            shcer503ApplicationJSONObject = null;
            shcer504ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Shcer400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Shcer400ApplicationJson.class);
                res.shcer400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Shcer401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Shcer401ApplicationJson.class);
                res.shcer401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Shcer404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Shcer404ApplicationJson.class);
                res.shcer404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Shcer500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Shcer500ApplicationJson.class);
                res.shcer500ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 502) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Shcer502ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Shcer502ApplicationJson.class);
                res.shcer502ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Shcer503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Shcer503ApplicationJson.class);
                res.shcer503ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 504) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Shcer504ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Shcer504ApplicationJson.class);
                res.shcer504ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}