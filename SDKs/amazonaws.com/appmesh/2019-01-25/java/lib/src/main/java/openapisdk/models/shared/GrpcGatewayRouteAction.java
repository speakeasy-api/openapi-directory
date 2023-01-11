package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcGatewayRouteAction
 * An object that represents the action to take if a match is determined.
**/
public class GrpcGatewayRouteAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rewrite")
    public GrpcGatewayRouteRewrite rewrite;
    public GrpcGatewayRouteAction withRewrite(GrpcGatewayRouteRewrite rewrite) {
        this.rewrite = rewrite;
        return this;
    }
    @JsonProperty("target")
    public GatewayRouteTarget target;
    public GrpcGatewayRouteAction withTarget(GatewayRouteTarget target) {
        this.target = target;
        return this;
    }
}