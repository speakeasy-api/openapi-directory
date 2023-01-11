package openapisdk.models.operations;



public class ListControlsRequest {
    public ListControlsQueryParams queryParams;
    public ListControlsRequest withQueryParams(ListControlsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListControlsHeaders headers;
    public ListControlsRequest withHeaders(ListControlsHeaders headers) {
        this.headers = headers;
        return this;
    }
}