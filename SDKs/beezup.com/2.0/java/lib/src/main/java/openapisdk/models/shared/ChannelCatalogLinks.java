package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelCatalogLinks
 * Indicates the actions you can do on a channel catalog
**/
public class ChannelCatalogLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryMappings")
    public LinksGetChannelCatalogCategoriesLink categoryMappings;
    public ChannelCatalogLinks withCategoryMappings(LinksGetChannelCatalogCategoriesLink categoryMappings) {
        this.categoryMappings = categoryMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelInfo")
    public ExternalLinksGetChannelInfoLink channelInfo;
    public ChannelCatalogLinks withChannelInfo(ExternalLinksGetChannelInfoLink channelInfo) {
        this.channelInfo = channelInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configureColumnMappings")
    public LinksConfigureChannelCatalogColumnMappingsLink configureColumnMappings;
    public ChannelCatalogLinks withConfigureColumnMappings(LinksConfigureChannelCatalogColumnMappingsLink configureColumnMappings) {
        this.configureColumnMappings = configureColumnMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configureCostSettings")
    public LinksConfigureChannelCatalogCostSettingsLink configureCostSettings;
    public ChannelCatalogLinks withConfigureCostSettings(LinksConfigureChannelCatalogCostSettingsLink configureCostSettings) {
        this.configureCostSettings = configureCostSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configureGeneralSettings")
    public LinksConfigureChannelCatalogGeneralSettingsLink configureGeneralSettings;
    public ChannelCatalogLinks withConfigureGeneralSettings(LinksConfigureChannelCatalogGeneralSettingsLink configureGeneralSettings) {
        this.configureGeneralSettings = configureGeneralSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public LinksDeleteChannelCatalogLink delete;
    public ChannelCatalogLinks withDelete(LinksDeleteChannelCatalogLink delete) {
        this.delete = delete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disable")
    public LinksDisableChannelCatalogLink disable;
    public ChannelCatalogLinks withDisable(LinksDisableChannelCatalogLink disable) {
        this.disable = disable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableCategoryMappings")
    public LinksDisableChannelCatalogCategoryMappingLink disableCategoryMappings;
    public ChannelCatalogLinks withDisableCategoryMappings(LinksDisableChannelCatalogCategoryMappingLink disableCategoryMappings) {
        this.disableCategoryMappings = disableCategoryMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public LinksEnableChannelCatalogLink enable;
    public ChannelCatalogLinks withEnable(LinksEnableChannelCatalogLink enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusionFilters")
    public LinksGetChannelCatalogExclusionFiltersLink exclusionFilters;
    public ChannelCatalogLinks withExclusionFilters(LinksGetChannelCatalogExclusionFiltersLink exclusionFilters) {
        this.exclusionFilters = exclusionFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportationCacheInfo")
    public LinksGetChannelCatalogExportationCacheInfoLink exportationCacheInfo;
    public ChannelCatalogLinks withExportationCacheInfo(LinksGetChannelCatalogExportationCacheInfoLink exportationCacheInfo) {
        this.exportationCacheInfo = exportationCacheInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceSettings")
    public ExternalLinksGetChannelCatalogMarketplaceSettingsLink marketplaceSettings;
    public ChannelCatalogLinks withMarketplaceSettings(ExternalLinksGetChannelCatalogMarketplaceSettingsLink marketplaceSettings) {
        this.marketplaceSettings = marketplaceSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public LinksGetChannelCatalogProductInfoListLink products;
    public ChannelCatalogLinks withProducts(LinksGetChannelCatalogProductInfoListLink products) {
        this.products = products;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reenableCategoryMappings")
    public LinksReenableChannelCatalogCategoryMappingLink reenableCategoryMappings;
    public ChannelCatalogLinks withReenableCategoryMappings(LinksReenableChannelCatalogCategoryMappingLink reenableCategoryMappings) {
        this.reenableCategoryMappings = reenableCategoryMappings;
        return this;
    }
    @JsonProperty("self")
    public LinksGetChannelCatalogLink self;
    public ChannelCatalogLinks withSelf(LinksGetChannelCatalogLink self) {
        this.self = self;
        return this;
    }
}