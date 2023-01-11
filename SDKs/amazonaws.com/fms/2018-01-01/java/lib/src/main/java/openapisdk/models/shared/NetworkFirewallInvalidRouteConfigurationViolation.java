package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkFirewallInvalidRouteConfigurationViolation
 * Violation detail for the improperly configured subnet route. It's possible there is a missing route table route, or a configuration that causes traffic to cross an Availability Zone boundary.
**/
public class NetworkFirewallInvalidRouteConfigurationViolation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ActualFirewallEndpoint")
    public String actualFirewallEndpoint;
    public NetworkFirewallInvalidRouteConfigurationViolation withActualFirewallEndpoint(String actualFirewallEndpoint) {
        this.actualFirewallEndpoint = actualFirewallEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ActualFirewallSubnetId")
    public String actualFirewallSubnetId;
    public NetworkFirewallInvalidRouteConfigurationViolation withActualFirewallSubnetId(String actualFirewallSubnetId) {
        this.actualFirewallSubnetId = actualFirewallSubnetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ActualFirewallSubnetRoutes")
    public Route[] actualFirewallSubnetRoutes;
    public NetworkFirewallInvalidRouteConfigurationViolation withActualFirewallSubnetRoutes(Route[] actualFirewallSubnetRoutes) {
        this.actualFirewallSubnetRoutes = actualFirewallSubnetRoutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ActualInternetGatewayRoutes")
    public Route[] actualInternetGatewayRoutes;
    public NetworkFirewallInvalidRouteConfigurationViolation withActualInternetGatewayRoutes(Route[] actualInternetGatewayRoutes) {
        this.actualInternetGatewayRoutes = actualInternetGatewayRoutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AffectedSubnets")
    public String[] affectedSubnets;
    public NetworkFirewallInvalidRouteConfigurationViolation withAffectedSubnets(String[] affectedSubnets) {
        this.affectedSubnets = affectedSubnets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentFirewallSubnetRouteTable")
    public String currentFirewallSubnetRouteTable;
    public NetworkFirewallInvalidRouteConfigurationViolation withCurrentFirewallSubnetRouteTable(String currentFirewallSubnetRouteTable) {
        this.currentFirewallSubnetRouteTable = currentFirewallSubnetRouteTable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentInternetGatewayRouteTable")
    public String currentInternetGatewayRouteTable;
    public NetworkFirewallInvalidRouteConfigurationViolation withCurrentInternetGatewayRouteTable(String currentInternetGatewayRouteTable) {
        this.currentInternetGatewayRouteTable = currentInternetGatewayRouteTable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpectedFirewallEndpoint")
    public String expectedFirewallEndpoint;
    public NetworkFirewallInvalidRouteConfigurationViolation withExpectedFirewallEndpoint(String expectedFirewallEndpoint) {
        this.expectedFirewallEndpoint = expectedFirewallEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpectedFirewallSubnetId")
    public String expectedFirewallSubnetId;
    public NetworkFirewallInvalidRouteConfigurationViolation withExpectedFirewallSubnetId(String expectedFirewallSubnetId) {
        this.expectedFirewallSubnetId = expectedFirewallSubnetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpectedFirewallSubnetRoutes")
    public ExpectedRoute[] expectedFirewallSubnetRoutes;
    public NetworkFirewallInvalidRouteConfigurationViolation withExpectedFirewallSubnetRoutes(ExpectedRoute[] expectedFirewallSubnetRoutes) {
        this.expectedFirewallSubnetRoutes = expectedFirewallSubnetRoutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpectedInternetGatewayRoutes")
    public ExpectedRoute[] expectedInternetGatewayRoutes;
    public NetworkFirewallInvalidRouteConfigurationViolation withExpectedInternetGatewayRoutes(ExpectedRoute[] expectedInternetGatewayRoutes) {
        this.expectedInternetGatewayRoutes = expectedInternetGatewayRoutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InternetGatewayId")
    public String internetGatewayId;
    public NetworkFirewallInvalidRouteConfigurationViolation withInternetGatewayId(String internetGatewayId) {
        this.internetGatewayId = internetGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsRouteTableUsedInDifferentAZ")
    public Boolean isRouteTableUsedInDifferentAZ;
    public NetworkFirewallInvalidRouteConfigurationViolation withIsRouteTableUsedInDifferentAz(Boolean isRouteTableUsedInDifferentAZ) {
        this.isRouteTableUsedInDifferentAZ = isRouteTableUsedInDifferentAZ;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteTableId")
    public String routeTableId;
    public NetworkFirewallInvalidRouteConfigurationViolation withRouteTableId(String routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ViolatingRoute")
    public Route violatingRoute;
    public NetworkFirewallInvalidRouteConfigurationViolation withViolatingRoute(Route violatingRoute) {
        this.violatingRoute = violatingRoute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public NetworkFirewallInvalidRouteConfigurationViolation withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}