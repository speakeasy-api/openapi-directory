package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PhysicalConnectionRequirements
 * Specifies the physical requirements for a connection.
**/
public class PhysicalConnectionRequirements {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZone")
    public String availabilityZone;
    public PhysicalConnectionRequirements withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroupIdList")
    public String[] securityGroupIdList;
    public PhysicalConnectionRequirements withSecurityGroupIdList(String[] securityGroupIdList) {
        this.securityGroupIdList = securityGroupIdList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetId")
    public String subnetId;
    public PhysicalConnectionRequirements withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
}