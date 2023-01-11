package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Efiling {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Efiling(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getEfileFilings - Basic information about electronic files coming into the FEC, posted as they are received.
    **/
    public openapisdk.models.operations.GetEfileFilingsResponse getEfileFilings(openapisdk.models.operations.GetEfileFilingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/efile/filings/");
        
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

        openapisdk.models.operations.GetEfileFilingsResponse res = new openapisdk.models.operations.GetEfileFilingsResponse() {{
            eFilingsPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EFilingsPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EFilingsPage.class);
                res.eFilingsPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getEfileReportsHouseSenate - 
     * Key financial data reported periodically by committees as they are reported. This feed includes summary
     * information from the the House F3 reports, the presidential F3p reports and the PAC and party
     * F3x reports.
     * 
     * Generally, committees file reports on a quarterly or monthly basis, but
     * some must also submit a report 12 days before primary elections. Therefore, during the primary
     * season, the period covered by this file may be different for different committees. These totals
     * also incorporate any changes made by committees, if any report covering the period is amended.
     * 
     * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
     * label these fields while conveying clear meaning to ensure accessibility for all users.
     * 
    **/
    public openapisdk.models.operations.GetEfileReportsHouseSenateResponse getEfileReportsHouseSenate(openapisdk.models.operations.GetEfileReportsHouseSenateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/efile/reports/house-senate/");
        
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

        openapisdk.models.operations.GetEfileReportsHouseSenateResponse res = new openapisdk.models.operations.GetEfileReportsHouseSenateResponse() {{
            baseF3FilingPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BaseF3FilingPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BaseF3FilingPage.class);
                res.baseF3FilingPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getEfileReportsPacParty - 
     * Key financial data reported periodically by committees as they are reported. This feed includes summary
     * information from the the House F3 reports, the presidential F3p reports and the PAC and party
     * F3x reports.
     * 
     * Generally, committees file reports on a quarterly or monthly basis, but
     * some must also submit a report 12 days before primary elections. Therefore, during the primary
     * season, the period covered by this file may be different for different committees. These totals
     * also incorporate any changes made by committees, if any report covering the period is amended.
     * 
     * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
     * label these fields while conveying clear meaning to ensure accessibility for all users.
     * 
    **/
    public openapisdk.models.operations.GetEfileReportsPacPartyResponse getEfileReportsPacParty(openapisdk.models.operations.GetEfileReportsPacPartyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/efile/reports/pac-party/");
        
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

        openapisdk.models.operations.GetEfileReportsPacPartyResponse res = new openapisdk.models.operations.GetEfileReportsPacPartyResponse() {{
            baseF3XFilingPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BaseF3XFilingPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BaseF3XFilingPage.class);
                res.baseF3XFilingPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getEfileReportsPresidential - 
     * Key financial data reported periodically by committees as they are reported. This feed includes summary
     * information from the the House F3 reports, the presidential F3p reports and the PAC and party
     * F3x reports.
     * 
     * Generally, committees file reports on a quarterly or monthly basis, but
     * some must also submit a report 12 days before primary elections. Therefore, during the primary
     * season, the period covered by this file may be different for different committees. These totals
     * also incorporate any changes made by committees, if any report covering the period is amended.
     * 
     * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
     * label these fields while conveying clear meaning to ensure accessibility for all users.
     * 
    **/
    public openapisdk.models.operations.GetEfileReportsPresidentialResponse getEfileReportsPresidential(openapisdk.models.operations.GetEfileReportsPresidentialRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/efile/reports/presidential/");
        
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

        openapisdk.models.operations.GetEfileReportsPresidentialResponse res = new openapisdk.models.operations.GetEfileReportsPresidentialResponse() {{
            baseF3PFilingPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BaseF3PFilingPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BaseF3PFilingPage.class);
                res.baseF3PFilingPage = out;
            }
        }

        return res;
    }
	
}