package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRouteResponseRequest {
    public CreateRouteResponsePathParams pathParams;
    public CreateRouteResponseRequest withPathParams(CreateRouteResponsePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateRouteResponseHeaders headers;
    public CreateRouteResponseRequest withHeaders(CreateRouteResponseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateRouteResponseRequestBody request;
    public CreateRouteResponseRequest withRequest(CreateRouteResponseRequestBody request) {
        this.request = request;
        return this;
    }
}