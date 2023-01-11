package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpGatewayRouteAction
 * An object that represents the action to take if a match is determined.
**/
public class HttpGatewayRouteAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rewrite")
    public HttpGatewayRouteRewrite rewrite;
    public HttpGatewayRouteAction withRewrite(HttpGatewayRouteRewrite rewrite) {
        this.rewrite = rewrite;
        return this;
    }
    @JsonProperty("target")
    public GatewayRouteTarget target;
    public HttpGatewayRouteAction withTarget(GatewayRouteTarget target) {
        this.target = target;
        return this;
    }
}