package openapisdk.models.operations;



public class IssuesListEventsRequest {
    public IssuesListEventsPathParams pathParams;
    public IssuesListEventsRequest withPathParams(IssuesListEventsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IssuesListEventsQueryParams queryParams;
    public IssuesListEventsRequest withQueryParams(IssuesListEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}