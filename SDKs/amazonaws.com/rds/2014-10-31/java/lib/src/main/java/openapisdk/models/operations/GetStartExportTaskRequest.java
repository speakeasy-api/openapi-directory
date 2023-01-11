package openapisdk.models.operations;



public class GetStartExportTaskRequest {
    public GetStartExportTaskQueryParams queryParams;
    public GetStartExportTaskRequest withQueryParams(GetStartExportTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetStartExportTaskHeaders headers;
    public GetStartExportTaskRequest withHeaders(GetStartExportTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
}