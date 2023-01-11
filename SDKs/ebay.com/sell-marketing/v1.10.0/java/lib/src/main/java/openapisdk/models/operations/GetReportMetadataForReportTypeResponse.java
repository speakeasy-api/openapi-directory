package openapisdk.models.operations;



public class GetReportMetadataForReportTypeResponse {
    public String contentType;
    public GetReportMetadataForReportTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReportMetadata reportMetadata;
    public GetReportMetadataForReportTypeResponse withReportMetadata(openapisdk.models.shared.ReportMetadata reportMetadata) {
        this.reportMetadata = reportMetadata;
        return this;
    }
    public Long statusCode;
    public GetReportMetadataForReportTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}