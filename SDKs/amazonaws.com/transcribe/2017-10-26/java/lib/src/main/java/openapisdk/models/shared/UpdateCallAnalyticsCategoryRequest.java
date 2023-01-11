package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCallAnalyticsCategoryRequest {
    @JsonProperty("CategoryName")
    public String categoryName;
    public UpdateCallAnalyticsCategoryRequest withCategoryName(String categoryName) {
        this.categoryName = categoryName;
        return this;
    }
    @JsonProperty("Rules")
    public Rule[] rules;
    public UpdateCallAnalyticsCategoryRequest withRules(Rule[] rules) {
        this.rules = rules;
        return this;
    }
}