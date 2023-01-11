package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChannelCatalogProductByChannelCatalogRequest {
    @JsonProperty("channelCatalogIds")
    public String[] channelCatalogIds;
    public ChannelCatalogProductByChannelCatalogRequest withChannelCatalogIds(String[] channelCatalogIds) {
        this.channelCatalogIds = channelCatalogIds;
        return this;
    }
    @JsonProperty("productId")
    public String productId;
    public ChannelCatalogProductByChannelCatalogRequest withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonProperty("storeId")
    public String storeId;
    public ChannelCatalogProductByChannelCatalogRequest withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}