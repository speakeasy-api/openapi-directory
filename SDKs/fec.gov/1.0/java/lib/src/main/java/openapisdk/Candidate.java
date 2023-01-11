package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Candidate {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Candidate(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getCandidateCandidateId - 
     * This endpoint is useful for finding detailed information about a particular candidate. Use the
     * `candidate_id` to find the most recent information about that candidate.
     * 
    **/
    public openapisdk.models.operations.GetCandidateCandidateIdResponse getCandidateCandidateId(openapisdk.models.operations.GetCandidateCandidateIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/candidate/{candidate_id}/", request.pathParams);
        
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

        openapisdk.models.operations.GetCandidateCandidateIdResponse res = new openapisdk.models.operations.GetCandidateCandidateIdResponse() {{
            candidateDetailPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CandidateDetailPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CandidateDetailPage.class);
                res.candidateDetailPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCandidateCandidateIdHistory - 
     * Find out a candidate's characteristics over time. This is particularly useful if the
     * candidate runs for the same office in different districts or you want to know more about a candidate's
     * previous races.
     * 
     * This information is organized by `candidate_id`, so it won't help you find a candidate
     * who ran for different offices over time; candidates get a new ID for each office.
     * 
    **/
    public openapisdk.models.operations.GetCandidateCandidateIdHistoryResponse getCandidateCandidateIdHistory(openapisdk.models.operations.GetCandidateCandidateIdHistoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/candidate/{candidate_id}/history/", request.pathParams);
        
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

        openapisdk.models.operations.GetCandidateCandidateIdHistoryResponse res = new openapisdk.models.operations.GetCandidateCandidateIdHistoryResponse() {{
            candidateHistoryPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CandidateHistoryPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CandidateHistoryPage.class);
                res.candidateHistoryPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCandidateCandidateIdHistoryCycle - 
     * Find out a candidate's characteristics over time. This is particularly useful if the
     * candidate runs for the same office in different districts or you want to know more about a candidate's
     * previous races.
     * 
     * This information is organized by `candidate_id`, so it won't help you find a candidate
     * who ran for different offices over time; candidates get a new ID for each office.
     * 
    **/
    public openapisdk.models.operations.GetCandidateCandidateIdHistoryCycleResponse getCandidateCandidateIdHistoryCycle(openapisdk.models.operations.GetCandidateCandidateIdHistoryCycleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/candidate/{candidate_id}/history/{cycle}/", request.pathParams);
        
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

        openapisdk.models.operations.GetCandidateCandidateIdHistoryCycleResponse res = new openapisdk.models.operations.GetCandidateCandidateIdHistoryCycleResponse() {{
            candidateHistoryPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CandidateHistoryPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CandidateHistoryPage.class);
                res.candidateHistoryPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCandidateCandidateIdTotals - 
     * This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
     * which are aggregated by two-year period. We refer to two-year periods as a `cycle`.
     * 
     * The cycle is named after the even-numbered year and includes the year before it. To obtain
     * totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
     * is the next year — for example, in 2015, the current cycle is 2016.
     * 
     * For presidential and Senate candidates, multiple two-year cycles exist between elections.
     * 
     * 
    **/
    public openapisdk.models.operations.GetCandidateCandidateIdTotalsResponse getCandidateCandidateIdTotals(openapisdk.models.operations.GetCandidateCandidateIdTotalsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/candidate/{candidate_id}/totals/", request.pathParams);
        
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

        openapisdk.models.operations.GetCandidateCandidateIdTotalsResponse res = new openapisdk.models.operations.GetCandidateCandidateIdTotalsResponse() {{
            committeeTotalsPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommitteeTotalsPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommitteeTotalsPage.class);
                res.committeeTotalsPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCandidates - 
     * Fetch basic information about candidates, and use parameters to filter results to the
     * candidates you're looking for.
     * 
     * Each result reflects a unique FEC candidate ID. That ID is particular to the candidate for a
     * particular office sought. If a candidate runs for the same office multiple times, the ID
     * stays the same. If the same person runs for another office — for example, a House
     * candidate runs for a Senate office — that candidate will get a unique ID for each office.
     * 
    **/
    public openapisdk.models.operations.GetCandidatesResponse getCandidates(openapisdk.models.operations.GetCandidatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/candidates/");
        
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

        openapisdk.models.operations.GetCandidatesResponse res = new openapisdk.models.operations.GetCandidatesResponse() {{
            candidatePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CandidatePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CandidatePage.class);
                res.candidatePage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCandidatesSearch - 
     * Fetch basic information about candidates and their principal committees.
     * 
     * Each result reflects a unique FEC candidate ID. That ID is assigned to the candidate for a
     * particular office sought. If a candidate runs for the same office over time, that ID
     * stays the same. If the same person runs for multiple offices — for example, a House
     * candidate runs for a Senate office — that candidate will get a unique ID for each office.
     * 
     * The candidate endpoints primarily use data from FEC registration
     * [Form 1](http://www.fec.gov/pdf/forms/fecfrm1.pdf) for committee information and
     * [Form 2](http://www.fec.gov/pdf/forms/fecfrm2.pdf) for candidate information.
     * 
    **/
    public openapisdk.models.operations.GetCandidatesSearchResponse getCandidatesSearch(openapisdk.models.operations.GetCandidatesSearchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/candidates/search/");
        
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

        openapisdk.models.operations.GetCandidatesSearchResponse res = new openapisdk.models.operations.GetCandidatesSearchResponse() {{
            candidatePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CandidatePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CandidatePage.class);
                res.candidatePage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCandidatesTotals - 
     * Aggregated candidate receipts and disbursements grouped by cycle.
     * 
    **/
    public openapisdk.models.operations.GetCandidatesTotalsResponse getCandidatesTotals(openapisdk.models.operations.GetCandidatesTotalsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/candidates/totals/");
        
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

        openapisdk.models.operations.GetCandidatesTotalsResponse res = new openapisdk.models.operations.GetCandidatesTotalsResponse() {{
            candidateHistoryTotalPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CandidateHistoryTotalPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CandidateHistoryTotalPage.class);
                res.candidateHistoryTotalPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCandidatesTotalsByOffice -  Aggregated candidate receipts and disbursements grouped by office by cycle.
     * 
    **/
    public openapisdk.models.operations.GetCandidatesTotalsByOfficeResponse getCandidatesTotalsByOffice(openapisdk.models.operations.GetCandidatesTotalsByOfficeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/candidates/totals/by_office/");
        
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

        openapisdk.models.operations.GetCandidatesTotalsByOfficeResponse res = new openapisdk.models.operations.GetCandidatesTotalsByOfficeResponse() {{
            totalByOfficePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TotalByOfficePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TotalByOfficePage.class);
                res.totalByOfficePage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCandidatesTotalsByOfficeByParty -  Aggregated candidate receipts and disbursements grouped by office by party by cycle.
     * 
    **/
    public openapisdk.models.operations.GetCandidatesTotalsByOfficeByPartyResponse getCandidatesTotalsByOfficeByParty(openapisdk.models.operations.GetCandidatesTotalsByOfficeByPartyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/candidates/totals/by_office/by_party/");
        
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

        openapisdk.models.operations.GetCandidatesTotalsByOfficeByPartyResponse res = new openapisdk.models.operations.GetCandidatesTotalsByOfficeByPartyResponse() {{
            totalByOfficeByPartyPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TotalByOfficeByPartyPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TotalByOfficeByPartyPage.class);
                res.totalByOfficeByPartyPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCommitteeCommitteeIdCandidates - 
     * This endpoint is useful for finding detailed information about a particular candidate. Use the
     * `candidate_id` to find the most recent information about that candidate.
     * 
    **/
    public openapisdk.models.operations.GetCommitteeCommitteeIdCandidatesResponse getCommitteeCommitteeIdCandidates(openapisdk.models.operations.GetCommitteeCommitteeIdCandidatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/committee/{committee_id}/candidates/", request.pathParams);
        
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

        openapisdk.models.operations.GetCommitteeCommitteeIdCandidatesResponse res = new openapisdk.models.operations.GetCommitteeCommitteeIdCandidatesResponse() {{
            candidateDetailPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CandidateDetailPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CandidateDetailPage.class);
                res.candidateDetailPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCommitteeCommitteeIdCandidatesHistory - 
     * Find out a candidate's characteristics over time. This is particularly useful if the
     * candidate runs for the same office in different districts or you want to know more about a candidate's
     * previous races.
     * 
     * This information is organized by `candidate_id`, so it won't help you find a candidate
     * who ran for different offices over time; candidates get a new ID for each office.
     * 
    **/
    public openapisdk.models.operations.GetCommitteeCommitteeIdCandidatesHistoryResponse getCommitteeCommitteeIdCandidatesHistory(openapisdk.models.operations.GetCommitteeCommitteeIdCandidatesHistoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/committee/{committee_id}/candidates/history/", request.pathParams);
        
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

        openapisdk.models.operations.GetCommitteeCommitteeIdCandidatesHistoryResponse res = new openapisdk.models.operations.GetCommitteeCommitteeIdCandidatesHistoryResponse() {{
            candidateHistoryPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CandidateHistoryPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CandidateHistoryPage.class);
                res.candidateHistoryPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCommitteeCommitteeIdCandidatesHistoryCycle - 
     * Find out a candidate's characteristics over time. This is particularly useful if the
     * candidate runs for the same office in different districts or you want to know more about a candidate's
     * previous races.
     * 
     * This information is organized by `candidate_id`, so it won't help you find a candidate
     * who ran for different offices over time; candidates get a new ID for each office.
     * 
    **/
    public openapisdk.models.operations.GetCommitteeCommitteeIdCandidatesHistoryCycleResponse getCommitteeCommitteeIdCandidatesHistoryCycle(openapisdk.models.operations.GetCommitteeCommitteeIdCandidatesHistoryCycleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/committee/{committee_id}/candidates/history/{cycle}/", request.pathParams);
        
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

        openapisdk.models.operations.GetCommitteeCommitteeIdCandidatesHistoryCycleResponse res = new openapisdk.models.operations.GetCommitteeCommitteeIdCandidatesHistoryCycleResponse() {{
            candidateHistoryPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CandidateHistoryPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CandidateHistoryPage.class);
                res.candidateHistoryPage = out;
            }
        }

        return res;
    }
	
}