package openapisdk.models.operations;



public class DeleteExportRequest {
    public DeleteExportPathParams pathParams;
    public DeleteExportRequest withPathParams(DeleteExportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteExportHeaders headers;
    public DeleteExportRequest withHeaders(DeleteExportHeaders headers) {
        this.headers = headers;
        return this;
    }
}