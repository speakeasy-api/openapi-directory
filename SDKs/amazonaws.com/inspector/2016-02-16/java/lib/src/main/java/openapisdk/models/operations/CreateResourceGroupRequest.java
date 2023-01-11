package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateResourceGroupRequest {
    public CreateResourceGroupHeaders headers;
    public CreateResourceGroupRequest withHeaders(CreateResourceGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateResourceGroupRequest request;
    public CreateResourceGroupRequest withRequest(openapisdk.models.shared.CreateResourceGroupRequest request) {
        this.request = request;
        return this;
    }
}