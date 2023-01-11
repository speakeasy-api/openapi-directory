package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateClusterRequest {
    public CreateClusterHeaders headers;
    public CreateClusterRequest withHeaders(CreateClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateClusterRequest request;
    public CreateClusterRequest withRequest(openapisdk.models.shared.CreateClusterRequest request) {
        this.request = request;
        return this;
    }
}