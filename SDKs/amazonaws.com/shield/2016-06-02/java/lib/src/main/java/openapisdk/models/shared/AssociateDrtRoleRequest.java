package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateDrtRoleRequest {
    @JsonProperty("RoleArn")
    public String roleArn;
    public AssociateDrtRoleRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}