package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetResourcePolicyInput {
    @JsonProperty("resourceArn")
    public String resourceArn;
    public GetResourcePolicyInput withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}