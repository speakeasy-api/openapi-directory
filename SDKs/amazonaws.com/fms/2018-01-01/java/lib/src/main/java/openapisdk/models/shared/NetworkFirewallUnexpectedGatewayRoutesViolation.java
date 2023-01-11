package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkFirewallUnexpectedGatewayRoutesViolation
 * Violation detail for an unexpected gateway route that’s present in a route table.
**/
public class NetworkFirewallUnexpectedGatewayRoutesViolation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GatewayId")
    public String gatewayId;
    public NetworkFirewallUnexpectedGatewayRoutesViolation withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteTableId")
    public String routeTableId;
    public NetworkFirewallUnexpectedGatewayRoutesViolation withRouteTableId(String routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolatingRoutes")
    public Route[] violatingRoutes;
    public NetworkFirewallUnexpectedGatewayRoutesViolation withViolatingRoutes(Route[] violatingRoutes) {
        this.violatingRoutes = violatingRoutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public NetworkFirewallUnexpectedGatewayRoutesViolation withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}