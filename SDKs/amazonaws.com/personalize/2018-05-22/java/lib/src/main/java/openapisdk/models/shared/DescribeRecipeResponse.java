package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRecipeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipe")
    public Recipe recipe;
    public DescribeRecipeResponse withRecipe(Recipe recipe) {
        this.recipe = recipe;
        return this;
    }
}