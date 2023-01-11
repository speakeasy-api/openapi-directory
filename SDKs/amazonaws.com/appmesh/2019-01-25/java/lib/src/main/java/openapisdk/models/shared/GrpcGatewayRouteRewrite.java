package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcGatewayRouteRewrite
 * An object that represents the gateway route to rewrite.
**/
public class GrpcGatewayRouteRewrite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public GatewayRouteHostnameRewrite hostname;
    public GrpcGatewayRouteRewrite withHostname(GatewayRouteHostnameRewrite hostname) {
        this.hostname = hostname;
        return this;
    }
}