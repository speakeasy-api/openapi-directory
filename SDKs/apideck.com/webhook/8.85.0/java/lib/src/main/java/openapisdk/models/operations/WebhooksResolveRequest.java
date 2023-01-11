package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksResolveRequest {
    public WebhooksResolvePathParams pathParams;
    public WebhooksResolveRequest withPathParams(WebhooksResolvePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebhooksResolveQueryParams queryParams;
    public WebhooksResolveRequest withQueryParams(WebhooksResolveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public WebhooksResolveRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public WebhooksResolveSecurity security;
    public WebhooksResolveRequest withSecurity(WebhooksResolveSecurity security) {
        this.security = security;
        return this;
    }
}