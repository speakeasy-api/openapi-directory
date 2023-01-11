package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateDeploymentStatusRequest {
    public ReposCreateDeploymentStatusPathParams pathParams;
    public ReposCreateDeploymentStatusRequest withPathParams(ReposCreateDeploymentStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposCreateDeploymentStatusRequestBody request;
    public ReposCreateDeploymentStatusRequest withRequest(ReposCreateDeploymentStatusRequestBody request) {
        this.request = request;
        return this;
    }
}