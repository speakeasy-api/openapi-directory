package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateReplicationSetRequest {
    public CreateReplicationSetHeaders headers;
    public CreateReplicationSetRequest withHeaders(CreateReplicationSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateReplicationSetRequestBody request;
    public CreateReplicationSetRequest withRequest(CreateReplicationSetRequestBody request) {
        this.request = request;
        return this;
    }
}