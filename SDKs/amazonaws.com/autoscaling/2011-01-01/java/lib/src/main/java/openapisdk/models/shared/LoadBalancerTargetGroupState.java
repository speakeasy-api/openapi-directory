package openapisdk.models.shared;



/**
 * LoadBalancerTargetGroupState
 * Describes the state of a target group.
**/
public class LoadBalancerTargetGroupState {
    public String loadBalancerTargetGroupARN;
    public LoadBalancerTargetGroupState withLoadBalancerTargetGroupArn(String loadBalancerTargetGroupARN) {
        this.loadBalancerTargetGroupARN = loadBalancerTargetGroupARN;
        return this;
    }
    public String state;
    public LoadBalancerTargetGroupState withState(String state) {
        this.state = state;
        return this;
    }
}