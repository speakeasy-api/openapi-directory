package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateRouteRequestBodySpec
 * An object representing the specification of a route.
**/
public class UpdateRouteRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpRoute")
    public openapisdk.models.shared.HttpRoute httpRoute;
    public UpdateRouteRequestBodySpec withHttpRoute(openapisdk.models.shared.HttpRoute httpRoute) {
        this.httpRoute = httpRoute;
        return this;
    }
}