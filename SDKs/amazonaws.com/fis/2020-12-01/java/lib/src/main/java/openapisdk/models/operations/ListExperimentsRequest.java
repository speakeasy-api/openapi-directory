package openapisdk.models.operations;



public class ListExperimentsRequest {
    public ListExperimentsQueryParams queryParams;
    public ListExperimentsRequest withQueryParams(ListExperimentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListExperimentsHeaders headers;
    public ListExperimentsRequest withHeaders(ListExperimentsHeaders headers) {
        this.headers = headers;
        return this;
    }
}