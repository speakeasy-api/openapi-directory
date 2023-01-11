package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeletePermissionPolicyRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public DeletePermissionPolicyRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}