package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class EmailListsAndAddresses {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public EmailListsAndAddresses(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * queryHardBouncedEmails - Query Hard Bounced Emails
     *
     * This endpoint allows you to pull a list of email addresses that have “hard bounced” your email messages within a certain time frame.
     * 
     * > You must provide an `end_date`, as well as either an `email` or a `start_date`.<br><br>If your date range has more than `limit` number of hard bounces, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.
     * 
     * ## Response
     * 
     * Entries are listed in descending order.
     * 
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *   "emails": [
     *     {
     *       "email": "example1@braze.com",
     *       "hard_bounced_at": "2016-08-25 15:24:32 +0000"
     *     },
     *     {
     *       "email": "example2@braze.com",
     *       "hard_bounced_at": "2016-08-24 17:41:58 +0000"
     *     },
     *     {
     *       "email": "example3@braze.com",
     *       "hard_bounced_at": "2016-08-24 12:01:13 +0000"
     *     }
     *   ],
     *   "message": "success"
     * }
     * ```
    **/
    public openapisdk.models.operations.QueryHardBouncedEmailsResponse queryHardBouncedEmails(openapisdk.models.operations.QueryHardBouncedEmailsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/email/hard_bounces");
        
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

        openapisdk.models.operations.QueryHardBouncedEmailsResponse res = new openapisdk.models.operations.QueryHardBouncedEmailsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * queryListOfUnsubscribedEmailAddresses - Query List of Unsubscribed Email Addresses
     *
     * Use the /email/unsubscribes endpoint to return emails that have unsubscribed during the time period from `start_date` to `end_date`. You can use this endpoint to set up a bi-directional sync between Braze and other email systems or your own database.
     * 
     * > You must provide either an email or a start_date and an end_date. <br><br>If your date range has more than `limit` number of unsubscribes, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.
    **/
    public openapisdk.models.operations.QueryListOfUnsubscribedEmailAddressesResponse queryListOfUnsubscribedEmailAddresses(openapisdk.models.operations.QueryListOfUnsubscribedEmailAddressesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/email/unsubscribes");
        
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

        openapisdk.models.operations.QueryListOfUnsubscribedEmailAddressesResponse res = new openapisdk.models.operations.QueryListOfUnsubscribedEmailAddressesResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}