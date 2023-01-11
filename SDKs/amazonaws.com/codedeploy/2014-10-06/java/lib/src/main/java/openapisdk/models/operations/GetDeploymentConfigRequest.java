package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeploymentConfigRequest {
    public GetDeploymentConfigHeaders headers;
    public GetDeploymentConfigRequest withHeaders(GetDeploymentConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDeploymentConfigInput request;
    public GetDeploymentConfigRequest withRequest(openapisdk.models.shared.GetDeploymentConfigInput request) {
        this.request = request;
        return this;
    }
}