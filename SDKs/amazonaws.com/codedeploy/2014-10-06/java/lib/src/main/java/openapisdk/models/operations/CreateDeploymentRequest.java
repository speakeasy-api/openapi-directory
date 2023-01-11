package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeploymentRequest {
    public CreateDeploymentHeaders headers;
    public CreateDeploymentRequest withHeaders(CreateDeploymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDeploymentInput request;
    public CreateDeploymentRequest withRequest(openapisdk.models.shared.CreateDeploymentInput request) {
        this.request = request;
        return this;
    }
}