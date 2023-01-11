package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeploymentGroupRequest {
    public GetDeploymentGroupHeaders headers;
    public GetDeploymentGroupRequest withHeaders(GetDeploymentGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDeploymentGroupInput request;
    public GetDeploymentGroupRequest withRequest(openapisdk.models.shared.GetDeploymentGroupInput request) {
        this.request = request;
        return this;
    }
}