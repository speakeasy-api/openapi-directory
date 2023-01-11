package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelCatalogMarketplaceSetting
 * Model for fetching a channel catalog marketplace setting
**/
public class ChannelCatalogMarketplaceSetting {
    @JsonProperty("discriminatorType")
    public ChannelCatalogMarketplaceSettingDiscriminatorTypeEnum discriminatorType;
    public ChannelCatalogMarketplaceSetting withDiscriminatorType(ChannelCatalogMarketplaceSettingDiscriminatorTypeEnum discriminatorType) {
        this.discriminatorType = discriminatorType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ChannelCatalogMarketplaceSetting withName(String name) {
        this.name = name;
        return this;
    }
}