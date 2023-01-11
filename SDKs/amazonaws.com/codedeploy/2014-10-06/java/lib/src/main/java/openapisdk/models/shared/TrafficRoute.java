package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrafficRoute
 *  Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group. 
**/
public class TrafficRoute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listenerArns")
    public String[] listenerArns;
    public TrafficRoute withListenerArns(String[] listenerArns) {
        this.listenerArns = listenerArns;
        return this;
    }
}