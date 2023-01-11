package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeploymentGroupRequest {
    public UpdateDeploymentGroupHeaders headers;
    public UpdateDeploymentGroupRequest withHeaders(UpdateDeploymentGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDeploymentGroupInput request;
    public UpdateDeploymentGroupRequest withRequest(openapisdk.models.shared.UpdateDeploymentGroupInput request) {
        this.request = request;
        return this;
    }
}