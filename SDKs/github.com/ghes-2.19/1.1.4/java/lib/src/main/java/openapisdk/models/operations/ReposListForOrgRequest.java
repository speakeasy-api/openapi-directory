package openapisdk.models.operations;



public class ReposListForOrgRequest {
    public ReposListForOrgPathParams pathParams;
    public ReposListForOrgRequest withPathParams(ReposListForOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposListForOrgQueryParams queryParams;
    public ReposListForOrgRequest withQueryParams(ReposListForOrgQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}