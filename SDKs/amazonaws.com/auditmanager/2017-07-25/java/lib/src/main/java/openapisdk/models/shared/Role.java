package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Role
 *  The wrapper that contains the Audit Manager role information of the current user, such as the role type and IAM Amazon Resource Name (ARN). 
**/
public class Role {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public Role withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleType")
    public RoleTypeEnum roleType;
    public Role withRoleType(RoleTypeEnum roleType) {
        this.roleType = roleType;
        return this;
    }
}