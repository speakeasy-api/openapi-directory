package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReplicationJobRequest {
    public DeleteReplicationJobHeaders headers;
    public DeleteReplicationJobRequest withHeaders(DeleteReplicationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteReplicationJobRequest request;
    public DeleteReplicationJobRequest withRequest(openapisdk.models.shared.DeleteReplicationJobRequest request) {
        this.request = request;
        return this;
    }
}