package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteGatewayRouteOutput {
    @JsonProperty("gatewayRoute")
    public GatewayRouteData gatewayRoute;
    public DeleteGatewayRouteOutput withGatewayRoute(GatewayRouteData gatewayRoute) {
        this.gatewayRoute = gatewayRoute;
        return this;
    }
}