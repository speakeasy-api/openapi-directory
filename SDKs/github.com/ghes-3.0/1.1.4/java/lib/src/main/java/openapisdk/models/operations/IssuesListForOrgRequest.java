package openapisdk.models.operations;



public class IssuesListForOrgRequest {
    public IssuesListForOrgPathParams pathParams;
    public IssuesListForOrgRequest withPathParams(IssuesListForOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IssuesListForOrgQueryParams queryParams;
    public IssuesListForOrgRequest withQueryParams(IssuesListForOrgQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}