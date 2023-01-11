package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReplicationTaskRequest {
    public DeleteReplicationTaskHeaders headers;
    public DeleteReplicationTaskRequest withHeaders(DeleteReplicationTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteReplicationTaskMessage request;
    public DeleteReplicationTaskRequest withRequest(openapisdk.models.shared.DeleteReplicationTaskMessage request) {
        this.request = request;
        return this;
    }
}