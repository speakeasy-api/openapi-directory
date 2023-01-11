package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReplicationInstanceRequest {
    public DeleteReplicationInstanceHeaders headers;
    public DeleteReplicationInstanceRequest withHeaders(DeleteReplicationInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteReplicationInstanceMessage request;
    public DeleteReplicationInstanceRequest withRequest(openapisdk.models.shared.DeleteReplicationInstanceMessage request) {
        this.request = request;
        return this;
    }
}