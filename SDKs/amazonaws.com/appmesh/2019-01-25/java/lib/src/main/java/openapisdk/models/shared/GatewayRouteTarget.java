package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GatewayRouteTarget
 * An object that represents a gateway route target.
**/
public class GatewayRouteTarget {
    @JsonProperty("virtualService")
    public GatewayRouteVirtualService virtualService;
    public GatewayRouteTarget withVirtualService(GatewayRouteVirtualService virtualService) {
        this.virtualService = virtualService;
        return this;
    }
}