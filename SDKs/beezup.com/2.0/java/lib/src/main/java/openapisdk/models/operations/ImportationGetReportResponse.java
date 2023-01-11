package openapisdk.models.operations;



public class ImportationGetReportResponse {
    public String contentType;
    public ImportationGetReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImportationGetReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetImportationReportResponse getImportationReportResponse;
    public ImportationGetReportResponse withGetImportationReportResponse(openapisdk.models.shared.GetImportationReportResponse getImportationReportResponse) {
        this.getImportationReportResponse = getImportationReportResponse;
        return this;
    }
}