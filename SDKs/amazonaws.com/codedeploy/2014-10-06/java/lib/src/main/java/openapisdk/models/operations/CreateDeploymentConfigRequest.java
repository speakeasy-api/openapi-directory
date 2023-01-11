package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeploymentConfigRequest {
    public CreateDeploymentConfigHeaders headers;
    public CreateDeploymentConfigRequest withHeaders(CreateDeploymentConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDeploymentConfigInput request;
    public CreateDeploymentConfigRequest withRequest(openapisdk.models.shared.CreateDeploymentConfigInput request) {
        this.request = request;
        return this;
    }
}