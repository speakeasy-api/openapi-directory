package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTokenRequest {
    public PatchTokenPathParams pathParams;
    public PatchTokenRequest withPathParams(PatchTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PatchTokenRequestBody request;
    public PatchTokenRequest withRequest(PatchTokenRequestBody request) {
        this.request = request;
        return this;
    }
}