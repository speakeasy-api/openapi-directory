package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Presidential {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Presidential(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getPresidentialContributionsByCandidate - 
     * Net receipts per candidate.
     * 
     * Filter with `contributor_state='US'` for national totals
     * 
    **/
    public openapisdk.models.operations.GetPresidentialContributionsByCandidateResponse getPresidentialContributionsByCandidate(openapisdk.models.operations.GetPresidentialContributionsByCandidateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/presidential/contributions/by_candidate/");
        
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

        openapisdk.models.operations.GetPresidentialContributionsByCandidateResponse res = new openapisdk.models.operations.GetPresidentialContributionsByCandidateResponse() {{
            presidentialByCandidatePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PresidentialByCandidatePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PresidentialByCandidatePage.class);
                res.presidentialByCandidatePage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPresidentialContributionsBySize - 
     * Contribution receipts by size per candidate.
     * 
     * Filter by candidate_id, election_year and/or size
     * 
    **/
    public openapisdk.models.operations.GetPresidentialContributionsBySizeResponse getPresidentialContributionsBySize(openapisdk.models.operations.GetPresidentialContributionsBySizeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/presidential/contributions/by_size/");
        
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

        openapisdk.models.operations.GetPresidentialContributionsBySizeResponse res = new openapisdk.models.operations.GetPresidentialContributionsBySizeResponse() {{
            presidentialBySizePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PresidentialBySizePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PresidentialBySizePage.class);
                res.presidentialBySizePage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPresidentialContributionsByState - 
     * Contribution receipts by state per candidate.
     * 
     * Filter by candidate_id and/or election_year
     * 
    **/
    public openapisdk.models.operations.GetPresidentialContributionsByStateResponse getPresidentialContributionsByState(openapisdk.models.operations.GetPresidentialContributionsByStateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/presidential/contributions/by_state/");
        
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

        openapisdk.models.operations.GetPresidentialContributionsByStateResponse res = new openapisdk.models.operations.GetPresidentialContributionsByStateResponse() {{
            presidentialByStatePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PresidentialByStatePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PresidentialByStatePage.class);
                res.presidentialByStatePage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPresidentialCoverageEndDate - 
     * Coverage end date per candidate.
     * 
     * Filter by candidate_id and/or election_year
     * 
    **/
    public openapisdk.models.operations.GetPresidentialCoverageEndDateResponse getPresidentialCoverageEndDate(openapisdk.models.operations.GetPresidentialCoverageEndDateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/presidential/coverage_end_date/");
        
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

        openapisdk.models.operations.GetPresidentialCoverageEndDateResponse res = new openapisdk.models.operations.GetPresidentialCoverageEndDateResponse() {{
            presidentialCoveragePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PresidentialCoveragePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PresidentialCoveragePage.class);
                res.presidentialCoveragePage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPresidentialFinancialSummary - 
     * Financial summary per candidate.
     * 
     * Filter by candidate_id and/or election_year
     * 
    **/
    public openapisdk.models.operations.GetPresidentialFinancialSummaryResponse getPresidentialFinancialSummary(openapisdk.models.operations.GetPresidentialFinancialSummaryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/presidential/financial_summary/");
        
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

        openapisdk.models.operations.GetPresidentialFinancialSummaryResponse res = new openapisdk.models.operations.GetPresidentialFinancialSummaryResponse() {{
            presidentialSummaryPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PresidentialSummaryPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PresidentialSummaryPage.class);
                res.presidentialSummaryPage = out;
            }
        }

        return res;
    }
	
}