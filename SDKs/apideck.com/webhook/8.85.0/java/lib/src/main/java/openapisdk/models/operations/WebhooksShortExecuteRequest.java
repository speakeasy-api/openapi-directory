package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksShortExecuteRequest {
    public WebhooksShortExecutePathParams pathParams;
    public WebhooksShortExecuteRequest withPathParams(WebhooksShortExecutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebhooksShortExecuteQueryParams queryParams;
    public WebhooksShortExecuteRequest withQueryParams(WebhooksShortExecuteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public WebhooksShortExecuteRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public WebhooksShortExecuteSecurity security;
    public WebhooksShortExecuteRequest withSecurity(WebhooksShortExecuteSecurity security) {
        this.security = security;
        return this;
    }
}