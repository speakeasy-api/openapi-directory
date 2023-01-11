package openapisdk.models.operations;



public class ReposGetViewsRequest {
    public ReposGetViewsPathParams pathParams;
    public ReposGetViewsRequest withPathParams(ReposGetViewsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposGetViewsQueryParams queryParams;
    public ReposGetViewsRequest withQueryParams(ReposGetViewsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}