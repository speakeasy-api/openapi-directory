package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateReplicationJobRequest {
    public UpdateReplicationJobHeaders headers;
    public UpdateReplicationJobRequest withHeaders(UpdateReplicationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateReplicationJobRequest request;
    public UpdateReplicationJobRequest withRequest(openapisdk.models.shared.UpdateReplicationJobRequest request) {
        this.request = request;
        return this;
    }
}