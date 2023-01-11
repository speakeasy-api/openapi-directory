package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoriesCreator {
    @JsonProperty("categories")
    public Long[] categories;
    public CategoriesCreator withCategories(Long[] categories) {
        this.categories = categories;
        return this;
    }
}