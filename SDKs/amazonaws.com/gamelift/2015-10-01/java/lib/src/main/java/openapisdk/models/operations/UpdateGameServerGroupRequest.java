package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGameServerGroupRequest {
    public UpdateGameServerGroupHeaders headers;
    public UpdateGameServerGroupRequest withHeaders(UpdateGameServerGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateGameServerGroupInput request;
    public UpdateGameServerGroupRequest withRequest(openapisdk.models.shared.UpdateGameServerGroupInput request) {
        this.request = request;
        return this;
    }
}