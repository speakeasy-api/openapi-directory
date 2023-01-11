package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDeploymentGroupRequest {
    public DeleteDeploymentGroupHeaders headers;
    public DeleteDeploymentGroupRequest withHeaders(DeleteDeploymentGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDeploymentGroupInput request;
    public DeleteDeploymentGroupRequest withRequest(openapisdk.models.shared.DeleteDeploymentGroupInput request) {
        this.request = request;
        return this;
    }
}