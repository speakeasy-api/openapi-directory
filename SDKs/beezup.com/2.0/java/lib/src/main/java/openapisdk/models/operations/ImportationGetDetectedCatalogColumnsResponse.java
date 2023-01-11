package openapisdk.models.operations;



public class ImportationGetDetectedCatalogColumnsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ImportationGetDetectedCatalogColumnsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ImportationGetDetectedCatalogColumnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImportationGetDetectedCatalogColumnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.DetectedCatalogColumnList detectedCatalogColumnList;
    public ImportationGetDetectedCatalogColumnsResponse withDetectedCatalogColumnList(openapisdk.models.shared.DetectedCatalogColumnList detectedCatalogColumnList) {
        this.detectedCatalogColumnList = detectedCatalogColumnList;
        return this;
    }
}