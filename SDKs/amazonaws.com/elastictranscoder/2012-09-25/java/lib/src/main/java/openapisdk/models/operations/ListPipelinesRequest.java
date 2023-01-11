package openapisdk.models.operations;



public class ListPipelinesRequest {
    public ListPipelinesQueryParams queryParams;
    public ListPipelinesRequest withQueryParams(ListPipelinesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPipelinesHeaders headers;
    public ListPipelinesRequest withHeaders(ListPipelinesHeaders headers) {
        this.headers = headers;
        return this;
    }
}