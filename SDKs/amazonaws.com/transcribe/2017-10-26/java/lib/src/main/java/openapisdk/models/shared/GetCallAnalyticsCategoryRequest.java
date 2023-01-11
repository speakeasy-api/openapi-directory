package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCallAnalyticsCategoryRequest {
    @JsonProperty("CategoryName")
    public String categoryName;
    public GetCallAnalyticsCategoryRequest withCategoryName(String categoryName) {
        this.categoryName = categoryName;
        return this;
    }
}