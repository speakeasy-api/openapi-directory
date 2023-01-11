package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelCatalogCategoryMappingInfoLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configureCategories")
    public LinksConfigureChannelCatalogCategoryLink configureCategories;
    public ChannelCatalogCategoryMappingInfoLinks withConfigureCategories(LinksConfigureChannelCatalogCategoryLink configureCategories) {
        this.configureCategories = configureCategories;
        return this;
    }
}