package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkGroupRequest {
    public CreateWorkGroupHeaders headers;
    public CreateWorkGroupRequest withHeaders(CreateWorkGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateWorkGroupInput request;
    public CreateWorkGroupRequest withRequest(openapisdk.models.shared.CreateWorkGroupInput request) {
        this.request = request;
        return this;
    }
}