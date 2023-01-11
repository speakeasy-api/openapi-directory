package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWebhookTestsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=action")
    public String action;
    public PostWebhookTestsRequestBody withAction(String action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=body,json")
    public java.util.Map<String, Object> body;
    public PostWebhookTestsRequestBody withBody(java.util.Map<String, Object> body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=encoding")
    public String encoding;
    public PostWebhookTestsRequestBody withEncoding(String encoding) {
        this.encoding = encoding;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file_as_body")
    public Boolean fileAsBody;
    public PostWebhookTestsRequestBody withFileAsBody(Boolean fileAsBody) {
        this.fileAsBody = fileAsBody;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file_form_field")
    public String fileFormField;
    public PostWebhookTestsRequestBody withFileFormField(String fileFormField) {
        this.fileFormField = fileFormField;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=headers,json")
    public java.util.Map<String, Object> headers;
    public PostWebhookTestsRequestBody withHeaders(java.util.Map<String, Object> headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=method")
    public String method;
    public PostWebhookTestsRequestBody withMethod(String method) {
        this.method = method;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=raw_body")
    public String rawBody;
    public PostWebhookTestsRequestBody withRawBody(String rawBody) {
        this.rawBody = rawBody;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=url")
    public String url;
    public PostWebhookTestsRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
}