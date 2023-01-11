package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGameServerGroupRequest {
    public CreateGameServerGroupHeaders headers;
    public CreateGameServerGroupRequest withHeaders(CreateGameServerGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateGameServerGroupInput request;
    public CreateGameServerGroupRequest withRequest(openapisdk.models.shared.CreateGameServerGroupInput request) {
        this.request = request;
        return this;
    }
}