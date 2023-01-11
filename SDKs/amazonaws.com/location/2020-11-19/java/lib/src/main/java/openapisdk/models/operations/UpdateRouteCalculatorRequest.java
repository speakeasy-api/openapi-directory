package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRouteCalculatorRequest {
    public UpdateRouteCalculatorPathParams pathParams;
    public UpdateRouteCalculatorRequest withPathParams(UpdateRouteCalculatorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateRouteCalculatorHeaders headers;
    public UpdateRouteCalculatorRequest withHeaders(UpdateRouteCalculatorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateRouteCalculatorRequestBody request;
    public UpdateRouteCalculatorRequest withRequest(UpdateRouteCalculatorRequestBody request) {
        this.request = request;
        return this;
    }
}