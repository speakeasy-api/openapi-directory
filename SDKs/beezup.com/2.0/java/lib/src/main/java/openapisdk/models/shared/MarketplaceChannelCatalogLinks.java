package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MarketplaceChannelCatalogLinks
 * Indicate the actions you can do on a channel catalog. If the settings are valid, you will be able to access to the publication history.
**/
public class MarketplaceChannelCatalogLinks {
    @JsonProperty("properties")
    public LinksGetChannelCatalogMarketplacePropertiesLink properties;
    public MarketplaceChannelCatalogLinks withProperties(LinksGetChannelCatalogMarketplacePropertiesLink properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publications")
    public LinksGetPublicationsLink publications;
    public MarketplaceChannelCatalogLinks withPublications(LinksGetPublicationsLink publications) {
        this.publications = publications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishOptions")
    public MarketplaceChannelCatalogPublicationOption[] publishOptions;
    public MarketplaceChannelCatalogLinks withPublishOptions(MarketplaceChannelCatalogPublicationOption[] publishOptions) {
        this.publishOptions = publishOptions;
        return this;
    }
    @JsonProperty("settings")
    public LinksGetChannelCatalogMarketplaceSettingsLink settings;
    public MarketplaceChannelCatalogLinks withSettings(LinksGetChannelCatalogMarketplaceSettingsLink settings) {
        this.settings = settings;
        return this;
    }
}