package openapisdk.models.operations;



public class GetTrafficReportResponse {
    public String contentType;
    public GetTrafficReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Report report;
    public GetTrafficReportResponse withReport(openapisdk.models.shared.Report report) {
        this.report = report;
        return this;
    }
    public Long statusCode;
    public GetTrafficReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}