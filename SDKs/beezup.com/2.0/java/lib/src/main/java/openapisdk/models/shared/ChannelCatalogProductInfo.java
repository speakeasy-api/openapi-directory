package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelCatalogProductInfo
 * The channel catalog product information
**/
public class ChannelCatalogProductInfo {
    @JsonProperty("disabled")
    public Boolean disabled;
    public ChannelCatalogProductInfo withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonProperty("excluded")
    public Boolean excluded;
    public ChannelCatalogProductInfo withExcluded(Boolean excluded) {
        this.excluded = excluded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedBy")
    public String[] excludedBy;
    public ChannelCatalogProductInfo withExcludedBy(String[] excludedBy) {
        this.excludedBy = excludedBy;
        return this;
    }
    @JsonProperty("links")
    public ChannelCatalogProductInfoLinks links;
    public ChannelCatalogProductInfo withLinks(ChannelCatalogProductInfoLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("overrides")
    public java.util.Map<String, ProductOverrideWithCatalogValue> overrides;
    public ChannelCatalogProductInfo withOverrides(java.util.Map<String, ProductOverrideWithCatalogValue> overrides) {
        this.overrides = overrides;
        return this;
    }
    @JsonProperty("productExists")
    public Boolean productExists;
    public ChannelCatalogProductInfo withProductExists(Boolean productExists) {
        this.productExists = productExists;
        return this;
    }
    @JsonProperty("productId")
    public String productId;
    public ChannelCatalogProductInfo withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productImageUrl")
    public String productImageUrl;
    public ChannelCatalogProductInfo withProductImageUrl(String productImageUrl) {
        this.productImageUrl = productImageUrl;
        return this;
    }
    @JsonProperty("productSku")
    public String productSku;
    public ChannelCatalogProductInfo withProductSku(String productSku) {
        this.productSku = productSku;
        return this;
    }
    @JsonProperty("productTitle")
    public String productTitle;
    public ChannelCatalogProductInfo withProductTitle(String productTitle) {
        this.productTitle = productTitle;
        return this;
    }
    @JsonProperty("uncategorized")
    public Boolean uncategorized;
    public ChannelCatalogProductInfo withUncategorized(Boolean uncategorized) {
        this.uncategorized = uncategorized;
        return this;
    }
}