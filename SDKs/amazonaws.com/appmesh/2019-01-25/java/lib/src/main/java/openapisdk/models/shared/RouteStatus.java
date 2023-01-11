package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RouteStatus
 * An object that represents the current status of a route.
**/
public class RouteStatus {
    @JsonProperty("status")
    public RouteStatusCodeEnum status;
    public RouteStatus withStatus(RouteStatusCodeEnum status) {
        this.status = status;
        return this;
    }
}