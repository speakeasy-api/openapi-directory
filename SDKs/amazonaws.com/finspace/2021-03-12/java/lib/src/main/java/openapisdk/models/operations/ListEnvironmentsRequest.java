package openapisdk.models.operations;



public class ListEnvironmentsRequest {
    public ListEnvironmentsQueryParams queryParams;
    public ListEnvironmentsRequest withQueryParams(ListEnvironmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEnvironmentsHeaders headers;
    public ListEnvironmentsRequest withHeaders(ListEnvironmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
}