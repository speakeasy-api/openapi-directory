package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * HttpGatewayRoute
 * An object that represents an HTTP gateway route.
**/
public class HttpGatewayRoute {
    @JsonProperty("action")
    public HttpGatewayRouteAction action;
    public HttpGatewayRoute withAction(HttpGatewayRouteAction action) {
        this.action = action;
        return this;
    }
    @JsonProperty("match")
    public HttpGatewayRouteMatch match;
    public HttpGatewayRoute withMatch(HttpGatewayRouteMatch match) {
        this.match = match;
        return this;
    }
}