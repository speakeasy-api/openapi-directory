package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkFirewallMissingExpectedRoutesViolation
 * Violation detail for an expected route missing in Network Firewall.
**/
public class NetworkFirewallMissingExpectedRoutesViolation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpectedRoutes")
    public ExpectedRoute[] expectedRoutes;
    public NetworkFirewallMissingExpectedRoutesViolation withExpectedRoutes(ExpectedRoute[] expectedRoutes) {
        this.expectedRoutes = expectedRoutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolationTarget")
    public String violationTarget;
    public NetworkFirewallMissingExpectedRoutesViolation withViolationTarget(String violationTarget) {
        this.violationTarget = violationTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public NetworkFirewallMissingExpectedRoutesViolation withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}