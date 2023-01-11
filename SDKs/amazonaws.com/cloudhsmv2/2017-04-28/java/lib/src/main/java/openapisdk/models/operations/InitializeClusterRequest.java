package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InitializeClusterRequest {
    public InitializeClusterHeaders headers;
    public InitializeClusterRequest withHeaders(InitializeClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InitializeClusterRequest request;
    public InitializeClusterRequest withRequest(openapisdk.models.shared.InitializeClusterRequest request) {
        this.request = request;
        return this;
    }
}