package openapisdk.models.shared;



/**
 * LoadBalancerState
 * Describes the state of a Classic Load Balancer.
**/
public class LoadBalancerState {
    public String loadBalancerName;
    public LoadBalancerState withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    public String state;
    public LoadBalancerState withState(String state) {
        this.state = state;
        return this;
    }
}