package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMlModelInput {
    @JsonProperty("MLModelId")
    public String mlModelId;
    public CreateMlModelInput withMlModelId(String mlModelId) {
        this.mlModelId = mlModelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MLModelName")
    public String mlModelName;
    public CreateMlModelInput withMlModelName(String mlModelName) {
        this.mlModelName = mlModelName;
        return this;
    }
    @JsonProperty("MLModelType")
    public MlModelTypeEnum mlModelType;
    public CreateMlModelInput withMlModelType(MlModelTypeEnum mlModelType) {
        this.mlModelType = mlModelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public java.util.Map<String, String> parameters;
    public CreateMlModelInput withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Recipe")
    public String recipe;
    public CreateMlModelInput withRecipe(String recipe) {
        this.recipe = recipe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecipeUri")
    public String recipeUri;
    public CreateMlModelInput withRecipeUri(String recipeUri) {
        this.recipeUri = recipeUri;
        return this;
    }
    @JsonProperty("TrainingDataSourceId")
    public String trainingDataSourceId;
    public CreateMlModelInput withTrainingDataSourceId(String trainingDataSourceId) {
        this.trainingDataSourceId = trainingDataSourceId;
        return this;
    }
}