package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddUserForWorkspaceRequest {
    public AddUserForWorkspacePathParams pathParams;
    public AddUserForWorkspaceRequest withPathParams(AddUserForWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddUserForWorkspaceQueryParams queryParams;
    public AddUserForWorkspaceRequest withQueryParams(AddUserForWorkspaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddUserForWorkspaceRequestBody request;
    public AddUserForWorkspaceRequest withRequest(AddUserForWorkspaceRequestBody request) {
        this.request = request;
        return this;
    }
}