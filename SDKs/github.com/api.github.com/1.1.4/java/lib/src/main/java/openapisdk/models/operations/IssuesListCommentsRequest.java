package openapisdk.models.operations;



public class IssuesListCommentsRequest {
    public IssuesListCommentsPathParams pathParams;
    public IssuesListCommentsRequest withPathParams(IssuesListCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IssuesListCommentsQueryParams queryParams;
    public IssuesListCommentsRequest withQueryParams(IssuesListCommentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}