package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalculateRouteRequest {
    public CalculateRoutePathParams pathParams;
    public CalculateRouteRequest withPathParams(CalculateRoutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalculateRouteHeaders headers;
    public CalculateRouteRequest withHeaders(CalculateRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CalculateRouteRequestBody request;
    public CalculateRouteRequest withRequest(CalculateRouteRequestBody request) {
        this.request = request;
        return this;
    }
}