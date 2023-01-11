package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptimiseRequest {
    public OptimisePathParams pathParams;
    public OptimiseRequest withPathParams(OptimisePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OptimiseRequest request;
    public OptimiseRequest withRequest(openapisdk.models.shared.OptimiseRequest request) {
        this.request = request;
        return this;
    }
}