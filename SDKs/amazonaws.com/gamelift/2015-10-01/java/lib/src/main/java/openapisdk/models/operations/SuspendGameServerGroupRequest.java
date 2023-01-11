package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SuspendGameServerGroupRequest {
    public SuspendGameServerGroupHeaders headers;
    public SuspendGameServerGroupRequest withHeaders(SuspendGameServerGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SuspendGameServerGroupInput request;
    public SuspendGameServerGroupRequest withRequest(openapisdk.models.shared.SuspendGameServerGroupInput request) {
        this.request = request;
        return this;
    }
}