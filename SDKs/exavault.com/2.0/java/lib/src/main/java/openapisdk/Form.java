package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Form {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Form(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteFormMessageById - Delete a receive form submission
     *
     * Deletes a form submission entry, which represents one time that a visitor filled out the form and uploaded files. This deletes only the record of the submission (the date, the values entered in the form and the names of the files uploaded by the visitor).The share and any associated file resources will not be deleted by this. 
     * 
     * **Notes**:
     * 
     * - Use the [GET /form/entries/{formId}](#operation/getFormMessageById) to list the submissions and obtain the ID of the entry you want to delete
     * - You must have the [DeleteFormData permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) in order to use this operation
     * - It is not possible to un-delete data that is removed in this way
     * 
    **/
    public openapisdk.models.operations.DeleteFormMessageByIdResponse deleteFormMessageById(openapisdk.models.operations.DeleteFormMessageByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/forms/entries/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
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

        openapisdk.models.operations.DeleteFormMessageByIdResponse res = new openapisdk.models.operations.DeleteFormMessageByIdResponse() {{
            emptyResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EmptyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EmptyResponse.class);
                res.emptyResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getFormById - Get receive folder form by Id
     *
     * Returns the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders). The form details will return all the input fields and their settings. 
     * 
     * Use the `include` parameter (with the value **share**) to also retrieve the details of the associated receive folder. 
     * 
     * **Note**
     * 
     * If you prefer to find a form by its shareHash, you can use the [GET /forms](#operation/getFormByShareHash) endpoint instead. 
     * 
    **/
    public openapisdk.models.operations.GetFormByIdResponse getFormById(openapisdk.models.operations.GetFormByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/forms/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
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

        openapisdk.models.operations.GetFormByIdResponse res = new openapisdk.models.operations.GetFormByIdResponse() {{
            formResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FormResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FormResponse.class);
                res.formResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getFormByShareHash - Get receive folder form settings
     *
     * Get the information for the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders) by its shareHash. The form details will return all the input field settings and the CSS for the form.
     * 
     * Use the `include` parameter (with the value **share**) to also get the details of the associated receive folder.
     * 
     * **Note**
     * 
     * - If you prefer to find a form by its ID, you can use the [GET /forms/{id}](#operation/getFormById) endpoint instead. 
     * 
    **/
    public openapisdk.models.operations.GetFormByShareHashResponse getFormByShareHash(openapisdk.models.operations.GetFormByShareHashRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/forms");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
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

        openapisdk.models.operations.GetFormByShareHashResponse res = new openapisdk.models.operations.GetFormByShareHashResponse() {{
            formResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FormResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FormResponse.class);
                res.formResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getFormEntries - Get form data entries for a receive
     *
     * Returns the form data entries for a specific form for a receive. Optional parameters can be included in the call to manage larger data sets.
     * 
    **/
    public openapisdk.models.operations.GetFormEntriesResponse getFormEntries(openapisdk.models.operations.GetFormEntriesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/forms/entries/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
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

        openapisdk.models.operations.GetFormEntriesResponse res = new openapisdk.models.operations.GetFormEntriesResponse() {{
            formEntryResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FormEntryResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FormEntryResponse.class);
                res.formEntryResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateFormById - Updates a form with given parameters
     *
     * Add, update, or delete a form's parameters. This will alter how your users/customers will see and interact with the form when sending you files. 
     * 
     * **Notes**
     * 
     * *This call will **replace** your current form in its entirety.* If you want to keep any existing elements unchanged, be sure to submit the call with an element's current settings to preserve them.                          
    **/
    public openapisdk.models.operations.UpdateFormByIdResponse updateFormById(openapisdk.models.operations.UpdateFormByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/forms/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.UpdateFormByIdResponse res = new openapisdk.models.operations.UpdateFormByIdResponse() {{
            formResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FormResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FormResponse.class);
                res.formResponse = out;
            }
        }

        return res;
    }
	
}