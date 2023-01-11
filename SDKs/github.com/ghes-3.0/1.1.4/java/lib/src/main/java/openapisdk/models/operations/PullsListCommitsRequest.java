package openapisdk.models.operations;



public class PullsListCommitsRequest {
    public PullsListCommitsPathParams pathParams;
    public PullsListCommitsRequest withPathParams(PullsListCommitsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PullsListCommitsQueryParams queryParams;
    public PullsListCommitsRequest withQueryParams(PullsListCommitsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}