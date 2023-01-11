package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderListFullRequest {
    public GetOrderListFullHeaders headers;
    public GetOrderListFullRequest withHeaders(GetOrderListFullHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrderListRequest request;
    public GetOrderListFullRequest withRequest(openapisdk.models.shared.OrderListRequest request) {
        this.request = request;
        return this;
    }
}