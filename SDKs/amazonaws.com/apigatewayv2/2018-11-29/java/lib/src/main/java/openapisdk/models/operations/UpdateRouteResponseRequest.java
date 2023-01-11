package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRouteResponseRequest {
    public UpdateRouteResponsePathParams pathParams;
    public UpdateRouteResponseRequest withPathParams(UpdateRouteResponsePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateRouteResponseHeaders headers;
    public UpdateRouteResponseRequest withHeaders(UpdateRouteResponseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateRouteResponseRequestBody request;
    public UpdateRouteResponseRequest withRequest(UpdateRouteResponseRequestBody request) {
        this.request = request;
        return this;
    }
}