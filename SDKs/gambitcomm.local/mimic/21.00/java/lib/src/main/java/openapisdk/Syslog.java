package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Syslog {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Syslog(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * protocolSyslogGetArgs - Show the agent's SYSLOG argument structure
     *
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    public openapisdk.models.operations.ProtocolSyslogGetArgsResponse protocolSyslogGetArgs(openapisdk.models.operations.ProtocolSyslogGetArgsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/args", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSyslogGetArgsResponse res = new openapisdk.models.operations.ProtocolSyslogGetArgsResponse() {{
            protocolSyslogGetArgs200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.protocolSyslogGetArgs200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSyslogGetAttr - Show the outgoing message's attributes
     *
     * Attribute can be server , sequence , separator , hostname , timestamp
    **/
    public openapisdk.models.operations.ProtocolSyslogGetAttrResponse protocolSyslogGetAttr(openapisdk.models.operations.ProtocolSyslogGetAttrRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/{attr}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSyslogGetAttrResponse res = new openapisdk.models.operations.ProtocolSyslogGetAttrResponse() {{
            protocolSyslogGetAttr200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSyslogGetAttr200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSyslogGetConfig - Show the agent's SYSLOG configuration
     *
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    public openapisdk.models.operations.ProtocolSyslogGetConfigResponse protocolSyslogGetConfig(openapisdk.models.operations.ProtocolSyslogGetConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/config", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSyslogGetConfigResponse res = new openapisdk.models.operations.ProtocolSyslogGetConfigResponse() {{
            configSYSLOG = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConfigSyslog out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConfigSyslog.class);
                res.configSYSLOG = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSyslogGetStatistics - Show the agent's SYSLOG statistics
     *
     * Statistics of fields indicated in the headers
    **/
    public openapisdk.models.operations.ProtocolSyslogGetStatisticsResponse protocolSyslogGetStatistics(openapisdk.models.operations.ProtocolSyslogGetStatisticsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/statistics", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSyslogGetStatisticsResponse res = new openapisdk.models.operations.ProtocolSyslogGetStatisticsResponse() {{
            protocolSyslogGetStatistics200ApplicationJSONInt32Integers = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Integer[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Integer[].class);
                res.protocolSyslogGetStatistics200ApplicationJSONInt32Integers = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSyslogGetStatsHdr - Show the SYSLOG statistics headers
     *
     * The headers of statistics fields
    **/
    public openapisdk.models.operations.ProtocolSyslogGetStatsHdrResponse protocolSyslogGetStatsHdr() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/protocol/msg/syslog/get/stats_hdr");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSyslogGetStatsHdrResponse res = new openapisdk.models.operations.ProtocolSyslogGetStatsHdrResponse() {{
            protocolSyslogGetStatsHdr200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.protocolSyslogGetStatsHdr200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSyslogGetTrace - Show the agent's SYSLOG traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    public openapisdk.models.operations.ProtocolSyslogGetTraceResponse protocolSyslogGetTrace(openapisdk.models.operations.ProtocolSyslogGetTraceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/trace", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSyslogGetTraceResponse res = new openapisdk.models.operations.ProtocolSyslogGetTraceResponse() {{
            configSYSLOG = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConfigSyslog out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConfigSyslog.class);
                res.configSYSLOG = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSyslogSend - Set the agent's SYSLOG traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    public openapisdk.models.operations.ProtocolSyslogSendResponse protocolSyslogSend(openapisdk.models.operations.ProtocolSyslogSendRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/syslog/send/{pri}", request.pathParams);
        
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

        openapisdk.models.operations.ProtocolSyslogSendResponse res = new openapisdk.models.operations.ProtocolSyslogSendResponse() {{
            protocolSyslogSend200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSyslogSend200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSyslogSetAttr - Set the outgoing message's attributes
     *
     * Attribute can be server , sequence , separator , hostname , timestamp
    **/
    public openapisdk.models.operations.ProtocolSyslogSetAttrResponse protocolSyslogSetAttr(openapisdk.models.operations.ProtocolSyslogSetAttrRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/{attr}/{value}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSyslogSetAttrResponse res = new openapisdk.models.operations.ProtocolSyslogSetAttrResponse() {{
            protocolSyslogSetAttr200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSyslogSetAttr200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSyslogSetConfig - Set the agent's SYSLOG configuration
     *
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    public openapisdk.models.operations.ProtocolSyslogSetConfigResponse protocolSyslogSetConfig(openapisdk.models.operations.ProtocolSyslogSetConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/config/{argument}/{value}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSyslogSetConfigResponse res = new openapisdk.models.operations.ProtocolSyslogSetConfigResponse() {{
            protocolSyslogSetConfig200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSyslogSetConfig200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolSyslogSetTrace - Set the agent's SYSLOG traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    public openapisdk.models.operations.ProtocolSyslogSetTraceResponse protocolSyslogSetTrace(openapisdk.models.operations.ProtocolSyslogSetTraceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/trace/{enableOrNot}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolSyslogSetTraceResponse res = new openapisdk.models.operations.ProtocolSyslogSetTraceResponse() {{
            protocolSyslogSetTrace200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolSyslogSetTrace200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
}