package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelCatalogCategoryConfiguration
 * Represent a mapping between a catalog category path and a channel category path.
 * The cost on this mapping can be applied.
 * 
**/
public class ChannelCatalogCategoryConfiguration {
    @JsonProperty("autoMapNewSubCategories")
    public Boolean autoMapNewSubCategories;
    public ChannelCatalogCategoryConfiguration withAutoMapNewSubCategories(Boolean autoMapNewSubCategories) {
        this.autoMapNewSubCategories = autoMapNewSubCategories;
        return this;
    }
    @JsonProperty("catalogCategoryPath")
    public String[] catalogCategoryPath;
    public ChannelCatalogCategoryConfiguration withCatalogCategoryPath(String[] catalogCategoryPath) {
        this.catalogCategoryPath = catalogCategoryPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelCategoryPath")
    public String[] channelCategoryPath;
    public ChannelCatalogCategoryConfiguration withChannelCategoryPath(String[] channelCategoryPath) {
        this.channelCategoryPath = channelCategoryPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costValue")
    public Double costValue;
    public ChannelCatalogCategoryConfiguration withCostValue(Double costValue) {
        this.costValue = costValue;
        return this;
    }
}