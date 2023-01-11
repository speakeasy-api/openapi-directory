package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGatewayRoutesOutput {
    @JsonProperty("gatewayRoutes")
    public GatewayRouteRef[] gatewayRoutes;
    public ListGatewayRoutesOutput withGatewayRoutes(GatewayRouteRef[] gatewayRoutes) {
        this.gatewayRoutes = gatewayRoutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListGatewayRoutesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}