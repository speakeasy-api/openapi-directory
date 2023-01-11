package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutImageRecipePolicyRequestBody {
    @JsonProperty("imageRecipeArn")
    public String imageRecipeArn;
    public PutImageRecipePolicyRequestBody withImageRecipeArn(String imageRecipeArn) {
        this.imageRecipeArn = imageRecipeArn;
        return this;
    }
    @JsonProperty("policy")
    public String policy;
    public PutImageRecipePolicyRequestBody withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}