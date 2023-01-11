package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateReplicationTaskRequest {
    public CreateReplicationTaskHeaders headers;
    public CreateReplicationTaskRequest withHeaders(CreateReplicationTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateReplicationTaskMessage request;
    public CreateReplicationTaskRequest withRequest(openapisdk.models.shared.CreateReplicationTaskMessage request) {
        this.request = request;
        return this;
    }
}