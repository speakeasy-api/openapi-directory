package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendHeartbeatRequest {
    public SendHeartbeatHeaders headers;
    public SendHeartbeatRequest withHeaders(SendHeartbeatHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SendHeartbeatRequestBody request;
    public SendHeartbeatRequest withRequest(SendHeartbeatRequestBody request) {
        this.request = request;
        return this;
    }
}