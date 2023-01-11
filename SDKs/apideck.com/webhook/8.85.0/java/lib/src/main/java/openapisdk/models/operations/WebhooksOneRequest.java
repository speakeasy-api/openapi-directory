package openapisdk.models.operations;



public class WebhooksOneRequest {
    public WebhooksOnePathParams pathParams;
    public WebhooksOneRequest withPathParams(WebhooksOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebhooksOneHeaders headers;
    public WebhooksOneRequest withHeaders(WebhooksOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public WebhooksOneSecurity security;
    public WebhooksOneRequest withSecurity(WebhooksOneSecurity security) {
        this.security = security;
        return this;
    }
}