package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CategoryList
 * The object which contains the category list
**/
public class CategoryList {
    @JsonProperty("categories")
    public Object[] categories;
    public CategoryList withCategories(Object[] categories) {
        this.categories = categories;
        return this;
    }
}