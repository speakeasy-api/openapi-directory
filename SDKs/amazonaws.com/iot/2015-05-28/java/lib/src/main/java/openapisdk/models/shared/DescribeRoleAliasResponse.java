package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRoleAliasResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleAliasDescription")
    public RoleAliasDescription roleAliasDescription;
    public DescribeRoleAliasResponse withRoleAliasDescription(RoleAliasDescription roleAliasDescription) {
        this.roleAliasDescription = roleAliasDescription;
        return this;
    }
}