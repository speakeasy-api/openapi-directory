package openapisdk.models.operations;



public class ListStreamsRequest {
    public ListStreamsQueryParams queryParams;
    public ListStreamsRequest withQueryParams(ListStreamsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListStreamsHeaders headers;
    public ListStreamsRequest withHeaders(ListStreamsHeaders headers) {
        this.headers = headers;
        return this;
    }
}