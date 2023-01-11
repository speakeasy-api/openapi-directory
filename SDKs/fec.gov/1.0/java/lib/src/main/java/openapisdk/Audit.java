package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Audit {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Audit(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getAuditCase - 
     * This endpoint contains Final Audit Reports approved by the Commission since inception.
     * The search can be based on information about the audited committee (Name, FEC ID Number, Type, 
     * Election Cycle) or the issues covered in the report.
     * 
    **/
    public openapisdk.models.operations.GetAuditCaseResponse getAuditCase(openapisdk.models.operations.GetAuditCaseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/audit-case/");
        
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

        openapisdk.models.operations.GetAuditCaseResponse res = new openapisdk.models.operations.GetAuditCaseResponse() {{
            auditCasePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuditCasePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuditCasePage.class);
                res.auditCasePage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAuditCategory - 
     * This lists the options for the categories and subcategories available in the /audit-search/ endpoint.
     * 
    **/
    public openapisdk.models.operations.GetAuditCategoryResponse getAuditCategory(openapisdk.models.operations.GetAuditCategoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/audit-category/");
        
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

        openapisdk.models.operations.GetAuditCategoryResponse res = new openapisdk.models.operations.GetAuditCategoryResponse() {{
            auditCategoryPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuditCategoryPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuditCategoryPage.class);
                res.auditCategoryPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAuditPrimaryCategory - 
     * This lists the options for the primary categories available in the /audit-search/ endpoint.
     * 
    **/
    public openapisdk.models.operations.GetAuditPrimaryCategoryResponse getAuditPrimaryCategory(openapisdk.models.operations.GetAuditPrimaryCategoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/audit-primary-category/");
        
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

        openapisdk.models.operations.GetAuditPrimaryCategoryResponse res = new openapisdk.models.operations.GetAuditPrimaryCategoryResponse() {{
            auditPrimaryCategoryPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuditPrimaryCategoryPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuditPrimaryCategoryPage.class);
                res.auditPrimaryCategoryPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNamesAuditCandidates - 
     * Search for candidates or committees by name. If you're looking for information on a
     * particular person or group, using a name to find the `candidate_id` or `committee_id` on
     * this endpoint can be a helpful first step.
     * 
    **/
    public openapisdk.models.operations.GetNamesAuditCandidatesResponse getNamesAuditCandidates(openapisdk.models.operations.GetNamesAuditCandidatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/names/audit_candidates/");
        
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

        openapisdk.models.operations.GetNamesAuditCandidatesResponse res = new openapisdk.models.operations.GetNamesAuditCandidatesResponse() {{
            auditCandidateSearchList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuditCandidateSearchList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuditCandidateSearchList.class);
                res.auditCandidateSearchList = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNamesAuditCommittees - 
     * Search for candidates or committees by name. If you're looking for information on a
     * particular person or group, using a name to find the `candidate_id` or `committee_id` on
     * this endpoint can be a helpful first step.
     * 
    **/
    public openapisdk.models.operations.GetNamesAuditCommitteesResponse getNamesAuditCommittees(openapisdk.models.operations.GetNamesAuditCommitteesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/names/audit_committees/");
        
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

        openapisdk.models.operations.GetNamesAuditCommitteesResponse res = new openapisdk.models.operations.GetNamesAuditCommitteesResponse() {{
            auditCommitteeSearchList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuditCommitteeSearchList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuditCommitteeSearchList.class);
                res.auditCommitteeSearchList = out;
            }
        }

        return res;
    }
	
}