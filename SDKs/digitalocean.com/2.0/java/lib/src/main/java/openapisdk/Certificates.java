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

public class Certificates {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Certificates(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createCertificates - Create a New Certificate
     *
     * To upload new SSL certificate which you have previously generated, send a POST
     * request to `/v2/certificates`.
     * 
     * When uploading a user-generated certificate, the `private_key`,
     * `leaf_certificate`, and optionally the `certificate_chain` attributes should
     * be provided. The type must be set to `custom`.
     * 
     * When using Let's Encrypt to create a certificate, the `dns_names` attribute
     * must be provided, and the type must be set to `lets_encrypt`.
     * 
    **/
    public openapisdk.models.operations.CreateCertificatesResponse createCertificates(openapisdk.models.operations.CreateCertificatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/certificates");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateCertificatesResponse res = new openapisdk.models.operations.CreateCertificatesResponse() {{
            createCertificates201ApplicationJSONObject = null;
            createCertificates401ApplicationJSONObject = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateCertificates201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateCertificates201ApplicationJson.class);
                res.createCertificates201ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateCertificates401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateCertificates401ApplicationJson.class);
                res.createCertificates401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema.class);
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema.class);
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = out;
            }
        }
        else {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema.class);
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteCertificate - Delete a Certificate
     *
     * To delete a specific certificate, send a DELETE request to
     * `/v2/certificates/$CERTIFICATE_ID`.
     * 
    **/
    public openapisdk.models.operations.DeleteCertificateResponse deleteCertificate(openapisdk.models.operations.DeleteCertificateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/certificates/{certificate_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteCertificateResponse res = new openapisdk.models.operations.DeleteCertificateResponse() {{
            deleteCertificate401ApplicationJSONObject = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteCertificate401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteCertificate401ApplicationJson.class);
                res.deleteCertificate401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema.class);
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema.class);
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema.class);
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = out;
            }
        }
        else {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema.class);
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCertificate - Retrieve an Existing Certificate
     *
     * To show information about an existing certificate, send a GET request to `/v2/certificates/$CERTIFICATE_ID`.
    **/
    public openapisdk.models.operations.GetCertificateResponse getCertificate(openapisdk.models.operations.GetCertificateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/certificates/{certificate_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCertificateResponse res = new openapisdk.models.operations.GetCertificateResponse() {{
            getCertificate200ApplicationJSONObject = null;
            getCertificate401ApplicationJSONObject = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetCertificate200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetCertificate200ApplicationJson.class);
                res.getCertificate200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetCertificate401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetCertificate401ApplicationJson.class);
                res.getCertificate401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema.class);
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema.class);
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema.class);
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = out;
            }
        }
        else {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema.class);
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = out;
            }
        }

        return res;
    }
	
	
    /**
     * listCertificates - List All Certificates
     *
     * To list all of the certificates available on your account, send a GET request to `/v2/certificates`.
    **/
    public openapisdk.models.operations.ListCertificatesResponse listCertificates(openapisdk.models.operations.ListCertificatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/certificates");
        
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

        openapisdk.models.operations.ListCertificatesResponse res = new openapisdk.models.operations.ListCertificatesResponse() {{
            listCertificates200ApplicationJSONObject = null;
            listCertificates401ApplicationJSONObject = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCertificates200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCertificates200ApplicationJson.class);
                res.listCertificates200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCertificates401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCertificates401ApplicationJson.class);
                res.listCertificates401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema.class);
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema.class);
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = out;
            }
        }
        else {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema.class);
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = out;
            }
        }

        return res;
    }
	
}