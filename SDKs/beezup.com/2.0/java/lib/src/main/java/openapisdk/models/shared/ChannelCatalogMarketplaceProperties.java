package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelCatalogMarketplaceProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public BeezUpCommonInfoSummaries info;
    public ChannelCatalogMarketplaceProperties withInfo(BeezUpCommonInfoSummaries info) {
        this.info = info;
        return this;
    }
    @JsonProperty("links")
    public ChannelCatalogMarketplacePropertiesLinks links;
    public ChannelCatalogMarketplaceProperties withLinks(ChannelCatalogMarketplacePropertiesLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("propertyGroups")
    public Object[] propertyGroups;
    public ChannelCatalogMarketplaceProperties withPropertyGroups(Object[] propertyGroups) {
        this.propertyGroups = propertyGroups;
        return this;
    }
}