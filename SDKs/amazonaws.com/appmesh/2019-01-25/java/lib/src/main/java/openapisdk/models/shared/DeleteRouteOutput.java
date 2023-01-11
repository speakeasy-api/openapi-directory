package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteRouteOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class DeleteRouteOutput {
    @JsonProperty("route")
    public RouteData route;
    public DeleteRouteOutput withRoute(RouteData route) {
        this.route = route;
        return this;
    }
}