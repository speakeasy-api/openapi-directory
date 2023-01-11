package openapisdk.models.shared;



/**
 * LoadBalancerState
 * Information about the state of the load balancer.
**/
public class LoadBalancerState {
    public LoadBalancerStateEnumEnum code;
    public LoadBalancerState withCode(LoadBalancerStateEnumEnum code) {
        this.code = code;
        return this;
    }
    public String reason;
    public LoadBalancerState withReason(String reason) {
        this.reason = reason;
        return this;
    }
}