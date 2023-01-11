package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectForWorkspaceRequest {
    public CreateProjectForWorkspacePathParams pathParams;
    public CreateProjectForWorkspaceRequest withPathParams(CreateProjectForWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateProjectForWorkspaceQueryParams queryParams;
    public CreateProjectForWorkspaceRequest withQueryParams(CreateProjectForWorkspaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateProjectForWorkspaceRequestBodyInput request;
    public CreateProjectForWorkspaceRequest withRequest(CreateProjectForWorkspaceRequestBodyInput request) {
        this.request = request;
        return this;
    }
}