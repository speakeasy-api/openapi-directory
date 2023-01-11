package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class Netflow {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Netflow(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * protocolNetflowChangeAttr - Change NETFLOW export attributes
     *
     * Change attributes
    **/
    public openapisdk.models.operations.ProtocolNetflowChangeAttrResponse protocolNetflowChangeAttr(openapisdk.models.operations.ProtocolNetflowChangeAttrRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/{flowset-uid}/{field-num}/{attr}/{value}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolNetflowChangeAttrResponse res = new openapisdk.models.operations.ProtocolNetflowChangeAttrResponse() {{
            protocolNetflowChangeAttr200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolNetflowChangeAttr200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolNetflowChangeDfs - Change NETFLOW data export interval
     *
     * Interval in msec .
    **/
    public openapisdk.models.operations.ProtocolNetflowChangeDfsResponse protocolNetflowChangeDfs(openapisdk.models.operations.ProtocolNetflowChangeDfsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/dfs_interval/{interval}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolNetflowChangeDfsResponse res = new openapisdk.models.operations.ProtocolNetflowChangeDfsResponse() {{
            protocolNetflowChangeDfs200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolNetflowChangeDfs200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolNetflowChangeTfs - Change NETFLOW template export interval
     *
     * Interval in msec .
    **/
    public openapisdk.models.operations.ProtocolNetflowChangeTfsResponse protocolNetflowChangeTfs(openapisdk.models.operations.ProtocolNetflowChangeTfsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/tfs_interval/{interval}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolNetflowChangeTfsResponse res = new openapisdk.models.operations.ProtocolNetflowChangeTfsResponse() {{
            protocolNetflowChangeTfs200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolNetflowChangeTfs200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolNetflowGetArgs - Show the agent's NETFLOW argument structure
     *
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    public openapisdk.models.operations.ProtocolNetflowGetArgsResponse protocolNetflowGetArgs(openapisdk.models.operations.ProtocolNetflowGetArgsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/args", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolNetflowGetArgsResponse res = new openapisdk.models.operations.ProtocolNetflowGetArgsResponse() {{
            protocolNetflowGetArgs200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.protocolNetflowGetArgs200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolNetflowGetConfig - Show the agent's NETFLOW configuration
     *
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    public openapisdk.models.operations.ProtocolNetflowGetConfigResponse protocolNetflowGetConfig(openapisdk.models.operations.ProtocolNetflowGetConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/config", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolNetflowGetConfigResponse res = new openapisdk.models.operations.ProtocolNetflowGetConfigResponse() {{
            configNETFLOW = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConfigNetflow out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConfigNetflow.class);
                res.configNETFLOW = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolNetflowGetStatistics - Show the agent's NETFLOW statistics
     *
     * Statistics of fields indicated in the headers
    **/
    public openapisdk.models.operations.ProtocolNetflowGetStatisticsResponse protocolNetflowGetStatistics(openapisdk.models.operations.ProtocolNetflowGetStatisticsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/statistics", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolNetflowGetStatisticsResponse res = new openapisdk.models.operations.ProtocolNetflowGetStatisticsResponse() {{
            protocolNetflowGetStatistics200ApplicationJSONInt32Integers = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Integer[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Integer[].class);
                res.protocolNetflowGetStatistics200ApplicationJSONInt32Integers = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolNetflowGetStatsHdr - Show the NETFLOW statistics headers
     *
     * The headers of statistics fields
    **/
    public openapisdk.models.operations.ProtocolNetflowGetStatsHdrResponse protocolNetflowGetStatsHdr() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/protocol/msg/netflow/get/stats_hdr");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolNetflowGetStatsHdrResponse res = new openapisdk.models.operations.ProtocolNetflowGetStatsHdrResponse() {{
            protocolNetflowGetStatsHdr200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.protocolNetflowGetStatsHdr200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolNetflowGetTrace - Show the agent's NETFLOW traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    public openapisdk.models.operations.ProtocolNetflowGetTraceResponse protocolNetflowGetTrace(openapisdk.models.operations.ProtocolNetflowGetTraceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/trace", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolNetflowGetTraceResponse res = new openapisdk.models.operations.ProtocolNetflowGetTraceResponse() {{
            configNETFLOW = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConfigNetflow out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConfigNetflow.class);
                res.configNETFLOW = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolNetflowHalt - Halt NETFLOW traffic
     *
     * Halt NETFLOW traffic
    **/
    public openapisdk.models.operations.ProtocolNetflowHaltResponse protocolNetflowHalt(openapisdk.models.operations.ProtocolNetflowHaltRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/netflow/halt", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolNetflowHaltResponse res = new openapisdk.models.operations.ProtocolNetflowHaltResponse() {{
            protocolNetflowHalt200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolNetflowHalt200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolNetflowList - Show list of NETFLOW exports
     *
     * Show list of NETFLOW exports
    **/
    public openapisdk.models.operations.ProtocolNetflowListResponse protocolNetflowList(openapisdk.models.operations.ProtocolNetflowListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/list", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolNetflowListResponse res = new openapisdk.models.operations.ProtocolNetflowListResponse() {{
            protocolNetflowList200ApplicationJSONObjects = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object>[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map[].class);
                res.protocolNetflowList200ApplicationJSONObjects = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolNetflowReload - Reload NETFLOW configuration before resuming traffic
     *
     * Reload NETFLOW configuration before resuming traffic
    **/
    public openapisdk.models.operations.ProtocolNetflowReloadResponse protocolNetflowReload(openapisdk.models.operations.ProtocolNetflowReloadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/netflow/reload", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolNetflowReloadResponse res = new openapisdk.models.operations.ProtocolNetflowReloadResponse() {{
            protocolNetflowReload200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolNetflowReload200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolNetflowResume - Resuming traffic
     *
     * Resuming traffic
    **/
    public openapisdk.models.operations.ProtocolNetflowResumeResponse protocolNetflowResume(openapisdk.models.operations.ProtocolNetflowResumeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/netflow/resume", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolNetflowResumeResponse res = new openapisdk.models.operations.ProtocolNetflowResumeResponse() {{
            protocolNetflowResume200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolNetflowResume200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolNetflowSetCollector - Swap NETFLOW collector
     *
     * Allow changing collector without stopping agent
    **/
    public openapisdk.models.operations.ProtocolNetflowSetCollectorResponse protocolNetflowSetCollector(openapisdk.models.operations.ProtocolNetflowSetCollectorRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/collector/{collectorIP}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolNetflowSetCollectorResponse res = new openapisdk.models.operations.ProtocolNetflowSetCollectorResponse() {{
            protocolNetflowSetCollector200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolNetflowSetCollector200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolNetflowSetConfig - Set the agent's NETFLOW configuration
     *
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    public openapisdk.models.operations.ProtocolNetflowSetConfigResponse protocolNetflowSetConfig(openapisdk.models.operations.ProtocolNetflowSetConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/config/{argument}/{value}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolNetflowSetConfigResponse res = new openapisdk.models.operations.ProtocolNetflowSetConfigResponse() {{
            protocolNetflowSetConfig200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolNetflowSetConfig200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolNetflowSetFileName - Swap NETFLOW configuration file
     *
     * Allow reloading the configuration file for an agent without stopping agent
    **/
    public openapisdk.models.operations.ProtocolNetflowSetFileNameResponse protocolNetflowSetFileName(openapisdk.models.operations.ProtocolNetflowSetFileNameRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/filename/{fileName}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolNetflowSetFileNameResponse res = new openapisdk.models.operations.ProtocolNetflowSetFileNameResponse() {{
            protocolNetflowSetFileName200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolNetflowSetFileName200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * protocolNetflowSetTrace - Set the agent's NETFLOW traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    public openapisdk.models.operations.ProtocolNetflowSetTraceResponse protocolNetflowSetTrace(openapisdk.models.operations.ProtocolNetflowSetTraceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/trace/{enableOrNot}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProtocolNetflowSetTraceResponse res = new openapisdk.models.operations.ProtocolNetflowSetTraceResponse() {{
            protocolNetflowSetTrace200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.protocolNetflowSetTrace200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
}