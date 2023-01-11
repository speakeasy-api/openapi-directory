package openapisdk.models.operations;



public class GetWorkspaceRequest {
    public GetWorkspacePathParams pathParams;
    public GetWorkspaceRequest withPathParams(GetWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWorkspaceQueryParams queryParams;
    public GetWorkspaceRequest withQueryParams(GetWorkspaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}