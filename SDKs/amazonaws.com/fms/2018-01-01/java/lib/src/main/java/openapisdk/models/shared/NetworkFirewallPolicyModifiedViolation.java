package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkFirewallPolicyModifiedViolation
 * Violation detail for Network Firewall for a firewall policy that has a different <a>NetworkFirewallPolicyDescription</a> than is required by the Firewall Manager policy. 
**/
public class NetworkFirewallPolicyModifiedViolation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentPolicyDescription")
    public NetworkFirewallPolicyDescription currentPolicyDescription;
    public NetworkFirewallPolicyModifiedViolation withCurrentPolicyDescription(NetworkFirewallPolicyDescription currentPolicyDescription) {
        this.currentPolicyDescription = currentPolicyDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpectedPolicyDescription")
    public NetworkFirewallPolicyDescription expectedPolicyDescription;
    public NetworkFirewallPolicyModifiedViolation withExpectedPolicyDescription(NetworkFirewallPolicyDescription expectedPolicyDescription) {
        this.expectedPolicyDescription = expectedPolicyDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolationTarget")
    public String violationTarget;
    public NetworkFirewallPolicyModifiedViolation withViolationTarget(String violationTarget) {
        this.violationTarget = violationTarget;
        return this;
    }
}