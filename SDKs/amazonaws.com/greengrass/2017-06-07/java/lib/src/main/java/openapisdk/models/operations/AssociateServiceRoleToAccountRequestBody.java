package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateServiceRoleToAccountRequestBody {
    @JsonProperty("RoleArn")
    public String roleArn;
    public AssociateServiceRoleToAccountRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}