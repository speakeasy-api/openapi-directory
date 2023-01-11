package openapisdk.models.operations;



public class PullsListFilesRequest {
    public PullsListFilesPathParams pathParams;
    public PullsListFilesRequest withPathParams(PullsListFilesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PullsListFilesQueryParams queryParams;
    public PullsListFilesRequest withQueryParams(PullsListFilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}