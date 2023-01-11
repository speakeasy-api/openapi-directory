package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContainerRecipeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerRecipe")
    public ContainerRecipe containerRecipe;
    public GetContainerRecipeResponse withContainerRecipe(ContainerRecipe containerRecipe) {
        this.containerRecipe = containerRecipe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GetContainerRecipeResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}