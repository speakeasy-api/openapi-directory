package openapisdk.models.operations;



public class IssuesListEventsForRepoRequest {
    public IssuesListEventsForRepoPathParams pathParams;
    public IssuesListEventsForRepoRequest withPathParams(IssuesListEventsForRepoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IssuesListEventsForRepoQueryParams queryParams;
    public IssuesListEventsForRepoRequest withQueryParams(IssuesListEventsForRepoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}