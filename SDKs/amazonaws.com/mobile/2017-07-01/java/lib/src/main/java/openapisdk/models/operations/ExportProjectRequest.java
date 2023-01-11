package openapisdk.models.operations;



public class ExportProjectRequest {
    public ExportProjectPathParams pathParams;
    public ExportProjectRequest withPathParams(ExportProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ExportProjectHeaders headers;
    public ExportProjectRequest withHeaders(ExportProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
}