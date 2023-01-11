package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Author {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Author(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createAuthorIfNotExistsForUsingGet - this functions helps you to map your application author ids to Etherpad author ids
    **/
    public openapisdk.models.operations.CreateAuthorIfNotExistsForUsingGetResponse createAuthorIfNotExistsForUsingGet(openapisdk.models.operations.CreateAuthorIfNotExistsForUsingGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/createAuthorIfNotExistsFor");
        
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

        openapisdk.models.operations.CreateAuthorIfNotExistsForUsingGetResponse res = new openapisdk.models.operations.CreateAuthorIfNotExistsForUsingGetResponse() {{
            createAuthorIfNotExistsForUsingGET200ApplicationJSONObject = null;
            createAuthorIfNotExistsForUsingGET400ApplicationJSONObject = null;
            createAuthorIfNotExistsForUsingGET401ApplicationJSONObject = null;
            createAuthorIfNotExistsForUsingGET500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateAuthorIfNotExistsForUsingGet200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateAuthorIfNotExistsForUsingGet200ApplicationJson.class);
                res.createAuthorIfNotExistsForUsingGET200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateAuthorIfNotExistsForUsingGet400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateAuthorIfNotExistsForUsingGet400ApplicationJson.class);
                res.createAuthorIfNotExistsForUsingGET400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateAuthorIfNotExistsForUsingGet401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateAuthorIfNotExistsForUsingGet401ApplicationJson.class);
                res.createAuthorIfNotExistsForUsingGET401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateAuthorIfNotExistsForUsingGet500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateAuthorIfNotExistsForUsingGet500ApplicationJson.class);
                res.createAuthorIfNotExistsForUsingGET500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createAuthorIfNotExistsForUsingPost - this functions helps you to map your application author ids to Etherpad author ids
    **/
    public openapisdk.models.operations.CreateAuthorIfNotExistsForUsingPostResponse createAuthorIfNotExistsForUsingPost(openapisdk.models.operations.CreateAuthorIfNotExistsForUsingPostRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/createAuthorIfNotExistsFor");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.CreateAuthorIfNotExistsForUsingPostResponse res = new openapisdk.models.operations.CreateAuthorIfNotExistsForUsingPostResponse() {{
            createAuthorIfNotExistsForUsingPOST200ApplicationJSONObject = null;
            createAuthorIfNotExistsForUsingPOST400ApplicationJSONObject = null;
            createAuthorIfNotExistsForUsingPOST401ApplicationJSONObject = null;
            createAuthorIfNotExistsForUsingPOST500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateAuthorIfNotExistsForUsingPost200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateAuthorIfNotExistsForUsingPost200ApplicationJson.class);
                res.createAuthorIfNotExistsForUsingPOST200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateAuthorIfNotExistsForUsingPost400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateAuthorIfNotExistsForUsingPost400ApplicationJson.class);
                res.createAuthorIfNotExistsForUsingPOST400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateAuthorIfNotExistsForUsingPost401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateAuthorIfNotExistsForUsingPost401ApplicationJson.class);
                res.createAuthorIfNotExistsForUsingPOST401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateAuthorIfNotExistsForUsingPost500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateAuthorIfNotExistsForUsingPost500ApplicationJson.class);
                res.createAuthorIfNotExistsForUsingPOST500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createAuthorUsingGet - creates a new author
    **/
    public openapisdk.models.operations.CreateAuthorUsingGetResponse createAuthorUsingGet(openapisdk.models.operations.CreateAuthorUsingGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/createAuthor");
        
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

        openapisdk.models.operations.CreateAuthorUsingGetResponse res = new openapisdk.models.operations.CreateAuthorUsingGetResponse() {{
            createAuthorUsingGET200ApplicationJSONObject = null;
            createAuthorUsingGET400ApplicationJSONObject = null;
            createAuthorUsingGET401ApplicationJSONObject = null;
            createAuthorUsingGET500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateAuthorUsingGet200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateAuthorUsingGet200ApplicationJson.class);
                res.createAuthorUsingGET200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateAuthorUsingGet400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateAuthorUsingGet400ApplicationJson.class);
                res.createAuthorUsingGET400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateAuthorUsingGet401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateAuthorUsingGet401ApplicationJson.class);
                res.createAuthorUsingGET401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateAuthorUsingGet500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateAuthorUsingGet500ApplicationJson.class);
                res.createAuthorUsingGET500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createAuthorUsingPost - creates a new author
    **/
    public openapisdk.models.operations.CreateAuthorUsingPostResponse createAuthorUsingPost(openapisdk.models.operations.CreateAuthorUsingPostRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/createAuthor");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.CreateAuthorUsingPostResponse res = new openapisdk.models.operations.CreateAuthorUsingPostResponse() {{
            createAuthorUsingPOST200ApplicationJSONObject = null;
            createAuthorUsingPOST400ApplicationJSONObject = null;
            createAuthorUsingPOST401ApplicationJSONObject = null;
            createAuthorUsingPOST500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateAuthorUsingPost200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateAuthorUsingPost200ApplicationJson.class);
                res.createAuthorUsingPOST200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateAuthorUsingPost400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateAuthorUsingPost400ApplicationJson.class);
                res.createAuthorUsingPOST400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateAuthorUsingPost401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateAuthorUsingPost401ApplicationJson.class);
                res.createAuthorUsingPOST401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateAuthorUsingPost500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateAuthorUsingPost500ApplicationJson.class);
                res.createAuthorUsingPOST500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAuthorNameUsingGet - Returns the Author Name of the author
    **/
    public openapisdk.models.operations.GetAuthorNameUsingGetResponse getAuthorNameUsingGet(openapisdk.models.operations.GetAuthorNameUsingGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/getAuthorName");
        
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

        openapisdk.models.operations.GetAuthorNameUsingGetResponse res = new openapisdk.models.operations.GetAuthorNameUsingGetResponse() {{
            getAuthorNameUsingGET200ApplicationJSONObject = null;
            getAuthorNameUsingGET400ApplicationJSONObject = null;
            getAuthorNameUsingGET401ApplicationJSONObject = null;
            getAuthorNameUsingGET500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetAuthorNameUsingGet200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetAuthorNameUsingGet200ApplicationJson.class);
                res.getAuthorNameUsingGET200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetAuthorNameUsingGet400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetAuthorNameUsingGet400ApplicationJson.class);
                res.getAuthorNameUsingGET400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetAuthorNameUsingGet401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetAuthorNameUsingGet401ApplicationJson.class);
                res.getAuthorNameUsingGET401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetAuthorNameUsingGet500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetAuthorNameUsingGet500ApplicationJson.class);
                res.getAuthorNameUsingGET500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAuthorNameUsingPost - Returns the Author Name of the author
    **/
    public openapisdk.models.operations.GetAuthorNameUsingPostResponse getAuthorNameUsingPost(openapisdk.models.operations.GetAuthorNameUsingPostRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/getAuthorName");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.GetAuthorNameUsingPostResponse res = new openapisdk.models.operations.GetAuthorNameUsingPostResponse() {{
            getAuthorNameUsingPOST200ApplicationJSONObject = null;
            getAuthorNameUsingPOST400ApplicationJSONObject = null;
            getAuthorNameUsingPOST401ApplicationJSONObject = null;
            getAuthorNameUsingPOST500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetAuthorNameUsingPost200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetAuthorNameUsingPost200ApplicationJson.class);
                res.getAuthorNameUsingPOST200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetAuthorNameUsingPost400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetAuthorNameUsingPost400ApplicationJson.class);
                res.getAuthorNameUsingPOST400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetAuthorNameUsingPost401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetAuthorNameUsingPost401ApplicationJson.class);
                res.getAuthorNameUsingPOST401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetAuthorNameUsingPost500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetAuthorNameUsingPost500ApplicationJson.class);
                res.getAuthorNameUsingPOST500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * listPadsOfAuthorUsingGet - returns an array of all pads this author contributed to
    **/
    public openapisdk.models.operations.ListPadsOfAuthorUsingGetResponse listPadsOfAuthorUsingGet(openapisdk.models.operations.ListPadsOfAuthorUsingGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/listPadsOfAuthor");
        
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

        openapisdk.models.operations.ListPadsOfAuthorUsingGetResponse res = new openapisdk.models.operations.ListPadsOfAuthorUsingGetResponse() {{
            listPadsOfAuthorUsingGET200ApplicationJSONObject = null;
            listPadsOfAuthorUsingGET400ApplicationJSONObject = null;
            listPadsOfAuthorUsingGET401ApplicationJSONObject = null;
            listPadsOfAuthorUsingGET500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListPadsOfAuthorUsingGet200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListPadsOfAuthorUsingGet200ApplicationJson.class);
                res.listPadsOfAuthorUsingGET200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListPadsOfAuthorUsingGet400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListPadsOfAuthorUsingGet400ApplicationJson.class);
                res.listPadsOfAuthorUsingGET400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListPadsOfAuthorUsingGet401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListPadsOfAuthorUsingGet401ApplicationJson.class);
                res.listPadsOfAuthorUsingGET401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListPadsOfAuthorUsingGet500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListPadsOfAuthorUsingGet500ApplicationJson.class);
                res.listPadsOfAuthorUsingGET500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * listPadsOfAuthorUsingPost - returns an array of all pads this author contributed to
    **/
    public openapisdk.models.operations.ListPadsOfAuthorUsingPostResponse listPadsOfAuthorUsingPost(openapisdk.models.operations.ListPadsOfAuthorUsingPostRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/listPadsOfAuthor");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.ListPadsOfAuthorUsingPostResponse res = new openapisdk.models.operations.ListPadsOfAuthorUsingPostResponse() {{
            listPadsOfAuthorUsingPOST200ApplicationJSONObject = null;
            listPadsOfAuthorUsingPOST400ApplicationJSONObject = null;
            listPadsOfAuthorUsingPOST401ApplicationJSONObject = null;
            listPadsOfAuthorUsingPOST500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListPadsOfAuthorUsingPost200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListPadsOfAuthorUsingPost200ApplicationJson.class);
                res.listPadsOfAuthorUsingPOST200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListPadsOfAuthorUsingPost400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListPadsOfAuthorUsingPost400ApplicationJson.class);
                res.listPadsOfAuthorUsingPOST400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListPadsOfAuthorUsingPost401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListPadsOfAuthorUsingPost401ApplicationJson.class);
                res.listPadsOfAuthorUsingPOST401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListPadsOfAuthorUsingPost500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListPadsOfAuthorUsingPost500ApplicationJson.class);
                res.listPadsOfAuthorUsingPOST500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSessionsOfAuthorUsingGet - returns all sessions of an author
    **/
    public openapisdk.models.operations.ListSessionsOfAuthorUsingGetResponse listSessionsOfAuthorUsingGet(openapisdk.models.operations.ListSessionsOfAuthorUsingGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/listSessionsOfAuthor");
        
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

        openapisdk.models.operations.ListSessionsOfAuthorUsingGetResponse res = new openapisdk.models.operations.ListSessionsOfAuthorUsingGetResponse() {{
            listSessionsOfAuthorUsingGET200ApplicationJSONObject = null;
            listSessionsOfAuthorUsingGET400ApplicationJSONObject = null;
            listSessionsOfAuthorUsingGET401ApplicationJSONObject = null;
            listSessionsOfAuthorUsingGET500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSessionsOfAuthorUsingGet200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSessionsOfAuthorUsingGet200ApplicationJson.class);
                res.listSessionsOfAuthorUsingGET200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSessionsOfAuthorUsingGet400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSessionsOfAuthorUsingGet400ApplicationJson.class);
                res.listSessionsOfAuthorUsingGET400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSessionsOfAuthorUsingGet401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSessionsOfAuthorUsingGet401ApplicationJson.class);
                res.listSessionsOfAuthorUsingGET401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSessionsOfAuthorUsingGet500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSessionsOfAuthorUsingGet500ApplicationJson.class);
                res.listSessionsOfAuthorUsingGET500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSessionsOfAuthorUsingPost - returns all sessions of an author
    **/
    public openapisdk.models.operations.ListSessionsOfAuthorUsingPostResponse listSessionsOfAuthorUsingPost(openapisdk.models.operations.ListSessionsOfAuthorUsingPostRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/listSessionsOfAuthor");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.ListSessionsOfAuthorUsingPostResponse res = new openapisdk.models.operations.ListSessionsOfAuthorUsingPostResponse() {{
            listSessionsOfAuthorUsingPOST200ApplicationJSONObject = null;
            listSessionsOfAuthorUsingPOST400ApplicationJSONObject = null;
            listSessionsOfAuthorUsingPOST401ApplicationJSONObject = null;
            listSessionsOfAuthorUsingPOST500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSessionsOfAuthorUsingPost200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSessionsOfAuthorUsingPost200ApplicationJson.class);
                res.listSessionsOfAuthorUsingPOST200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSessionsOfAuthorUsingPost400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSessionsOfAuthorUsingPost400ApplicationJson.class);
                res.listSessionsOfAuthorUsingPOST400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSessionsOfAuthorUsingPost401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSessionsOfAuthorUsingPost401ApplicationJson.class);
                res.listSessionsOfAuthorUsingPOST401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSessionsOfAuthorUsingPost500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSessionsOfAuthorUsingPost500ApplicationJson.class);
                res.listSessionsOfAuthorUsingPOST500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}