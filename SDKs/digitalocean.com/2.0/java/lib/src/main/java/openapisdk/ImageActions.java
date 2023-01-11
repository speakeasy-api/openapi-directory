package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class ImageActions {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ImageActions(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getImageAction - Retrieve an Existing Action
     *
     * To retrieve the status of an image action, send a GET request to `/v2/images/$IMAGE_ID/actions/$IMAGE_ACTION_ID`.
    **/
    public openapisdk.models.operations.GetImageActionResponse getImageAction(openapisdk.models.operations.GetImageActionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/images/{image_id}/actions/{action_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetImageActionResponse res = new openapisdk.models.operations.GetImageActionResponse() {{
            onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems = null;
            getImageAction401ApplicationJSONObject = null;
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
                openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems.class);
                res.onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetImageAction401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetImageAction401ApplicationJson.class);
                res.getImageAction401ApplicationJSONObject = out;
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
     * listImageActions - List All Actions for an Image
     *
     * To retrieve all actions that have been executed on an image, send a GET request to `/v2/images/$IMAGE_ID/actions`.
    **/
    public openapisdk.models.operations.ListImageActionsResponse listImageActions(openapisdk.models.operations.ListImageActionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/images/{image_id}/actions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ListImageActionsResponse res = new openapisdk.models.operations.ListImageActionsResponse() {{
            listImageActions200ApplicationJSONObject = null;
            listImageActions401ApplicationJSONObject = null;
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
                openapisdk.models.operations.ListImageActions200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListImageActions200ApplicationJson.class);
                res.listImageActions200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListImageActions401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListImageActions401ApplicationJson.class);
                res.listImageActions401ApplicationJSONObject = out;
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
     * postImageAction - Initiate an Image Action
     *
     * The following actions are available on an Image.
     * 
     * ## Convert an Image to a Snapshot
     * 
     * To convert an image, for example, a backup to a snapshot, send a POST request
     * to `/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `convert`.
     * 
     * ## Transfer an Image
     * 
     * To transfer an image to another region, send a POST request to
     * `/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `transfer` and set
     * `region` attribute to the slug identifier of the region you wish to transfer
     * to.
     * 
    **/
    public openapisdk.models.operations.PostImageActionResponse postImageAction(openapisdk.models.operations.PostImageActionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/images/{image_id}/actions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostImageActionResponse res = new openapisdk.models.operations.PostImageActionResponse() {{
            onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems = null;
            postImageAction401ApplicationJSONObject = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
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
                openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems.class);
                res.onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostImageAction401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostImageAction401ApplicationJson.class);
                res.postImageAction401ApplicationJSONObject = out;
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
	
}