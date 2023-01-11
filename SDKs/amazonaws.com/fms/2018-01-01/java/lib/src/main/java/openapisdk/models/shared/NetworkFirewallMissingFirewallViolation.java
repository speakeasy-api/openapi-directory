package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkFirewallMissingFirewallViolation
 * Violation detail for Network Firewall for a subnet that doesn't have a Firewall Manager managed firewall in its VPC. 
**/
public class NetworkFirewallMissingFirewallViolation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZone")
    public String availabilityZone;
    public NetworkFirewallMissingFirewallViolation withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetViolationReason")
    public String targetViolationReason;
    public NetworkFirewallMissingFirewallViolation withTargetViolationReason(String targetViolationReason) {
        this.targetViolationReason = targetViolationReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VPC")
    public String vpc;
    public NetworkFirewallMissingFirewallViolation withVpc(String vpc) {
        this.vpc = vpc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolationTarget")
    public String violationTarget;
    public NetworkFirewallMissingFirewallViolation withViolationTarget(String violationTarget) {
        this.violationTarget = violationTarget;
        return this;
    }
}