package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CategoryMappingState
 * The category mapping state of the channel catalog
**/
public class CategoryMappingState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CategoryMappingStatusEnum status;
    public CategoryMappingState withStatus(CategoryMappingStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uncategorizedProductCount")
    public Integer uncategorizedProductCount;
    public CategoryMappingState withUncategorizedProductCount(Integer uncategorizedProductCount) {
        this.uncategorizedProductCount = uncategorizedProductCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("withoutCategoryCostProductCount")
    public Integer withoutCategoryCostProductCount;
    public CategoryMappingState withWithoutCategoryCostProductCount(Integer withoutCategoryCostProductCount) {
        this.withoutCategoryCostProductCount = withoutCategoryCostProductCount;
        return this;
    }
}