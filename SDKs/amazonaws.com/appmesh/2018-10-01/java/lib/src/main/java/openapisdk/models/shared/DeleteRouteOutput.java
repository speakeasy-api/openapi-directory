package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteRouteOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route")
    public RouteData route;
    public DeleteRouteOutput withRoute(RouteData route) {
        this.route = route;
        return this;
    }
}