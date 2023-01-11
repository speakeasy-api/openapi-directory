package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateContainerRecipeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateContainerRecipeResponse withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerRecipeArn")
    public String containerRecipeArn;
    public CreateContainerRecipeResponse withContainerRecipeArn(String containerRecipeArn) {
        this.containerRecipeArn = containerRecipeArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public CreateContainerRecipeResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}