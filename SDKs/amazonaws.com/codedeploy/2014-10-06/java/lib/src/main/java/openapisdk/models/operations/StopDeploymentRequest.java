package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopDeploymentRequest {
    public StopDeploymentHeaders headers;
    public StopDeploymentRequest withHeaders(StopDeploymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopDeploymentInput request;
    public StopDeploymentRequest withRequest(openapisdk.models.shared.StopDeploymentInput request) {
        this.request = request;
        return this;
    }
}