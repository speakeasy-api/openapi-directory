package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class Snmptcp {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Snmptcp(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * protocolSnmptcpGetArgs - Show the agent's SNMPTCP argument structure
     *
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    public openapisdk.models.operations.ProtocolSnmptcpGetArgsResponse protocolSnmptcpGetArgs(openapisdk.models.operations.ProtocolSnmptcpGetArgsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/args", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmptcpGetArgsResponse res = new openapisdk.models.operations.ProtocolSnmptcpGetArgsResponse() {{
            protocolSnmptcpGetArgs200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.protocolSnmptcpGetArgs200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmptcpGetConfig - Show the agent's SNMPTCP configuration
     *
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    public openapisdk.models.operations.ProtocolSnmptcpGetConfigResponse protocolSnmptcpGetConfig(openapisdk.models.operations.ProtocolSnmptcpGetConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/config", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmptcpGetConfigResponse res = new openapisdk.models.operations.ProtocolSnmptcpGetConfigResponse() {{
            configSNMPTCP = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConfigSnmptcp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConfigSnmptcp.class);
                res.configSNMPTCP = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmptcpGetStatistics - Show the agent's SNMPTCP statistics
     *
     * Statistics of fields indicated in the headers
    **/
    public openapisdk.models.operations.ProtocolSnmptcpGetStatisticsResponse protocolSnmptcpGetStatistics(openapisdk.models.operations.ProtocolSnmptcpGetStatisticsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/statistics", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmptcpGetStatisticsResponse res = new openapisdk.models.operations.ProtocolSnmptcpGetStatisticsResponse() {{
            protocolSnmptcpGetStatistics200ApplicationJSONInt32Integers = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Integer[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Integer[].class);
                res.protocolSnmptcpGetStatistics200ApplicationJSONInt32Integers = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmptcpGetStatsHdr - Show the SNMPTCP statistics headers
     *
     * The headers of statistics fields
    **/
    public openapisdk.models.operations.ProtocolSnmptcpGetStatsHdrResponse protocolSnmptcpGetStatsHdr() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/protocol/msg/snmptcp/get/stats_hdr");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmptcpGetStatsHdrResponse res = new openapisdk.models.operations.ProtocolSnmptcpGetStatsHdrResponse() {{
            protocolSnmptcpGetStatsHdr200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.protocolSnmptcpGetStatsHdr200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmptcpGetTrace - Show the agent's SNMPTCP traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    public openapisdk.models.operations.ProtocolSnmptcpGetTraceResponse protocolSnmptcpGetTrace(openapisdk.models.operations.ProtocolSnmptcpGetTraceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/trace", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmptcpGetTraceResponse res = new openapisdk.models.operations.ProtocolSnmptcpGetTraceResponse() {{
            configSNMPTCP = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConfigSnmptcp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConfigSnmptcp.class);
                res.configSNMPTCP = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmptcpIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    public openapisdk.models.operations.ProtocolSnmptcpIpaliasDisableResponse protocolSnmptcpIpaliasDisable(openapisdk.models.operations.ProtocolSnmptcpIpaliasDisableRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/disable/{ipaddress}/{port}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmptcpIpaliasDisableResponse res = new openapisdk.models.operations.ProtocolSnmptcpIpaliasDisableResponse() {{
            protocolSnmptcpIpaliasDisable200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmptcpIpaliasDisable200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmptcpIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    public openapisdk.models.operations.ProtocolSnmptcpIpaliasEnableResponse protocolSnmptcpIpaliasEnable(openapisdk.models.operations.ProtocolSnmptcpIpaliasEnableRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/enable/{ipaddress}/{port}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmptcpIpaliasEnableResponse res = new openapisdk.models.operations.ProtocolSnmptcpIpaliasEnableResponse() {{
            protocolSnmptcpIpaliasEnable200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmptcpIpaliasEnable200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmptcpIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    public openapisdk.models.operations.ProtocolSnmptcpIpaliasIsenabledResponse protocolSnmptcpIpaliasIsenabled(openapisdk.models.operations.ProtocolSnmptcpIpaliasIsenabledRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/isenabled/{ipaddress}/{port}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmptcpIpaliasIsenabledResponse res = new openapisdk.models.operations.ProtocolSnmptcpIpaliasIsenabledResponse() {{
            protocolSnmptcpIpaliasIsenabled200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmptcpIpaliasIsenabled200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmptcpIpaliasList - List all IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    public openapisdk.models.operations.ProtocolSnmptcpIpaliasListResponse protocolSnmptcpIpaliasList(openapisdk.models.operations.ProtocolSnmptcpIpaliasListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/list", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmptcpIpaliasListResponse res = new openapisdk.models.operations.ProtocolSnmptcpIpaliasListResponse() {{
            ipAliases = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpAlias[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpAlias[].class);
                res.ipAliases = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmptcpSetConfig - Set the agent's SNMPTCP configuration
     *
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    public openapisdk.models.operations.ProtocolSnmptcpSetConfigResponse protocolSnmptcpSetConfig(openapisdk.models.operations.ProtocolSnmptcpSetConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/config/{argument}/{value}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmptcpSetConfigResponse res = new openapisdk.models.operations.ProtocolSnmptcpSetConfigResponse() {{
            protocolSnmptcpSetConfig200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmptcpSetConfig200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSnmptcpSetTrace - Set the agent's SNMPTCP traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    public openapisdk.models.operations.ProtocolSnmptcpSetTraceResponse protocolSnmptcpSetTrace(openapisdk.models.operations.ProtocolSnmptcpSetTraceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/trace/{enableOrNot}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSnmptcpSetTraceResponse res = new openapisdk.models.operations.ProtocolSnmptcpSetTraceResponse() {{
            protocolSnmptcpSetTrace200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSnmptcpSetTrace200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
}