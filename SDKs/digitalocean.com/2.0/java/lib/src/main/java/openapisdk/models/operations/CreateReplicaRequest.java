package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateReplicaRequest {
    public CreateReplicaPathParams pathParams;
    public CreateReplicaRequest withPathParams(CreateReplicaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateReplicaRequestBodyInput request;
    public CreateReplicaRequest withRequest(CreateReplicaRequestBodyInput request) {
        this.request = request;
        return this;
    }
}