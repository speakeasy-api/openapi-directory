package openapisdk.models.operations;



public class ListDeploymentsRequest {
    public ListDeploymentsQueryParams queryParams;
    public ListDeploymentsRequest withQueryParams(ListDeploymentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDeploymentsHeaders headers;
    public ListDeploymentsRequest withHeaders(ListDeploymentsHeaders headers) {
        this.headers = headers;
        return this;
    }
}