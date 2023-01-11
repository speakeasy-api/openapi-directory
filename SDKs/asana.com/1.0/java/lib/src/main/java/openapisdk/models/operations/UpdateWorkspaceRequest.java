package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkspaceRequest {
    public UpdateWorkspacePathParams pathParams;
    public UpdateWorkspaceRequest withPathParams(UpdateWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateWorkspaceQueryParams queryParams;
    public UpdateWorkspaceRequest withQueryParams(UpdateWorkspaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateWorkspaceRequestBodyInput request;
    public UpdateWorkspaceRequest withRequest(UpdateWorkspaceRequestBodyInput request) {
        this.request = request;
        return this;
    }
}