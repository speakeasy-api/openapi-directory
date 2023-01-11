package openapisdk.models.operations;



public class DeleteResourceShareRequest {
    public DeleteResourceShareQueryParams queryParams;
    public DeleteResourceShareRequest withQueryParams(DeleteResourceShareQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteResourceShareHeaders headers;
    public DeleteResourceShareRequest withHeaders(DeleteResourceShareHeaders headers) {
        this.headers = headers;
        return this;
    }
}