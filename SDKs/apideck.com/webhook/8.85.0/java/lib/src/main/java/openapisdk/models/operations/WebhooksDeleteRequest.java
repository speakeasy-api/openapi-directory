package openapisdk.models.operations;



public class WebhooksDeleteRequest {
    public WebhooksDeletePathParams pathParams;
    public WebhooksDeleteRequest withPathParams(WebhooksDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebhooksDeleteHeaders headers;
    public WebhooksDeleteRequest withHeaders(WebhooksDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public WebhooksDeleteSecurity security;
    public WebhooksDeleteRequest withSecurity(WebhooksDeleteSecurity security) {
        this.security = security;
        return this;
    }
}