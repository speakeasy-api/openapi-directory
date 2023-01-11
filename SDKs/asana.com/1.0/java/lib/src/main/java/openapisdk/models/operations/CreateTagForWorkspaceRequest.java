package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTagForWorkspaceRequest {
    public CreateTagForWorkspacePathParams pathParams;
    public CreateTagForWorkspaceRequest withPathParams(CreateTagForWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateTagForWorkspaceQueryParams queryParams;
    public CreateTagForWorkspaceRequest withQueryParams(CreateTagForWorkspaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateTagForWorkspaceRequestBodyInput request;
    public CreateTagForWorkspaceRequest withRequest(CreateTagForWorkspaceRequestBodyInput request) {
        this.request = request;
        return this;
    }
}