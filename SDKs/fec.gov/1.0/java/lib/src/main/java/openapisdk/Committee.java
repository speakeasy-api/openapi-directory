package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Committee {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Committee(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getCandidateCandidateIdCommittees - 
     * This endpoint is useful for finding detailed information about a particular committee or
     * filer. Use the `committee_id` to find the most recent information about the committee.
     * 
    **/
    public openapisdk.models.operations.GetCandidateCandidateIdCommitteesResponse getCandidateCandidateIdCommittees(openapisdk.models.operations.GetCandidateCandidateIdCommitteesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/candidate/{candidate_id}/committees/", request.pathParams);
        
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

        openapisdk.models.operations.GetCandidateCandidateIdCommitteesResponse res = new openapisdk.models.operations.GetCandidateCandidateIdCommitteesResponse() {{
            committeeDetailPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommitteeDetailPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommitteeDetailPage.class);
                res.committeeDetailPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCandidateCandidateIdCommitteesHistory - 
     * Explore a filer's characteristics over time. This can be particularly useful if the
     * committees change treasurers, designation, or `committee_type`.
     * 
    **/
    public openapisdk.models.operations.GetCandidateCandidateIdCommitteesHistoryResponse getCandidateCandidateIdCommitteesHistory(openapisdk.models.operations.GetCandidateCandidateIdCommitteesHistoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/candidate/{candidate_id}/committees/history/", request.pathParams);
        
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

        openapisdk.models.operations.GetCandidateCandidateIdCommitteesHistoryResponse res = new openapisdk.models.operations.GetCandidateCandidateIdCommitteesHistoryResponse() {{
            committeeHistoryPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommitteeHistoryPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommitteeHistoryPage.class);
                res.committeeHistoryPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCandidateCandidateIdCommitteesHistoryCycle - 
     * Explore a filer's characteristics over time. This can be particularly useful if the
     * committees change treasurers, designation, or `committee_type`.
     * 
    **/
    public openapisdk.models.operations.GetCandidateCandidateIdCommitteesHistoryCycleResponse getCandidateCandidateIdCommitteesHistoryCycle(openapisdk.models.operations.GetCandidateCandidateIdCommitteesHistoryCycleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/candidate/{candidate_id}/committees/history/{cycle}/", request.pathParams);
        
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

        openapisdk.models.operations.GetCandidateCandidateIdCommitteesHistoryCycleResponse res = new openapisdk.models.operations.GetCandidateCandidateIdCommitteesHistoryCycleResponse() {{
            committeeHistoryPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommitteeHistoryPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommitteeHistoryPage.class);
                res.committeeHistoryPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCommitteeCommitteeId - 
     * This endpoint is useful for finding detailed information about a particular committee or
     * filer. Use the `committee_id` to find the most recent information about the committee.
     * 
    **/
    public openapisdk.models.operations.GetCommitteeCommitteeIdResponse getCommitteeCommitteeId(openapisdk.models.operations.GetCommitteeCommitteeIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/committee/{committee_id}/", request.pathParams);
        
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

        openapisdk.models.operations.GetCommitteeCommitteeIdResponse res = new openapisdk.models.operations.GetCommitteeCommitteeIdResponse() {{
            committeeDetailPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommitteeDetailPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommitteeDetailPage.class);
                res.committeeDetailPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCommitteeCommitteeIdHistory - 
     * Explore a filer's characteristics over time. This can be particularly useful if the
     * committees change treasurers, designation, or `committee_type`.
     * 
    **/
    public openapisdk.models.operations.GetCommitteeCommitteeIdHistoryResponse getCommitteeCommitteeIdHistory(openapisdk.models.operations.GetCommitteeCommitteeIdHistoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/committee/{committee_id}/history/", request.pathParams);
        
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

        openapisdk.models.operations.GetCommitteeCommitteeIdHistoryResponse res = new openapisdk.models.operations.GetCommitteeCommitteeIdHistoryResponse() {{
            committeeHistoryPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommitteeHistoryPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommitteeHistoryPage.class);
                res.committeeHistoryPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCommitteeCommitteeIdHistoryCycle - 
     * Explore a filer's characteristics over time. This can be particularly useful if the
     * committees change treasurers, designation, or `committee_type`.
     * 
    **/
    public openapisdk.models.operations.GetCommitteeCommitteeIdHistoryCycleResponse getCommitteeCommitteeIdHistoryCycle(openapisdk.models.operations.GetCommitteeCommitteeIdHistoryCycleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/committee/{committee_id}/history/{cycle}/", request.pathParams);
        
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

        openapisdk.models.operations.GetCommitteeCommitteeIdHistoryCycleResponse res = new openapisdk.models.operations.GetCommitteeCommitteeIdHistoryCycleResponse() {{
            committeeHistoryPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommitteeHistoryPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommitteeHistoryPage.class);
                res.committeeHistoryPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCommittees - 
     * Fetch basic information about committees and filers. Use parameters to filter for
     * particular characteristics.
     * 
     * 
    **/
    public openapisdk.models.operations.GetCommitteesResponse getCommittees(openapisdk.models.operations.GetCommitteesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/committees/");
        
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

        openapisdk.models.operations.GetCommitteesResponse res = new openapisdk.models.operations.GetCommitteesResponse() {{
            committeePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommitteePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommitteePage.class);
                res.committeePage = out;
            }
        }

        return res;
    }
	
}