package openapisdk.models.operations;



public class GetReportMetadataResponse {
    public String contentType;
    public GetReportMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReportMetadatas reportMetadatas;
    public GetReportMetadataResponse withReportMetadatas(openapisdk.models.shared.ReportMetadatas reportMetadatas) {
        this.reportMetadatas = reportMetadatas;
        return this;
    }
    public Long statusCode;
    public GetReportMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}