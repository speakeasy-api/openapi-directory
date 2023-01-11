package openapisdk.models.operations;



public class PostReportsResponse {
    public String contentType;
    public PostReportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Report report;
    public PostReportsResponse withReport(openapisdk.models.shared.Report report) {
        this.report = report;
        return this;
    }
    public Long statusCode;
    public PostReportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}