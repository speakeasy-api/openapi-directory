package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ItemConditionPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryId")
    public String categoryId;
    public ItemConditionPolicy withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryTreeId")
    public String categoryTreeId;
    public ItemConditionPolicy withCategoryTreeId(String categoryTreeId) {
        this.categoryTreeId = categoryTreeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemConditionRequired")
    public Boolean itemConditionRequired;
    public ItemConditionPolicy withItemConditionRequired(Boolean itemConditionRequired) {
        this.itemConditionRequired = itemConditionRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemConditions")
    public ItemCondition[] itemConditions;
    public ItemConditionPolicy withItemConditions(ItemCondition[] itemConditions) {
        this.itemConditions = itemConditions;
        return this;
    }
}