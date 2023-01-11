package openapisdk.models.operations;



public class GetReportTaskResponse {
    public String contentType;
    public GetReportTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReportTask reportTask;
    public GetReportTaskResponse withReportTask(openapisdk.models.shared.ReportTask reportTask) {
        this.reportTask = reportTask;
        return this;
    }
    public Long statusCode;
    public GetReportTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}