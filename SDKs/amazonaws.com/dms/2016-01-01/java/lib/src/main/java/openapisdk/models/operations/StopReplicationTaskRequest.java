package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopReplicationTaskRequest {
    public StopReplicationTaskHeaders headers;
    public StopReplicationTaskRequest withHeaders(StopReplicationTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopReplicationTaskMessage request;
    public StopReplicationTaskRequest withRequest(openapisdk.models.shared.StopReplicationTaskMessage request) {
        this.request = request;
        return this;
    }
}