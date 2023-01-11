package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrderTypesAddRequest {
    public OrderTypesAddQueryParams queryParams;
    public OrderTypesAddRequest withQueryParams(OrderTypesAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OrderTypesAddHeaders headers;
    public OrderTypesAddRequest withHeaders(OrderTypesAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrderTypeInput request;
    public OrderTypesAddRequest withRequest(openapisdk.models.shared.OrderTypeInput request) {
        this.request = request;
        return this;
    }
    public OrderTypesAddSecurity security;
    public OrderTypesAddRequest withSecurity(OrderTypesAddSecurity security) {
        this.security = security;
        return this;
    }
}