package openapisdk.models.operations;



public class GetReportResponse {
    public String contentType;
    public GetReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetReportResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> report;
    public GetReportResponse withReport(java.util.Map<String, Object> report) {
        this.report = report;
        return this;
    }
}