package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderListLightRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrderListRequest request;
    public GetOrderListLightRequest withRequest(openapisdk.models.shared.OrderListRequest request) {
        this.request = request;
        return this;
    }
}