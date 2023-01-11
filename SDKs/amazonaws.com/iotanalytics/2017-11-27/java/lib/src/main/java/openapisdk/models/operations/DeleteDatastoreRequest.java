package openapisdk.models.operations;



public class DeleteDatastoreRequest {
    public DeleteDatastorePathParams pathParams;
    public DeleteDatastoreRequest withPathParams(DeleteDatastorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDatastoreHeaders headers;
    public DeleteDatastoreRequest withHeaders(DeleteDatastoreHeaders headers) {
        this.headers = headers;
        return this;
    }
}