package openapisdk.models.operations;



public class GetDeploymentsRequest {
    public GetDeploymentsPathParams pathParams;
    public GetDeploymentsRequest withPathParams(GetDeploymentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDeploymentsQueryParams queryParams;
    public GetDeploymentsRequest withQueryParams(GetDeploymentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDeploymentsHeaders headers;
    public GetDeploymentsRequest withHeaders(GetDeploymentsHeaders headers) {
        this.headers = headers;
        return this;
    }
}