package openapisdk.models.operations;



public class ListBulkDeploymentsRequest {
    public ListBulkDeploymentsQueryParams queryParams;
    public ListBulkDeploymentsRequest withQueryParams(ListBulkDeploymentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBulkDeploymentsHeaders headers;
    public ListBulkDeploymentsRequest withHeaders(ListBulkDeploymentsHeaders headers) {
        this.headers = headers;
        return this;
    }
}