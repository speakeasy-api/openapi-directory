package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MoveReplicationTaskRequest {
    public MoveReplicationTaskHeaders headers;
    public MoveReplicationTaskRequest withHeaders(MoveReplicationTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MoveReplicationTaskMessage request;
    public MoveReplicationTaskRequest withRequest(openapisdk.models.shared.MoveReplicationTaskMessage request) {
        this.request = request;
        return this;
    }
}