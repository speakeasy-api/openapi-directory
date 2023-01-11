package openapisdk.models.operations;



public class ImportationConfigureCatalogColumnResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ImportationConfigureCatalogColumnResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ImportationConfigureCatalogColumnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImportationConfigureCatalogColumnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}