package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterEcsClusterRequest {
    public RegisterEcsClusterHeaders headers;
    public RegisterEcsClusterRequest withHeaders(RegisterEcsClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterEcsClusterRequest request;
    public RegisterEcsClusterRequest withRequest(openapisdk.models.shared.RegisterEcsClusterRequest request) {
        this.request = request;
        return this;
    }
}