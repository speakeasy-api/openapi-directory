package openapisdk.models.operations;



public class StartSupportDataExportResponse {
    public String contentType;
    public StartSupportDataExportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object marketplaceCommerceAnalyticsException;
    public StartSupportDataExportResponse withMarketplaceCommerceAnalyticsException(Object marketplaceCommerceAnalyticsException) {
        this.marketplaceCommerceAnalyticsException = marketplaceCommerceAnalyticsException;
        return this;
    }
    public openapisdk.models.shared.StartSupportDataExportResult startSupportDataExportResult;
    public StartSupportDataExportResponse withStartSupportDataExportResult(openapisdk.models.shared.StartSupportDataExportResult startSupportDataExportResult) {
        this.startSupportDataExportResult = startSupportDataExportResult;
        return this;
    }
    public Long statusCode;
    public StartSupportDataExportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}