package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeploymentRequest {
    public UpdateDeploymentPathParams pathParams;
    public UpdateDeploymentRequest withPathParams(UpdateDeploymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateDeploymentHeaders headers;
    public UpdateDeploymentRequest withHeaders(UpdateDeploymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeploymentRequestBody request;
    public UpdateDeploymentRequest withRequest(UpdateDeploymentRequestBody request) {
        this.request = request;
        return this;
    }
}