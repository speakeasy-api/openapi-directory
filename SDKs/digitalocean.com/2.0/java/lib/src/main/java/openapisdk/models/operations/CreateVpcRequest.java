package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVpcRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateVpcRequestBody request;
    public CreateVpcRequest withRequest(CreateVpcRequestBody request) {
        this.request = request;
        return this;
    }
}