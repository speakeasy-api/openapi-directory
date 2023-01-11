package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMeshRequest {
    public CreateMeshHeaders headers;
    public CreateMeshRequest withHeaders(CreateMeshHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateMeshRequestBody request;
    public CreateMeshRequest withRequest(CreateMeshRequestBody request) {
        this.request = request;
        return this;
    }
}