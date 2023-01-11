package openapisdk.models.operations;



public class ListEffectiveDeploymentsRequest {
    public ListEffectiveDeploymentsPathParams pathParams;
    public ListEffectiveDeploymentsRequest withPathParams(ListEffectiveDeploymentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListEffectiveDeploymentsQueryParams queryParams;
    public ListEffectiveDeploymentsRequest withQueryParams(ListEffectiveDeploymentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEffectiveDeploymentsHeaders headers;
    public ListEffectiveDeploymentsRequest withHeaders(ListEffectiveDeploymentsHeaders headers) {
        this.headers = headers;
        return this;
    }
}