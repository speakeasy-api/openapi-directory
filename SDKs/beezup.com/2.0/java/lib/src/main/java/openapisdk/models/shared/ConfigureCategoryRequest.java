package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConfigureCategoryRequest
 * The request message to make a mapping between catalog category path and a channel category path
**/
public class ConfigureCategoryRequest {
    @JsonProperty("channelCatalogCategories")
    public ChannelCatalogCategoryConfiguration[] channelCatalogCategories;
    public ConfigureCategoryRequest withChannelCatalogCategories(ChannelCatalogCategoryConfiguration[] channelCatalogCategories) {
        this.channelCatalogCategories = channelCatalogCategories;
        return this;
    }
    @JsonProperty("overrideSubCategoryMappings")
    public Boolean overrideSubCategoryMappings;
    public ConfigureCategoryRequest withOverrideSubCategoryMappings(Boolean overrideSubCategoryMappings) {
        this.overrideSubCategoryMappings = overrideSubCategoryMappings;
        return this;
    }
}