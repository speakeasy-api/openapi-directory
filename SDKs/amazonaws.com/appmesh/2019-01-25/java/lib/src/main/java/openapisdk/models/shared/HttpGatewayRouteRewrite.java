package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpGatewayRouteRewrite
 * An object representing the gateway route to rewrite.
**/
public class HttpGatewayRouteRewrite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public GatewayRouteHostnameRewrite hostname;
    public HttpGatewayRouteRewrite withHostname(GatewayRouteHostnameRewrite hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public HttpGatewayRoutePathRewrite path;
    public HttpGatewayRouteRewrite withPath(HttpGatewayRoutePathRewrite path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public HttpGatewayRoutePrefixRewrite prefix;
    public HttpGatewayRouteRewrite withPrefix(HttpGatewayRoutePrefixRewrite prefix) {
        this.prefix = prefix;
        return this;
    }
}