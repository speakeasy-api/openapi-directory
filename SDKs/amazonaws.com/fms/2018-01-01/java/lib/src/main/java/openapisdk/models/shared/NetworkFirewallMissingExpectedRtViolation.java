package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkFirewallMissingExpectedRtViolation
 * Violation detail for Network Firewall for a subnet that's not associated to the expected Firewall Manager managed route table.
**/
public class NetworkFirewallMissingExpectedRtViolation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZone")
    public String availabilityZone;
    public NetworkFirewallMissingExpectedRtViolation withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentRouteTable")
    public String currentRouteTable;
    public NetworkFirewallMissingExpectedRtViolation withCurrentRouteTable(String currentRouteTable) {
        this.currentRouteTable = currentRouteTable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpectedRouteTable")
    public String expectedRouteTable;
    public NetworkFirewallMissingExpectedRtViolation withExpectedRouteTable(String expectedRouteTable) {
        this.expectedRouteTable = expectedRouteTable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VPC")
    public String vpc;
    public NetworkFirewallMissingExpectedRtViolation withVpc(String vpc) {
        this.vpc = vpc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolationTarget")
    public String violationTarget;
    public NetworkFirewallMissingExpectedRtViolation withViolationTarget(String violationTarget) {
        this.violationTarget = violationTarget;
        return this;
    }
}