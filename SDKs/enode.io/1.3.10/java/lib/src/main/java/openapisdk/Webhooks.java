package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Webhooks {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Webhooks(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * postWebhooksFirehoseTest - Test Firehose Webhook
     *
     * Trigger a test payload to be sent to your configured Firehose Webhook url.
    **/
    public openapisdk.models.operations.PostWebhooksFirehoseTestResponse postWebhooksFirehoseTest(openapisdk.models.operations.PostWebhooksFirehoseTestRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/webhooks/firehose/test");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostWebhooksFirehoseTestResponse res = new openapisdk.models.operations.PostWebhooksFirehoseTestResponse() {{
            postWebhooksFirehoseTestDefaultApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.postWebhooksFirehoseTestDefaultApplicationJSONString = out;
            }
        }

        return res;
    }
	
	
    /**
     * putWebhooksFirehose - Update Firehose Webhook
    **/
    public openapisdk.models.operations.PutWebhooksFirehoseResponse putWebhooksFirehose(openapisdk.models.operations.PutWebhooksFirehoseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/webhooks/firehose");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutWebhooksFirehoseResponse res = new openapisdk.models.operations.PutWebhooksFirehoseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
}