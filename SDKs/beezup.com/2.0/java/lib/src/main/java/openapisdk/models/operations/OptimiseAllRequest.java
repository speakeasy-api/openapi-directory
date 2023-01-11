package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptimiseAllRequest {
    public OptimiseAllPathParams pathParams;
    public OptimiseAllRequest withPathParams(OptimiseAllPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OptimiseAllRequest request;
    public OptimiseAllRequest withRequest(openapisdk.models.shared.OptimiseAllRequest request) {
        this.request = request;
        return this;
    }
}