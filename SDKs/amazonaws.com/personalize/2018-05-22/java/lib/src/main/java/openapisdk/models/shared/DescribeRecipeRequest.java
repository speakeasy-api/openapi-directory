package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeRecipeRequest {
    @JsonProperty("recipeArn")
    public String recipeArn;
    public DescribeRecipeRequest withRecipeArn(String recipeArn) {
        this.recipeArn = recipeArn;
        return this;
    }
}