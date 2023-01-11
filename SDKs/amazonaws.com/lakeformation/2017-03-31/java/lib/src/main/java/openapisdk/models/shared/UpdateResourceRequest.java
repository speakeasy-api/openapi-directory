package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateResourceRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public UpdateResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("RoleArn")
    public String roleArn;
    public UpdateResourceRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}