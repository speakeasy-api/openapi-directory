package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class IndependentExpenditures {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public IndependentExpenditures(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getSchedulesScheduleE - 
     * Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC
     * bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with
     * the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate.
     * 
     * An independent expenditure is an expenditure for a communication "expressly advocating the election or
     * defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with,
     * or at the request or suggestion of, a candidate, a candidate’s authorized committee, or their agents, or
     * a political party or its agents."
     * 
     * Aggregates by candidate do not include 24 and 48 hour reports. This ensures we don't double count expenditures
     * and the totals are more accurate. You can still find the information from 24 and 48 hour reports in
     * `/schedule/schedule_e/`.
     * 
     * Due to the large quantity of Schedule E filings, this endpoint is not paginated by
     * page number. Instead, you can request the next page of results by adding the values in
     * the `last_indexes` object from `pagination` to the URL of your last request. For
     * example, when sorting by `expenditure_amount`, you might receive a page of
     * results with the following pagination information:
     * 
     * ```
     *  "pagination": {
     *     "count": 152623,
     *     "last_indexes": {
     *       "last_index": "3023037",
     *       "last_expenditure_amount": -17348.5
     *     },
     *     "per_page": 20,
     *     "pages": 7632
     *   }
     * }
     * ```
     * 
     * To fetch the next page of sorted results, append `last_index=3023037` and
     * `last_expenditure_amount=` to the URL.  We strongly advise paging through
     * these results by using the sort indices (defaults to sort by disbursement date,
     * e.g. `last_disbursement_date`), otherwise some resources may be unintentionally
     * filtered out.  This resource uses keyset pagination to improve query performance
     * and these indices are required to properly page through this large dataset.
     * 
     * Note: because the Schedule E data includes many records, counts for
     * large result sets are approximate; you will want to page through the records until no records are returned.
     * 
    **/
    public openapisdk.models.operations.GetSchedulesScheduleEResponse getSchedulesScheduleE(openapisdk.models.operations.GetSchedulesScheduleERequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/schedules/schedule_e/");
        
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

        openapisdk.models.operations.GetSchedulesScheduleEResponse res = new openapisdk.models.operations.GetSchedulesScheduleEResponse() {{
            scheduleEPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScheduleEPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScheduleEPage.class);
                res.scheduleEPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSchedulesScheduleEByCandidate - 
     * Schedule E receipts aggregated by recipient candidate. To avoid double
     * counting, memoed items are not included.
     * 
    **/
    public openapisdk.models.operations.GetSchedulesScheduleEByCandidateResponse getSchedulesScheduleEByCandidate(openapisdk.models.operations.GetSchedulesScheduleEByCandidateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/schedules/schedule_e/by_candidate/");
        
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

        openapisdk.models.operations.GetSchedulesScheduleEByCandidateResponse res = new openapisdk.models.operations.GetSchedulesScheduleEByCandidateResponse() {{
            scheduleEByCandidatePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScheduleEByCandidatePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScheduleEByCandidatePage.class);
                res.scheduleEByCandidatePage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSchedulesScheduleEEfile - 
     * Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.
     * 
    **/
    public openapisdk.models.operations.GetSchedulesScheduleEEfileResponse getSchedulesScheduleEEfile(openapisdk.models.operations.GetSchedulesScheduleEEfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/schedules/schedule_e/efile/");
        
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

        openapisdk.models.operations.GetSchedulesScheduleEEfileResponse res = new openapisdk.models.operations.GetSchedulesScheduleEEfileResponse() {{
            scheduleEEfilePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScheduleEEfilePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScheduleEEfilePage.class);
                res.scheduleEEfilePage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSchedulesScheduleETotalsByCandidate - 
     * Total independent expenditure on supported or opposed candidates by cycle or candidate election year.
     * 
    **/
    public openapisdk.models.operations.GetSchedulesScheduleETotalsByCandidateResponse getSchedulesScheduleETotalsByCandidate(openapisdk.models.operations.GetSchedulesScheduleETotalsByCandidateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/schedules/schedule_e/totals/by_candidate/");
        
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

        openapisdk.models.operations.GetSchedulesScheduleETotalsByCandidateResponse res = new openapisdk.models.operations.GetSchedulesScheduleETotalsByCandidateResponse() {{
            ieTotalsByCandidatePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IeTotalsByCandidatePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IeTotalsByCandidatePage.class);
                res.ieTotalsByCandidatePage = out;
            }
        }

        return res;
    }
	
}