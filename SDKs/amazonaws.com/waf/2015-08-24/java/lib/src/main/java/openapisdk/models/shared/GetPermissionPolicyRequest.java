package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPermissionPolicyRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public GetPermissionPolicyRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}