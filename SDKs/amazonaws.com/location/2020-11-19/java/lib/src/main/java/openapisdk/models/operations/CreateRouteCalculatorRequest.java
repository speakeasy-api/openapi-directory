package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRouteCalculatorRequest {
    public CreateRouteCalculatorHeaders headers;
    public CreateRouteCalculatorRequest withHeaders(CreateRouteCalculatorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateRouteCalculatorRequestBody request;
    public CreateRouteCalculatorRequest withRequest(CreateRouteCalculatorRequestBody request) {
        this.request = request;
        return this;
    }
}