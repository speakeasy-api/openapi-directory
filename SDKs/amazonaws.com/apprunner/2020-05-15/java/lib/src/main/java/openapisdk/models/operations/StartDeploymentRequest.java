package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartDeploymentRequest {
    public StartDeploymentHeaders headers;
    public StartDeploymentRequest withHeaders(StartDeploymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartDeploymentRequest request;
    public StartDeploymentRequest withRequest(openapisdk.models.shared.StartDeploymentRequest request) {
        this.request = request;
        return this;
    }
}