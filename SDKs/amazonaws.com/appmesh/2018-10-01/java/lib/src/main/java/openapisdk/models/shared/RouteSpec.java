package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RouteSpec
 * An object representing the specification of a route.
**/
public class RouteSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpRoute")
    public HttpRoute httpRoute;
    public RouteSpec withHttpRoute(HttpRoute httpRoute) {
        this.httpRoute = httpRoute;
        return this;
    }
}