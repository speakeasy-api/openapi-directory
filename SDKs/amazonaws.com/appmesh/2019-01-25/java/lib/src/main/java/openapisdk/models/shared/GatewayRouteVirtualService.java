package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GatewayRouteVirtualService
 * An object that represents the virtual service that traffic is routed to.
**/
public class GatewayRouteVirtualService {
    @JsonProperty("virtualServiceName")
    public String virtualServiceName;
    public GatewayRouteVirtualService withVirtualServiceName(String virtualServiceName) {
        this.virtualServiceName = virtualServiceName;
        return this;
    }
}