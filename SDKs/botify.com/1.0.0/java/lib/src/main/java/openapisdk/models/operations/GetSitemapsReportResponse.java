package openapisdk.models.operations;



public class GetSitemapsReportResponse {
    public String contentType;
    public GetSitemapsReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetSitemapsReportResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public openapisdk.models.shared.SitemapsReport sitemapsReport;
    public GetSitemapsReportResponse withSitemapsReport(openapisdk.models.shared.SitemapsReport sitemapsReport) {
        this.sitemapsReport = sitemapsReport;
        return this;
    }
    public Long statusCode;
    public GetSitemapsReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}