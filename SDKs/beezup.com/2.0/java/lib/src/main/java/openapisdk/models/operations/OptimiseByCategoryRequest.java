package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptimiseByCategoryRequest {
    public OptimiseByCategoryPathParams pathParams;
    public OptimiseByCategoryRequest withPathParams(OptimiseByCategoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] request;
    public OptimiseByCategoryRequest withRequest(String[] request) {
        this.request = request;
        return this;
    }
}