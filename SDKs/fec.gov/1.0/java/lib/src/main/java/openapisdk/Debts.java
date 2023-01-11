package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Debts {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Debts(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getSchedulesScheduleD - 
     * Schedule D, it shows debts and obligations owed to or by the committee that are
     * required to be disclosed.
     * 
     * 
     * 
    **/
    public openapisdk.models.operations.GetSchedulesScheduleDResponse getSchedulesScheduleD(openapisdk.models.operations.GetSchedulesScheduleDRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/schedules/schedule_d/");
        
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

        openapisdk.models.operations.GetSchedulesScheduleDResponse res = new openapisdk.models.operations.GetSchedulesScheduleDResponse() {{
            getSchedulesScheduleDDefaultApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetSchedulesScheduleDDefaultApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetSchedulesScheduleDDefaultApplicationJson.class);
                res.getSchedulesScheduleDDefaultApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSchedulesScheduleDSubId - 
     * Schedule D, it shows debts and obligations owed to or by the committee that are
     * required to be disclosed.
     * 
     * 
     * 
    **/
    public openapisdk.models.operations.GetSchedulesScheduleDSubIdResponse getSchedulesScheduleDSubId(openapisdk.models.operations.GetSchedulesScheduleDSubIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/schedules/schedule_d/{sub_id}/", request.pathParams);
        
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

        openapisdk.models.operations.GetSchedulesScheduleDSubIdResponse res = new openapisdk.models.operations.GetSchedulesScheduleDSubIdResponse() {{
            getSchedulesScheduleDSubIdDefaultApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetSchedulesScheduleDSubIdDefaultApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetSchedulesScheduleDSubIdDefaultApplicationJson.class);
                res.getSchedulesScheduleDSubIdDefaultApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}