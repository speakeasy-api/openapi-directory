package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateRouteOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class CreateRouteOutput {
    @JsonProperty("route")
    public RouteData route;
    public CreateRouteOutput withRoute(RouteData route) {
        this.route = route;
        return this;
    }
}