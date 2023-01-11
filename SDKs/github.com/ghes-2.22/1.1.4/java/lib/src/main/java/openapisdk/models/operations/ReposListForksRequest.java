package openapisdk.models.operations;



public class ReposListForksRequest {
    public ReposListForksPathParams pathParams;
    public ReposListForksRequest withPathParams(ReposListForksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposListForksQueryParams queryParams;
    public ReposListForksRequest withQueryParams(ReposListForksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}