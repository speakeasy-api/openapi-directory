package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateReplicationJobRequest {
    public CreateReplicationJobHeaders headers;
    public CreateReplicationJobRequest withHeaders(CreateReplicationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateReplicationJobRequest request;
    public CreateReplicationJobRequest withRequest(openapisdk.models.shared.CreateReplicationJobRequest request) {
        this.request = request;
        return this;
    }
}