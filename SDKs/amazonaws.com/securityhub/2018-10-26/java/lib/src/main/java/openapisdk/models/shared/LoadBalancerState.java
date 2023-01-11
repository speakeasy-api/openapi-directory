package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoadBalancerState
 * Information about the state of the load balancer.
**/
public class LoadBalancerState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public LoadBalancerState withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reason")
    public String reason;
    public LoadBalancerState withReason(String reason) {
        this.reason = reason;
        return this;
    }
}