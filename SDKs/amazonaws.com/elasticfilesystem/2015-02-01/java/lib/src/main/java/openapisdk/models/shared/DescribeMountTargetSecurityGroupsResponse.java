package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeMountTargetSecurityGroupsResponse {
    @JsonProperty("SecurityGroups")
    public String[] securityGroups;
    public DescribeMountTargetSecurityGroupsResponse withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
}