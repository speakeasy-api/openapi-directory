package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyReplicationTaskRequest {
    public ModifyReplicationTaskHeaders headers;
    public ModifyReplicationTaskRequest withHeaders(ModifyReplicationTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyReplicationTaskMessage request;
    public ModifyReplicationTaskRequest withRequest(openapisdk.models.shared.ModifyReplicationTaskMessage request) {
        this.request = request;
        return this;
    }
}