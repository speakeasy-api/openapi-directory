package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Disbursements {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Disbursements(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getSchedulesScheduleB - 
     * Schedule B filings describe itemized disbursements. This data
     * explains how committees and other filers spend their money. These figures are
     * reported as part of forms F3, F3X and F3P.
     * 
     * The data is divided in two-year periods, called `two_year_transaction_period`, which
     * is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
     * default to the most recent two-year period that is named after the ending,
     * even-numbered year.
     * 
     * Due to the large quantity of Schedule B filings, this endpoint is not paginated by
     * page number. Instead, you can request the next page of results by adding the values in
     * the `last_indexes` object from `pagination` to the URL of your last request. For
     * example, when sorting by `disbursement_date`, you might receive a page of
     * results with the following pagination information:
     * 
     * ```
     * pagination: {
     *     pages: 965191,
     *     per_page: 20,
     *     count: 19303814,
     *     last_indexes: {
     *         last_index: "230906248",
     *         last_disbursement_date: "2014-07-04"
     *     }
     * }
     * ```
     * 
     * To fetch the next page of sorted results, append `last_index=230906248` and
     * `last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
     * these results by using the sort indices (defaults to sort by disbursement date, e.g.
     * `last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
     * This resource uses keyset pagination to improve query performance
     * and these indices are required to properly page through this large dataset.
     * 
     * Note: because the Schedule B data includes many records, counts for
     * large result sets are approximate; you will want to page through the records until no records are returned.
     * 
    **/
    public openapisdk.models.operations.GetSchedulesScheduleBResponse getSchedulesScheduleB(openapisdk.models.operations.GetSchedulesScheduleBRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/schedules/schedule_b/");
        
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

        openapisdk.models.operations.GetSchedulesScheduleBResponse res = new openapisdk.models.operations.GetSchedulesScheduleBResponse() {{
            scheduleBPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScheduleBPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScheduleBPage.class);
                res.scheduleBPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSchedulesScheduleBByPurpose - 
     * Schedule B disbursements aggregated by disbursement purpose category. To avoid double counting,
     * memoed items are not included.
     * Purpose is a combination of transaction codes, category codes and disbursement description.
     * Inspect the `disbursement_purpose` sql function within the migrations for more details.
     * 
    **/
    public openapisdk.models.operations.GetSchedulesScheduleBByPurposeResponse getSchedulesScheduleBByPurpose(openapisdk.models.operations.GetSchedulesScheduleBByPurposeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/schedules/schedule_b/by_purpose/");
        
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

        openapisdk.models.operations.GetSchedulesScheduleBByPurposeResponse res = new openapisdk.models.operations.GetSchedulesScheduleBByPurposeResponse() {{
            scheduleBByPurposePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScheduleBByPurposePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScheduleBByPurposePage.class);
                res.scheduleBByPurposePage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSchedulesScheduleBByRecipient - 
     * Schedule B disbursements aggregated by recipient name. To avoid double counting,
     * memoed items are not included.
     * 
    **/
    public openapisdk.models.operations.GetSchedulesScheduleBByRecipientResponse getSchedulesScheduleBByRecipient(openapisdk.models.operations.GetSchedulesScheduleBByRecipientRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/schedules/schedule_b/by_recipient/");
        
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

        openapisdk.models.operations.GetSchedulesScheduleBByRecipientResponse res = new openapisdk.models.operations.GetSchedulesScheduleBByRecipientResponse() {{
            scheduleBByRecipientPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScheduleBByRecipientPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScheduleBByRecipientPage.class);
                res.scheduleBByRecipientPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSchedulesScheduleBByRecipientId - 
     * Schedule B disbursements aggregated by recipient committee ID, if applicable.
     * To avoid double counting, memoed items are not included.
     * 
    **/
    public openapisdk.models.operations.GetSchedulesScheduleBByRecipientIdResponse getSchedulesScheduleBByRecipientId(openapisdk.models.operations.GetSchedulesScheduleBByRecipientIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/schedules/schedule_b/by_recipient_id/");
        
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

        openapisdk.models.operations.GetSchedulesScheduleBByRecipientIdResponse res = new openapisdk.models.operations.GetSchedulesScheduleBByRecipientIdResponse() {{
            scheduleBByRecipientIDPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScheduleBByRecipientIdPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScheduleBByRecipientIdPage.class);
                res.scheduleBByRecipientIDPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSchedulesScheduleBEfile - 
     * Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.
     * 
    **/
    public openapisdk.models.operations.GetSchedulesScheduleBEfileResponse getSchedulesScheduleBEfile(openapisdk.models.operations.GetSchedulesScheduleBEfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/schedules/schedule_b/efile/");
        
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

        openapisdk.models.operations.GetSchedulesScheduleBEfileResponse res = new openapisdk.models.operations.GetSchedulesScheduleBEfileResponse() {{
            scheduleBEfilePage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScheduleBEfilePage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScheduleBEfilePage.class);
                res.scheduleBEfilePage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSchedulesScheduleBSubId - 
     * Schedule B filings describe itemized disbursements. This data
     * explains how committees and other filers spend their money. These figures are
     * reported as part of forms F3, F3X and F3P.
     * 
     * The data is divided in two-year periods, called `two_year_transaction_period`, which
     * is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
     * default to the most recent two-year period that is named after the ending,
     * even-numbered year.
     * 
     * Due to the large quantity of Schedule B filings, this endpoint is not paginated by
     * page number. Instead, you can request the next page of results by adding the values in
     * the `last_indexes` object from `pagination` to the URL of your last request. For
     * example, when sorting by `disbursement_date`, you might receive a page of
     * results with the following pagination information:
     * 
     * ```
     * pagination: {
     *     pages: 965191,
     *     per_page: 20,
     *     count: 19303814,
     *     last_indexes: {
     *         last_index: "230906248",
     *         last_disbursement_date: "2014-07-04"
     *     }
     * }
     * ```
     * 
     * To fetch the next page of sorted results, append `last_index=230906248` and
     * `last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
     * these results by using the sort indices (defaults to sort by disbursement date, e.g.
     * `last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
     * This resource uses keyset pagination to improve query performance
     * and these indices are required to properly page through this large dataset.
     * 
     * Note: because the Schedule B data includes many records, counts for
     * large result sets are approximate; you will want to page through the records until no records are returned.
     * 
    **/
    public openapisdk.models.operations.GetSchedulesScheduleBSubIdResponse getSchedulesScheduleBSubId(openapisdk.models.operations.GetSchedulesScheduleBSubIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/schedules/schedule_b/{sub_id}/", request.pathParams);
        
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

        openapisdk.models.operations.GetSchedulesScheduleBSubIdResponse res = new openapisdk.models.operations.GetSchedulesScheduleBSubIdResponse() {{
            scheduleBPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScheduleBPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScheduleBPage.class);
                res.scheduleBPage = out;
            }
        }

        return res;
    }
	
}