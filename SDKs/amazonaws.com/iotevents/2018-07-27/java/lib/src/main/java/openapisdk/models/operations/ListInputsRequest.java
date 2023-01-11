package openapisdk.models.operations;



public class ListInputsRequest {
    public ListInputsQueryParams queryParams;
    public ListInputsRequest withQueryParams(ListInputsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListInputsHeaders headers;
    public ListInputsRequest withHeaders(ListInputsHeaders headers) {
        this.headers = headers;
        return this;
    }
}