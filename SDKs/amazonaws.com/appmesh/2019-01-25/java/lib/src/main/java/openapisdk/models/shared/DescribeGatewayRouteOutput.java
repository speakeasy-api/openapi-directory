package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeGatewayRouteOutput {
    @JsonProperty("gatewayRoute")
    public GatewayRouteData gatewayRoute;
    public DescribeGatewayRouteOutput withGatewayRoute(GatewayRouteData gatewayRoute) {
        this.gatewayRoute = gatewayRoute;
        return this;
    }
}