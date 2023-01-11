package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisterCrossAccountAccessRoleRequest {
    @JsonProperty("roleArn")
    public String roleArn;
    public RegisterCrossAccountAccessRoleRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}