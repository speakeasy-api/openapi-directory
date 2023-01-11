package openapisdk.models.operations;



public class ReposListDeploymentsRequest {
    public ReposListDeploymentsPathParams pathParams;
    public ReposListDeploymentsRequest withPathParams(ReposListDeploymentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposListDeploymentsQueryParams queryParams;
    public ReposListDeploymentsRequest withQueryParams(ReposListDeploymentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}