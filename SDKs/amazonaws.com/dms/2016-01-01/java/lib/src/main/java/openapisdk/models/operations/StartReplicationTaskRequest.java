package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartReplicationTaskRequest {
    public StartReplicationTaskHeaders headers;
    public StartReplicationTaskRequest withHeaders(StartReplicationTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartReplicationTaskMessage request;
    public StartReplicationTaskRequest withRequest(openapisdk.models.shared.StartReplicationTaskMessage request) {
        this.request = request;
        return this;
    }
}