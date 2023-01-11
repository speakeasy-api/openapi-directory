package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateReplicationInstanceRequest {
    public CreateReplicationInstanceHeaders headers;
    public CreateReplicationInstanceRequest withHeaders(CreateReplicationInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateReplicationInstanceMessage request;
    public CreateReplicationInstanceRequest withRequest(openapisdk.models.shared.CreateReplicationInstanceMessage request) {
        this.request = request;
        return this;
    }
}