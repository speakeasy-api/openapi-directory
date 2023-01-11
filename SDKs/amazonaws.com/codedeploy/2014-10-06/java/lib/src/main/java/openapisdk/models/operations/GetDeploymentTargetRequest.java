package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeploymentTargetRequest {
    public GetDeploymentTargetHeaders headers;
    public GetDeploymentTargetRequest withHeaders(GetDeploymentTargetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDeploymentTargetInput request;
    public GetDeploymentTargetRequest withRequest(openapisdk.models.shared.GetDeploymentTargetInput request) {
        this.request = request;
        return this;
    }
}