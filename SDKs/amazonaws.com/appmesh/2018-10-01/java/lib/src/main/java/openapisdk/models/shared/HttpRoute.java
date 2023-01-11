package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRoute
 * An object representing the HTTP routing specification for a route.
**/
public class HttpRoute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public HttpRouteAction action;
    public HttpRoute withAction(HttpRouteAction action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("match")
    public HttpRouteMatch match;
    public HttpRoute withMatch(HttpRouteMatch match) {
        this.match = match;
        return this;
    }
}