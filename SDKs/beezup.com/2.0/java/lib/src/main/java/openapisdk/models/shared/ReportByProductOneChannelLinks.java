package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReportByProductOneChannelLinks
 * If the report concerned one product for one channel the channel catalog product info will give you all you need to enable or disable the product.
**/
public class ReportByProductOneChannelLinks {
    @JsonProperty("disableProductForOneChannel")
    public LinksOptimiseByProductLink disableProductForOneChannel;
    public ReportByProductOneChannelLinks withDisableProductForOneChannel(LinksOptimiseByProductLink disableProductForOneChannel) {
        this.disableProductForOneChannel = disableProductForOneChannel;
        return this;
    }
    @JsonProperty("enableProductForOneChannel")
    public LinksOptimiseByProductLink enableProductForOneChannel;
    public ReportByProductOneChannelLinks withEnableProductForOneChannel(LinksOptimiseByProductLink enableProductForOneChannel) {
        this.enableProductForOneChannel = enableProductForOneChannel;
        return this;
    }
    @JsonProperty("productInfo")
    public LinksGetChannelCatalogProductInfoLink productInfo;
    public ReportByProductOneChannelLinks withProductInfo(LinksGetChannelCatalogProductInfoLink productInfo) {
        this.productInfo = productInfo;
        return this;
    }
}