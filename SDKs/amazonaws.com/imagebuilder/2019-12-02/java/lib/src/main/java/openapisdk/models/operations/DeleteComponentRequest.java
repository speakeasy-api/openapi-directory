package openapisdk.models.operations;



public class DeleteComponentRequest {
    public DeleteComponentQueryParams queryParams;
    public DeleteComponentRequest withQueryParams(DeleteComponentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteComponentHeaders headers;
    public DeleteComponentRequest withHeaders(DeleteComponentHeaders headers) {
        this.headers = headers;
        return this;
    }
}