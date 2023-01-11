package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetImageRecipeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageRecipe")
    public ImageRecipe imageRecipe;
    public GetImageRecipeResponse withImageRecipe(ImageRecipe imageRecipe) {
        this.imageRecipe = imageRecipe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GetImageRecipeResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}