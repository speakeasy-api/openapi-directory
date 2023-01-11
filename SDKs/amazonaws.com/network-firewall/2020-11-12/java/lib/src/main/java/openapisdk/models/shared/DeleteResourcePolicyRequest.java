package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteResourcePolicyRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public DeleteResourcePolicyRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}