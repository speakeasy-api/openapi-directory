package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeRouteOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class DescribeRouteOutput {
    @JsonProperty("route")
    public RouteData route;
    public DescribeRouteOutput withRoute(RouteData route) {
        this.route = route;
        return this;
    }
}