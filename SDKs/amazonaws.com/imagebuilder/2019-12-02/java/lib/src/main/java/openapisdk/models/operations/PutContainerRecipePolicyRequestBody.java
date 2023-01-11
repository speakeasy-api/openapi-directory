package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutContainerRecipePolicyRequestBody {
    @JsonProperty("containerRecipeArn")
    public String containerRecipeArn;
    public PutContainerRecipePolicyRequestBody withContainerRecipeArn(String containerRecipeArn) {
        this.containerRecipeArn = containerRecipeArn;
        return this;
    }
    @JsonProperty("policy")
    public String policy;
    public PutContainerRecipePolicyRequestBody withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}