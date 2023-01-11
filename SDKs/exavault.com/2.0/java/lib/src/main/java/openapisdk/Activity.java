package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Activity {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Activity(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getSessionLogs - Get activity logs
     *
     * Returns the detailed activity logs for your account. Optional query paramaters will filter the returned results based on a number of options including usernames, activity types, or date ranges. 
     * 
     * **NOTE:** Total Results will always return as 0 to avoid quering data you're not using and stay as performant as possible. 
     *   
     * **Operation Types**
     * Session activity is logged with an operation type that is different from what is visible through the [activity log interface in the web file manager](/docs/account/10-activity-logs/00-activity-logs). Consult the table below to compare the two:
     * 
     * | File Manager Value | API Value | Notes |
     * |-----|----|---|
     * | Connect | PASS | |
     * | Disconnect | EXIT | |
     * | Upload | STOR | |
     * | Download | RETR | |
     * | Delete | DELE | |
     * | Create Folder | MKD | |
     * | Rename | RNTO | |
     * | Move | MOVE | |
     * | Copy | COPY | |
     * | Compress | COMPR | |
     * | Extract | EXTRACT | |
     * | Shared Folders | SHARE | |
     * | Send Files | SEND | |
     * | Receive Files | RECV | |
     * | _N/A_ | EDIT\_SEND | Update send. Not shown in file manager |
     * | Update Share | EDIT\_SHARE| | 
     * | Update Receive | EDIT\_RECV | |
     * | Delete Send | DELE\_SEND | |
     * | Delete Receive | DELE\_RECV | |
     * | Delete Share | DELE\_SHARE | |
     * | Create Notification | NOTIFY | |
     * | Update Notification | EDIT\_NTFY| |
     * | Delete Notification | DELE\_NTFY | |
     * | Create User | USER | |
     * | Update User | EDIT\_USER | |
     * | Delete User | DELE\_USER | |
     * | _N/A_ | DFA | Create direct link. Not shown in file manager |
     * | _N/A_ | EDIT\_DFA | Update direct link options. Not shown in file manager |
     * | _N/A_ | DELE\_DFA | Deactivate direct link. Not shown in file manager|
     * 
    **/
    public openapisdk.models.operations.GetSessionLogsResponse getSessionLogs(openapisdk.models.operations.GetSessionLogsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/activity/session");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSessionLogsResponse res = new openapisdk.models.operations.GetSessionLogsResponse() {{
            sessionActivityResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SessionActivityResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SessionActivityResponse.class);
                res.sessionActivityResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getWebhookLogs - Get webhook logs
     *
     * Returns the webhook logs for your account. Use the available query parameters to filter the listing of activity that is returned.
     * 
     * **NOTE:** Total Results will always return as 0 to avoid querying data you're not using and stay as performant as possible. 
     * 
     * **Event Types**
     * 
     * Webhooks are triggered by enabled event types for your account, which are configured on the [developer settings page](/docs/account/09-settings/06-developer-settings). Not all event types may be allowed for your account type. These are the valid options for event types:
     * 
     * - resources.upload
     * - resources.download
     * - resources.delete
     * - resources.createFolder
     * - resources.rename
     * - resources.move
     * - resources.copy
     * - resources.compress
     * - resources.extract
     * - shares.formSubmit
     * 
    **/
    public openapisdk.models.operations.GetWebhookLogsResponse getWebhookLogs(openapisdk.models.operations.GetWebhookLogsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/activity/webhooks");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetWebhookLogsResponse res = new openapisdk.models.operations.GetWebhookLogsResponse() {{
            webhookActivityResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.WebhookActivityResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.WebhookActivityResponse.class);
                res.webhookActivityResponse = out;
            }
        }

        return res;
    }
	
}