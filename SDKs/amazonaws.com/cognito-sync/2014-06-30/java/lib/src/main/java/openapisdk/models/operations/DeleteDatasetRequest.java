package openapisdk.models.operations;



public class DeleteDatasetRequest {
    public DeleteDatasetPathParams pathParams;
    public DeleteDatasetRequest withPathParams(DeleteDatasetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDatasetHeaders headers;
    public DeleteDatasetRequest withHeaders(DeleteDatasetHeaders headers) {
        this.headers = headers;
        return this;
    }
}