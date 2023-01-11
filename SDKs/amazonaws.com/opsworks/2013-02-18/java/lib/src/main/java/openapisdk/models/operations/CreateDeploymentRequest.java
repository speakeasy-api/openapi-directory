package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeploymentRequest {
    public CreateDeploymentHeaders headers;
    public CreateDeploymentRequest withHeaders(CreateDeploymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDeploymentRequest request;
    public CreateDeploymentRequest withRequest(openapisdk.models.shared.CreateDeploymentRequest request) {
        this.request = request;
        return this;
    }
}