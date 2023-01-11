package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkFirewallBlackHoleRouteDetectedViolation
 * Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.
**/
public class NetworkFirewallBlackHoleRouteDetectedViolation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteTableId")
    public String routeTableId;
    public NetworkFirewallBlackHoleRouteDetectedViolation withRouteTableId(String routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolatingRoutes")
    public Route[] violatingRoutes;
    public NetworkFirewallBlackHoleRouteDetectedViolation withViolatingRoutes(Route[] violatingRoutes) {
        this.violatingRoutes = violatingRoutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolationTarget")
    public String violationTarget;
    public NetworkFirewallBlackHoleRouteDetectedViolation withViolationTarget(String violationTarget) {
        this.violationTarget = violationTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public NetworkFirewallBlackHoleRouteDetectedViolation withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}