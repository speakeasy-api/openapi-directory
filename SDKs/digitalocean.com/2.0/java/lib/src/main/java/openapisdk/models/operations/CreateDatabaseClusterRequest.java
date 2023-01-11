package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDatabaseClusterRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDatabaseClusterRequestBodyInput request;
    public CreateDatabaseClusterRequest withRequest(CreateDatabaseClusterRequestBodyInput request) {
        this.request = request;
        return this;
    }
}