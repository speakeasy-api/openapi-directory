package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateContainerServiceDeploymentRequest {
    public CreateContainerServiceDeploymentHeaders headers;
    public CreateContainerServiceDeploymentRequest withHeaders(CreateContainerServiceDeploymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateContainerServiceDeploymentRequest request;
    public CreateContainerServiceDeploymentRequest withRequest(openapisdk.models.shared.CreateContainerServiceDeploymentRequest request) {
        this.request = request;
        return this;
    }
}