package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpGatewayRoutePathRewrite
 * An object that represents the path to rewrite.
**/
public class HttpGatewayRoutePathRewrite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exact")
    public String exact;
    public HttpGatewayRoutePathRewrite withExact(String exact) {
        this.exact = exact;
        return this;
    }
}