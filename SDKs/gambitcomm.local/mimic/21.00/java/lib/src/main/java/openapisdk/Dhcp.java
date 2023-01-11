package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class Dhcp {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Dhcp(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * protocolDhcpGetArgs - Show the agent's DHCP argument structure
     *
     * Agent's DHCP configuration particulars
    **/
    public openapisdk.models.operations.ProtocolDhcpGetArgsResponse protocolDhcpGetArgs(openapisdk.models.operations.ProtocolDhcpGetArgsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/args", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolDhcpGetArgsResponse res = new openapisdk.models.operations.ProtocolDhcpGetArgsResponse() {{
            protocolDhcpGetArgs200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.protocolDhcpGetArgs200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolDhcpGetConfig - Show the agent's DHCP configuration
     *
     * Agent's DHCP configuration hwaddr,classid,add_options,script
    **/
    public openapisdk.models.operations.ProtocolDhcpGetConfigResponse protocolDhcpGetConfig(openapisdk.models.operations.ProtocolDhcpGetConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/config", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolDhcpGetConfigResponse res = new openapisdk.models.operations.ProtocolDhcpGetConfigResponse() {{
            configDHCP = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConfigDhcp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConfigDhcp.class);
                res.configDHCP = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolDhcpGetStatistics - Show the agent's DHCP statistics
     *
     * Statistics of fields indicated in the headers
    **/
    public openapisdk.models.operations.ProtocolDhcpGetStatisticsResponse protocolDhcpGetStatistics(openapisdk.models.operations.ProtocolDhcpGetStatisticsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/statistics", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolDhcpGetStatisticsResponse res = new openapisdk.models.operations.ProtocolDhcpGetStatisticsResponse() {{
            protocolDhcpGetStatistics200ApplicationJSONInt32Integers = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Integer[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Integer[].class);
                res.protocolDhcpGetStatistics200ApplicationJSONInt32Integers = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolDhcpGetStatsHdr - Show the DHCP statistics headers
     *
     * The headers of statistics fields
    **/
    public openapisdk.models.operations.ProtocolDhcpGetStatsHdrResponse protocolDhcpGetStatsHdr() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/protocol/msg/dhcp/get/stats_hdr");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolDhcpGetStatsHdrResponse res = new openapisdk.models.operations.ProtocolDhcpGetStatsHdrResponse() {{
            protocolDhcpGetStatsHdr200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.protocolDhcpGetStatsHdr200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolDhcpGetTrace - Show the agent's DHCP traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    public openapisdk.models.operations.ProtocolDhcpGetTraceResponse protocolDhcpGetTrace(openapisdk.models.operations.ProtocolDhcpGetTraceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/trace", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolDhcpGetTraceResponse res = new openapisdk.models.operations.ProtocolDhcpGetTraceResponse() {{
            configDHCP = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConfigDhcp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConfigDhcp.class);
                res.configDHCP = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolDhcpParams - Show the parameters configured by the server in its DHCP-OFFER message
     *
     * DHCP-OFFER message parameters
    **/
    public openapisdk.models.operations.ProtocolDhcpParamsResponse protocolDhcpParams(openapisdk.models.operations.ProtocolDhcpParamsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/dhcp/params", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolDhcpParamsResponse res = new openapisdk.models.operations.ProtocolDhcpParamsResponse() {{
            protocolDhcpParams200ApplicationJSONObjects = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object>[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map[].class);
                res.protocolDhcpParams200ApplicationJSONObjects = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolDhcpSetConfig - Set the agent's DHCP configuration
     *
     * Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    public openapisdk.models.operations.ProtocolDhcpSetConfigResponse protocolDhcpSetConfig(openapisdk.models.operations.ProtocolDhcpSetConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/dhcp/set/config/{argument}/{value}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolDhcpSetConfigResponse res = new openapisdk.models.operations.ProtocolDhcpSetConfigResponse() {{
            protocolDhcpSetConfig200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolDhcpSetConfig200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolDhcpSetTrace - Set the agent's DHCP traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    public openapisdk.models.operations.ProtocolDhcpSetTraceResponse protocolDhcpSetTrace(openapisdk.models.operations.ProtocolDhcpSetTraceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/dhcp/set/trace/{enableOrNot}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolDhcpSetTraceResponse res = new openapisdk.models.operations.ProtocolDhcpSetTraceResponse() {{
            protocolDhcpSetTrace200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolDhcpSetTrace200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
}