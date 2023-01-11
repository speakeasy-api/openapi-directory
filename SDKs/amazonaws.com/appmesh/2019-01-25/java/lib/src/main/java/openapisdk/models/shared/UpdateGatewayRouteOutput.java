package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateGatewayRouteOutput {
    @JsonProperty("gatewayRoute")
    public GatewayRouteData gatewayRoute;
    public UpdateGatewayRouteOutput withGatewayRoute(GatewayRouteData gatewayRoute) {
        this.gatewayRoute = gatewayRoute;
        return this;
    }
}