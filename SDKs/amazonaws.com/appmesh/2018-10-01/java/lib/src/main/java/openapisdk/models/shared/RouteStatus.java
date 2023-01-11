package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RouteStatus
 * An object representing the current status of a route.
**/
public class RouteStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public RouteStatusCodeEnum status;
    public RouteStatus withStatus(RouteStatusCodeEnum status) {
        this.status = status;
        return this;
    }
}