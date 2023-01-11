package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;

public class Job {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Job(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * jobSearchRead - Return job details search result
     *
     * Return job details search result
     * 
     * ### Response Class (Status 200)
     * 
     * * __{job_title}__: Used as a key word to search jobs,
     * 
     * For more details on how job are listed [see here][ref].
     * [ref]: https://etmdb.com/en/job-list/-updated_date
    **/
    public openapisdk.models.operations.JobSearchReadResponse jobSearchRead(openapisdk.models.operations.JobSearchReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/job/search/{job_title}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.JobSearchReadResponse res = new openapisdk.models.operations.JobSearchReadResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * jobSearchallRead - Return job details search result
     *
     * Return job details search result
     * 
     * ### Response Class (Status 200)
     * 
     * * __{company_name}__: Used as a key word to search jobs,
     * 
     * For more details on how job are listed [see here][ref].
     * [ref]: https://etmdb.com/en/job-list/-updated_date
    **/
    public openapisdk.models.operations.JobSearchallReadResponse jobSearchallRead(openapisdk.models.operations.JobSearchallReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/job/searchall/{company_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.JobSearchallReadResponse res = new openapisdk.models.operations.JobSearchallReadResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}