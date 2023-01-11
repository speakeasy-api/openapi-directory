package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteResourcePolicyInput {
    @JsonProperty("resourceArn")
    public String resourceArn;
    public DeleteResourcePolicyInput withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}