package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkGroupRequest {
    public DeleteWorkGroupHeaders headers;
    public DeleteWorkGroupRequest withHeaders(DeleteWorkGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteWorkGroupInput request;
    public DeleteWorkGroupRequest withRequest(openapisdk.models.shared.DeleteWorkGroupInput request) {
        this.request = request;
        return this;
    }
}