package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateCallAnalyticsCategoryRequest {
    @JsonProperty("CategoryName")
    public String categoryName;
    public CreateCallAnalyticsCategoryRequest withCategoryName(String categoryName) {
        this.categoryName = categoryName;
        return this;
    }
    @JsonProperty("Rules")
    public Rule[] rules;
    public CreateCallAnalyticsCategoryRequest withRules(Rule[] rules) {
        this.rules = rules;
        return this;
    }
}