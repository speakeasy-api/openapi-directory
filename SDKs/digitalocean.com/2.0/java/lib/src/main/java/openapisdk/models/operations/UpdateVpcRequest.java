package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVpcRequest {
    public UpdateVpcPathParams pathParams;
    public UpdateVpcRequest withPathParams(UpdateVpcPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateVpcRequestBody request;
    public UpdateVpcRequest withRequest(UpdateVpcRequestBody request) {
        this.request = request;
        return this;
    }
}