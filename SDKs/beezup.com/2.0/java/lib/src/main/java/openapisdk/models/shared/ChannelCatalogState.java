package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelCatalogState
 * Channel Catalog State
**/
public class ChannelCatalogState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiSettingsStatus")
    public BeezUpCommonApiSettingsStatusEnum apiSettingsStatus;
    public ChannelCatalogState withApiSettingsStatus(BeezUpCommonApiSettingsStatusEnum apiSettingsStatus) {
        this.apiSettingsStatus = apiSettingsStatus;
        return this;
    }
    @JsonProperty("categoryMappingState")
    public CategoryMappingState categoryMappingState;
    public ChannelCatalogState withCategoryMappingState(CategoryMappingState categoryMappingState) {
        this.categoryMappingState = categoryMappingState;
        return this;
    }
    @JsonProperty("columnMappingStatus")
    public ColumnMappingStatusEnum columnMappingStatus;
    public ChannelCatalogState withColumnMappingStatus(ColumnMappingStatusEnum columnMappingStatus) {
        this.columnMappingStatus = columnMappingStatus;
        return this;
    }
    @JsonProperty("exportedProductCount")
    public Integer exportedProductCount;
    public ChannelCatalogState withExportedProductCount(Integer exportedProductCount) {
        this.exportedProductCount = exportedProductCount;
        return this;
    }
}