package openapisdk.models.operations;



public class AutoStartAutoImportResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public AutoStartAutoImportResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public AutoStartAutoImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AutoStartAutoImportResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AutoStartAutoImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LinksImportationGetImportationMonitoringLink linksImportationGetImportationMonitoringLink;
    public AutoStartAutoImportResponse withLinksImportationGetImportationMonitoringLink(openapisdk.models.shared.LinksImportationGetImportationMonitoringLink linksImportationGetImportationMonitoringLink) {
        this.linksImportationGetImportationMonitoringLink = linksImportationGetImportationMonitoringLink;
        return this;
    }
}