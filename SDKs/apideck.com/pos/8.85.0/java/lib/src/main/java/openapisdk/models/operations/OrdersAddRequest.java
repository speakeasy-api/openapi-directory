package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrdersAddRequest {
    public OrdersAddQueryParams queryParams;
    public OrdersAddRequest withQueryParams(OrdersAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OrdersAddHeaders headers;
    public OrdersAddRequest withHeaders(OrdersAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrderInput request;
    public OrdersAddRequest withRequest(openapisdk.models.shared.OrderInput request) {
        this.request = request;
        return this;
    }
    public OrdersAddSecurity security;
    public OrdersAddRequest withSecurity(OrdersAddSecurity security) {
        this.security = security;
        return this;
    }
}