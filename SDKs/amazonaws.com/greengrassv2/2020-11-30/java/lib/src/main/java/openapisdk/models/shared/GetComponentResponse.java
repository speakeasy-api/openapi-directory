package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetComponentResponse {
    @JsonProperty("recipe")
    public String recipe;
    public GetComponentResponse withRecipe(String recipe) {
        this.recipe = recipe;
        return this;
    }
    @JsonProperty("recipeOutputFormat")
    public RecipeOutputFormatEnum recipeOutputFormat;
    public GetComponentResponse withRecipeOutputFormat(RecipeOutputFormatEnum recipeOutputFormat) {
        this.recipeOutputFormat = recipeOutputFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public GetComponentResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}