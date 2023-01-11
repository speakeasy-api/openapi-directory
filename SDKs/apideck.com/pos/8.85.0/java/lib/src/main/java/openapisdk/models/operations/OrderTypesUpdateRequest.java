package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrderTypesUpdateRequest {
    public OrderTypesUpdatePathParams pathParams;
    public OrderTypesUpdateRequest withPathParams(OrderTypesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OrderTypesUpdateQueryParams queryParams;
    public OrderTypesUpdateRequest withQueryParams(OrderTypesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OrderTypesUpdateHeaders headers;
    public OrderTypesUpdateRequest withHeaders(OrderTypesUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrderTypeInput request;
    public OrderTypesUpdateRequest withRequest(openapisdk.models.shared.OrderTypeInput request) {
        this.request = request;
        return this;
    }
    public OrderTypesUpdateSecurity security;
    public OrderTypesUpdateRequest withSecurity(OrderTypesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}