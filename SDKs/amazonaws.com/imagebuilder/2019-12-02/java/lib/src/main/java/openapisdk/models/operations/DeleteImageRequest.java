package openapisdk.models.operations;



public class DeleteImageRequest {
    public DeleteImageQueryParams queryParams;
    public DeleteImageRequest withQueryParams(DeleteImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteImageHeaders headers;
    public DeleteImageRequest withHeaders(DeleteImageHeaders headers) {
        this.headers = headers;
        return this;
    }
}