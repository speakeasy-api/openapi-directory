package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProductSetVisibilityCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public ProductSetVisibilityCriteria withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excluded")
    public Boolean excluded;
    public ProductSetVisibilityCriteria withExcluded(Boolean excluded) {
        this.excluded = excluded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exist")
    public Boolean exist;
    public ProductSetVisibilityCriteria withExist(Boolean exist) {
        this.exist = exist;
        return this;
    }
    @JsonProperty("logic")
    public ProductSetVisibilityCriteriaLogicTypeEnum logic;
    public ProductSetVisibilityCriteria withLogic(ProductSetVisibilityCriteriaLogicTypeEnum logic) {
        this.logic = logic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uncategorized")
    public Boolean uncategorized;
    public ProductSetVisibilityCriteria withUncategorized(Boolean uncategorized) {
        this.uncategorized = uncategorized;
        return this;
    }
}