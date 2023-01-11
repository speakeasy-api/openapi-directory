package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelCatalogCategoryMappingSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryMappingDisabledByMerchant")
    public Boolean categoryMappingDisabledByMerchant;
    public ChannelCatalogCategoryMappingSettings withCategoryMappingDisabledByMerchant(Boolean categoryMappingDisabledByMerchant) {
        this.categoryMappingDisabledByMerchant = categoryMappingDisabledByMerchant;
        return this;
    }
}