package openapisdk.models.operations;



public class GitListMatchingRefsRequest {
    public GitListMatchingRefsPathParams pathParams;
    public GitListMatchingRefsRequest withPathParams(GitListMatchingRefsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GitListMatchingRefsQueryParams queryParams;
    public GitListMatchingRefsRequest withQueryParams(GitListMatchingRefsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}