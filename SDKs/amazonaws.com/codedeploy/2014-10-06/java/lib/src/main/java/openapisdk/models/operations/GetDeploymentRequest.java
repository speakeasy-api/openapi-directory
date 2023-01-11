package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeploymentRequest {
    public GetDeploymentHeaders headers;
    public GetDeploymentRequest withHeaders(GetDeploymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDeploymentInput request;
    public GetDeploymentRequest withRequest(openapisdk.models.shared.GetDeploymentInput request) {
        this.request = request;
        return this;
    }
}