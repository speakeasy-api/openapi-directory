package openapisdk.models.operations;



public class GetChannelCatalogMarketplacePropertiesResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetChannelCatalogMarketplacePropertiesResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetChannelCatalogMarketplacePropertiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetChannelCatalogMarketplacePropertiesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetChannelCatalogMarketplacePropertiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChannelCatalogMarketplaceProperties channelCatalogMarketplaceProperties;
    public GetChannelCatalogMarketplacePropertiesResponse withChannelCatalogMarketplaceProperties(openapisdk.models.shared.ChannelCatalogMarketplaceProperties channelCatalogMarketplaceProperties) {
        this.channelCatalogMarketplaceProperties = channelCatalogMarketplaceProperties;
        return this;
    }
}