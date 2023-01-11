package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GatewayRouteStatus
 * An object that represents the current status of a gateway route.
**/
public class GatewayRouteStatus {
    @JsonProperty("status")
    public GatewayRouteStatusCodeEnum status;
    public GatewayRouteStatus withStatus(GatewayRouteStatusCodeEnum status) {
        this.status = status;
        return this;
    }
}