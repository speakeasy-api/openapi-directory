package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;

public class Health {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Health(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * healthGet - Get HTTP
     *
     * Check the Appwrite HTTP server is up and responsive.
    **/
    public openapisdk.models.operations.HealthGetResponse healthGet(openapisdk.models.operations.HealthGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/health");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HealthGetResponse res = new openapisdk.models.operations.HealthGetResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * healthGetAntiVirus - Get Anti virus
     *
     * Check the Appwrite Anti Virus server is up and connection is successful.
    **/
    public openapisdk.models.operations.HealthGetAntiVirusResponse healthGetAntiVirus(openapisdk.models.operations.HealthGetAntiVirusRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/health/anti-virus");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HealthGetAntiVirusResponse res = new openapisdk.models.operations.HealthGetAntiVirusResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * healthGetCache - Get Cache
     *
     * Check the Appwrite in-memory cache server is up and connection is successful.
    **/
    public openapisdk.models.operations.HealthGetCacheResponse healthGetCache(openapisdk.models.operations.HealthGetCacheRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/health/cache");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HealthGetCacheResponse res = new openapisdk.models.operations.HealthGetCacheResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * healthGetDb - Get DB
     *
     * Check the Appwrite database server is up and connection is successful.
    **/
    public openapisdk.models.operations.HealthGetDbResponse healthGetDb(openapisdk.models.operations.HealthGetDbRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/health/db");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HealthGetDbResponse res = new openapisdk.models.operations.HealthGetDbResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * healthGetQueueCertificates - Get Certificate Queue
     *
     * Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.
    **/
    public openapisdk.models.operations.HealthGetQueueCertificatesResponse healthGetQueueCertificates(openapisdk.models.operations.HealthGetQueueCertificatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/health/queue/certificates");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HealthGetQueueCertificatesResponse res = new openapisdk.models.operations.HealthGetQueueCertificatesResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * healthGetQueueFunctions - Get Functions Queue
    **/
    public openapisdk.models.operations.HealthGetQueueFunctionsResponse healthGetQueueFunctions(openapisdk.models.operations.HealthGetQueueFunctionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/health/queue/functions");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HealthGetQueueFunctionsResponse res = new openapisdk.models.operations.HealthGetQueueFunctionsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * healthGetQueueLogs - Get Logs Queue
     *
     * Get the number of logs that are waiting to be processed in the Appwrite internal queue server.
    **/
    public openapisdk.models.operations.HealthGetQueueLogsResponse healthGetQueueLogs(openapisdk.models.operations.HealthGetQueueLogsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/health/queue/logs");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HealthGetQueueLogsResponse res = new openapisdk.models.operations.HealthGetQueueLogsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * healthGetQueueTasks - Get Tasks Queue
     *
     * Get the number of tasks that are waiting to be processed in the Appwrite internal queue server.
    **/
    public openapisdk.models.operations.HealthGetQueueTasksResponse healthGetQueueTasks(openapisdk.models.operations.HealthGetQueueTasksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/health/queue/tasks");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HealthGetQueueTasksResponse res = new openapisdk.models.operations.HealthGetQueueTasksResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * healthGetQueueUsage - Get Usage Queue
     *
     * Get the number of usage stats that are waiting to be processed in the Appwrite internal queue server.
    **/
    public openapisdk.models.operations.HealthGetQueueUsageResponse healthGetQueueUsage(openapisdk.models.operations.HealthGetQueueUsageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/health/queue/usage");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HealthGetQueueUsageResponse res = new openapisdk.models.operations.HealthGetQueueUsageResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * healthGetQueueWebhooks - Get Webhooks Queue
     *
     * Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.
    **/
    public openapisdk.models.operations.HealthGetQueueWebhooksResponse healthGetQueueWebhooks(openapisdk.models.operations.HealthGetQueueWebhooksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/health/queue/webhooks");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HealthGetQueueWebhooksResponse res = new openapisdk.models.operations.HealthGetQueueWebhooksResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * healthGetStorageLocal - Get Local Storage
     *
     * Check the Appwrite local storage device is up and connection is successful.
    **/
    public openapisdk.models.operations.HealthGetStorageLocalResponse healthGetStorageLocal(openapisdk.models.operations.HealthGetStorageLocalRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/health/storage/local");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HealthGetStorageLocalResponse res = new openapisdk.models.operations.HealthGetStorageLocalResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * healthGetTime - Get Time
     *
     * Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.
    **/
    public openapisdk.models.operations.HealthGetTimeResponse healthGetTime(openapisdk.models.operations.HealthGetTimeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/health/time");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HealthGetTimeResponse res = new openapisdk.models.operations.HealthGetTimeResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
}