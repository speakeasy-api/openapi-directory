package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelCatalog
 * The channel catalog
**/
public class ChannelCatalog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryMappingSettings")
    public ChannelCatalogCategoryMappingSettings categoryMappingSettings;
    public ChannelCatalog withCategoryMappingSettings(ChannelCatalogCategoryMappingSettings categoryMappingSettings) {
        this.categoryMappingSettings = categoryMappingSettings;
        return this;
    }
    @JsonProperty("channelCatalogId")
    public String channelCatalogId;
    public ChannelCatalog withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
    @JsonProperty("channelCategorySettings")
    public ChannelCategorySettings channelCategorySettings;
    public ChannelCatalog withChannelCategorySettings(ChannelCategorySettings channelCategorySettings) {
        this.channelCategorySettings = channelCategorySettings;
        return this;
    }
    @JsonProperty("channelCostSettings")
    public ChannelCostSettings channelCostSettings;
    public ChannelCatalog withChannelCostSettings(ChannelCostSettings channelCostSettings) {
        this.channelCostSettings = channelCostSettings;
        return this;
    }
    @JsonProperty("channelId")
    public String channelId;
    public ChannelCatalog withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonProperty("channelImageUrl")
    public String channelImageUrl;
    public ChannelCatalog withChannelImageUrl(String channelImageUrl) {
        this.channelImageUrl = channelImageUrl;
        return this;
    }
    @JsonProperty("channelName")
    public String channelName;
    public ChannelCatalog withChannelName(String channelName) {
        this.channelName = channelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnMappings")
    public ChannelCatalogColumnMappingWithName[] columnMappings;
    public ChannelCatalog withColumnMappings(ChannelCatalogColumnMappingWithName[] columnMappings) {
        this.columnMappings = columnMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costSettings")
    public CostSettings costSettings;
    public ChannelCatalog withCostSettings(CostSettings costSettings) {
        this.costSettings = costSettings;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public ChannelCatalog withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusionFilters")
    public ExclusionFilter[] exclusionFilters;
    public ChannelCatalog withExclusionFilters(ExclusionFilter[] exclusionFilters) {
        this.exclusionFilters = exclusionFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportUrl")
    public String exportUrl;
    public ChannelCatalog withExportUrl(String exportUrl) {
        this.exportUrl = exportUrl;
        return this;
    }
    @JsonProperty("generalSettings")
    public GeneralSettings generalSettings;
    public ChannelCatalog withGeneralSettings(GeneralSettings generalSettings) {
        this.generalSettings = generalSettings;
        return this;
    }
    @JsonProperty("isMarketplace")
    public Boolean isMarketplace;
    public ChannelCatalog withIsMarketplace(Boolean isMarketplace) {
        this.isMarketplace = isMarketplace;
        return this;
    }
    @JsonProperty("links")
    public ChannelCatalogLinks links;
    public ChannelCatalog withLinks(ChannelCatalogLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("state")
    public ChannelCatalogState state;
    public ChannelCatalog withState(ChannelCatalogState state) {
        this.state = state;
        return this;
    }
    @JsonProperty("storeId")
    public String storeId;
    public ChannelCatalog withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
    @JsonProperty("types")
    public String[] types;
    public ChannelCatalog withTypes(String[] types) {
        this.types = types;
        return this;
    }
}