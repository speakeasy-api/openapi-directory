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

public class VpCs {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public VpCs(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createVpc - Create a New VPC
     *
     * To create a VPC, send a POST request to `/v2/vpcs` specifying the attributes
     * in the table below in the JSON body.
     * 
     * **Note:** If you do not currently have a VPC network in a specific datacenter
     * region, the first one that you create will be set as the default for that
     * region. The default VPC for a region cannot be changed or deleted.
     * 
    **/
    public openapisdk.models.operations.CreateVpcResponse createVpc(openapisdk.models.operations.CreateVpcRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/vpcs");
        
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

        openapisdk.models.operations.CreateVpcResponse res = new openapisdk.models.operations.CreateVpcResponse() {{
            createVpc201ApplicationJSONObject = null;
            createVpc401ApplicationJSONObject = null;
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
                openapisdk.models.operations.CreateVpc201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateVpc201ApplicationJson.class);
                res.createVpc201ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateVpc401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateVpc401ApplicationJson.class);
                res.createVpc401ApplicationJSONObject = out;
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
     * deleteVpc - Delete a VPC
     *
     * To delete a VPC, send a DELETE request to `/v2/vpcs/$VPC_ID`. A 204 status
     * code with no body will be returned in response to a successful request.
     * 
     * The default VPC for a region can not be deleted. Additionally, a VPC can only
     * be deleted if it does not contain any member resources. Attempting to delete
     * a region's default VPC or a VPC that still has members will result in a
     * 403 Forbidden error response.
     * 
    **/
    public openapisdk.models.operations.DeleteVpcResponse deleteVpc(openapisdk.models.operations.DeleteVpcRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/vpcs/{vpc_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteVpcResponse res = new openapisdk.models.operations.DeleteVpcResponse() {{
            deleteVpc401ApplicationJSONObject = null;
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
                openapisdk.models.operations.DeleteVpc401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteVpc401ApplicationJson.class);
                res.deleteVpc401ApplicationJSONObject = out;
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
     * getVpc - Retrieve an Existing VPC
     *
     * To show information about an existing VPC, send a GET request to `/v2/vpcs/$VPC_ID`.
    **/
    public openapisdk.models.operations.GetVpcResponse getVpc(openapisdk.models.operations.GetVpcRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/vpcs/{vpc_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVpcResponse res = new openapisdk.models.operations.GetVpcResponse() {{
            getVpc200ApplicationJSONObject = null;
            getVpc401ApplicationJSONObject = null;
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
                openapisdk.models.operations.GetVpc200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetVpc200ApplicationJson.class);
                res.getVpc200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetVpc401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetVpc401ApplicationJson.class);
                res.getVpc401ApplicationJSONObject = out;
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
     * listVpcMembers - List the Member Resources of a VPC
     *
     * To list all of the resources that are members of a VPC, send a GET request to
     * `/v2/vpcs/$VPC_ID/members`.
     * 
     * To only list resources of a specific type that are members of the VPC,
     * included a `resource_type` query parameter. For example, to only list Droplets
     * in the VPC, send a GET request to `/v2/vpcs/$VPC_ID/members?resource_type=droplet`.
     * 
    **/
    public openapisdk.models.operations.ListVpcMembersResponse listVpcMembers(openapisdk.models.operations.ListVpcMembersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/vpcs/{vpc_id}/members", request.pathParams);
        
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

        openapisdk.models.operations.ListVpcMembersResponse res = new openapisdk.models.operations.ListVpcMembersResponse() {{
            listVpcMembers200ApplicationJSONObject = null;
            listVpcMembers401ApplicationJSONObject = null;
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
                openapisdk.models.operations.ListVpcMembers200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListVpcMembers200ApplicationJson.class);
                res.listVpcMembers200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListVpcMembers401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListVpcMembers401ApplicationJson.class);
                res.listVpcMembers401ApplicationJSONObject = out;
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
     * listVpcs - List All VPCs
     *
     * To list all of the VPCs on your account, send a GET request to `/v2/vpcs`.
    **/
    public openapisdk.models.operations.ListVpcsResponse listVpcs(openapisdk.models.operations.ListVpcsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/vpcs");
        
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

        openapisdk.models.operations.ListVpcsResponse res = new openapisdk.models.operations.ListVpcsResponse() {{
            listVpcs200ApplicationJSONObject = null;
            listVpcs401ApplicationJSONObject = null;
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
                openapisdk.models.operations.ListVpcs200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListVpcs200ApplicationJson.class);
                res.listVpcs200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListVpcs401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListVpcs401ApplicationJson.class);
                res.listVpcs401ApplicationJSONObject = out;
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
     * patchVpc - Partially Update a VPC
     *
     * To update a subset of information about a VPC, send a PATCH request to
     * `/v2/vpcs/$VPC_ID`.
     * 
    **/
    public openapisdk.models.operations.PatchVpcResponse patchVpc(openapisdk.models.operations.PatchVpcRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/vpcs/{vpc_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PatchVpcResponse res = new openapisdk.models.operations.PatchVpcResponse() {{
            patchVpc200ApplicationJSONObject = null;
            patchVpc401ApplicationJSONObject = null;
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
                openapisdk.models.operations.PatchVpc200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchVpc200ApplicationJson.class);
                res.patchVpc200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchVpc401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchVpc401ApplicationJson.class);
                res.patchVpc401ApplicationJSONObject = out;
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
     * updateVpc - Update a VPC
     *
     * To update information about a VPC, send a PUT request to `/v2/vpcs/$VPC_ID`.
     * 
    **/
    public openapisdk.models.operations.UpdateVpcResponse updateVpc(openapisdk.models.operations.UpdateVpcRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/vpcs/{vpc_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateVpcResponse res = new openapisdk.models.operations.UpdateVpcResponse() {{
            updateVpc200ApplicationJSONObject = null;
            updateVpc401ApplicationJSONObject = null;
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
                openapisdk.models.operations.UpdateVpc200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UpdateVpc200ApplicationJson.class);
                res.updateVpc200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UpdateVpc401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UpdateVpc401ApplicationJson.class);
                res.updateVpc401ApplicationJSONObject = out;
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