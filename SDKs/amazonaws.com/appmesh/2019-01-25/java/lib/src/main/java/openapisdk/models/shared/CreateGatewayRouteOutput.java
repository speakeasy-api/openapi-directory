package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateGatewayRouteOutput {
    @JsonProperty("gatewayRoute")
    public GatewayRouteData gatewayRoute;
    public CreateGatewayRouteOutput withGatewayRoute(GatewayRouteData gatewayRoute) {
        this.gatewayRoute = gatewayRoute;
        return this;
    }
}