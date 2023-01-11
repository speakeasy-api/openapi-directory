package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteImageRecipeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageRecipeArn")
    public String imageRecipeArn;
    public DeleteImageRecipeResponse withImageRecipeArn(String imageRecipeArn) {
        this.imageRecipeArn = imageRecipeArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public DeleteImageRecipeResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}