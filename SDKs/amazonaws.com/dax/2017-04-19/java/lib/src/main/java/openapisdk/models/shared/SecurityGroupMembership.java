package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecurityGroupMembership
 * An individual VPC security group and its status.
**/
public class SecurityGroupMembership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroupIdentifier")
    public String securityGroupIdentifier;
    public SecurityGroupMembership withSecurityGroupIdentifier(String securityGroupIdentifier) {
        this.securityGroupIdentifier = securityGroupIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public SecurityGroupMembership withStatus(String status) {
        this.status = status;
        return this;
    }
}