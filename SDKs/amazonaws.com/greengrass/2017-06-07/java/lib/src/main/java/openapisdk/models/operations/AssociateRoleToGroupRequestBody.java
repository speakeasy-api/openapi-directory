package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateRoleToGroupRequestBody {
    @JsonProperty("RoleArn")
    public String roleArn;
    public AssociateRoleToGroupRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}