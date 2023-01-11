package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeploymentInstanceRequest {
    public GetDeploymentInstanceHeaders headers;
    public GetDeploymentInstanceRequest withHeaders(GetDeploymentInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDeploymentInstanceInput request;
    public GetDeploymentInstanceRequest withRequest(openapisdk.models.shared.GetDeploymentInstanceInput request) {
        this.request = request;
        return this;
    }
}