package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeploymentVariableRequest {
    public UpdateDeploymentVariablePathParams pathParams;
    public UpdateDeploymentVariableRequest withPathParams(UpdateDeploymentVariablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public UpdateDeploymentVariableRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}