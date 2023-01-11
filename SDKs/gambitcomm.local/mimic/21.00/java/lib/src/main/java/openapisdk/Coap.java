package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class Coap {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Coap(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * protocolCoapGetArgs - Show the agent's COAP argument structure
     *
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    public openapisdk.models.operations.ProtocolCoapGetArgsResponse protocolCoapGetArgs(openapisdk.models.operations.ProtocolCoapGetArgsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/coap/get/args", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolCoapGetArgsResponse res = new openapisdk.models.operations.ProtocolCoapGetArgsResponse() {{
            protocolCoapGetArgs200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.protocolCoapGetArgs200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolCoapGetConfig - Show the agent's COAP configuration
     *
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    public openapisdk.models.operations.ProtocolCoapGetConfigResponse protocolCoapGetConfig(openapisdk.models.operations.ProtocolCoapGetConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/coap/get/config", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolCoapGetConfigResponse res = new openapisdk.models.operations.ProtocolCoapGetConfigResponse() {{
            configCOAP = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConfigCoap out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConfigCoap.class);
                res.configCOAP = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolCoapGetStatistics - Show the agent's COAP statistics
     *
     * Statistics of fields indicated in the headers
    **/
    public openapisdk.models.operations.ProtocolCoapGetStatisticsResponse protocolCoapGetStatistics(openapisdk.models.operations.ProtocolCoapGetStatisticsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/coap/get/statistics", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolCoapGetStatisticsResponse res = new openapisdk.models.operations.ProtocolCoapGetStatisticsResponse() {{
            protocolCoapGetStatistics200ApplicationJSONInt32Integers = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Integer[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Integer[].class);
                res.protocolCoapGetStatistics200ApplicationJSONInt32Integers = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolCoapGetStatsHdr - Show the COAP statistics headers
     *
     * The headers of statistics fields
    **/
    public openapisdk.models.operations.ProtocolCoapGetStatsHdrResponse protocolCoapGetStatsHdr() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/protocol/msg/coap/get/stats_hdr");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolCoapGetStatsHdrResponse res = new openapisdk.models.operations.ProtocolCoapGetStatsHdrResponse() {{
            protocolCoapGetStatsHdr200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.protocolCoapGetStatsHdr200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolCoapGetTrace - Show the agent's COAP traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    public openapisdk.models.operations.ProtocolCoapGetTraceResponse protocolCoapGetTrace(openapisdk.models.operations.ProtocolCoapGetTraceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/coap/get/trace", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolCoapGetTraceResponse res = new openapisdk.models.operations.ProtocolCoapGetTraceResponse() {{
            configCOAP = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConfigCoap out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConfigCoap.class);
                res.configCOAP = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolCoapSetConfig - Set the agent's COAP configuration
     *
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    public openapisdk.models.operations.ProtocolCoapSetConfigResponse protocolCoapSetConfig(openapisdk.models.operations.ProtocolCoapSetConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/coap/set/config/{argument}/{value}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolCoapSetConfigResponse res = new openapisdk.models.operations.ProtocolCoapSetConfigResponse() {{
            protocolCoapSetConfig200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolCoapSetConfig200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolCoapSetTrace - Set the agent's COAP traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    public openapisdk.models.operations.ProtocolCoapSetTraceResponse protocolCoapSetTrace(openapisdk.models.operations.ProtocolCoapSetTraceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/coap/set/trace/{enableOrNot}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolCoapSetTraceResponse res = new openapisdk.models.operations.ProtocolCoapSetTraceResponse() {{
            protocolCoapSetTrace200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolCoapSetTrace200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
}