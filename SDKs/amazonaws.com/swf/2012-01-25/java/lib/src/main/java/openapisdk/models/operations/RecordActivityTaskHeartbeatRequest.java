package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordActivityTaskHeartbeatRequest {
    public RecordActivityTaskHeartbeatHeaders headers;
    public RecordActivityTaskHeartbeatRequest withHeaders(RecordActivityTaskHeartbeatHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RecordActivityTaskHeartbeatInput request;
    public RecordActivityTaskHeartbeatRequest withRequest(openapisdk.models.shared.RecordActivityTaskHeartbeatInput request) {
        this.request = request;
        return this;
    }
}