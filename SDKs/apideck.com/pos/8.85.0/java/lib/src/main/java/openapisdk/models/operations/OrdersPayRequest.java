package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrdersPayRequest {
    public OrdersPayPathParams pathParams;
    public OrdersPayRequest withPathParams(OrdersPayPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OrdersPayQueryParams queryParams;
    public OrdersPayRequest withQueryParams(OrdersPayQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OrdersPayHeaders headers;
    public OrdersPayRequest withHeaders(OrdersPayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrderInput request;
    public OrdersPayRequest withRequest(openapisdk.models.shared.OrderInput request) {
        this.request = request;
        return this;
    }
    public OrdersPaySecurity security;
    public OrdersPayRequest withSecurity(OrdersPaySecurity security) {
        this.security = security;
        return this;
    }
}