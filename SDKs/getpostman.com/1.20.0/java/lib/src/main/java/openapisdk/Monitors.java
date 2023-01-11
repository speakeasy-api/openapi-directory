package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Monitors {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Monitors(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * allMonitors - All Monitors
     *
     * The `/monitors` endpoint returns a list of all [monitors](https://monitor.getpostman.com/) that are accessible by you.
     * 
     * The response contains an array of monitors information containing the `name`, `id`, `owner` and `uid` of each monitor.
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.AllMonitorsResponse allMonitors() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/monitors");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AllMonitorsResponse res = new openapisdk.models.operations.AllMonitorsResponse() {{
            allMonitors200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AllMonitors200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AllMonitors200ApplicationJson.class);
                res.allMonitors200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createMonitor - Create Monitor
     *
     * This endpoint allows you to create a monitor.
     * 
     * Some sample `cron` values are:
     * 
     * | Frequency                  | Cron Pattern   |
     * |-----------------------|----------------|
     * | Every 5 minutes       | `* /5 * * * *`  |
     * | Every 30 minutes     | `* /30 * * * *` |
     * | Every Hour         | `0 * /1 * * *`  |
     * | Every 6 Hours      | `0 * /6 * * *`  |
     * | Every day at 5pm    | `0 17 * * *`   |
     * | Every Monday at 12pm  | `0 12 * * MON` |
     * | Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |
     * 
     * Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules. 
     * 
     * For more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
     * 
     * You can also specify the context of a workspace to create a monitor in directly by passing the `workspace` as a query param.
     * 
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.CreateMonitorResponse createMonitor(openapisdk.models.operations.CreateMonitorRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/monitors");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateMonitorResponse res = new openapisdk.models.operations.CreateMonitorResponse() {{
            createMonitor200ApplicationJSONObject = null;
            createMonitor400ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateMonitor200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateMonitor200ApplicationJson.class);
                res.createMonitor200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateMonitor400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateMonitor400ApplicationJson.class);
                res.createMonitor400ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteMonitor - Delete Monitor
     *
     * This endpoint can be used to delete an existing monitor using its `uid`.
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.DeleteMonitorResponse deleteMonitor(openapisdk.models.operations.DeleteMonitorRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/monitors/{monitor_uid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteMonitorResponse res = new openapisdk.models.operations.DeleteMonitorResponse() {{
            deleteMonitor200ApplicationJSONObject = null;
            deleteMonitor404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteMonitor200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteMonitor200ApplicationJson.class);
                res.deleteMonitor200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteMonitor404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteMonitor404ApplicationJson.class);
                res.deleteMonitor404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * runAMonitor - Run a Monitor
     *
     * This endpoint will run the monitor instantly and wait for the monitor to run completely. It responds with the run results.
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.RunAMonitorResponse runAMonitor(openapisdk.models.operations.RunAMonitorRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/monitors/{monitor_uid}/run", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RunAMonitorResponse res = new openapisdk.models.operations.RunAMonitorResponse() {{
            runAMonitor200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.RunAMonitor200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.RunAMonitor200ApplicationJson.class);
                res.runAMonitor200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * singleMonitor - Single Monitor
     *
     * This endpoint fetches you basic information about the monitor using its `uid`.
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.SingleMonitorResponse singleMonitor(openapisdk.models.operations.SingleMonitorRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/monitors/{monitor_uid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SingleMonitorResponse res = new openapisdk.models.operations.SingleMonitorResponse() {{
            singleMonitor200ApplicationJSONObject = null;
            singleMonitor404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.SingleMonitor200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.SingleMonitor200ApplicationJson.class);
                res.singleMonitor200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.SingleMonitor404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.SingleMonitor404ApplicationJson.class);
                res.singleMonitor404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateMonitor - Update Monitor
     *
     * This endpoint allows you to update a monitor using its `uid`. Only the monitor name and its schedule can be updated.
     * 
     * Some example `cron` values are:
     * 
     * | Frequency                  | Cron Pattern   |
     * |-----------------------|----------------|
     * | Every 5 minutes       | `* /5 * * * *`  |
     * | Every 30 minutes     | `* /30 * * * *` |
     * | Every Hour         | `0 * /1 * * *`  |
     * | Every 6 Hours      | `0 * /6 * * *`  |
     * | Every day at 5pm    | `0 17 * * *`   |
     * | Every Monday at 12pm  | `0 12 * * MON` |
     * | Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |
     * 
     * Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules. 
     * 
     * For more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.UpdateMonitorResponse updateMonitor(openapisdk.models.operations.UpdateMonitorRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/monitors/{monitor_uid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateMonitorResponse res = new openapisdk.models.operations.UpdateMonitorResponse() {{
            updateMonitor200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UpdateMonitor200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UpdateMonitor200ApplicationJson.class);
                res.updateMonitor200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}