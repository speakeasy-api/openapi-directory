package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrdersUpdateRequest {
    public OrdersUpdatePathParams pathParams;
    public OrdersUpdateRequest withPathParams(OrdersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OrdersUpdateQueryParams queryParams;
    public OrdersUpdateRequest withQueryParams(OrdersUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OrdersUpdateHeaders headers;
    public OrdersUpdateRequest withHeaders(OrdersUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrderInput request;
    public OrdersUpdateRequest withRequest(openapisdk.models.shared.OrderInput request) {
        this.request = request;
        return this;
    }
    public OrdersUpdateSecurity security;
    public OrdersUpdateRequest withSecurity(OrdersUpdateSecurity security) {
        this.security = security;
        return this;
    }
}