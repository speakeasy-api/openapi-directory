package openapisdk.models.operations;



public class DeleteDatasetContentRequest {
    public DeleteDatasetContentPathParams pathParams;
    public DeleteDatasetContentRequest withPathParams(DeleteDatasetContentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDatasetContentQueryParams queryParams;
    public DeleteDatasetContentRequest withQueryParams(DeleteDatasetContentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteDatasetContentHeaders headers;
    public DeleteDatasetContentRequest withHeaders(DeleteDatasetContentHeaders headers) {
        this.headers = headers;
        return this;
    }
}