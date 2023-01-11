package openapisdk.models.operations;



public class PullsListRequest {
    public PullsListPathParams pathParams;
    public PullsListRequest withPathParams(PullsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PullsListQueryParams queryParams;
    public PullsListRequest withQueryParams(PullsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}