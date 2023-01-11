package openapisdk.models.operations;



public class DeleteImportRequest {
    public DeleteImportPathParams pathParams;
    public DeleteImportRequest withPathParams(DeleteImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteImportHeaders headers;
    public DeleteImportRequest withHeaders(DeleteImportHeaders headers) {
        this.headers = headers;
        return this;
    }
}