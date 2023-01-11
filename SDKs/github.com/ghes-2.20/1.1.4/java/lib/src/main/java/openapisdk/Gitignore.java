package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class Gitignore {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Gitignore(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * gitignoreGetAllTemplates - Get all gitignore templates
     *
     * List all templates available to pass as an option when [creating a repository](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-repository-for-the-authenticated-user).
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gitignore#get-all-gitignore-templates - API method documentation
    **/
    public openapisdk.models.operations.GitignoreGetAllTemplatesResponse gitignoreGetAllTemplates() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/gitignore/templates");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GitignoreGetAllTemplatesResponse res = new openapisdk.models.operations.GitignoreGetAllTemplatesResponse() {{
            gitignoreGetAllTemplates200ApplicationJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.gitignoreGetAllTemplates200ApplicationJSONStrings = out;
            }
        }
        else if (httpRes.statusCode() == 304) {
        }

        return res;
    }
	
	
    /**
     * gitignoreGetTemplate - Get a gitignore template
     *
     * The API also allows fetching the source of a single template.
     * Use the raw [media type](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types/) to get the raw contents.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gitignore#get-a-gitignore-template - API method documentation
    **/
    public openapisdk.models.operations.GitignoreGetTemplateResponse gitignoreGetTemplate(openapisdk.models.operations.GitignoreGetTemplateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/gitignore/templates/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GitignoreGetTemplateResponse res = new openapisdk.models.operations.GitignoreGetTemplateResponse() {{
            gitignoreTemplate = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GitignoreTemplate out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GitignoreTemplate.class);
                res.gitignoreTemplate = out;
            }
        }
        else if (httpRes.statusCode() == 304) {
        }

        return res;
    }
	
}