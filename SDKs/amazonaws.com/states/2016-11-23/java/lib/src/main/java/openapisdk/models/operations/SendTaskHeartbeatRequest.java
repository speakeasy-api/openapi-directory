package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendTaskHeartbeatRequest {
    public SendTaskHeartbeatHeaders headers;
    public SendTaskHeartbeatRequest withHeaders(SendTaskHeartbeatHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendTaskHeartbeatInput request;
    public SendTaskHeartbeatRequest withRequest(openapisdk.models.shared.SendTaskHeartbeatInput request) {
        this.request = request;
        return this;
    }
}