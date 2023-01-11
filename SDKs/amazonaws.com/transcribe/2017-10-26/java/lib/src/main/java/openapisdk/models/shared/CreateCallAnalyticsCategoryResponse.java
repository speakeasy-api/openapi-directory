package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCallAnalyticsCategoryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CategoryProperties")
    public CategoryProperties categoryProperties;
    public CreateCallAnalyticsCategoryResponse withCategoryProperties(CategoryProperties categoryProperties) {
        this.categoryProperties = categoryProperties;
        return this;
    }
}