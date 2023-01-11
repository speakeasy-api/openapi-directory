package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ModifyMountTargetSecurityGroupsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroups")
    public String[] securityGroups;
    public ModifyMountTargetSecurityGroupsRequestBody withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
}