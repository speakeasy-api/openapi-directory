package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GatewayRouteHostnameRewrite
 * An object representing the gateway route host name to rewrite.
**/
public class GatewayRouteHostnameRewrite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultTargetHostname")
    public DefaultGatewayRouteRewriteEnum defaultTargetHostname;
    public GatewayRouteHostnameRewrite withDefaultTargetHostname(DefaultGatewayRouteRewriteEnum defaultTargetHostname) {
        this.defaultTargetHostname = defaultTargetHostname;
        return this;
    }
}