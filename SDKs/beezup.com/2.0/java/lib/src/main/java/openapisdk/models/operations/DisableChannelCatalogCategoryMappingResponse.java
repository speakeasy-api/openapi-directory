package openapisdk.models.operations;



public class DisableChannelCatalogCategoryMappingResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public DisableChannelCatalogCategoryMappingResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public DisableChannelCatalogCategoryMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisableChannelCatalogCategoryMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}