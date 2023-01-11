package openapisdk.models.operations;



public class DeleteReportTaskRequest {
    public DeleteReportTaskPathParams pathParams;
    public DeleteReportTaskRequest withPathParams(DeleteReportTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteReportTaskSecurity security;
    public DeleteReportTaskRequest withSecurity(DeleteReportTaskSecurity security) {
        this.security = security;
        return this;
    }
}