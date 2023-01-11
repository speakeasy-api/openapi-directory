package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeploymentVariableRequest {
    public CreateDeploymentVariablePathParams pathParams;
    public CreateDeploymentVariableRequest withPathParams(CreateDeploymentVariablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateDeploymentVariableQueryParams queryParams;
    public CreateDeploymentVariableRequest withQueryParams(CreateDeploymentVariableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CreateDeploymentVariableRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}