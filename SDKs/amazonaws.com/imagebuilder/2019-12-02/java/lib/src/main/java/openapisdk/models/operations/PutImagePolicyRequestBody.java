package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutImagePolicyRequestBody {
    @JsonProperty("imageArn")
    public String imageArn;
    public PutImagePolicyRequestBody withImageArn(String imageArn) {
        this.imageArn = imageArn;
        return this;
    }
    @JsonProperty("policy")
    public String policy;
    public PutImagePolicyRequestBody withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}