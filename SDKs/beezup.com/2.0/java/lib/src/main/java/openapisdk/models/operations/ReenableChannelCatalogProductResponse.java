package openapisdk.models.operations;



public class ReenableChannelCatalogProductResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public ReenableChannelCatalogProductResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public ReenableChannelCatalogProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReenableChannelCatalogProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}