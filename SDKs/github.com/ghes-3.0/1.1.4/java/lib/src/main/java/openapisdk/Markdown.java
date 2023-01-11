package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Markdown {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Markdown(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * markdownRender - Render a Markdown document
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/markdown#render-a-markdown-document - API method documentation
    **/
    public openapisdk.models.operations.MarkdownRenderResponse markdownRender(openapisdk.models.operations.MarkdownRenderRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/markdown");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MarkdownRenderResponse res = new openapisdk.models.operations.MarkdownRenderResponse() {{
            markdownRender200TextHTMLString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/html")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.markdownRender200TextHTMLString = out;
            }
        }
        else if (httpRes.statusCode() == 304) {
        }

        return res;
    }
	
	
    /**
     * markdownRenderRaw - Render a Markdown document in raw mode
     *
     * You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/markdown#render-a-markdown-document-in-raw-mode - API method documentation
    **/
    public openapisdk.models.operations.MarkdownRenderRawResponse markdownRenderRaw(openapisdk.models.operations.MarkdownRenderRawRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/markdown/raw");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MarkdownRenderRawResponse res = new openapisdk.models.operations.MarkdownRenderRawResponse() {{
            markdownRenderRaw200TextHTMLString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/html")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.markdownRenderRaw200TextHTMLString = out;
            }
        }
        else if (httpRes.statusCode() == 304) {
        }

        return res;
    }
	
}