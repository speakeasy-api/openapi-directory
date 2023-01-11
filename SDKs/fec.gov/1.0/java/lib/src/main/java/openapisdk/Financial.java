package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Financial {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Financial(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getCommitteeCommitteeIdReports - 
     * Each report represents the summary information from Form 3, Form 3X and Form 3P.
     * These reports have key statistics that illuminate the financial status of a given committee.
     * Things like cash on hand, debts owed by committee, total receipts, and total disbursements
     * are especially helpful for understanding a committee's financial dealings.
     * 
     * By default, this endpoint includes both amended and final versions of each report. To restrict
     * to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
     * have been amended, use `is_amended=true`.
     * 
     * Several different reporting structures exist, depending on the type of organization that
     * submits financial information. To see an example of these reporting requirements,
     * look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.
     * 
     * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
     * label these fields while conveying clear meaning to ensure accessibility for all users.
     * 
    **/
    public openapisdk.models.operations.GetCommitteeCommitteeIdReportsResponse getCommitteeCommitteeIdReports(openapisdk.models.operations.GetCommitteeCommitteeIdReportsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/committee/{committee_id}/reports/", request.pathParams);
        
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

        openapisdk.models.operations.GetCommitteeCommitteeIdReportsResponse res = new openapisdk.models.operations.GetCommitteeCommitteeIdReportsResponse() {{
            committeeReportsPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommitteeReportsPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommitteeReportsPage.class);
                res.committeeReportsPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCommitteeCommitteeIdTotals - 
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
    public openapisdk.models.operations.GetCommitteeCommitteeIdTotalsResponse getCommitteeCommitteeIdTotals(openapisdk.models.operations.GetCommitteeCommitteeIdTotalsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/committee/{committee_id}/totals/", request.pathParams);
        
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

        openapisdk.models.operations.GetCommitteeCommitteeIdTotalsResponse res = new openapisdk.models.operations.GetCommitteeCommitteeIdTotalsResponse() {{
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
     * getElections - 
     * Look at the top-level financial information for all candidates running for the same
     * office.
     * 
     * Choose a 2-year cycle, and `house`, `senate` or `presidential`.
     * 
     * If you are looking for a Senate seat, you will need to select the state using a two-letter
     * abbreviation.
     * 
     * House races require state and a two-digit district number.
     * 
     * Since this endpoint reflects financial information, it will only have candidates once they file
     * financial reporting forms. Query the `/candidates` endpoint to retrieve an-up-to-date list of all the
     * candidates that filed to run for a particular seat.
     * 
    **/
    public openapisdk.models.operations.GetElectionsResponse getElections(openapisdk.models.operations.GetElectionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/elections/");
        
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

        openapisdk.models.operations.GetElectionsResponse res = new openapisdk.models.operations.GetElectionsResponse() {{
            electionPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ElectionPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ElectionPage.class);
                res.electionPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getElectionsSearch - 
     * List elections by cycle, office, state, and district.
     * 
    **/
    public openapisdk.models.operations.GetElectionsSearchResponse getElectionsSearch(openapisdk.models.operations.GetElectionsSearchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/elections/search/");
        
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

        openapisdk.models.operations.GetElectionsSearchResponse res = new openapisdk.models.operations.GetElectionsSearchResponse() {{
            electionsListPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ElectionsListPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ElectionsListPage.class);
                res.electionsListPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getElectionsSummary - 
     * List elections by cycle, office, state, and district.
     * 
    **/
    public openapisdk.models.operations.GetElectionsSummaryResponse getElectionsSummary(openapisdk.models.operations.GetElectionsSummaryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/elections/summary/");
        
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

        openapisdk.models.operations.GetElectionsSummaryResponse res = new openapisdk.models.operations.GetElectionsSummaryResponse() {{
            electionSummary = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ElectionSummary out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ElectionSummary.class);
                res.electionSummary = out;
            }
        }

        return res;
    }
	
	
    /**
     * getReportsEntityType - 
     * Each report represents the summary information from Form 3, Form 3X and Form 3P.
     * These reports have key statistics that illuminate the financial status of a given committee.
     * Things like cash on hand, debts owed by committee, total receipts, and total disbursements
     * are especially helpful for understanding a committee's financial dealings.
     * 
     * By default, this endpoint includes both amended and final versions of each report. To restrict
     * to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
     * have been amended, use `is_amended=true`.
     * 
     * Several different reporting structures exist, depending on the type of organization that
     * submits financial information. To see an example of these reporting requirements,
     * look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.
     * 
     * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
     * label these fields while conveying clear meaning to ensure accessibility for all users.
     * 
    **/
    public openapisdk.models.operations.GetReportsEntityTypeResponse getReportsEntityType(openapisdk.models.operations.GetReportsEntityTypeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/reports/{entity_type}/", request.pathParams);
        
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

        openapisdk.models.operations.GetReportsEntityTypeResponse res = new openapisdk.models.operations.GetReportsEntityTypeResponse() {{
            committeeReportsPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommitteeReportsPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommitteeReportsPage.class);
                res.committeeReportsPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTotalsByEntity - 
     * Provides cumulative receipt totals by entity type, over a two year cycle. Totals are adjusted to avoid double counting.
     * 
     * This is [the sql](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V41__large_aggregates.sql) that creates these calculations.
     * 
    **/
    public openapisdk.models.operations.GetTotalsByEntityResponse getTotalsByEntity(openapisdk.models.operations.GetTotalsByEntityRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/totals/by_entity/");
        
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

        openapisdk.models.operations.GetTotalsByEntityResponse res = new openapisdk.models.operations.GetTotalsByEntityResponse() {{
            entityReceiptDisbursementTotalsPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EntityReceiptDisbursementTotalsPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EntityReceiptDisbursementTotalsPage.class);
                res.entityReceiptDisbursementTotalsPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTotalsEntityType - 
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
    public openapisdk.models.operations.GetTotalsEntityTypeResponse getTotalsEntityType(openapisdk.models.operations.GetTotalsEntityTypeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/totals/{entity_type}/", request.pathParams);
        
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

        openapisdk.models.operations.GetTotalsEntityTypeResponse res = new openapisdk.models.operations.GetTotalsEntityTypeResponse() {{
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
	
}