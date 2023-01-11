package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChannelCatalogCategoryConfigurationList {
    @JsonProperty("channelCatalogCategoryConfigurations")
    public ChannelCatalogCategoryConfigurationInfo[] channelCatalogCategoryConfigurations;
    public ChannelCatalogCategoryConfigurationList withChannelCatalogCategoryConfigurations(ChannelCatalogCategoryConfigurationInfo[] channelCatalogCategoryConfigurations) {
        this.channelCatalogCategoryConfigurations = channelCatalogCategoryConfigurations;
        return this;
    }
    @JsonProperty("costStatus")
    public CostStatusEnum costStatus;
    public ChannelCatalogCategoryConfigurationList withCostStatus(CostStatusEnum costStatus) {
        this.costStatus = costStatus;
        return this;
    }
    @JsonProperty("links")
    public ChannelCatalogCategoryMappingsLinks links;
    public ChannelCatalogCategoryConfigurationList withLinks(ChannelCatalogCategoryMappingsLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("mappingStatus")
    public MappingStatusEnum mappingStatus;
    public ChannelCatalogCategoryConfigurationList withMappingStatus(MappingStatusEnum mappingStatus) {
        this.mappingStatus = mappingStatus;
        return this;
    }
}