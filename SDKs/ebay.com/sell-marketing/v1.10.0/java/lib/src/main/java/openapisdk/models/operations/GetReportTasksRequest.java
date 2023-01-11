package openapisdk.models.operations;



public class GetReportTasksRequest {
    public GetReportTasksQueryParams queryParams;
    public GetReportTasksRequest withQueryParams(GetReportTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetReportTasksSecurity security;
    public GetReportTasksRequest withSecurity(GetReportTasksSecurity security) {
        this.security = security;
        return this;
    }
}