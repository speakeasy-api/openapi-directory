package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderListLightV3Request {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrderListRequest request;
    public GetOrderListLightV3Request withRequest(openapisdk.models.shared.OrderListRequest request) {
        this.request = request;
        return this;
    }
}