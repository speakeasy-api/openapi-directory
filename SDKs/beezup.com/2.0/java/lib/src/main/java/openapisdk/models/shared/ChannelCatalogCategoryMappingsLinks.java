package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelCatalogCategoryMappingsLinks
 * The action you can do on the category mappings
**/
public class ChannelCatalogCategoryMappingsLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disable")
    public LinksDisableChannelCatalogCategoryMappingLink disable;
    public ChannelCatalogCategoryMappingsLinks withDisable(LinksDisableChannelCatalogCategoryMappingLink disable) {
        this.disable = disable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reenable")
    public LinksReenableChannelCatalogCategoryMappingLink reenable;
    public ChannelCatalogCategoryMappingsLinks withReenable(LinksReenableChannelCatalogCategoryMappingLink reenable) {
        this.reenable = reenable;
        return this;
    }
    @JsonProperty("self")
    public LinksGetChannelCatalogCategoriesLink self;
    public ChannelCatalogCategoryMappingsLinks withSelf(LinksGetChannelCatalogCategoriesLink self) {
        this.self = self;
        return this;
    }
}