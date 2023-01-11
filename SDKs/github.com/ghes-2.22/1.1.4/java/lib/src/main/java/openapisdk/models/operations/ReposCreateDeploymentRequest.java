package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateDeploymentRequest {
    public ReposCreateDeploymentPathParams pathParams;
    public ReposCreateDeploymentRequest withPathParams(ReposCreateDeploymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposCreateDeploymentRequestBody request;
    public ReposCreateDeploymentRequest withRequest(ReposCreateDeploymentRequestBody request) {
        this.request = request;
        return this;
    }
}