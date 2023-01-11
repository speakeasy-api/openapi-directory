package openapisdk.models.operations;



public class ImportationConfigureRemainingCatalogColumnsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ImportationConfigureRemainingCatalogColumnsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ImportationConfigureRemainingCatalogColumnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImportationConfigureRemainingCatalogColumnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}