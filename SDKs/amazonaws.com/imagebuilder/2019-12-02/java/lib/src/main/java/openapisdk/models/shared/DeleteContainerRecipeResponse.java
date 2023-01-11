package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteContainerRecipeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerRecipeArn")
    public String containerRecipeArn;
    public DeleteContainerRecipeResponse withContainerRecipeArn(String containerRecipeArn) {
        this.containerRecipeArn = containerRecipeArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public DeleteContainerRecipeResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}