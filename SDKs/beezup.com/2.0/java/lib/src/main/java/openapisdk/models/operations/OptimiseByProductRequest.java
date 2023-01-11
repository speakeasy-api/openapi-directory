package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptimiseByProductRequest {
    public OptimiseByProductPathParams pathParams;
    public OptimiseByProductRequest withPathParams(OptimiseByProductPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] request;
    public OptimiseByProductRequest withRequest(String[] request) {
        this.request = request;
        return this;
    }
}