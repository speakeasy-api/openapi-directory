package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelCatalogMarketplacePropertiesLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalConfigurationPage")
    public BeezUpCommonLink3 externalConfigurationPage;
    public ChannelCatalogMarketplacePropertiesLinks withExternalConfigurationPage(BeezUpCommonLink3 externalConfigurationPage) {
        this.externalConfigurationPage = externalConfigurationPage;
        return this;
    }
    @JsonProperty("self")
    public LinksGetChannelCatalogMarketplacePropertiesLink self;
    public ChannelCatalogMarketplacePropertiesLinks withSelf(LinksGetChannelCatalogMarketplacePropertiesLink self) {
        this.self = self;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public LinksGetChannelCatalogMarketplaceSettingsLink settings;
    public ChannelCatalogMarketplacePropertiesLinks withSettings(LinksGetChannelCatalogMarketplaceSettingsLink settings) {
        this.settings = settings;
        return this;
    }
}