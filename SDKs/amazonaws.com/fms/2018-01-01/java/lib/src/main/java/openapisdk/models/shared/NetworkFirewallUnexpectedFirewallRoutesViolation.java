package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkFirewallUnexpectedFirewallRoutesViolation
 * Violation detail for an unexpected route that's present in a route table.
**/
public class NetworkFirewallUnexpectedFirewallRoutesViolation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallEndpoint")
    public String firewallEndpoint;
    public NetworkFirewallUnexpectedFirewallRoutesViolation withFirewallEndpoint(String firewallEndpoint) {
        this.firewallEndpoint = firewallEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallSubnetId")
    public String firewallSubnetId;
    public NetworkFirewallUnexpectedFirewallRoutesViolation withFirewallSubnetId(String firewallSubnetId) {
        this.firewallSubnetId = firewallSubnetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteTableId")
    public String routeTableId;
    public NetworkFirewallUnexpectedFirewallRoutesViolation withRouteTableId(String routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolatingRoutes")
    public Route[] violatingRoutes;
    public NetworkFirewallUnexpectedFirewallRoutesViolation withViolatingRoutes(Route[] violatingRoutes) {
        this.violatingRoutes = violatingRoutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public NetworkFirewallUnexpectedFirewallRoutesViolation withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}