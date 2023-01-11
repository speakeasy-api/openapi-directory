package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContinueDeploymentRequest {
    public ContinueDeploymentHeaders headers;
    public ContinueDeploymentRequest withHeaders(ContinueDeploymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ContinueDeploymentInput request;
    public ContinueDeploymentRequest withRequest(openapisdk.models.shared.ContinueDeploymentInput request) {
        this.request = request;
        return this;
    }
}