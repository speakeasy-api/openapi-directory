package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IamActionDefinition
 *  The AWS Identity and Access Management (IAM) action definition details. 
**/
public class IamActionDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Groups")
    public String[] groups;
    public IamActionDefinition withGroups(String[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("PolicyArn")
    public String policyArn;
    public IamActionDefinition withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Roles")
    public String[] roles;
    public IamActionDefinition withRoles(String[] roles) {
        this.roles = roles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Users")
    public String[] users;
    public IamActionDefinition withUsers(String[] users) {
        this.users = users;
        return this;
    }
}