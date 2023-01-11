package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class EmailTemplates {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public EmailTemplates(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * listAvailableEmailTemplates - List Available Email Templates
     *
     * Use this endpoint to get a list of available templates in your Braze account.
     * 
     * Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.
     * 
     * ### Successful Response Properties
     * ```json
     * {
     *   "count": number of templates returned
     *   "templates": [template with the following properties]:
     *     "email_template_id": (string) your email template's API Identifier,
     *     "template_name": (string) the name of your email template,
     *     "created_at": (string, in ISO 8601),
     *     "updated_at": (string, in ISO 8601),
     *     "tags": (array of strings) tags appended to the template
     * }
     *   ```
    **/
    public openapisdk.models.operations.ListAvailableEmailTemplatesResponse listAvailableEmailTemplates(openapisdk.models.operations.ListAvailableEmailTemplatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/templates/email/list");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ListAvailableEmailTemplatesResponse res = new openapisdk.models.operations.ListAvailableEmailTemplatesResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * seeEmailTemplateInformation - See Email Template Information
     *
     * Use to get information on your email templates.
     * 
     * Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.
     * 
     * ### Request Components
     * - [Template Identifier](https://www.braze.com/docs/api/identifier_types/)
    **/
    public openapisdk.models.operations.SeeEmailTemplateInformationResponse seeEmailTemplateInformation(openapisdk.models.operations.SeeEmailTemplateInformationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/templates/email/info");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SeeEmailTemplateInformationResponse res = new openapisdk.models.operations.SeeEmailTemplateInformationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}