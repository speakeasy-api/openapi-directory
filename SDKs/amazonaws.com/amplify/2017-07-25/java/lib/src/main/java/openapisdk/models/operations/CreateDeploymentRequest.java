package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeploymentRequest {
    public CreateDeploymentPathParams pathParams;
    public CreateDeploymentRequest withPathParams(CreateDeploymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateDeploymentHeaders headers;
    public CreateDeploymentRequest withHeaders(CreateDeploymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDeploymentRequestBody request;
    public CreateDeploymentRequest withRequest(CreateDeploymentRequestBody request) {
        this.request = request;
        return this;
    }
}