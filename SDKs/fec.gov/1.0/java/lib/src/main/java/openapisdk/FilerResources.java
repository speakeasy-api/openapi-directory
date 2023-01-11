package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class FilerResources {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public FilerResources(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getRadAnalyst - 
     * Use this endpoint to look up the RAD Analyst for a committee.
     * 
     * The mission of the Reports Analysis Division (RAD) is to ensure that
     * campaigns and political committees file timely and accurate reports that fully disclose
     * their financial activities.  RAD is responsible for reviewing statements and financial
     * reports filed by political committees participating in federal elections, providing
     * assistance and guidance to the committees to properly file their reports, and for taking
     * appropriate action to ensure compliance with the Federal Election Campaign Act (FECA).
     * 
    **/
    public openapisdk.models.operations.GetRadAnalystResponse getRadAnalyst(openapisdk.models.operations.GetRadAnalystRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rad-analyst/");
        
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

        openapisdk.models.operations.GetRadAnalystResponse res = new openapisdk.models.operations.GetRadAnalystResponse() {{
            radAnalystPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RadAnalystPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RadAnalystPage.class);
                res.radAnalystPage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getStateElectionOffice - 
     * State laws and procedures govern elections for state or local offices as well as
     * how candidates appear on election ballots.
     * Contact the appropriate state election office for more information.
     * 
    **/
    public openapisdk.models.operations.GetStateElectionOfficeResponse getStateElectionOffice(openapisdk.models.operations.GetStateElectionOfficeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/state-election-office/");
        
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

        openapisdk.models.operations.GetStateElectionOfficeResponse res = new openapisdk.models.operations.GetStateElectionOfficeResponse() {{
            stateElectionOfficeInfoPage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.StateElectionOfficeInfoPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.StateElectionOfficeInfoPage.class);
                res.stateElectionOfficeInfoPage = out;
            }
        }

        return res;
    }
	
}