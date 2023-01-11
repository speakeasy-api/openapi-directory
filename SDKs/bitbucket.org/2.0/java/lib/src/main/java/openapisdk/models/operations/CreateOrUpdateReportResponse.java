package openapisdk.models.operations;



public class CreateOrUpdateReportResponse {
    public String contentType;
    public CreateOrUpdateReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateOrUpdateReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public CreateOrUpdateReportResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> report;
    public CreateOrUpdateReportResponse withReport(java.util.Map<String, Object> report) {
        this.report = report;
        return this;
    }
}