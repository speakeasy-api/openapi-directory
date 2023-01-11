package openapisdk.models.operations;



public class ImportationStartManualUpdateResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ImportationStartManualUpdateResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ImportationStartManualUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ImportationStartManualUpdateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ImportationStartManualUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ImportAlreadyInProgressResponse importAlreadyInProgressResponse;
    public ImportationStartManualUpdateResponse withImportAlreadyInProgressResponse(openapisdk.models.shared.ImportAlreadyInProgressResponse importAlreadyInProgressResponse) {
        this.importAlreadyInProgressResponse = importAlreadyInProgressResponse;
        return this;
    }
    public openapisdk.models.shared.LinksImportationGetImportationMonitoringLink linksImportationGetImportationMonitoringLink;
    public ImportationStartManualUpdateResponse withLinksImportationGetImportationMonitoringLink(openapisdk.models.shared.LinksImportationGetImportationMonitoringLink linksImportationGetImportationMonitoringLink) {
        this.linksImportationGetImportationMonitoringLink = linksImportationGetImportationMonitoringLink;
        return this;
    }
}