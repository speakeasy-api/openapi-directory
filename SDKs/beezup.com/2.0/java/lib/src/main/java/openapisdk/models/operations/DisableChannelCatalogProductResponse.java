package openapisdk.models.operations;



public class DisableChannelCatalogProductResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public DisableChannelCatalogProductResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public DisableChannelCatalogProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisableChannelCatalogProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}