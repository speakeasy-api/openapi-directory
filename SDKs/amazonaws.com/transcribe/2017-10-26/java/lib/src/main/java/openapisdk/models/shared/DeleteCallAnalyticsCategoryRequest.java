package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCallAnalyticsCategoryRequest {
    @JsonProperty("CategoryName")
    public String categoryName;
    public DeleteCallAnalyticsCategoryRequest withCategoryName(String categoryName) {
        this.categoryName = categoryName;
        return this;
    }
}