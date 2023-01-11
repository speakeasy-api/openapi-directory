package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelCatalogProductInfoLinks
 * Indicates the differents actions you can do on a channel product
**/
public class ChannelCatalogProductInfoLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disable")
    public LinksDisableChannelCatalogProductLink disable;
    public ChannelCatalogProductInfoLinks withDisable(LinksDisableChannelCatalogProductLink disable) {
        this.disable = disable;
        return this;
    }
    @JsonProperty("override")
    public LinksOverrideChannelCatalogProductValuesLink override;
    public ChannelCatalogProductInfoLinks withOverride(LinksOverrideChannelCatalogProductValuesLink override) {
        this.override = override;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reenable")
    public LinksReenableChannelCatalogProductLink reenable;
    public ChannelCatalogProductInfoLinks withReenable(LinksReenableChannelCatalogProductLink reenable) {
        this.reenable = reenable;
        return this;
    }
    @JsonProperty("self")
    public LinksGetChannelCatalogProductInfoLink self;
    public ChannelCatalogProductInfoLinks withSelf(LinksGetChannelCatalogProductInfoLink self) {
        this.self = self;
        return this;
    }
}