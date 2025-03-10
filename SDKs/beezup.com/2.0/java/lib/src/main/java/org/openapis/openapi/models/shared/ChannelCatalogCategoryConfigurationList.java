/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelCatalogCategoryConfigurationList - Channel catalog category mappings
 */
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
    
    /**
     * The action you can do on the category mappings
     */
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
    
    public ChannelCatalogCategoryConfigurationList(@JsonProperty("channelCatalogCategoryConfigurations") ChannelCatalogCategoryConfigurationInfo[] channelCatalogCategoryConfigurations, @JsonProperty("costStatus") CostStatusEnum costStatus, @JsonProperty("links") ChannelCatalogCategoryMappingsLinks links, @JsonProperty("mappingStatus") MappingStatusEnum mappingStatus) {
        this.channelCatalogCategoryConfigurations = channelCatalogCategoryConfigurations;
        this.costStatus = costStatus;
        this.links = links;
        this.mappingStatus = mappingStatus;
  }
}
