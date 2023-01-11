package openapisdk.models.operations;



public class GetReportTaskRequest {
    public GetReportTaskPathParams pathParams;
    public GetReportTaskRequest withPathParams(GetReportTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetReportTaskSecurity security;
    public GetReportTaskRequest withSecurity(GetReportTaskSecurity security) {
        this.security = security;
        return this;
    }
}