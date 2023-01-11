package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGameServerGroupRequest {
    public DeleteGameServerGroupHeaders headers;
    public DeleteGameServerGroupRequest withHeaders(DeleteGameServerGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteGameServerGroupInput request;
    public DeleteGameServerGroupRequest withRequest(openapisdk.models.shared.DeleteGameServerGroupInput request) {
        this.request = request;
        return this;
    }
}