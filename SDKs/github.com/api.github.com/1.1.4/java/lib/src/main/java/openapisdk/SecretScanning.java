package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class SecretScanning {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public SecretScanning(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * secretScanningGetAlert - Get a secret scanning alert
     *
     * Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
     * 
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/secret-scanning#get-a-secret-scanning-alert - API method documentation
    **/
    public openapisdk.models.operations.SecretScanningGetAlertResponse secretScanningGetAlert(openapisdk.models.operations.SecretScanningGetAlertRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SecretScanningGetAlertResponse res = new openapisdk.models.operations.SecretScanningGetAlertResponse() {{
            secretScanningAlert = null;
            secretScanningGetAlert503ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SecretScanningAlert out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SecretScanningAlert.class);
                res.secretScanningAlert = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.SecretScanningGetAlert503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.SecretScanningGetAlert503ApplicationJson.class);
                res.secretScanningGetAlert503ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * secretScanningListAlertsForRepo - List secret scanning alerts for a repository
     *
     * Lists all secret scanning alerts for a private repository, from newest to oldest. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
     * 
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.SecretScanningListAlertsForRepoResponse secretScanningListAlertsForRepo(openapisdk.models.operations.SecretScanningListAlertsForRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/secret-scanning/alerts", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SecretScanningListAlertsForRepoResponse res = new openapisdk.models.operations.SecretScanningListAlertsForRepoResponse() {{
            secretScanningAlerts = null;
            secretScanningListAlertsForRepo503ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SecretScanningAlert[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SecretScanningAlert[].class);
                res.secretScanningAlerts = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.SecretScanningListAlertsForRepo503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.SecretScanningListAlertsForRepo503ApplicationJson.class);
                res.secretScanningListAlertsForRepo503ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * secretScanningUpdateAlert - Update a secret scanning alert
     *
     * Updates the status of a secret scanning alert in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
     * 
     * GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/secret-scanning#update-a-secret-scanning-alert - API method documentation
    **/
    public openapisdk.models.operations.SecretScanningUpdateAlertResponse secretScanningUpdateAlert(openapisdk.models.operations.SecretScanningUpdateAlertRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SecretScanningUpdateAlertResponse res = new openapisdk.models.operations.SecretScanningUpdateAlertResponse() {{
            secretScanningAlert = null;
            secretScanningUpdateAlert503ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SecretScanningAlert out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SecretScanningAlert.class);
                res.secretScanningAlert = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 422) {
        }
        else if (httpRes.statusCode() == 503) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.SecretScanningUpdateAlert503ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.SecretScanningUpdateAlert503ApplicationJson.class);
                res.secretScanningUpdateAlert503ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}