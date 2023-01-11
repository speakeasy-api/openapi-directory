package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelEnvironmentDeploymentRequest {
    public CancelEnvironmentDeploymentHeaders headers;
    public CancelEnvironmentDeploymentRequest withHeaders(CancelEnvironmentDeploymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelEnvironmentDeploymentInput request;
    public CancelEnvironmentDeploymentRequest withRequest(openapisdk.models.shared.CancelEnvironmentDeploymentInput request) {
        this.request = request;
        return this;
    }
}