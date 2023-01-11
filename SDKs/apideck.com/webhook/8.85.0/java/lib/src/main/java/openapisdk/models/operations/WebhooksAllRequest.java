package openapisdk.models.operations;



public class WebhooksAllRequest {
    public WebhooksAllQueryParams queryParams;
    public WebhooksAllRequest withQueryParams(WebhooksAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebhooksAllHeaders headers;
    public WebhooksAllRequest withHeaders(WebhooksAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public WebhooksAllSecurity security;
    public WebhooksAllRequest withSecurity(WebhooksAllSecurity security) {
        this.security = security;
        return this;
    }
}