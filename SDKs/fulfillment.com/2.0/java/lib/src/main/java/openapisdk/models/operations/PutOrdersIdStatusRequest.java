package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOrdersIdStatusRequest {
    public PutOrdersIdStatusPathParams pathParams;
    public PutOrdersIdStatusRequest withPathParams(PutOrdersIdStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutOrdersIdStatusStatusTypeSimpleV2 request;
    public PutOrdersIdStatusRequest withRequest(PutOrdersIdStatusStatusTypeSimpleV2 request) {
        this.request = request;
        return this;
    }
    public PutOrdersIdStatusSecurity security;
    public PutOrdersIdStatusRequest withSecurity(PutOrdersIdStatusSecurity security) {
        this.security = security;
        return this;
    }
}