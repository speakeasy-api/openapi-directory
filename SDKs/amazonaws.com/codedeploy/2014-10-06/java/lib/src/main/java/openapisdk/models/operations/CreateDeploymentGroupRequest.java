package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeploymentGroupRequest {
    public CreateDeploymentGroupHeaders headers;
    public CreateDeploymentGroupRequest withHeaders(CreateDeploymentGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDeploymentGroupInput request;
    public CreateDeploymentGroupRequest withRequest(openapisdk.models.shared.CreateDeploymentGroupInput request) {
        this.request = request;
        return this;
    }
}