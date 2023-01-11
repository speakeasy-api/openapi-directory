package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateRouteOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class UpdateRouteOutput {
    @JsonProperty("route")
    public RouteData route;
    public UpdateRouteOutput withRoute(RouteData route) {
        this.route = route;
        return this;
    }
}