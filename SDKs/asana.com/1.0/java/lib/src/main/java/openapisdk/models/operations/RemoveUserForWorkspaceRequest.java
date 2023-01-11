package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveUserForWorkspaceRequest {
    public RemoveUserForWorkspacePathParams pathParams;
    public RemoveUserForWorkspaceRequest withPathParams(RemoveUserForWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveUserForWorkspaceQueryParams queryParams;
    public RemoveUserForWorkspaceRequest withQueryParams(RemoveUserForWorkspaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveUserForWorkspaceRequestBody request;
    public RemoveUserForWorkspaceRequest withRequest(RemoveUserForWorkspaceRequestBody request) {
        this.request = request;
        return this;
    }
}