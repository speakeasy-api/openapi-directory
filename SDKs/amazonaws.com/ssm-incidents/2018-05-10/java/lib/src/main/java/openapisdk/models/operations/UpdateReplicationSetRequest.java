package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateReplicationSetRequest {
    public UpdateReplicationSetHeaders headers;
    public UpdateReplicationSetRequest withHeaders(UpdateReplicationSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateReplicationSetRequestBody request;
    public UpdateReplicationSetRequest withRequest(UpdateReplicationSetRequestBody request) {
        this.request = request;
        return this;
    }
}