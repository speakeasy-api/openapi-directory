package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class SnmPv3 {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public SnmPv3(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * protocolSnmpv3AccessAdd - Adds a new access entry with the specified parameters.
     *
     * Adds a new access entry with the specified parameters.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3AccessAddResponse protocolSnmpv3AccessAdd(openapisdk.models.operations.ProtocolSnmpv3AccessAddRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/add/{groupName}/{prefix}/{securityModel}/{securityLevel}/{contextMatch}/{readView}/{writeView}/{notifyView}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3AccessAddResponse res = new openapisdk.models.operations.ProtocolSnmpv3AccessAddResponse() {{
            protocolSnmpv3AccessAdd200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmpv3AccessAdd200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3AccessClear - Clears all access entries.
     *
     * Clears all access entries.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3AccessClearResponse protocolSnmpv3AccessClear(openapisdk.models.operations.ProtocolSnmpv3AccessClearRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/clear", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3AccessClearResponse res = new openapisdk.models.operations.ProtocolSnmpv3AccessClearResponse() {{
            protocolSnmpv3AccessClear200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmpv3AccessClear200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3AccessDel - Deletes the specified access entry.
     *
     * Deletes the specified access entry.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3AccessDelResponse protocolSnmpv3AccessDel(openapisdk.models.operations.ProtocolSnmpv3AccessDelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/del/{accessName}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3AccessDelResponse res = new openapisdk.models.operations.ProtocolSnmpv3AccessDelResponse() {{
            protocolSnmpv3AccessDel200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmpv3AccessDel200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3AccessList - Returns the current acccess entries as an array of strings.
     *
     * Returns the current acccess entries as an array of strings.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3AccessListResponse protocolSnmpv3AccessList(openapisdk.models.operations.ProtocolSnmpv3AccessListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/list", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3AccessListResponse res = new openapisdk.models.operations.ProtocolSnmpv3AccessListResponse() {{
            protocolSnmpv3AccessList200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.protocolSnmpv3AccessList200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3GetConfig - Returns the SNMPv3 configuration.
     *
     * Returns the SNMPv3 configuration.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3GetConfigResponse protocolSnmpv3GetConfig(openapisdk.models.operations.ProtocolSnmpv3GetConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/config", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3GetConfigResponse res = new openapisdk.models.operations.ProtocolSnmpv3GetConfigResponse() {{
            configSNMPv3 = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConfigSnmPv3 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConfigSnmPv3.class);
                res.configSNMPv3 = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3GetContextEngineid - Retrieves the contextEngineID for the agent instance.
     *
     * Retrieves the contextEngineID for the agent instance.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3GetContextEngineidResponse protocolSnmpv3GetContextEngineid(openapisdk.models.operations.ProtocolSnmpv3GetContextEngineidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/context_engineid", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3GetContextEngineidResponse res = new openapisdk.models.operations.ProtocolSnmpv3GetContextEngineidResponse() {{
            protocolSnmpv3GetContextEngineid200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmpv3GetContextEngineid200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3GetEngineboots - Retrieves the number of times the agent has been restarted.
     *
     * Retrieves the number of times the agent has been restarted.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3GetEnginebootsResponse protocolSnmpv3GetEngineboots(openapisdk.models.operations.ProtocolSnmpv3GetEnginebootsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineboots", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3GetEnginebootsResponse res = new openapisdk.models.operations.ProtocolSnmpv3GetEnginebootsResponse() {{
            protocolSnmpv3GetEngineboots200ApplicationJSONInt32Integer = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Integer out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Integer.class);
                res.protocolSnmpv3GetEngineboots200ApplicationJSONInt32Integer = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3GetEngineid - For started agents, retrieves the current engineID in use by the snmpv3 module.
     *
     * For stopped agents, this operation is meaningless. If not explicitly set by the user then the autogenerated engineID is returned. The format of the engineID is in the familiar hex format, eg. \x01 23 45 67 89...
    **/
    public openapisdk.models.operations.ProtocolSnmpv3GetEngineidResponse protocolSnmpv3GetEngineid(openapisdk.models.operations.ProtocolSnmpv3GetEngineidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineid", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3GetEngineidResponse res = new openapisdk.models.operations.ProtocolSnmpv3GetEngineidResponse() {{
            protocolSnmpv3GetEngineid200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmpv3GetEngineid200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3GetEnginetime - Retrieves the time in seconds for which the agent has been running.
     *
     * Retrieves the time in seconds for which the agent has been running.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3GetEnginetimeResponse protocolSnmpv3GetEnginetime(openapisdk.models.operations.ProtocolSnmpv3GetEnginetimeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/enginetime", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3GetEnginetimeResponse res = new openapisdk.models.operations.ProtocolSnmpv3GetEnginetimeResponse() {{
            protocolSnmpv3GetEnginetime200ApplicationJSONInt32Integer = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Integer out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Integer.class);
                res.protocolSnmpv3GetEnginetime200ApplicationJSONInt32Integer = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3GroupAdd - Adds a new group entry with the specified parameters.
     *
     * Adds a new group entry with the specified parameters.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3GroupAddResponse protocolSnmpv3GroupAdd(openapisdk.models.operations.ProtocolSnmpv3GroupAddRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/add/{groupName}/{securityModel}/{securityName}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3GroupAddResponse res = new openapisdk.models.operations.ProtocolSnmpv3GroupAddResponse() {{
            protocolSnmpv3GroupAdd200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmpv3GroupAdd200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3GroupClear - Clears all group entries.
     *
     * Clears all group entries.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3GroupClearResponse protocolSnmpv3GroupClear(openapisdk.models.operations.ProtocolSnmpv3GroupClearRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/clear", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3GroupClearResponse res = new openapisdk.models.operations.ProtocolSnmpv3GroupClearResponse() {{
            protocolSnmpv3GroupClear200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmpv3GroupClear200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3GroupDel - Deletes the specified group entry.
     *
     * Deletes the specified group entry.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3GroupDelResponse protocolSnmpv3GroupDel(openapisdk.models.operations.ProtocolSnmpv3GroupDelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/del/{groupName}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3GroupDelResponse res = new openapisdk.models.operations.ProtocolSnmpv3GroupDelResponse() {{
            protocolSnmpv3GroupDel200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmpv3GroupDel200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3GroupList - Returns the current group entries as an array of strings.
     *
     * Returns the current group entries as an array of strings.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3GroupListResponse protocolSnmpv3GroupList(openapisdk.models.operations.ProtocolSnmpv3GroupListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/list", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3GroupListResponse res = new openapisdk.models.operations.ProtocolSnmpv3GroupListResponse() {{
            protocolSnmpv3GroupList200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.protocolSnmpv3GroupList200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3SetConfig - Changes the SNMPv3 configuration.
     *
     * Changes the SNMPv3 configuration.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3SetConfigResponse protocolSnmpv3SetConfig(openapisdk.models.operations.ProtocolSnmpv3SetConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/set/config/{parameter}/{value}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3SetConfigResponse res = new openapisdk.models.operations.ProtocolSnmpv3SetConfigResponse() {{
            protocolSnmpv3SetConfig200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmpv3SetConfig200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3UserAdd - Adds a new user entry with the specified parameters.
     *
     * Adds a new user entry with the specified parameters.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3UserAddResponse protocolSnmpv3UserAdd(openapisdk.models.operations.ProtocolSnmpv3UserAddRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/add/{userName}/{securityName}/{authProtocol}/{authKey}/{privProtocol}/{privKey}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3UserAddResponse res = new openapisdk.models.operations.ProtocolSnmpv3UserAddResponse() {{
            protocolSnmpv3UserAdd200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmpv3UserAdd200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3UserClear - Clears all user entries.
     *
     * Clears all user entries.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3UserClearResponse protocolSnmpv3UserClear(openapisdk.models.operations.ProtocolSnmpv3UserClearRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/clear", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3UserClearResponse res = new openapisdk.models.operations.ProtocolSnmpv3UserClearResponse() {{
            protocolSnmpv3UserClear200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmpv3UserClear200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3UserDel - Deletes the specified user entry.
     *
     * Deletes the specified user entry.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3UserDelResponse protocolSnmpv3UserDel(openapisdk.models.operations.ProtocolSnmpv3UserDelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/del/{userName}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3UserDelResponse res = new openapisdk.models.operations.ProtocolSnmpv3UserDelResponse() {{
            protocolSnmpv3UserDel200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmpv3UserDel200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3UserList - Returns the current user entries as a Tcl list.
     *
     * Returns the current user entries as a Tcl list.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3UserListResponse protocolSnmpv3UserList(openapisdk.models.operations.ProtocolSnmpv3UserListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/list", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3UserListResponse res = new openapisdk.models.operations.ProtocolSnmpv3UserListResponse() {{
            protocolSnmpv3UserList200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.protocolSnmpv3UserList200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3UsmSave - Saves current user settings in the currently loaded USM config file.
     *
     * Saves current user settings in the currently loaded USM config file.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3UsmSaveResponse protocolSnmpv3UsmSave(openapisdk.models.operations.ProtocolSnmpv3UsmSaveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/save", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3UsmSaveResponse res = new openapisdk.models.operations.ProtocolSnmpv3UsmSaveResponse() {{
            protocolSnmpv3UsmSave200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.protocolSnmpv3UsmSave200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3UsmSaveas - Saves current user settings in the specified USM config file.
     *
     * Saves current user settings in the specified USM config file.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3UsmSaveasResponse protocolSnmpv3UsmSaveas(openapisdk.models.operations.ProtocolSnmpv3UsmSaveasRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/saveas/{filename}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3UsmSaveasResponse res = new openapisdk.models.operations.ProtocolSnmpv3UsmSaveasResponse() {{
            protocolSnmpv3UsmSaveas200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.protocolSnmpv3UsmSaveas200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3VacmSave - Saves current group, access, view settings in the currently loaded VACM config file.
     *
     * Saves current group, access, view settings in the currently loaded VACM config file.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3VacmSaveResponse protocolSnmpv3VacmSave(openapisdk.models.operations.ProtocolSnmpv3VacmSaveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/save", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3VacmSaveResponse res = new openapisdk.models.operations.ProtocolSnmpv3VacmSaveResponse() {{
            protocolSnmpv3VacmSave200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.protocolSnmpv3VacmSave200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3VacmSaveas - Saves current group, access, view settings in the specified VACM config file.
     *
     * Saves current group, access, view settings in the specified VACM config file.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3VacmSaveasResponse protocolSnmpv3VacmSaveas(openapisdk.models.operations.ProtocolSnmpv3VacmSaveasRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/saveas/{filename}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3VacmSaveasResponse res = new openapisdk.models.operations.ProtocolSnmpv3VacmSaveasResponse() {{
            protocolSnmpv3VacmSaveas200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.protocolSnmpv3VacmSaveas200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3ViewAdd - Adds a new view entry with the specified parameters.
     *
     * Adds a new view entry with the specified parameters.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3ViewAddResponse protocolSnmpv3ViewAdd(openapisdk.models.operations.ProtocolSnmpv3ViewAddRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/add/{viewName}/{viewType}/{subtree}/{mask}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3ViewAddResponse res = new openapisdk.models.operations.ProtocolSnmpv3ViewAddResponse() {{
            protocolSnmpv3ViewAdd200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmpv3ViewAdd200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3ViewClear - Clears all view entries.
     *
     * Clears all view entries.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3ViewClearResponse protocolSnmpv3ViewClear(openapisdk.models.operations.ProtocolSnmpv3ViewClearRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/clear", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3ViewClearResponse res = new openapisdk.models.operations.ProtocolSnmpv3ViewClearResponse() {{
            protocolSnmpv3ViewClear200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmpv3ViewClear200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3ViewDel - Deletes the specified view entry.
     *
     * Deletes the specified view entry.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3ViewDelResponse protocolSnmpv3ViewDel(openapisdk.models.operations.ProtocolSnmpv3ViewDelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/del/{viewName}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3ViewDelResponse res = new openapisdk.models.operations.ProtocolSnmpv3ViewDelResponse() {{
            protocolSnmpv3ViewDel200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmpv3ViewDel200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmpv3ViewList - Returns the current view entries as an array of strings.
     *
     * Returns the current view entries as an array of strings.
    **/
    public openapisdk.models.operations.ProtocolSnmpv3ViewListResponse protocolSnmpv3ViewList(openapisdk.models.operations.ProtocolSnmpv3ViewListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/list", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmpv3ViewListResponse res = new openapisdk.models.operations.ProtocolSnmpv3ViewListResponse() {{
            protocolSnmpv3ViewList200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.protocolSnmpv3ViewList200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
}