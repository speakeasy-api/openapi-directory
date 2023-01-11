package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIpGroupRequest {
    public CreateIpGroupHeaders headers;
    public CreateIpGroupRequest withHeaders(CreateIpGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateIpGroupRequest request;
    public CreateIpGroupRequest withRequest(openapisdk.models.shared.CreateIpGroupRequest request) {
        this.request = request;
        return this;
    }
}