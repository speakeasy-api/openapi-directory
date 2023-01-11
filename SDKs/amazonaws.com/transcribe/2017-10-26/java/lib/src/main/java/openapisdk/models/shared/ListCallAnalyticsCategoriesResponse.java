package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCallAnalyticsCategoriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Categories")
    public CategoryProperties[] categories;
    public ListCallAnalyticsCategoriesResponse withCategories(CategoryProperties[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCallAnalyticsCategoriesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}