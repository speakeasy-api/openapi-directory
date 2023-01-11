package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSiteTestWebhookRequestBody {
    @SpeakeasyMetadata("multipartForm:name=action")
    public String action;
    public PostSiteTestWebhookRequestBody withAction(String action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=body,json")
    public java.util.Map<String, Object> body;
    public PostSiteTestWebhookRequestBody withBody(java.util.Map<String, Object> body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=encoding")
    public String encoding;
    public PostSiteTestWebhookRequestBody withEncoding(String encoding) {
        this.encoding = encoding;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=headers,json")
    public java.util.Map<String, Object> headers;
    public PostSiteTestWebhookRequestBody withHeaders(java.util.Map<String, Object> headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=method")
    public String method;
    public PostSiteTestWebhookRequestBody withMethod(String method) {
        this.method = method;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=url")
    public String url;
    public PostSiteTestWebhookRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
}