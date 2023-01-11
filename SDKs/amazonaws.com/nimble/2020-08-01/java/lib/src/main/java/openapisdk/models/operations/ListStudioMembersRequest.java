package openapisdk.models.operations;



public class ListStudioMembersRequest {
    public ListStudioMembersPathParams pathParams;
    public ListStudioMembersRequest withPathParams(ListStudioMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListStudioMembersQueryParams queryParams;
    public ListStudioMembersRequest withQueryParams(ListStudioMembersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListStudioMembersHeaders headers;
    public ListStudioMembersRequest withHeaders(ListStudioMembersHeaders headers) {
        this.headers = headers;
        return this;
    }
}