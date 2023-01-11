package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class PartyCoordinatedExpenditures {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public PartyCoordinatedExpenditures(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getSchedulesScheduleF - 
     * Schedule F, it shows all special expenditures a national or state party committee
     * makes in connection with the general election campaigns of federal candidates.
     * 
     * These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
     * these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.
     * 
    **/
    public openapisdk.models.operations.GetSchedulesScheduleFResponse getSchedulesScheduleF(openapisdk.models.operations.GetSchedulesScheduleFRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/schedules/schedule_f/");
        
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

        openapisdk.models.operations.GetSchedulesScheduleFResponse res = new openapisdk.models.operations.GetSchedulesScheduleFResponse() {{
            getSchedulesScheduleFDefaultApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetSchedulesScheduleFDefaultApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetSchedulesScheduleFDefaultApplicationJson.class);
                res.getSchedulesScheduleFDefaultApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSchedulesScheduleFSubId - 
     * Schedule F, it shows all special expenditures a national or state party committee
     * makes in connection with the general election campaigns of federal candidates.
     * 
     * These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
     * these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.
     * 
    **/
    public openapisdk.models.operations.GetSchedulesScheduleFSubIdResponse getSchedulesScheduleFSubId(openapisdk.models.operations.GetSchedulesScheduleFSubIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/schedules/schedule_f/{sub_id}/", request.pathParams);
        
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

        openapisdk.models.operations.GetSchedulesScheduleFSubIdResponse res = new openapisdk.models.operations.GetSchedulesScheduleFSubIdResponse() {{
            getSchedulesScheduleFSubIdDefaultApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetSchedulesScheduleFSubIdDefaultApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetSchedulesScheduleFSubIdDefaultApplicationJson.class);
                res.getSchedulesScheduleFSubIdDefaultApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}