package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Filings {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Filings(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getCandidateCandidateIdFilings - 
     * All official records and reports filed by or delivered to the FEC.
     * 
     * Note: because the filings data includes many records, counts for large
     * result sets are approximate; you will want to page through the records until no records are returned.
     * 
    **/
    public openapisdk.models.operations.GetCandidateCandidateIdFilingsResponse getCandidateCandidateIdFilings(openapisdk.models.operations.GetCandidateCandidateIdFilingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/candidate/{candidate_id}/filings/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCandidateCandidateIdFilingsResponse res = new openapisdk.models.operations.GetCandidateCandidateIdFilingsResponse() {{
            filingsPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FilingsPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FilingsPage.class);
                res.filingsPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCommitteeCommitteeIdFilings - 
     * All official records and reports filed by or delivered to the FEC.
     * 
     * Note: because the filings data includes many records, counts for large
     * result sets are approximate; you will want to page through the records until no records are returned.
     * 
    **/
    public openapisdk.models.operations.GetCommitteeCommitteeIdFilingsResponse getCommitteeCommitteeIdFilings(openapisdk.models.operations.GetCommitteeCommitteeIdFilingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/committee/{committee_id}/filings/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCommitteeCommitteeIdFilingsResponse res = new openapisdk.models.operations.GetCommitteeCommitteeIdFilingsResponse() {{
            filingsPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FilingsPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FilingsPage.class);
                res.filingsPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getFilings - 
     * All official records and reports filed by or delivered to the FEC.
     * 
     * Note: because the filings data includes many records, counts for large
     * result sets are approximate; you will want to page through the records until no records are returned.
     * 
    **/
    public openapisdk.models.operations.GetFilingsResponse getFilings(openapisdk.models.operations.GetFilingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/filings/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetFilingsResponse res = new openapisdk.models.operations.GetFilingsResponse() {{
            filingsPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FilingsPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FilingsPage.class);
                res.filingsPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOperationsLog - 
     * The Operations log contains details of each report loaded into the database. It is primarily
     * used as status check to determine when all of the data processes, from initial entry through
     * review are complete.
     * 
    **/
    public openapisdk.models.operations.GetOperationsLogResponse getOperationsLog(openapisdk.models.operations.GetOperationsLogRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/operations-log/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOperationsLogResponse res = new openapisdk.models.operations.GetOperationsLogResponse() {{
            operationsLogPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OperationsLogPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OperationsLogPage.class);
                res.operationsLogPage = out;
            }
        }

        return res;
    }
	
}