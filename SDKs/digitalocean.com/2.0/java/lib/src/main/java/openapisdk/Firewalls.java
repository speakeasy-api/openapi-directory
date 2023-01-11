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

public class Firewalls {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Firewalls(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * addFirewallDroplets - Add Droplets to a Firewall
     *
     * To assign a Droplet to a firewall, send a POST request to
     * `/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there
     * should be a `droplet_ids` attribute containing a list of Droplet IDs.
     * 
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     * 
    **/
    public openapisdk.models.operations.AddFirewallDropletsResponse addFirewallDroplets(openapisdk.models.operations.AddFirewallDropletsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/firewalls/{firewall_id}/droplets", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AddFirewallDropletsResponse res = new openapisdk.models.operations.AddFirewallDropletsResponse() {{
            addFirewallDroplets401ApplicationJSONObject = null;
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
                openapisdk.models.operations.AddFirewallDroplets401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AddFirewallDroplets401ApplicationJson.class);
                res.addFirewallDroplets401ApplicationJSONObject = out;
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
     * addFirewallRules - Add Rules to a Firewall
     *
     * To add additional access rules to a firewall, send a POST request to
     * `/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an
     * inbound_rules and/or outbound_rules attribute containing an array of rules to
     * be added.
     * 
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     * 
    **/
    public openapisdk.models.operations.AddFirewallRulesResponse addFirewallRules(openapisdk.models.operations.AddFirewallRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/firewalls/{firewall_id}/rules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AddFirewallRulesResponse res = new openapisdk.models.operations.AddFirewallRulesResponse() {{
            addFirewallRules401ApplicationJSONObject = null;
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
                openapisdk.models.operations.AddFirewallRules401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AddFirewallRules401ApplicationJson.class);
                res.addFirewallRules401ApplicationJSONObject = out;
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
     * addFirewallTags - Add Tags to a Firewall
     *
     * To assign a tag representing a group of Droplets to a firewall, send a POST
     * request to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the request,
     * there should be a `tags` attribute containing a list of tag names.
     * 
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     * 
    **/
    public openapisdk.models.operations.AddFirewallTagsResponse addFirewallTags(openapisdk.models.operations.AddFirewallTagsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/firewalls/{firewall_id}/tags", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AddFirewallTagsResponse res = new openapisdk.models.operations.AddFirewallTagsResponse() {{
            addFirewallTags401ApplicationJSONObject = null;
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
                openapisdk.models.operations.AddFirewallTags401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AddFirewallTags401ApplicationJson.class);
                res.addFirewallTags401ApplicationJSONObject = out;
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
     * createFirewall - Create a New Firewall
     *
     * To create a new firewall, send a POST request to `/v2/firewalls`. The request
     * must contain at least one inbound or outbound access rule.
     * 
    **/
    public openapisdk.models.operations.CreateFirewallResponse createFirewall(openapisdk.models.operations.CreateFirewallRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/firewalls");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateFirewallResponse res = new openapisdk.models.operations.CreateFirewallResponse() {{
            createFirewall202ApplicationJSONAny = null;
            createFirewall401ApplicationJSONObject = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
            onev211ClicksGetResponses401ContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.createFirewall202ApplicationJSONAny = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateFirewall401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateFirewall401ApplicationJson.class);
                res.createFirewall401ApplicationJSONObject = out;
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
     * deleteFirewall - Delete a Firewall
     *
     * To delete a firewall send a DELETE request to `/v2/firewalls/$FIREWALL_ID`.
     * 
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     * 
    **/
    public openapisdk.models.operations.DeleteFirewallResponse deleteFirewall(openapisdk.models.operations.DeleteFirewallRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/firewalls/{firewall_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteFirewallResponse res = new openapisdk.models.operations.DeleteFirewallResponse() {{
            deleteFirewall401ApplicationJSONObject = null;
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
                openapisdk.models.operations.DeleteFirewall401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteFirewall401ApplicationJson.class);
                res.deleteFirewall401ApplicationJSONObject = out;
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
     * deleteFirewallDroplets - Remove Droplets from a Firewall
     *
     * To remove a Droplet from a firewall, send a DELETE request to
     * `/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there should
     * be a `droplet_ids` attribute containing a list of Droplet IDs.
     * 
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     * 
    **/
    public openapisdk.models.operations.DeleteFirewallDropletsResponse deleteFirewallDroplets(openapisdk.models.operations.DeleteFirewallDropletsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/firewalls/{firewall_id}/droplets", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteFirewallDropletsResponse res = new openapisdk.models.operations.DeleteFirewallDropletsResponse() {{
            deleteFirewallDroplets401ApplicationJSONObject = null;
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
                openapisdk.models.operations.DeleteFirewallDroplets401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteFirewallDroplets401ApplicationJson.class);
                res.deleteFirewallDroplets401ApplicationJSONObject = out;
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
     * deleteFirewallRules - Remove Rules from a Firewall
     *
     * To remove access rules from a firewall, send a DELETE request to
     * `/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an
     * `inbound_rules` and/or `outbound_rules` attribute containing an array of rules
     * to be removed.
     * 
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     * 
    **/
    public openapisdk.models.operations.DeleteFirewallRulesResponse deleteFirewallRules(openapisdk.models.operations.DeleteFirewallRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/firewalls/{firewall_id}/rules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteFirewallRulesResponse res = new openapisdk.models.operations.DeleteFirewallRulesResponse() {{
            deleteFirewallRules401ApplicationJSONObject = null;
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
                openapisdk.models.operations.DeleteFirewallRules401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteFirewallRules401ApplicationJson.class);
                res.deleteFirewallRules401ApplicationJSONObject = out;
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
     * deleteFirewallTags - Remove Tags from a Firewall
     *
     * To remove a tag representing a group of Droplets from a firewall, send a
     * DELETE request to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the
     * request, there should be a `tags` attribute containing a list of tag names.
     * 
     * No response body will be sent back, but the response code will indicate
     * success. Specifically, the response code will be a 204, which means that the
     * action was successful with no returned body data.
     * 
    **/
    public openapisdk.models.operations.DeleteFirewallTagsResponse deleteFirewallTags(openapisdk.models.operations.DeleteFirewallTagsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/firewalls/{firewall_id}/tags", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteFirewallTagsResponse res = new openapisdk.models.operations.DeleteFirewallTagsResponse() {{
            deleteFirewallTags401ApplicationJSONObject = null;
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
                openapisdk.models.operations.DeleteFirewallTags401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteFirewallTags401ApplicationJson.class);
                res.deleteFirewallTags401ApplicationJSONObject = out;
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
     * getFirewall - Retrieve an Existing Firewall
     *
     * To show information about an existing firewall, send a GET request to `/v2/firewalls/$FIREWALL_ID`.
    **/
    public openapisdk.models.operations.GetFirewallResponse getFirewall(openapisdk.models.operations.GetFirewallRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/firewalls/{firewall_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetFirewallResponse res = new openapisdk.models.operations.GetFirewallResponse() {{
            getFirewall200ApplicationJSONAny = null;
            getFirewall401ApplicationJSONObject = null;
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
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.getFirewall200ApplicationJSONAny = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetFirewall401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetFirewall401ApplicationJson.class);
                res.getFirewall401ApplicationJSONObject = out;
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
     * listFirewalls - List All Firewalls
     *
     * To list all of the firewalls available on your account, send a GET request to `/v2/firewalls`.
    **/
    public openapisdk.models.operations.ListFirewallsResponse listFirewalls(openapisdk.models.operations.ListFirewallsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/firewalls");
        
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

        openapisdk.models.operations.ListFirewallsResponse res = new openapisdk.models.operations.ListFirewallsResponse() {{
            listFirewalls200ApplicationJSONObject = null;
            listFirewalls401ApplicationJSONObject = null;
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
                openapisdk.models.operations.ListFirewalls200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListFirewalls200ApplicationJson.class);
                res.listFirewalls200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListFirewalls401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListFirewalls401ApplicationJson.class);
                res.listFirewalls401ApplicationJSONObject = out;
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
     * updateFirewall - Update a Firewall
     *
     * To update the configuration of an existing firewall, send a PUT request to
     * `/v2/firewalls/$FIREWALL_ID`. The request should contain a full representation
     * of the firewall including existing attributes. **Note that any attributes that
     * are not provided will be reset to their default values.**
     * 
    **/
    public openapisdk.models.operations.UpdateFirewallResponse updateFirewall(openapisdk.models.operations.UpdateFirewallRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/firewalls/{firewall_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateFirewallResponse res = new openapisdk.models.operations.UpdateFirewallResponse() {{
            updateFirewall200ApplicationJSONAny = null;
            updateFirewall401ApplicationJSONObject = null;
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
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.updateFirewall200ApplicationJSONAny = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UpdateFirewall401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UpdateFirewall401ApplicationJson.class);
                res.updateFirewall401ApplicationJSONObject = out;
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