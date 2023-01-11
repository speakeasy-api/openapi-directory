package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchLocationRequest {
    public PatchLocationPathParams pathParams;
    public PatchLocationRequest withPathParams(PatchLocationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PatchLocationRequestBody request;
    public PatchLocationRequest withRequest(PatchLocationRequestBody request) {
        this.request = request;
        return this;
    }
}