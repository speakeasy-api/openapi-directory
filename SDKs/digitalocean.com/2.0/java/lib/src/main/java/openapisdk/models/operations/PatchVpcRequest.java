package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchVpcRequest {
    public PatchVpcPathParams pathParams;
    public PatchVpcRequest withPathParams(PatchVpcPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PatchVpcRequestBody request;
    public PatchVpcRequest withRequest(PatchVpcRequestBody request) {
        this.request = request;
        return this;
    }
}