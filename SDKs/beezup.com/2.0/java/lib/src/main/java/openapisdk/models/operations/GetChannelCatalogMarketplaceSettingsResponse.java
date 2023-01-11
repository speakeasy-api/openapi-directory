package openapisdk.models.operations;



public class GetChannelCatalogMarketplaceSettingsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetChannelCatalogMarketplaceSettingsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetChannelCatalogMarketplaceSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetChannelCatalogMarketplaceSettingsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetChannelCatalogMarketplaceSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChannelCatalogMarketplaceSettings channelCatalogMarketplaceSettings;
    public GetChannelCatalogMarketplaceSettingsResponse withChannelCatalogMarketplaceSettings(openapisdk.models.shared.ChannelCatalogMarketplaceSettings channelCatalogMarketplaceSettings) {
        this.channelCatalogMarketplaceSettings = channelCatalogMarketplaceSettings;
        return this;
    }
}