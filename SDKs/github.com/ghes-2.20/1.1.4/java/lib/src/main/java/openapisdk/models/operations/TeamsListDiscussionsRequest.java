package openapisdk.models.operations;



public class TeamsListDiscussionsRequest {
    public TeamsListDiscussionsPathParams pathParams;
    public TeamsListDiscussionsRequest withPathParams(TeamsListDiscussionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TeamsListDiscussionsQueryParams queryParams;
    public TeamsListDiscussionsRequest withQueryParams(TeamsListDiscussionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}