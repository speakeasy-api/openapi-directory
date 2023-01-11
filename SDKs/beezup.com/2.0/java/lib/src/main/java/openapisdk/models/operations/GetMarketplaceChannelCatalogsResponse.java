package openapisdk.models.operations;



public class GetMarketplaceChannelCatalogsResponse {
    public String contentType;
    public GetMarketplaceChannelCatalogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMarketplaceChannelCatalogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MarketplaceChannelCatalogList marketplaceChannelCatalogList;
    public GetMarketplaceChannelCatalogsResponse withMarketplaceChannelCatalogList(openapisdk.models.shared.MarketplaceChannelCatalogList marketplaceChannelCatalogList) {
        this.marketplaceChannelCatalogList = marketplaceChannelCatalogList;
        return this;
    }
}