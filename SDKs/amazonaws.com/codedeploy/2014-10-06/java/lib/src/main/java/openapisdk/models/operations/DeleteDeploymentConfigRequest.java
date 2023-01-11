package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDeploymentConfigRequest {
    public DeleteDeploymentConfigHeaders headers;
    public DeleteDeploymentConfigRequest withHeaders(DeleteDeploymentConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDeploymentConfigInput request;
    public DeleteDeploymentConfigRequest withRequest(openapisdk.models.shared.DeleteDeploymentConfigInput request) {
        this.request = request;
        return this;
    }
}