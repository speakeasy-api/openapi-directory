package openapisdk.models.operations;



public class GetReportTasksResponse {
    public String contentType;
    public GetReportTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReportTaskPagedCollection reportTaskPagedCollection;
    public GetReportTasksResponse withReportTaskPagedCollection(openapisdk.models.shared.ReportTaskPagedCollection reportTaskPagedCollection) {
        this.reportTaskPagedCollection = reportTaskPagedCollection;
        return this;
    }
    public Long statusCode;
    public GetReportTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}