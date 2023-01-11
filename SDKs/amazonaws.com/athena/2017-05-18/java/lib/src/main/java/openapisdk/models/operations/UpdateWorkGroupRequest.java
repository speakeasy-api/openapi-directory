package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkGroupRequest {
    public UpdateWorkGroupHeaders headers;
    public UpdateWorkGroupRequest withHeaders(UpdateWorkGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateWorkGroupInput request;
    public UpdateWorkGroupRequest withRequest(openapisdk.models.shared.UpdateWorkGroupInput request) {
        this.request = request;
        return this;
    }
}