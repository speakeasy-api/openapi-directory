package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelCatalogProductInfoList
 * The channel catalog product info list
**/
public class ChannelCatalogProductInfoList {
    @JsonProperty("links")
    public ChannelCatalogProductInfoListLinks links;
    public ChannelCatalogProductInfoList withLinks(ChannelCatalogProductInfoListLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("paginationResult")
    public BeezUpCommonPaginationResult paginationResult;
    public ChannelCatalogProductInfoList withPaginationResult(BeezUpCommonPaginationResult paginationResult) {
        this.paginationResult = paginationResult;
        return this;
    }
    @JsonProperty("productInfos")
    public ChannelCatalogProductInfo[] productInfos;
    public ChannelCatalogProductInfoList withProductInfos(ChannelCatalogProductInfo[] productInfos) {
        this.productInfos = productInfos;
        return this;
    }
}