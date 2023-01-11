package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrderRequest {
    public CreateOrderHeaders headers;
    public CreateOrderRequest withHeaders(CreateOrderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateOrderRequestBody request;
    public CreateOrderRequest withRequest(CreateOrderRequestBody request) {
        this.request = request;
        return this;
    }
}