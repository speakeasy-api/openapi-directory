package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelCatalogProductsCounters
 * The channel catalog products counters. For each counter you will have a count.
**/
public class ChannelCatalogProductsCounters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabledProductCountExcludingUncategorized")
    public Integer disabledProductCountExcludingUncategorized;
    public ChannelCatalogProductsCounters withDisabledProductCountExcludingUncategorized(Integer disabledProductCountExcludingUncategorized) {
        this.disabledProductCountExcludingUncategorized = disabledProductCountExcludingUncategorized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabledProductCountIncludingUncategorized")
    public Integer disabledProductCountIncludingUncategorized;
    public ChannelCatalogProductsCounters withDisabledProductCountIncludingUncategorized(Integer disabledProductCountIncludingUncategorized) {
        this.disabledProductCountIncludingUncategorized = disabledProductCountIncludingUncategorized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedProductCountExcludingUncategorizedAndDisabled")
    public Integer excludedProductCountExcludingUncategorizedAndDisabled;
    public ChannelCatalogProductsCounters withExcludedProductCountExcludingUncategorizedAndDisabled(Integer excludedProductCountExcludingUncategorizedAndDisabled) {
        this.excludedProductCountExcludingUncategorizedAndDisabled = excludedProductCountExcludingUncategorizedAndDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedProductCountIncludingUncategorizedAndDisabled")
    public Integer excludedProductCountIncludingUncategorizedAndDisabled;
    public ChannelCatalogProductsCounters withExcludedProductCountIncludingUncategorizedAndDisabled(Integer excludedProductCountIncludingUncategorizedAndDisabled) {
        this.excludedProductCountIncludingUncategorizedAndDisabled = excludedProductCountIncludingUncategorizedAndDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existingProductCount")
    public Integer existingProductCount;
    public ChannelCatalogProductsCounters withExistingProductCount(Integer existingProductCount) {
        this.existingProductCount = existingProductCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uncategorizedProductCount")
    public Integer uncategorizedProductCount;
    public ChannelCatalogProductsCounters withUncategorizedProductCount(Integer uncategorizedProductCount) {
        this.uncategorizedProductCount = uncategorizedProductCount;
        return this;
    }
}