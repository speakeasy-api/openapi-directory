package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FunctionsUpdateTagRequest {
    public FunctionsUpdateTagPathParams pathParams;
    public FunctionsUpdateTagRequest withPathParams(FunctionsUpdateTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public FunctionsUpdateTagRequestBody request;
    public FunctionsUpdateTagRequest withRequest(FunctionsUpdateTagRequestBody request) {
        this.request = request;
        return this;
    }
    public FunctionsUpdateTagSecurity security;
    public FunctionsUpdateTagRequest withSecurity(FunctionsUpdateTagSecurity security) {
        this.security = security;
        return this;
    }
}