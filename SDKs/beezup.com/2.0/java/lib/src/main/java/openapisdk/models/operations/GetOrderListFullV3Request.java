package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderListFullV3Request {
    public GetOrderListFullV3Headers headers;
    public GetOrderListFullV3Request withHeaders(GetOrderListFullV3Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrderListRequest request;
    public GetOrderListFullV3Request withRequest(openapisdk.models.shared.OrderListRequest request) {
        this.request = request;
        return this;
    }
}