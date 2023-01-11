package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkspaceRequest {
    public UpdateWorkspacePathParams pathParams;
    public UpdateWorkspaceRequest withPathParams(UpdateWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateWorkspaceRequestBody request;
    public UpdateWorkspaceRequest withRequest(UpdateWorkspaceRequestBody request) {
        this.request = request;
        return this;
    }
}