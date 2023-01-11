package openapisdk.models.operations;



public class ListWorkloadSharesRequest {
    public ListWorkloadSharesPathParams pathParams;
    public ListWorkloadSharesRequest withPathParams(ListWorkloadSharesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListWorkloadSharesQueryParams queryParams;
    public ListWorkloadSharesRequest withQueryParams(ListWorkloadSharesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorkloadSharesHeaders headers;
    public ListWorkloadSharesRequest withHeaders(ListWorkloadSharesHeaders headers) {
        this.headers = headers;
        return this;
    }
}